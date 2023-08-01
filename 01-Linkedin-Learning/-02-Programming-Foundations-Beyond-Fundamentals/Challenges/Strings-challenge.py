def Mile ():
    miles = input('Mil cinsinden bir mesafe girin: ')
    # kilometers_value = miles_value * 1.60934
    
    y = float(miles)

    
    print("Bu eşittir" , y * 1.609344 , 'km')


    print("1 miles = 1.609344 kilometers; Sadece MATH yaptık!")
    

    reput = input ('Başka bir mesafe hesap istiyor musun? ')
    if reput == 'Hayır':
        print('Tembel seçim!')
    else:
        Mile ()

Mile ()

print('İyi zamanlar!')
