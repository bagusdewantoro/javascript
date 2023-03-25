
const JSONdata = `

      [
  {
    "id": "0",
    "rels": {
      "spouses": [
        "4e894d59-2e83-46c2-a542-158c09d0674a"
      ],
      "children": [
        "ce89d8ee-5cf1-4f6b-87ea-d3711effad6c",
        "16a20710-9812-4e4f-8443-6ee39a416dae",
        "02743f04-4f36-446e-a2b7-9515eae7d2c0"
      ]
    },
    "data": {
      "first name": "Theodorus Damu M.M.",
      "last name": "",
      "birthday": "",
      "avatar": "",
      "gender": "M"
    }
  },
  {
    "id": "4e894d59-2e83-46c2-a542-158c09d0674a",
    "data": {
      "gender": "F",
      "first name": "Prihatin E.S.",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "0"
      ],
      "children": [
        "ce89d8ee-5cf1-4f6b-87ea-d3711effad6c",
        "16a20710-9812-4e4f-8443-6ee39a416dae",
        "02743f04-4f36-446e-a2b7-9515eae7d2c0"
      ]
    }
  },
  {
    "id": "ce89d8ee-5cf1-4f6b-87ea-d3711effad6c",
    "data": {
      "gender": "M",
      "first name": "Hera Utarin Eko Agustono",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "mother": "4e894d59-2e83-46c2-a542-158c09d0674a",
      "father": "0",
      "spouses": [
        "a7b735d0-756c-4d2f-9065-9e9505418327"
      ],
      "children": [
        "71da8ed4-93d8-4713-b51c-7cad4b92a5c5",
        "939f8df6-4d14-41fd-bc24-eb52775b5679",
        "9bba8772-0597-4072-8def-32329150ece7"
      ]
    }
  },
  {
    "id": "16a20710-9812-4e4f-8443-6ee39a416dae",
    "data": {
      "gender": "M",
      "first name": "Heru Tulus Widodo",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "0",
      "mother": "4e894d59-2e83-46c2-a542-158c09d0674a",
      "spouses": [
        "72ea48b1-95db-4bc6-a8b3-42fd51a36e63"
      ],
      "children": [
        "889a4346-d3cf-4247-9647-ad3a83cde42d",
        "36494131-ff6d-45fa-a853-95b77f853eaf",
        "ad62b3c4-486f-4cfa-857f-922617435c4e",
        "8ba5b45e-f802-47b7-90e8-ff18c7557318"
      ]
    }
  },
  {
    "id": "02743f04-4f36-446e-a2b7-9515eae7d2c0",
    "data": {
      "gender": "F",
      "first name": "Fransiska Herawati",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "0",
      "mother": "4e894d59-2e83-46c2-a542-158c09d0674a"
    }
  },
  {
    "id": "a7b735d0-756c-4d2f-9065-9e9505418327",
    "data": {
      "gender": "F",
      "first name": "Sri Winarti",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "ce89d8ee-5cf1-4f6b-87ea-d3711effad6c"
      ],
      "children": [
        "71da8ed4-93d8-4713-b51c-7cad4b92a5c5",
        "939f8df6-4d14-41fd-bc24-eb52775b5679",
        "9bba8772-0597-4072-8def-32329150ece7"
      ]
    }
  },
  {
    "id": "71da8ed4-93d8-4713-b51c-7cad4b92a5c5",
    "data": {
      "gender": "M",
      "first name": "Octavianus Bagus Dewantoro",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "ce89d8ee-5cf1-4f6b-87ea-d3711effad6c",
      "mother": "a7b735d0-756c-4d2f-9065-9e9505418327",
      "spouses": [
        "fa670256-91f4-4e5a-8678-51de08d50b9b"
      ],
      "children": [
        "0b651604-fa35-47df-88db-79a4263ee818",
        "4da8a6a6-89d8-49d2-b7d8-e63129f4a828"
      ]
    }
  },
  {
    "id": "fa670256-91f4-4e5a-8678-51de08d50b9b",
    "data": {
      "gender": "F",
      "first name": "Anka Yolanda",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "71da8ed4-93d8-4713-b51c-7cad4b92a5c5"
      ],
      "children": [
        "0b651604-fa35-47df-88db-79a4263ee818",
        "4da8a6a6-89d8-49d2-b7d8-e63129f4a828"
      ],
      "father": "20da8dce-e833-4226-837b-5cdd3ec20071",
      "mother": "919d31ad-a176-4928-a7b8-d88545bd1c08"
    }
  },
  {
    "id": "0b651604-fa35-47df-88db-79a4263ee818",
    "data": {
      "gender": "M",
      "first name": "Dominikus Dhira Sidharta",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "mother": "fa670256-91f4-4e5a-8678-51de08d50b9b",
      "father": "71da8ed4-93d8-4713-b51c-7cad4b92a5c5"
    }
  },
  {
    "id": "4da8a6a6-89d8-49d2-b7d8-e63129f4a828",
    "data": {
      "gender": "M",
      "first name": "Skolastika Naya Nareswari",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "71da8ed4-93d8-4713-b51c-7cad4b92a5c5",
      "mother": "fa670256-91f4-4e5a-8678-51de08d50b9b"
    }
  },
  {
    "id": "20da8dce-e833-4226-837b-5cdd3ec20071",
    "data": {
      "gender": "M",
      "first name": "Gun Handoko",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "children": [
        "fa670256-91f4-4e5a-8678-51de08d50b9b",
        "afc508c0-840c-4642-93be-03341f12f30e"
      ],
      "spouses": [
        "919d31ad-a176-4928-a7b8-d88545bd1c08"
      ]
    }
  },
  {
    "id": "919d31ad-a176-4928-a7b8-d88545bd1c08",
    "data": {
      "gender": "F",
      "first name": "Fransika Kansil",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "20da8dce-e833-4226-837b-5cdd3ec20071"
      ],
      "children": [
        "fa670256-91f4-4e5a-8678-51de08d50b9b",
        "afc508c0-840c-4642-93be-03341f12f30e"
      ]
    }
  },
  {
    "id": "afc508c0-840c-4642-93be-03341f12f30e",
    "data": {
      "gender": "M",
      "first name": "Andhika Kansil",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "20da8dce-e833-4226-837b-5cdd3ec20071",
      "mother": "919d31ad-a176-4928-a7b8-d88545bd1c08"
    }
  },
  {
    "id": "72ea48b1-95db-4bc6-a8b3-42fd51a36e63",
    "data": {
      "gender": "F",
      "first name": "Nunuk Amiati",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "16a20710-9812-4e4f-8443-6ee39a416dae"
      ],
      "children": [
        "889a4346-d3cf-4247-9647-ad3a83cde42d",
        "36494131-ff6d-45fa-a853-95b77f853eaf",
        "ad62b3c4-486f-4cfa-857f-922617435c4e",
        "8ba5b45e-f802-47b7-90e8-ff18c7557318"
      ]
    }
  },
  {
    "id": "889a4346-d3cf-4247-9647-ad3a83cde42d",
    "data": {
      "gender": "F",
      "first name": "Sekar Widuri",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "mother": "72ea48b1-95db-4bc6-a8b3-42fd51a36e63",
      "father": "16a20710-9812-4e4f-8443-6ee39a416dae"
    }
  },
  {
    "id": "36494131-ff6d-45fa-a853-95b77f853eaf",
    "data": {
      "gender": "M",
      "first name": "Wisnu Wardhana",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "16a20710-9812-4e4f-8443-6ee39a416dae",
      "mother": "72ea48b1-95db-4bc6-a8b3-42fd51a36e63"
    }
  },
  {
    "id": "ad62b3c4-486f-4cfa-857f-922617435c4e",
    "data": {
      "gender": "F",
      "first name": "Ajeng Lestari",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "16a20710-9812-4e4f-8443-6ee39a416dae",
      "mother": "72ea48b1-95db-4bc6-a8b3-42fd51a36e63"
    }
  },
  {
    "id": "8ba5b45e-f802-47b7-90e8-ff18c7557318",
    "data": {
      "gender": "F",
      "first name": "Sekar Pertiwi",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "16a20710-9812-4e4f-8443-6ee39a416dae",
      "mother": "72ea48b1-95db-4bc6-a8b3-42fd51a36e63"
    }
  },
  {
    "id": "939f8df6-4d14-41fd-bc24-eb52775b5679",
    "data": {
      "gender": "M",
      "first name": "Fabius Bondan Wicaksono",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "ce89d8ee-5cf1-4f6b-87ea-d3711effad6c",
      "mother": "a7b735d0-756c-4d2f-9065-9e9505418327"
    }
  },
  {
    "id": "9bba8772-0597-4072-8def-32329150ece7",
    "data": {
      "gender": "M",
      "first name": "Yohanes Bandung Bondowoso",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "father": "ce89d8ee-5cf1-4f6b-87ea-d3711effad6c",
      "mother": "a7b735d0-756c-4d2f-9065-9e9505418327",
      "spouses": [
        "0840e736-978b-40ab-9453-f384ffd54b02"
      ]
    }
  },
  {
    "id": "0840e736-978b-40ab-9453-f384ffd54b02",
    "data": {
      "gender": "F",
      "first name": "Ayas",
      "last name": "",
      "birthday": "",
      "avatar": ""
    },
    "rels": {
      "spouses": [
        "9bba8772-0597-4072-8def-32329150ece7"
      ]
    }
  }
]

`

export default JSONdata