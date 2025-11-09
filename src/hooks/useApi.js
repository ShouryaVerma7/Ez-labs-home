import { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'https://vernanbackend.ezlab.in/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const post = async (endpoint, payload) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.post(`${API_BASE_URL}${endpoint}`, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      setData(response.data);
      return response.data;
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Something went wrong';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { post, loading, error, data, setError };
};