import room1 from "./images/details-1.jpeg";
import room2 from "./images/details-2.jpeg";
import room3 from "./images/details-3.jpeg";
import room4 from "./images/details-4.jpeg";
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";
import img4 from "./images/room-4.jpeg";
import img5 from "./images/room-5.jpeg";
import img6 from "./images/room-6.jpeg";
import img7 from "./images/room-7.jpeg";
import img8 from "./images/room-8.jpeg";
import img9 from "./images/room-9.jpeg";
import img10 from "./images/room-10.jpeg";
import img11 from "./images/room-11.jpeg";
import img12 from "./images/room-12.jpeg";

export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "Economico",
      slug: "single-economy",
      type: "simple",
      price: 100,
      size: 200,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
        "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "Basica",
      slug: "single-basic",
      type: "simple",
      price: 150,
      size: 250,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
        "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "Estabdar",
      slug: "single-standard",
      type: "simple",
      price: 250,
      size: 300,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
         "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "Confortable",
      slug: "single-deluxe",
      type: "simple",
      price: 300,
      size: 400,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
         "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "Elegante",
      slug: "double-economy",
      type: "doble",
      price: 200,
      size: 300,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
        "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "Basica Doble",
      slug: "double-basic",
      type: "doble",
      price: 250,
      size: 350,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
        "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "La Estandar",
      slug: "double-standard",
      type: "doble",
      price: 300,
      size: 400,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
        "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "Doble",
      slug: "double-deluxe",
      type: "doble",
      price: 400,
      size: 500,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
        "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "9"
    },
    fields: {
      name: "Economico Familiar",
      slug: "family-economy",
      type: "familiar",
      price: 300,
      size: 500,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
         "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img9
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "10"
    },
    fields: {
      name: "Familiar basica",
      slug: "family-basic",
      type: "familiar",
      price: 350,
      size: 550,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
       "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img10
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "Familiar estandar",
      slug: "family-standard",
      type: "familiar",
      price: 400,
      size: 600,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
         "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img11
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "12"
    },
    fields: {
      name: "Familiar Elegante",
      slug: "family-deluxe",
      type: "familiar",
      price: 500,
      size: 700,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
         "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: img12
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "13"
    },
    fields: {
      name: "Presidencial",
      slug: "presidential-room",
      type: "presidencial",
      price: 600,
      size: 1000,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Un hotel es un edificio planificado y acondicionado para otorgar servicios de alojamiento a las personas y que permite a los visitantes sus desplazamientos. Los hoteles proveen a los huéspedes de servicios adicionales como restaurantes, piscinas y guarderías.",
      extras: [
        "Alcobas y almohadas",
        "Baños y condiciones optimas",
        "Calidad de los clientes",
        "Complemento fresco",
        "Seguridad Optima",
        "Internet",
        "Cama Comoda"
      ],
      images: [
        {
          fields: {
            file: {
              url: room1
            }
          }
        },
        {
          fields: {
            file: {
              url: room2
            }
          }
        },
        {
          fields: {
            file: {
              url: room3
            }
          }
        },
        {
          fields: {
            file: {
              url: room4
            }
          }
        }
      ]
    }
  }
];
