def plant_recommendation(care):
    # Syntax Error
    if care == 'low':
        print('aloe')
    elif care == 'medium':
        print('pothos')
    # Logic Error
    elif care == 'high':
        print('orchid')

# Runtime Error
plant_recommendation('low')
plant_recommendation('medium')
plant_recommendation('high')
