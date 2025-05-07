const recipes = [
    {
        id: 1,
        name: "Butter Chicken",
        category: "dinner",
        image: "https://assets.bangcurry.com/2023/04/26060949/chicken-korma-recipe-e1688066363474.png",
        description: "Tender chicken pieces cooked in a rich, creamy tomato-based curry with butter and aromatic spices. A classic North Indian dish loved worldwide.",
        ingredients: ["Chicken", "Butter", "Cream", "Tomato puree", "Garam masala", "Kasuri methi", "Onions", "Ginger-garlic paste"]
    },
    {
        id: 2,
        name: "Masala Dosa",
        category: "breakfast",
        image: "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg",
        description: "Crispy, thin rice and lentil crepe filled with spiced potato mixture, served with coconut chutney and sambar. A South Indian breakfast staple.",     
        ingredients: ["Rice", "Urad dal", "Potato", "Onions", "Mustard seeds", "Curry leaves", "Coconut chutney"]
    },
    {
        id: 3,
        name: "Paneer Tikka",
        category: "lunch",
        image: "https://hebbarskitchen.com/wp-content/uploads/2021/09/paneer-tikka-masala-recipe-paneer-tikka-gravy-sabji-restaurant-style-21-683x1024.jpeg.webp",
        description: "Marinated and grilled cottage cheese cubes with colorful bell peppers, flavored with tandoori spices. A popular vegetarian appetizer.",
        ingredients: ["Paneer", "Yogurt", "Bell peppers", "Tandoori masala", "Ginger-garlic paste", "Lemon juice"]
    },
    {
        id: 4,
        name: "Chole Bhature",
        category: "lunch",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chole_Bhature_At_Local_Street.jpg/1200px-Chole_Bhature_At_Local_Street.jpg",
        description: "Spicy chickpea curry served with deep-fried, fluffy bread. A hearty Punjabi dish perfect for special occasions.",
        ingredients: ["Chickpeas", "Onions", "Tomatoes", "Chole masala", "All-purpose flour", "Yogurt"]
    },
    {
        id: 5,
        name: "Idli Sambar",
        category: "breakfast",
        image: "https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg",
        description: "Soft, steamed rice cakes served with spiced lentil soup and coconut chutney. A nutritious South Indian breakfast combination.",
        ingredients: ["Rice", "Urad dal", "Toor dal", "Vegetables", "Sambar powder", "Coconut chutney"]
    },
    {
        id: 6,
        name: "Chicken Biryani",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8",
        description: "Fragrant rice layered with spiced chicken, caramelized onions, and aromatic saffron. A royal Mughlai delicacy.",
        ingredients: ["Basmati rice", "Chicken", "Biryani masala", "Saffron", "Onions", "Yogurt"]
    },
    {
        id: 7,
        name: "Palak Paneer",
        category: "dinner",
        image: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-3.jpg",
        description: "Cottage cheese cubes in a creamy, spiced spinach gravy. A nutritious and popular North Indian vegetarian dish.",
        ingredients: ["Spinach", "Paneer", "Onions", "Tomatoes", "Cream", "Spices"]
    },
    {
        id: 8,
        name: "Aloo Paratha",
        category: "breakfast",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg/1200px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg",
        description: "Whole wheat flatbread stuffed with spiced mashed potatoes, served with butter and yogurt. A hearty breakfast favorite.",
        ingredients: ["Wheat flour", "Potatoes", "Spices", "Ghee", "Yogurt"]
    },
    {
        id: 9,
        name: "Dal Makhani",
        category: "dinner",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/dal-makhani-recipe.jpg",
        description: "Creamy black lentils slow-cooked with butter and spices. A rich and indulgent Punjabi delicacy.",
        ingredients: ["Black lentils", "Kidney beans", "Cream", "Butter", "Tomatoes", "Spices"]
    },
    {
        id: 10,
        name: "Samosa",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
        description: "Crispy pastry triangles filled with spiced potatoes and peas. India's most beloved street food snack.",
        ingredients: ["All-purpose flour", "Potatoes", "Peas", "Spices", "Oil"]
    },
    {
        id: 11,
        name: "Rajma Chawal",
        category: "lunch",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrY-YDbNH_JLFnMOh26A1l7WKFgORHz6C3uQ&s",
        description: "Red kidney bean curry served with steamed rice. A comforting North Indian meal packed with protein.",
        ingredients: ["Kidney beans", "Rice", "Onions", "Tomatoes", "Spices"]
    },
    {
        id: 12,
        name: "Pav Bhaji",
        category: "lunch",
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84",
        description: "Spiced vegetable mash served with buttered bread rolls. Mumbai's iconic street food dish.",
        ingredients: ["Mixed vegetables", "Pav bhaji masala", "Butter", "Bread buns", "Onions"]
    },
    {
        id: 13,
        name: "Malai Kofta",
        category: "dinner",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe",
        description: "Deep-fried paneer and potato dumplings in a rich, creamy gravy. A luxurious vegetarian curry.",
        ingredients: ["Paneer", "Potatoes", "Cream", "Nuts", "Spices", "Tomatoes"]
    },
    {
        id: 14,
        name: "Upma",
        category: "breakfast",
        image: "https://d1uz88p17r663j.cloudfront.net/original/ba32df908435796279e3d79f0d5fbdc1_Rava_Upma_-_Twist.jpg",
        description: "Savory semolina porridge with vegetables and curry leaves. A quick and healthy South Indian breakfast.",
        ingredients: ["Semolina", "Vegetables", "Mustard seeds", "Curry leaves", "Peanuts"]
    },
    {
        id: 15,
        name: "Chicken Tikka Masala",
        category: "dinner",
        image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-tikka-masala-recipe-1.jpg",
        description: "Grilled chicken pieces in a rich, spiced tomato-cream sauce. A popular Indo-British curry house favorite.",
        ingredients: ["Chicken", "Yogurt", "Tikka masala", "Lemon", "Ginger-garlic paste"]
    }
];

function createRecipeCard(recipe) {
    return `
        <div class="recipe-card" data-id="${recipe.id}">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-info">
                <h3 class="recipe-title">${recipe.name}</h3>
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </div>
    `;
}

function displayRecipes(category = 'all') {
    const recipeGrid = document.getElementById('recipeGrid');
    const filteredRecipes = category === 'all' 
        ? recipes 
        : recipes.filter(recipe => recipe.category === category);
    
    recipeGrid.innerHTML = filteredRecipes.map(createRecipeCard).join('');
}

function showRecipeDetails(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    const modal = document.getElementById('recipeModal');
    const modalBody = modal.querySelector('.modal-body');
    
    modalBody.innerHTML = `
        <h2>${recipe.name}</h2>
        <img src="${recipe.image}" alt="${recipe.name}" style="width: 100%; max-height: 300px; object-fit: cover; border-radius: 10px; margin: 1rem 0;">
        <h3>Ingredients:</h3>
        <ul>${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}</ul>
        <h3>Instructions:</h3>
        <ol>${recipe.instructions.map(inst => `<li>${inst}</li>`).join('')}</ol>
    `;
    
    modal.style.display = 'block';
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    displayRecipes();

    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            e.target.classList.add('active');
            displayRecipes(e.target.dataset.category);
        });
    });

    // Recipe card clicks
    document.getElementById('recipeGrid').addEventListener('click', (e) => {
        const card = e.target.closest('.recipe-card');
        if (card) {
            showRecipeDetails(parseInt(card.dataset.id));
        }
    });

    // Modal close button
    document.querySelector('.close-btn').addEventListener('click', () => {
        document.getElementById('recipeModal').style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('recipeModal');
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});