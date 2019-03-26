import * as ItemsActions from './items.actions';
import { Item } from '../item.model';

export interface ItemsState {
    items: Item[],
    selectedItem: Item
};

const initialState: ItemsState = {
    items: [],
    selectedItem: null
};

export function itemsReducer(state = initialState, action: ItemsActions.ItemsActions): ItemsState {
    switch (action.type) {

        case ItemsActions.SET_ITEMS: {
            if (!action.payload) return state;

            const items = [...action.payload];

            return {
                ...state,
                items: items,
                selectedItem: items.length ? { ...items[0] } : null
            };
        }

        case ItemsActions.SELECT_ITEM: {
            return {
                ...state,
                selectedItem: action.payload ? { ...action.payload } : null
            };
        }

        case ItemsActions.DELETE_ITEM: {
            if (!action.payload) return state;

            const items = state.items.filter(item => {
                return item.id !== action.payload.id;
            });

            let selectedItem = state.selectedItem;

            if (selectedItem && (selectedItem.id === action.payload.id)) {
                selectedItem = items.length ? { ...items[0] } : null;
            }

            return {
                ...state,
                items: [...items],
                selectedItem: selectedItem
            };
        }

        case ItemsActions.ADD_ITEM: {
            if (!action.payload) return state;

            return {
                ...state,
                items: [...state.items, action.payload]
            };
        }

        case ItemsActions.UPDATE_ITEM: {
            if (!action.payload) return state;

            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index < 0) {
                return state;
            }

            const items = [...state.items];
            items[index] = { ...action.payload };

            let selectedItem = state.selectedItem;

            if (selectedItem && (selectedItem.id === action.payload.id)) {
                selectedItem = { ...action.payload };
            }

            return {
                ...state,
                items: items,
                selectedItem: selectedItem
            };
        }

        default:
            return state;
    }
}