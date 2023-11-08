import { toast } from 'react-toastify';

const ToastButton = () => {
  const showToast = () => {
    toast.success('Product Added!', {
      position: 'bottom-right',
      autoClose: 1000, // 1 seconds
      style: {
        background: 'purple', // Background color
        color: 'white',       // Text color
      },
    });
  };

  return (
    <div>
      <button onClick={showToast} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Show Toast
      </button>
    </div>
  );
};

export default ToastButton;
