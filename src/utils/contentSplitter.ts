export function splitContentIntoPages(content: string, chapterId: string): { id: string; title: string; content: string }[] {
  // Split content by h2 headers (##) which represent major sections
  const sections = content.split(/(?=^## )/gm).filter(section => section.trim());
  
  const pages = sections.map((section, index) => {
    // Extract title from the first line (## Title)
    const lines = section.trim().split('\n');
    const titleMatch = lines[0].match(/^##\s+(.+)/);
    const title = titleMatch ? titleMatch[1].trim() : `Page ${index + 1}`;
    
    // For the first section, include any content before the first ##
    let pageContent = section;
    if (index === 0 && !section.startsWith('##')) {
      // This is intro content before any ## header
      const firstHeaderIndex = content.indexOf('##');
      if (firstHeaderIndex > 0) {
        pageContent = content.substring(0, firstHeaderIndex).trim();
        const nextSection = sections[1];
        if (nextSection) {
          sections[1] = content.substring(firstHeaderIndex);
        }
      }
    }
    
    return {
      id: `${chapterId}-page-${index + 1}`,
      title: title,
      content: pageContent
    };
  });
  
  // If no sections were found (no ## headers), create a single page
  if (pages.length === 0) {
    return [{
      id: `${chapterId}-page-1`,
      title: 'Nội dung chương',
      content: content
    }];
  }
  
  return pages;
}