const initialState = {
    listOfRegion : [],
    region: '',
    circusByRegionId: [],
}

const circusReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_ALL_REGION':
            return {
                ...state,
                listOfRegion: action.listOfRegion,
            }
        case 'STORE_CIRCUS_BY_REGION_ID': 
            return {
                ...state,
                circusByRegionId: action.circusByRegionId
            }        
        case 'SAVE_REGION':
            return {
                ...state,
                region: action.region,
            }    
        default:
            return state;
    }
}

export default circusReducer;
