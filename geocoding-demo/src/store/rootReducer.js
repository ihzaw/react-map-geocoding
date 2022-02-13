import { SET_DARK_MODE } from "./actionType"

const data = [
    {
        name: 'Jakarta, Indonesia',
        lat: 106.816666,
        lng: -6.200000
    },
    {
        name: 'Pamekasan, Pamekasan Regency, East Jawa, Indonesia',
        lat: 113.482498,
        lng: -7.161367
    },
    {
        name: 'Banda Aceh, Banda Aceh City, Aceh, Indonesia',
        lat: 95.323753,
        lng: 5.548290
    },
    {
        name: 'Ambon, Ambon Island, Maluku, Indonesia',
        lat: 128.190643,
        lng: -3.654703
    },
    {
        name: 'Palopo, Wara, South Sulawesi, Indonesia',
        lat: 120.195465,
        lng: -2.994494
    },
    {
        name: 'Soreang, Bandung, West Java, Indonesia',
        lat: 107.519760,
        lng: -7.025253
    },
    {
        name: 'Dumai, Dumai Province, Riau, Indonesia',
        lat: 101.445007,
        lng: 1.694394
    },
    {
        name: 'Pematang Siantar City, North Sumatra, Indonesia',
        lat: 99.068169,
        lng: 2.970042
    },
    {
        name: 'Banjarsari, Surakarta City, Central Java, Indonesia',
        lat: 110.828316,
        lng: -7.550676
    },
    {
        name: 'Lhoksukon, Aceh Utara, Aceh, Indonesia',
        lat: 97.318123,
        lng: 5.051701
    },
]

// Jakarta, Indonesia	-6.200000	106.816666
// Pamekasan, Pamekasan Regency, East Jawa, Indonesia	-7.161367	113.482498
// Banda Aceh, Banda Aceh City, Aceh, Indonesia	5.548290	95.323753
// Ambon, Ambon Island, Maluku, Indonesia	-3.654703	128.190643
// Palopo, Wara, South Sulawesi, Indonesia	-2.994494	120.195465
// Soreang, Bandung, West Java, Indonesia	-7.025253	107.519760
// Dumai, Dumai Province, Riau, Indonesia	1.694394	101.445007
// Pematang Siantar City, North Sumatra, Indonesia	2.970042	99.068169
// Banjarsari, Surakarta City, Central Java, Indonesia	-7.550676	110.828316
// Lhoksukon, Aceh Utara, Aceh, Indonesia	5.051701	97.318123

const intialState = {
    darkMode: false,
    places : data
}

const rootReducer = (state = intialState, { type, payload }) => {
    switch (type) {
        case SET_DARK_MODE:
            return {
                ...state,
                darkMode: payload
            }    
        default:
            return state
    }
}

export default rootReducer