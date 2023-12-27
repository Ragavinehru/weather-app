
import React, { createContext, useContext, useReducer } from 'react';

const LocationContext = createContext();

const initialState = {
  savedLocations: [],
};

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_LOCATION':
      return {
        ...state,
        savedLocations: [...state.savedLocations, action.payload],
      };
    
    default:
      return state;
  }
};

const LocationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(locationReducer, initialState);

  const addLocation = (location) => {
    dispatch({ type: 'ADD_LOCATION', payload: location });
  };

  return (
    <LocationContext.Provider value={{ state, addLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};

export { LocationProvider, useLocation };
