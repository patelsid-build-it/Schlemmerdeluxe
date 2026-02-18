#!/usr/bin/env python3
"""
Script to generate AI food images for Schlemmer Deluxe menu items
"""
import asyncio
import os
import sys
from pathlib import Path

# Add project root to path
sys.path.insert(0, '/app')

from dotenv import load_dotenv
load_dotenv('/app/.env')

from emergentintegrations.llm.openai.image_generation import OpenAIImageGeneration

# Menu items with descriptions for image generation
MENU_ITEMS = [
    # Döner
    {"id": "d1", "name": "Döner Kebab", "prompt": "Professional food photography of a delicious döner kebab sandwich in pita bread with fresh lettuce, tomatoes, onions, and white sauce, appetizing presentation on a dark slate plate, restaurant quality, warm lighting"},
    {"id": "d2", "name": "Döner Box", "prompt": "Professional food photography of döner meat box with golden french fries, fresh salad and creamy sauce in a takeaway container, appetizing fast food presentation, warm lighting"},
    {"id": "d3", "name": "Döner Teller", "prompt": "Professional food photography of a döner plate with sliced döner meat, rice, fresh salad, and sauce on a white ceramic plate, restaurant quality presentation, warm lighting"},
    {"id": "d4", "name": "Döner Dürum", "prompt": "Professional food photography of a döner dürum wrap rolled in thin lavash bread with meat and vegetables, cut in half showing filling, appetizing presentation, warm lighting"},
    {"id": "d5", "name": "Döner XL", "prompt": "Professional food photography of an extra large döner kebab sandwich stuffed with double meat, fresh vegetables and sauce, impressive size, appetizing presentation, warm lighting"},
    {"id": "d6", "name": "Kinder Döner", "prompt": "Professional food photography of a small child-sized döner kebab sandwich, cute and appetizing presentation, warm lighting"},
    
    # Burger
    {"id": "b1", "name": "Classic Burger", "prompt": "Professional food photography of a classic beef burger with lettuce, tomato, pickles and special sauce on a sesame bun, juicy and appetizing, restaurant quality, warm lighting"},
    {"id": "b2", "name": "Cheese Burger", "prompt": "Professional food photography of a cheeseburger with melted cheddar cheese, caramelized onions, and beef patty, cheese dripping appetizingly, warm lighting"},
    {"id": "b3", "name": "Chicken Burger", "prompt": "Professional food photography of a crispy chicken burger with breaded chicken fillet, lettuce and mayo on a brioche bun, crunchy and appetizing, warm lighting"},
    {"id": "b4", "name": "Deluxe Burger", "prompt": "Professional food photography of a deluxe double burger with two beef patties, bacon, cheese, and all toppings, impressive and indulgent, warm lighting"},
    
    # Wraps
    {"id": "w1", "name": "Chicken Wrap", "prompt": "Professional food photography of a grilled chicken wrap in a tortilla with fresh vegetables and yogurt sauce, cut diagonally showing filling, appetizing presentation, warm lighting"},
    {"id": "w2", "name": "Döner Wrap", "prompt": "Professional food photography of a döner wrap in a flour tortilla with döner meat and fresh salad, cut showing filling, appetizing presentation, warm lighting"},
    {"id": "w3", "name": "Falafel Wrap", "prompt": "Professional food photography of a vegetarian falafel wrap with crispy falafel balls, hummus, and fresh vegetables, healthy and appetizing, warm lighting"},
    {"id": "w4", "name": "Halloumi Wrap", "prompt": "Professional food photography of a grilled halloumi cheese wrap with roasted vegetables and mint sauce, vegetarian, appetizing presentation, warm lighting"},
    
    # Bowls
    {"id": "bo1", "name": "Döner Bowl", "prompt": "Professional food photography of a döner bowl with sliced meat on rice, fresh salad, hummus, and drizzled sauce in a ceramic bowl, healthy and appetizing, warm lighting"},
    {"id": "bo2", "name": "Chicken Bowl", "prompt": "Professional food photography of a grilled chicken bowl with quinoa, roasted vegetables, and tahini dressing, healthy and colorful, warm lighting"},
    {"id": "bo3", "name": "Falafel Bowl", "prompt": "Professional food photography of a falafel bowl with crispy falafel, fresh salad, hummus, and vegetables, vegan-friendly and colorful, warm lighting"},
    {"id": "bo4", "name": "Mixed Bowl", "prompt": "Professional food photography of a mixed protein bowl with döner and chicken on rice with all toppings, generous portions, appetizing, warm lighting"},
    
    # Vegetarisch
    {"id": "v1", "name": "Falafel Tasche", "prompt": "Professional food photography of falafel in pita bread with fresh salad and hummus, vegetarian döner style, appetizing presentation, warm lighting"},
    {"id": "v2", "name": "Halloumi Tasche", "prompt": "Professional food photography of grilled halloumi cheese in pita bread with fresh vegetables, vegetarian, appetizing presentation, warm lighting"},
    {"id": "v3", "name": "Veggie Burger", "prompt": "Professional food photography of a vegetarian burger with a homemade vegetable patty, fresh lettuce, tomato and special sauce, healthy and appetizing, warm lighting"},
    {"id": "v4", "name": "Gemüse Teller", "prompt": "Professional food photography of a grilled vegetable plate with rice, salad and dips, colorful and healthy, vegetarian, warm lighting"},
    
    # Getränke
    {"id": "g1", "name": "Ayran", "prompt": "Professional food photography of ayran yogurt drink in a traditional glass, refreshing Turkish beverage, white and frothy, appetizing, clean background"},
    {"id": "g2", "name": "Cola", "prompt": "Professional food photography of a cold cola in a glass with ice cubes and condensation on the glass, refreshing, dark background"},
    {"id": "g3", "name": "Wasser", "prompt": "Professional food photography of a bottle of mineral water with a glass filled with sparkling water and lemon slice, refreshing and clean"},
    {"id": "g4", "name": "Türkischer Tee", "prompt": "Professional food photography of traditional Turkish tea in a tulip-shaped glass on a small saucer, warm amber color, elegant presentation"},
]

async def generate_single_image(image_gen, item, output_dir):
    """Generate a single food image"""
    try:
        print(f"Generating image for: {item['name']}...")
        images = await image_gen.generate_images(
            prompt=item['prompt'],
            model="gpt-image-1",
            number_of_images=1
        )
        
        if images and len(images) > 0:
            output_path = output_dir / f"{item['id']}.png"
            with open(output_path, "wb") as f:
                f.write(images[0])
            print(f"✓ Saved: {output_path}")
            return True
        else:
            print(f"✗ No image generated for: {item['name']}")
            return False
    except Exception as e:
        print(f"✗ Error generating {item['name']}: {e}")
        return False

async def main():
    api_key = os.getenv('EMERGENT_LLM_KEY')
    if not api_key:
        print("Error: EMERGENT_LLM_KEY not found in environment")
        return
    
    # Create output directory
    output_dir = Path('/app/public/food')
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Initialize image generator
    image_gen = OpenAIImageGeneration(api_key=api_key)
    
    print(f"Starting generation of {len(MENU_ITEMS)} food images...")
    print(f"Output directory: {output_dir}")
    print("-" * 50)
    
    success_count = 0
    for item in MENU_ITEMS:
        # Check if image already exists
        output_path = output_dir / f"{item['id']}.png"
        if output_path.exists():
            print(f"⏭ Skipping {item['name']} (already exists)")
            success_count += 1
            continue
            
        if await generate_single_image(image_gen, item, output_dir):
            success_count += 1
        
        # Small delay between requests
        await asyncio.sleep(1)
    
    print("-" * 50)
    print(f"Completed: {success_count}/{len(MENU_ITEMS)} images generated")

if __name__ == "__main__":
    asyncio.run(main())
