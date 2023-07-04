import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'Lauren',
            email: 'admin@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: true,
        },
        {
            name: 'Becca',
            email: 'becca@example.com',
            password: bcrypt.hashSync('123456'),
            isAdmin: false,
        },

    ],
    products: [
        {
            name: 'Beard Oil + Hyaluronic Serum',
            slug: 'beard-oil',
            category: 'Other',
            image: '/images/p2.png',
            price: 80, 
            countInStock: 0,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Enter beard oil description',
            instructions: 'Enter instructions',
            ingredients: 'Enter beard oil ingredients',
            isFeatured: true,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Cherry Enzyme Wash',
            slug: 'cherry-enzyme-wash',
            category: 'Cleansers', 
            image: '/images/p1.png', //679px x 829px
            price: 75,
            countInStock: 10,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'For all skin types.  This wash contains no SLS or harsh detergents.  This is an AHA clenaser with enzymes to remove dirt and impurities.',
            instructions: 'Enter instructions',
            ingredients: 'Aqua (water), Sodium Hydroxypropylsulfonate Laurylglucoside Crosspolymer, Sodium Methyl Cocoyl Taurate, Polyglyceryl-4 Caprate, Glycolic Acid, Sodium Cocoyl Hydrolyzed Amaranth Protein, Lactobacillus/Punica Granatum Fruit Ferment Extract, Gluconolactone, Sodium Hydroxypropylsulfonate Decylglucoside Crosspolymer, Glycerin,  Butyrospermum Parkii (Shea) Butter Extract, Glucosamine HCI, Fructooligosaccharides (D-beta), Prunus Serotina Bark Extract (Wild Cherry Bark Extract)',
            isFeatured: true,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Blueberry Scrub',
            slug: 'blueberry-scrub',
            category: 'Cleansers', 
            image: '/images/p1.png', //679px x 829px
            price: 75,
            countInStock: 10,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'A milder scrub than the Raspberry polishing scrub, less abrasive and can be used more often if needed. Contains exfolliants and antioxidants like the Raspberry polishing scrub in a less abrasive formula.',
            instructions: 'Apply a thick layer to the skin and wash in a circular motion to activate the exfoliating jojoba beads.',
            ingredients: 'Aqua (water),  Milk caprilic/Capric triglycerides, Jojoba oil, Glycerin (vegetable), Simmondsia Chinensis (Jojoba) Seed Oil (beads). L-lactic acid, L- malic acid, L-salicylic acid, Rubus Idaeus (Raspberry) Fruit Extract Concentrate, Vaccinium Angustifolium (Blueberry) Fruit Extract concentrate,  Hamamelis Virginiana (Witch Hazel) extract,  Zea Mays (Corn) Kernel Meal, Xanthan gum, D-Glucuronic acid, Jasminum Officinale (Jasmine) Oil, Citrus Paradisi (Grapefruit) Oil,  Medica Limonum (Lemon) Peel Oil, Citrus Aurantifolia (Lime) Oil',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Clarifying Herbal Cleanser',
            slug: 'herbal-cleanser',
            category: 'Cleansers',
            image: '/images/p1.png',
            price: 75,
            countInStock: 20,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'This is a gently yet effective, non-abrasive, alpha hydroxy, exfoliating cleanser that effectively reduces blemishes. The new technology, using AHA polymers, results in less skin irritation. The addition of beta-hydroxy acid polymer helps clear the skin of blemishes.',
            instructions: 'Squeeze two to three drops in the palm of damp hands, rub hands to create a lather, then proceed to cleanse your face and neck. Rinse with tepid water.',
            ingredients: 'Aqua (Water), soluble Butyrospermum parkii (Shea Butter), plant cellulose, succinic acid, Laurus nobilis leaf extract, methylated karate, Cocos Nucifera (Coconut) amino acids, glycolic acid polymer, salicylic acid polymer, Vaccinium Macrocarpon (Cranberry) extract, and beta-carotene.',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: true,
            isEyeTreatment: false,
        },
        {
            name: 'Rasberry Polishing Scrub',
            slug: 'rasberry-polishing-scrub',
            category: 'Cleansers',
            image: '/images/p1.png',
            price: 75,
            countInStock: 20,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Effectively polishes your skin by exfoliating surface dead skin cells, leaving your skin with a healthy shiny glow.',
            instructions: 'Use once or twice a week to aggressively exfoliate the skin. Dispense a quarter-sized amount into the palm of hand, gently work around face and neck for one to two minutes, or until the products has lost its moisture, and then rinse thoroughly with warm water. Ideally, this should be done while in the shower.',
            ingredients: 'Aqua (Water), Rubus occidentalis(raspberry fruit) concentrate, Simmondsia Chinensis (Jojoba) beads, L-lactic acid, blue Zea Mays (Corn) Kernel Meal, xanthan gum, D-glucronic acid, vegetable glycerin, salicylic acid, and Jasminum Officinale (Jasmine) alcohol extract',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Scrub + Shine',
            slug: 'scrub-shine',
            category: 'Cleansers',
            image: '/images/p1.png',
            price: 75,
            countInStock: 20,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'This is a combination mask/scrub that will leave your skin feeling and looking fresh and glowing.',
            instructions: 'Apply a cake icing thick layer to skin after cleansing and leave on for five to fifteen minutes, then rub with water in a circular motion to activate the jojoba beads, to scrub and exfoliate the skin.',
            ingredients: 'Aqua (Water), Vegetable Glycerin, Milk Caprylic/Capric Triglycerides, Simmondsia Chinensis (Jojoba) Seed Oil, L-Lactic Acid, L-Malic Acid, L-Salicyclic Acid, Hamamelis Virginiana (witch hazel) Extract, Ananas Sativus (Pineapple) Fruit Enzymes, Xanthan Gum, Prunus Serotin(Wild Cherry) Bark Extract, Zeolyte,  Simmondsia Chinensis (Jojoba) Beads, Citrus grandis (grapefruit) seed extract,  Citrus medica limonum (Lemon) fruit extract, Citrus Aurantifolia (Lime) Fruit Extract',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Extra Gentle Cleanser',
            slug: 'extra-gentle-cleanser',
            category: 'Cleansers',
            image: '/images/p1.png',
            price: 75,
            countInStock: 20,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Ideal for sensitive skin, even rosacea and post-laser resurfacing, this extra gently cleanser soothes and protects while leaving your skin feeling fresh without irritation or dryness.',
            instructions: 'Squeeze two to three drops in the palm of damp hands, rub hands to create a lather, then proceed to cleanse your face and neck. Rinse with tepid water.',
            ingredients: 'Aqua (water), Sodium Hydroxypropylsulfonate Laurylglucoside Crosspolymer, Succinic Acid Sulfate, Sodium Methyl Cocoyl Taurate, Butyrospermum Parkii (Shea Butter), Polyglyceryl-4 Caprate, Decyl Glucoside, Aniba Rosaedora (Rosewood) Oil',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: true,
            isEyeTreatment: false,
        },
        {
            name: 'Ultra Firm Peptide',
            slug: 'ultra-firm-peptide',
            category: 'Peptides',
            image: '/images/p1.png',
            price: 100,
            countInStock: 30,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'This formula has all the ingredients of the Vital Therapy Peptide Lotion with the addition of DMAE and alpha lipoic acid, 3% of each. DMAE give greater firming (tone) to the skin, and alpha lipoic acid is supposed to be a more powerful antioxidant milligram than Vitamin C. The fragrance of the Ultra Firm Peptide Lotion is heavier in order to conceal the fishy odor of the DMAE. It also contains idebenone and green tea extract.',
            instructions: 'This is an ideal anti-aging, and toning (firming) treatment. Smooth over skin after cleansing and toning, and before applying sunscreen. Use as a daytime moisturizer. This products will firm and tone aging skin as well as build collagen.',
            ingredients: 'Aqua (water), cyclomethicone,/dimethicone copolyol, glycerin, silicone, caprillic/capric triglycerides, cetyl alcohol, Cera Alba (beeswax), DMAE, alpha lipoic acid, Idebenone, Acetyl-glutathione, Acetyl Carnosine, L-latic acid, L-retinol, Camellia sinensis (Green Tea) leaf extract, Butyrospermum Parkii (Shea Butter) L-pentapeptide, aminoguanidine, squalene (olive) Glyceryl stearate, D-beta glucosamine, Beta 1,3 D-Glucan, xanthan gum, Jasminum Officinale (Jasmine) alcohol, Vanilla Planifolia Fruit, Cananga Odorata Flower, Citrus Limonium (lemon) And Aniba Rosaeoderoa (rosewood) essential oils. ',
            isFeatured: true,
            isAntiAging: true,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Plastic Surgery in a Bottle',
            slug: 'plastic-surgery-bottle',
            category: 'Peptides',
            image: '/images/p1.png',
            price: 100,
            countInStock: 30,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'This product uses new anti-aging compounds, called glutathione, in a stable form along with hyaluronic acid, carnosine, and many other ingredients found in the Vital Therapy peptide creams. Glutathione increases microcirculation in the tissues quickly, to enhance skin tone and elasticity as well as hydration. Carnosine acts on dark areas of the skin. It is applied at night in place of the peptide lotion, which is still used during the day. Only one application is needed, as the nutrients have a long half-life.',
            instructions: 'Apply to face and neck, before bedtime, after Vitamin A Complex serum. This may be used in the a.m. as well.',
            ingredients: 'Aqua (water), caprillic/capric triglycerides, vegetable clycerin, Aloe Barbadensis Leaf Juice, honey, cyclomethicone/dimethicone, triglycerides, Cera Alba (beeswax), squalene (olive), L-retinol, L-pentapeptides, thiamin, riboflavin, niacin,pantothenic acid, pyridoxine, biotin, folic acid, cobalamin, cholecalciferol, L-hyaluronate, glutathione palmitate, carnosine palmitate, omega 3, 6, 9 oils, Super oxide dismutase, Vitamin E, L-lactic acid, royal gelee, idebenone, beta glucan, D-beta fructan, amino guanidine, D-betaglucosamine, L-sodium PCA, Calendula Officinalis, Plumeria Rubra Flower, Vanilla Tahitensis Fruit, Canaga Odorata (Ylang Ylang) Flower, Citrus Medica Limonum (Lemon), Rosa Damascena Flower, Prunus Avium (Cherry), and citrus seed extract.',
            isFeatured: false,
            isAntiAging: true,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Anti-Aging Eye Cream',
            slug: 'anti-aging-ec',
            category: 'Peptides', 
            image: '/images/p1.png',
            price: 100,
            countInStock: 30,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'The active ingredient, glutathione, is the most powerful antioxidant found in the human body. It helps increase blood circulation to the applied area which reduces swelling and dark circles.',
            instructions: 'Using your ring finger, gently apply a small amount to the area around the eyes, and the eyelids. Do not tug on the delicate eye tissue. Apply one hour before bedtime.',
            ingredients:
            'Aqua (water), caprylic/capric Triglyceride, Palmitic Acid, Stearic Acid, Butyrospermum Parkii, Glycerin, Hesperidin Methyl Chalcone, Palmitoyl Tetrapeptide-7, Dipeptide-2, Glyceryl Stearate, Cetearly Alcohol, Glycerin, Chrysin, Palmitoyl Oligopeptide, N-Hydroxysuccinimide, Olea Europaea (Olive) Fruit Oil, Prunus Dulcis Oil, Glycine Soja Oil, Tocopherly Acetate (D-Alpha), Albumen, L-retinol, L-penta peptides, Zea mays oil, Althaea Officinalis Extract, Citru Aurantium Dulci Peel Oil, Lavandula Angustifolia  Oil, Chamomilla Tecutita Flower Extract, Daucus carota (carrot seed) oil, Rosa Damascena Flower Oil, Aloe Barbadensis leaf juice posder, Aetyl-Glutathione, Acetul-Carnosine, Melaleuca Alternifolia leaf oil, Glutathions Palmitate, Carnosine Palmitate, Sodium hyaluronate, Lonicera Caprifolium flower extract, Hamamelis Virginina extract, Xantham Gum, Potassium Sorbate, Allantoin, Cetul Alcohol, alcohol denatured, Calcium Gluconate, Gluconolactone',
            isFeatured: false,
            isAntiAging: true,
            isAcneControl: false,
            isEyeTreatment: true,
        },
        {
            name: 'Peptide Eye Cream',
            slug: 'peptide-ec',
            category: 'Peptides', 
            image: '/images/p1.png',
            price: 100,
            countInStock: 30,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Diminishes fine lines and wrinkles around the eyes.',
            instructions: 'Using your ring finger, gently apply a small amount to the area around the eyes, and the eyelids. Do not tug on the delicate eye tissue',
            ingredients:
            'Aqua (water), Butyrospermum parkii (shea butter) fruit,  hesperidin chalcone, dipeptide-2, palmitoyl tetrapeptide-3, glycerin, L-hyaluronic acid, Olea Europaea (olive) fruit oil, Tocopherol, Aloe Barbadensis leaf juice, l-retinol, albumin, Prunus Amygdalus Dulcis Sweet (Almond) oil, Pogostemon Cablin (Patchouli) oil, Lecithin, Daucus Carota (Carrot Seed) oil, Chamomilla Recutita Matricaria (Flower) Extract, Althea Officinalis (marshmallow) root extract, xanthan gum, and Jasminum Officinale (Jasmine) oil.',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: true,
        },
        {
            name: 'Acne Clarifying Toner',
            slug: 'acne-clarifying-toner',
            category: 'Toners', 
            image: '/images/p1.png',
            price: 40,
            countInStock: 30,
            brand: 'bklyn',
            rating: '4',
            numReviews: '10',
            description: 'The AHA’s in this toner decongest pores, help prevent blemishes, and purify and control oil. Phenyl butyl nitrone and beta-carotene provided antioxidant protections.',
            instructions: 'Apply after cleansing. Use a small amount on a cotton square and apply over skin. Use during the day, in the evening and after exercise. *Avoid contact with eyes',
            ingredients:
            'Aqua (water), Hamamelis Virginiana (Witch Hazel) Extract, Vaccinium Macrocarpon (Cranberry) Fruit Extract, Linum Usitatissimum (Linseed) Oil Extract, Althea Officinalis (Marshmallow) Root Powder extract, Prunus Sulcis (Almond) Oil Extract, Glycolic Acid Polymer, Lactic Acid Polymer, Citric Acid and Beta-Carotene.',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: true,
            isEyeTreatment: false,
        },
        {
            name: 'Acne Clarifying Toner - Mild',
            slug: 'acne-clarifying-toner-mild',
            category: 'Toners', 
            image: '/images/p1.png',
            price: 40,
            countInStock: 30,
            brand: 'bklyn',
            rating: '4',
            numReviews: '10',
            description: 'This toner is not as strong as the Acne Clarifying Toner. This toner can be used for normal skin or aging skin. It is not normally used for acne.',
            instructions: 'Apply after cleansing. Use a small amount on a cotton square and apply over skin. Use during the day, in the evening and after exercise. *Avoid contact with eyes',
            ingredients:
            'Distilled water, hamamelis extract, cranberry extract , linseed extract, althea extract, almond extract, glycolic acid polymer, lactic acid polymer, citric acid, and beta-carotene.',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: true,
            isEyeTreatment: false,
        },
        {
            name: 'Antioxidant Toner',
            slug: 'antioxidant-toner',
            category: 'Toners', 
            image: '/images/p1.png',
            price: 40,
            countInStock: 30,
            brand: 'bklyn',
            rating: '4',
            numReviews: '10',
            description: 'For all skin types. Flushes dirt from pores and repairs free radical damage.',
            instructions: 'Apply after cleansing. Use a small amount on a cotton square and apply over skin. Use during the day, in the evening and after exercise. *Avoid contact with eyes',
            ingredients:
            'Distilled water, hamamelis extract, phenyl butyl nitrone, D-beta fructan, beta-glucosamine and amino guanidine.',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Glycolic Acid Toner',
            slug: 'glycolic-acid-toner',
            category: 'Toners', 
            image: '/images/p1.png',
            price: 40,
            countInStock: 30,
            brand: 'bklyn',
            rating: '4',
            numReviews: '10',
            description: 'Glycolic Acid Toner is not as strong and can be used for normal skin.',
            instructions: 'Apply after cleansing. Use a small amount on a cotton square and apply over skin. Use during the day, in the evening and after exercise. *Avoid contact with eyes',
            ingredients:
            'Distilled water, hamamelis extract, hyaluronic acid, phenyl butyl nitrone, D-beta glucosamine, amino guanidine, citric acid, glycolic acid and strawberry and melon extracts.',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        {
            name: 'Strawberry Melon Toner',
            slug: 'strawberry-melon-toner',
            category: 'Toners', 
            image: '/images/p1.png',
            price: 40,
            countInStock: 30,
            brand: 'bklyn',
            rating: '5',
            numReviews: '10',
            description: 'Recommended for dry skin. Soothes, balances and hydrates, to give your skin a fresher appearance.',
            instructions: 'Apply after cleansing. Use a small amount on a cotton square and apply over skin. Use during the day, in the evening and after exercise. *Avoid contact with eyes',
            ingredients:
            'Distilled water, hamamelis extract, hyaluronic acid, phenyl butyl nitrone, beta D-glusosamine, D-beta fructan, amino guanidine, citric acid, glycolic acid, and strawberry and melon extracts.',
            isFeatured: false,
            isAntiAging: false,
            isAcneControl: false,
            isEyeTreatment: false,
        },
        
        

    ],
}

export default data;