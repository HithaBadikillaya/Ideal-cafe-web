const iceCreamData = [
    {
      category: 'Standard - 500ml Containers',
      items: [
        {
          name: 'Vanilla',
          price: 80,
          description: 'Classic vanilla flavor, smooth and delightful.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/vanilla-flavour.png',
          rating: 4.5,
          popularity: 98
        },
        {
          name: 'Strawberry',
          price: 85,
          description: 'Fruity and fresh strawberry taste.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/strawberry-flavour.png',
          rating: 4.2,
          popularity: 95
        },
        {
          name: 'Chocolate',
          price: 90,
          description: 'Rich chocolate experience loved by all ages.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/chocolate-flavour.png',
          rating: 4.8,
          popularity: 99
        },
        {
          name: 'Fruity',
          price: 85,
          description: 'Colorful mix of fruits in a creamy blend.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-fruity-flavour.png',
          rating: 4.3,
          popularity: 92
        },
        {
          name: 'Butterscotch Kaju',
          price: 95,
          description: 'Crunchy cashews meet buttery butterscotch.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/butterscotch-kaju-flavour.png',
          rating: 4.6,
          popularity: 97
        }
      ]
    },
    {
      category: 'Standard - 4 Litre Containers',
      items: [
        {
          name: 'Black Currant',
          price: 360,
          description: 'Bold and juicy blackcurrant flavor.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/black-currant-flavour.png',
          rating: 3.5,
          popularity: 85
        },
        {
          name: 'Roasted Almond',
          price: 370,
          description: 'Nutty and aromatic roasted almond delight.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/roasted-almond-flavour.png',
          rating: 3.6,
          popularity: 87
        },
        {
          name: 'Kulfi',
          price: 375,
          description: 'Traditional kulfi with rich Indian spices.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/kulfi-flavour.png',
          rating: 4.0,
          popularity: 90
        },
        {
          name: 'Butterscotch Grand',
          price: 385,
          description: 'Deluxe butterscotch experience.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/butterscotch-grand-flavour.png',
          rating: 4.1,
          popularity: 91
        },
        {
          name: 'Kaju Malai',
          price: 399,
          description: 'Cashew and cream fusion.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/kaju-malai-flavour.png',
          rating: 4.4,
          popularity: 93
        }
      ]
    },
    {
      category: 'Fruit-Based Flavors',
      items: [
        {
          name: 'Alphonso Mango',
          price: 95,
          description: 'Made with the king of mangoes – a tropical delight.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/alphonso-mango-flavour.png',
          rating: 4.7,
          popularity: 96
        },
        {
          name: 'Ananas (Pineapple)',
          price: 90,
          description: 'Sweet pineapple flavor full of freshness.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ananaas-flavour.png',
          rating: 4.6,
          popularity: 94
        },
        {
          name: 'Chikku Almond',
          price: 95,
          description: 'Creamy chikku paired with almond crunch.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/chikku-almond-flavour.png',
          rating: 4.5,
          popularity: 92
        },
        {
          name: 'Seethaphal',
          price: 95,
          description: 'Custard apple flavor with a creamy twist.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/seethaphal-flavour.png',
          rating: 4.3,
          popularity: 91
        },
        {
          name: 'Chikku',
          price: 90,
          description: 'Ripe chikku ice cream – subtle and sweet.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/chikku-flavour.png',
          rating: 4.2,
          popularity: 90
        }
      ]
    },
    {
      category: "Low 'N' Lite Ice Creams",
      items: [
        {
          name: 'Butterscotch Cup (125ml)',
          price: 40,
          description: 'Portion-controlled light butterscotch.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/05/standard-low-n-lite-butterscotch-125ml-cup.png',
          rating: 4.1,
          popularity: 89
        },
        {
          name: 'Butterscotch Tub',
          price: 120,
          description: 'Low-cal butterscotch for guilt-free scooping.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/butterscotch-low-n-light-flavour.png',
          rating: 4.0,
          popularity: 88
        },
        {
          name: 'Vanilla Lite',
          price: 110,
          description: 'Light vanilla with less sugar, more taste.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/vanilla-low-n-light-flavour.png',
          rating: 4.2,
          popularity: 90
        }
      ]
    },
    {
      category: 'International Flavors',
      items: [
        {
          name: 'Madagascar Creamy',
          price: 110,
          description: 'Smooth vanilla with Madagascar bean aroma.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/madagascar-creamy-flavour.png',
          rating: 4.8,
          popularity: 99
        },
        {
          name: 'American Nutz',
          price: 115,
          description: 'Nutty American-style indulgence.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/american-nutz-flavour.png',
          rating: 4.6,
          popularity: 97
        },
        {
          name: 'Arabian Delight',
          price: 120,
          description: 'Exotic Arabian flavor adventure.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/arabian-delight-flavour.png',
          rating: 4.5,
          popularity: 95
        },
        {
          name: 'Argentinian Dulce Leche',
          price: 125,
          description: 'Milky caramel swirl from Argentina.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/argentinian-dulce-leche-flavour.png',
          rating: 4.7,
          popularity: 98
        },
        {
          name: 'Hawaiian Fruit Punch',
          price: 110,
          description: 'Fruity tropical punch of Hawaii.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/hawaiian-fruit-punch-flavour.png',
          rating: 4.4,
          popularity: 93
        },
        {
          name: 'Persian Shahi Nuts',
          price: 120,
          description: 'Royal Persian nut blend.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/pertsian-shahi-nuts-flavour.png',
          rating: 4.3,
          popularity: 92
        },
        {
          name: 'Belgian Chocolate',
          price: 130,
          description: 'Decadent Belgian chocolate explosion.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/belgian-chocolate-flavour.png',
          rating: 4.9,
          popularity: 100
        },
        {
          name: 'Turkish Delight',
          price: 125,
          description: 'Classic Turkish rose-flavored cream.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/turkish-delight-flavour.png',
          rating: 4.5,
          popularity: 96
        }
      ]
    },
    {
      category: 'International Flavors - 4 Litre',
      items: [
        {
          name: 'Madagascar Creamy (4L)',
          price: 420,
          description: 'Family pack Madagascar creamy vanilla.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/premium-4-litre-pack-madagascar-creamy-vanilla.png',
          rating: 4.8,
          popularity: 99
        },
        {
          name: 'American Nutz (4L)',
          price: 430,
          description: 'Nutty American pack for parties.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/premium-4-litre-pack-american-nutz.png',
          rating: 4.6,
          popularity: 97
        },
        {
          name: 'Arabian Delight (4L)',
          price: 440,
          description: 'Arabian flavors in a large pack.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/premium-4-litre-pack-arabian-delight.png',
          rating: 4.5,
          popularity: 95
        },
        {
          name: 'Argentinian Dulce Leche (4L)',
          price: 445,
          description: 'Rich Argentinian caramel for the whole family.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/premium-4-litre-pack-argentinian-dulce-de-leche.png',
          rating: 4.7,
          popularity: 98
        },
        {
          name: 'Hawaiian Fruit Punch (4L)',
          price: 435,
          description: 'Tropical blend in a big scoop.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/premium-4-litre-pack-hawaiian-fruit-punch.png',
          rating: 4.4,
          popularity: 93
        },
        {
          name: 'Persian Shahi Nuts (4L)',
          price: 450,
          description: 'Persian nut blend to serve a crowd.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/premium-4-litre-pack-persian-shahi-nuts.png',
          rating: 4.3,
          popularity: 92
        },
        {
          name: 'English Toffee (4L)',
          price: 460,
          description: 'Sweet English toffee indulgence.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/05/premium-4-litre-pack-english-toffee.png',
          rating: 4.9,
          popularity: 100
        },
        {
          name: 'Turkish Delight (4L)',
          price: 445,
          description: 'Classic Turkish flavors in large size.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/premium-4-litre-pack-turkish-delight.png',
          rating: 4.5,
          popularity: 96
        },
        {
          name: 'Belgian Chocolate (4L)',
          price: 460,
          description: 'Chocolate overload for true fans.',
          image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/premium-4-litre-pack-belgian-chocolate.png',
          rating: 4.9,
          popularity: 100
        }
      ]
    },
    {
      category: 'Novelties',
      sections: [
        {
          section: 'Mini Sundaes & Others',
          items: [
            {
              name: 'Mini Sundae Chocolate',
              price: 30,
              description: 'Mini chocolate sundae treat.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-mini-sundae-chocolate.png',
              rating:4.9  ,
            popularity: 100
            },
            {
              name: 'Mini Sundae Strawberry',
              price: 30,
              description: 'Mini strawberry sundae delight.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-mini-sundae-straberry.png',
              rating: 4.8,
            popularity: 99
            },
            {
              name: 'Manmoh',
              price: 35,
              description: 'Sweet and refreshing frozen dessert.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-manmoh.png',
              rating: 4.7,
            popularity: 98
            },
            {
              name: 'Twister Topaz',
              price: 35,
              description: 'Swirled treat with a burst of flavor.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-twister-topaz.png',
              rating: 4.6,
            popularity: 97
            },
            {
              name: 'Cassaia Slice',
              price: 40,
              description: 'Creamy layered slice with fruity essence.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-cassaia-slice.png',
              rating: 4.5,
            popularity: 96
            },
            {
              name: 'Triple Sundae',
              price: 45,
              description: 'Three flavors packed in one sundae.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-tripple-sundae.png',
              rating: 4.4,
            popularity: 95
            },
            {
              name: 'Matka Kulfi',
              price: 50,
              description: 'Traditional kulfi served in matka.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-matka-kulfi.png',
              rating: 4.3,
            popularity: 94
            },
            {
              name: 'Vanilla Ball',
              price: 35,
              description: 'Round vanilla scoop treat.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-vanilla-ball.png',
              rating: 4.2,
            popularity: 93
            },
            {
              name: 'Marzi Paan',
              price: 40,
              description: 'Sweet paan-flavored frozen dessert.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/marzi-paan-flavour.png',
              rating: 4.1,
            popularity: 92
            }
          ]
        },
        {
          section: 'Cones',
          items: [
            {
              name: 'Konero Black Currant',
              price: 35,
              description: 'Cone with bold blackcurrant flavor.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/konero-black-currant-flavour.png',
            rating: 4.0,
            popularity: 91
            
            },
            {
              name: 'Konero Butterscotch',
              price: 35,
              description: 'Crisp cone with butterscotch twist.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/konero-butterscotch-flavour.png',
            rating: 4.0,
            popularity: 91
            
            },
            {
              name: 'Konero Chocolate',
              price: 35,
              description: 'Classic chocolate cone.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/konero-chocolate-flavour.png',
            rating: 4.0,
            popularity: 91
            
            },
            {
              name: 'Konero Strawberry',
              price: 35,
              description: 'Cone filled with strawberry sweetness.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/konero-strawberry-flavour.png',
            rating: 4.0,
            popularity: 91
            
            
            }
          ]
        },
        {
          section: 'Ice Treat',
          items: [
            {
              name: 'Ice Treat Orange',
              price: 20,
              description: 'Refreshing orange ice treat.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-ice-treat-orange.png',
            rating: 4.0,
            popularity: 91
            
            },
            {
              name: 'Ice Treat Pineapple',
              price: 20,
              description: 'Chilled pineapple-flavored stick.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-ice-treat-pineapple.png',
            rating: 4.0,
            popularity: 91
            
            
            }
          ]
        },
        {
          section: 'Candy',
          items: [
            {
              name: 'Mini Kool Candy Pineapple',
              price: 10,
              description: 'Tiny candy with pineapple flavor.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-mini-kool-candy-pineapple.png',
            rating: 4.0,
            popularity: 91
            
            },
            {
              name: 'Kool Candy Orange',
              price: 10,
              description: 'Orange flavored candy bar.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-kool-candy-orange.png',
            rating: 4.0,
            popularity: 91
            
            
            },
            {
              name: 'Kool Candy Grape',
              price: 10,
              description: 'Juicy grape ice candy.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-kool-candy-grape.png',
            rating: 4.0,
            popularity: 91
            
            
            },
            {
              name: 'Bella Candy',
              price: 15,
              description: 'Sweet candy delight.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-bella-candy.png',
            rating: 4.0,
            popularity: 91
            
            
            },
            {
              name: 'Mini Choco Dream',
              price: 15,
              description: 'Bite-sized chocolate coated treat.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-mini-choco-dream.png',
            rating: 4.0,
            popularity: 91
            },
            {
              name: 'Choco Dream Candy',
              price: 20,
              description: 'Choco candy with rich filling.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-chocodream-candy.png',
            rating: 4.0,
            popularity: 91
            
            
            },
            {
              name: 'Surprise Dolly Raspberry',
              price: 15,
              description: 'Fun raspberry-flavored treat.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-surprice-dolly-raspberry.png',
            rating: 4.0,
            popularity: 91
            
            
            },
            {
              name: 'Surprise Dolly Mango',
              price: 15,
              description: 'Mango twist in a fun candy.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-surprice-dolly-mango.png',
            rating: 4.0,
            popularity: 91
            
            
            },
            {
              name: 'Kulfi Candy',
              price: 15,
              description: 'Frozen kulfi on a stick.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-kulfi-candy.png',
            rating: 4.0,
            popularity: 91
            
            
            },
            {
              name: 'Choco Nutz Candy',
              price: 20,
              description: 'Nutty and chocolaty candy stick.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/ideal-2024-novelty-choconutz-candy.png',
            rating: 4.0,
            popularity: 91
            
               
            }
          ]
        },
        {
          section: 'I-Pizza',
          items: [
            {
              name: 'I-Pizza Vanilla',
              price: 60,
              description: 'Ice cream pizza slice with vanilla base.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/i-pizza-vanilla-flavour.png',
            rating: 4.0,
            popularity: 91
            
            },
            {
              name: 'I-Pizza Chocolate',
              price: 60,
              description: 'Chocolate ice cream slice – pizza style.',
              image: 'https://www.idealicecream.com/wp-content/uploads/2024/04/i-pizza-chocolate-flavour.png',
            rating: 4.0,
            popularity: 91
            
            
            }
          ]
        }
      ]
    }
  ];
  
  export default iceCreamData;