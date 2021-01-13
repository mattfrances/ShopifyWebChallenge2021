import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const MagnifyEmptyState = ({ message }) => {
  const { theme } = useContext(ThemeContext);
  const fillColor = theme === 'dark' ? 'white' : 'black';

  return (
    <div className="text-center">
      <div className="w-52 m-auto mt-8 mb-2 items-center">
        <svg
          width="200"
          height="157"
          viewBox="0 0 200 157"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.8125 96.6542C106.112 96.6542 125 78.0953 125 55.2008C125 32.3062 106.112 13.7473 82.8125 13.7473C59.5125 13.7473 40.625 32.3062 40.625 55.2008C40.625 78.0953 59.5125 96.6542 82.8125 96.6542Z"
            stroke={fillColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M82.8125 107.401C112.153 107.401 135.938 84.0307 135.938 55.2006C135.938 26.3705 112.153 3 82.8125 3C53.4719 3 29.6875 26.3705 29.6875 55.2006C29.6875 84.0307 53.4719 107.401 82.8125 107.401Z"
            stroke={fillColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M120.312 92.3552C118.75 93.8905 117.188 95.1187 115.625 96.347L127.031 107.555L135.938 98.8035L124.531 87.5957C123.281 89.4381 121.875 90.9734 120.312 92.3552V92.3552Z"
            stroke={fillColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M140.191 94.5815L122.515 111.952L129.143 118.465L146.821 101.096L140.191 94.5815ZM180.001 142.407L171.094 151.158C168.594 153.614 164.688 153.614 162.188 151.158L129.063 118.609L146.719 101.26L179.844 133.809C182.501 136.112 182.501 139.95 180.001 142.407Z"
            stroke={fillColor}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            opacity="0.25"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M146.776 101.051L146.876 100.953L180.001 133.502C182.501 135.958 182.501 139.797 180.001 142.253L175.626 146.552L138.015 109.749L129.143 118.465L122.515 111.952L140.191 94.5815L146.776 101.051V101.051Z"
            fill={fillColor}
          />
          <path
            opacity="0.2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M101.562 80.3796C101.562 75.0336 105.984 70.8606 111.25 70.8606H120.312L120.089 71.8033L118.33 72.3959H111.25C106.828 72.3959 103.125 75.8995 103.125 80.3796V88.2097L102.494 89.9077L101.562 90.0873V80.3796ZM71.625 63.9502C70.1875 62.9706 68.4312 62.7588 67.2656 62.8739L67.2266 62.877H41.4062V61.3417H67.15C68.5875 61.2081 70.7156 61.4645 72.5156 62.6866C74.3781 63.9532 75.7812 66.1871 75.7812 69.7859V92.8156H74.2188V69.7859C74.2188 66.6293 73.0188 64.8975 71.625 63.9502Z"
            stroke={fillColor}
            strokeWidth="2"
          />
          <path
            opacity="0.2"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M139.041 56.736C139.069 55.7126 139.069 54.6887 139.041 53.6654H179.688C180.516 53.6654 181.311 53.3419 181.897 52.766C182.483 52.1902 182.812 51.4091 182.812 50.5947V22.9591C182.812 22.1447 182.483 21.3637 181.897 20.7879C181.311 20.212 180.516 19.8885 179.688 19.8885H137.5C136.671 19.8885 135.876 20.212 135.29 20.7879C134.704 21.3637 134.375 22.1447 134.375 22.9591V33.0768C133.459 31.0181 132.415 29.0164 131.25 27.083V22.9591C131.25 21.3304 131.908 19.7683 133.081 18.6166C134.253 17.4649 135.842 16.8179 137.5 16.8179H179.688C181.345 16.8179 182.935 17.4649 184.107 18.6166C185.279 19.7683 185.938 21.3304 185.938 22.9591V50.5947C185.938 52.2235 185.279 53.7856 184.107 54.9373C182.935 56.089 181.345 56.736 179.688 56.736H139.041ZM27.3406 64.4126C27.5172 65.4458 27.7219 66.4699 27.9563 67.4832H6.25C5.4212 67.4832 4.62634 67.8067 4.04029 68.3826C3.45424 68.9584 3.125 69.7394 3.125 70.5538V105.866C3.125 106.68 3.45424 107.461 4.04029 108.037C4.62634 108.613 5.4212 108.937 6.25 108.937H18.75V102.795C18.75 101.167 19.4085 99.6046 20.5806 98.4529C21.7527 97.3011 23.3424 96.6541 25 96.6541H45.6062C46.8484 97.7319 48.1406 98.7575 49.4766 99.7248H25C24.1712 99.7248 23.3763 100.048 22.7903 100.624C22.2042 101.2 21.875 101.981 21.875 102.795V108.937H67.1875C67.6484 108.937 68.0875 108.838 68.4812 108.662C69.7156 108.98 70.9656 109.259 72.2313 109.495C71.6511 110.275 70.8919 110.908 70.0154 111.345C69.139 111.781 68.1701 112.008 67.1875 112.007H21.875V145.784C21.875 146.599 22.2042 147.38 22.7903 147.955C23.3763 148.531 24.1712 148.855 25 148.855H90.625C91.4538 148.855 92.2487 148.531 92.8347 147.955C93.4208 147.38 93.75 146.599 93.75 145.784V109.428C94.8031 109.224 95.8437 108.992 96.875 108.731V145.784C96.875 147.413 96.2165 148.975 95.0444 150.127C93.8723 151.278 92.2826 151.925 90.625 151.925H25C23.3424 151.925 21.7527 151.278 20.5806 150.127C19.4085 148.975 18.75 147.413 18.75 145.784V112.007H6.25C4.5924 112.007 3.00269 111.36 1.83058 110.209C0.65848 109.057 0 107.495 0 105.866V70.5538C0 68.9251 0.65848 67.363 1.83058 66.2113C3.00269 65.0596 4.5924 64.4126 6.25 64.4126H27.3406V64.4126ZM103.188 106.735C104.221 106.34 105.242 105.915 106.25 105.461V105.866C106.25 106.68 106.579 107.461 107.165 108.037C107.751 108.613 108.546 108.937 109.375 108.937H122.934L120.312 111.513L120.816 112.007H109.375C107.871 112.007 106.417 111.474 105.28 110.506C104.143 109.537 103.4 108.198 103.188 106.735V106.735ZM135.281 75.1598C135.68 74.1511 136.047 73.127 136.386 72.0891H193.75C195.408 72.0891 196.997 72.7362 198.169 73.8879C199.342 75.0396 200 76.6016 200 78.2304V105.866C200 107.495 199.342 109.057 198.169 110.209C196.997 111.36 195.408 112.007 193.75 112.007H160.591L157.466 108.937H193.75C194.579 108.937 195.374 108.613 195.96 108.037C196.546 107.461 196.875 106.68 196.875 105.866V78.2304C196.875 77.416 196.546 76.635 195.96 76.0591C195.374 75.4833 194.579 75.1598 193.75 75.1598H135.283H135.281Z"
            fill={fillColor}
          />
          <path
            opacity="0.25"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M110.741 49.4001C115.768 44.4595 113.759 34.4769 106.254 27.1013C98.7476 19.7256 88.5866 17.7512 83.5601 22.6918C78.532 27.6325 80.5413 37.6151 88.0476 44.9907C95.5523 52.3648 105.713 54.3408 110.741 49.4001Z"
            fill={fillColor}
          />
        </svg>
      </div>
      <h3 className="text-gray-400">{message}</h3>
    </div>
  );
};

export default MagnifyEmptyState;
