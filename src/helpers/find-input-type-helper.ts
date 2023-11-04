const fileTypeKeywords = [
  {
    "inputType": "medicalNetworks",
    "keywords": [
      "medicalNetworks",
      "network",
      "networks"
    ]
  },
  {
    "inputType": "master",
    "keywords": [
      "master"
    ]
  },
  {
    "inputType": "additionAndDeletion",
    "keywords": [
      "addition",
      "deletion",
      "addition & Deletion"
    ]
  },
  {
    "inputType": "utilization",
    "keywords": [
      "utilization"
    ]
  }
]

export const findInputType = (filename: string): string | undefined => {
  return fileTypeKeywords.find(({
    inputType,
    keywords
  }) => keywords.some(keyword => filename.toLowerCase().includes(keyword.toLowerCase())))?.inputType
}
