/**
 * Custom Redux hooks (useDispatch, useSelector wrappers).
 */
import { useDispatch, useSelector } from 'react-redux';

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;