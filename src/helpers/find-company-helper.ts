const companyKeywords = [
  {
    company: "axa",
    keywords: ["axa"]
  },
  {
    company: "globeMed",
    keywords: ["globeMed"]
  },
  {
    company: "medNet",
    keywords: ["medNet"]
  },
  {
    company: "metlife",
    keywords: ["metlife"]
  },
  {
    company: "nextcare",
    keywords: ["nextcare"]
  },
  {
    company: "misrHealthcare",
    keywords: ["misrHealthcare"]
  }
];

export const findCompany = (filename: string): string | undefined => {
  return companyKeywords.find(({
    company,
    keywords
  }) => keywords.some(keyword => filename.toLowerCase().includes(keyword.toLowerCase())))?.company
}
