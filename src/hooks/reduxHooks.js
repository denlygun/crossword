
import { useDispatch, useSelector } from 'react-redux';
/**
 * Custom Redux hooks (useDispatch, useSelector wrappers).
 */
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;