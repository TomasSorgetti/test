import PropTypes from 'prop-types';

export default function Logo({ size = '230', theme = 'dark' }) {
  return (
    <svg
      width={size}
      height="auto"
      viewBox="0 0 230 105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_448_285)">
        <path
          d="M7.25059 74.2949C7.98669 74.2949 8.66144 74.0496 9.21351 73.5588C9.76558 73.0681 10.0723 72.332 10.0723 71.5346C10.0723 70.7371 9.76558 70.0624 9.21351 69.5103C8.66144 68.9583 7.98669 68.7129 7.25059 68.7129C6.45316 68.7129 5.7784 69.0196 5.28767 69.5717C4.79694 70.1237 4.49023 70.7985 4.49023 71.5959C4.49023 72.3934 4.79694 73.0681 5.28767 73.6202C5.83974 74.0496 6.5145 74.2949 7.25059 74.2949Z"
          fill="#30C2E2"
        />
        <path
          d="M7.31107 78.2178C5.83888 78.2178 5.34815 79.1379 5.16413 79.5059C4.9801 79.9967 4.85742 80.6101 4.85742 81.2848V93.0624C4.85742 93.7985 4.91876 94.4119 5.10279 94.9026C5.22547 95.2706 5.7162 96.1908 7.18839 96.1908C7.74046 96.1908 8.16985 96.0681 8.47656 95.8841C8.8446 95.6387 9.08997 95.332 9.27399 94.9026C9.39668 94.5959 9.45802 94.2892 9.51936 93.9211C9.51936 93.6758 9.5807 93.3691 9.5807 93.0624V81.2235C9.5807 80.6101 9.51936 80.058 9.33533 79.5673C9.21265 79.1992 8.72192 78.2178 7.31107 78.2178Z"
          fill="#30C2E2"
        />
        <path
          d="M43.8101 72.208C41.6019 70.4904 38.2281 69.5703 33.8115 69.5703C31.7259 69.5703 29.7017 69.7543 27.8614 70.1837C25.9598 70.6131 24.3036 71.3492 22.9541 72.392C21.5433 73.4348 20.4391 74.8457 19.5803 76.5632C18.7829 78.2808 18.3535 80.4277 18.3535 82.9427C18.3535 84.8443 18.5989 86.6232 19.0896 88.2181C19.5803 89.8743 20.4391 91.2851 21.5433 92.4506C22.6474 93.6161 24.1196 94.5362 25.8985 95.211C27.616 95.8244 29.763 96.1924 32.2166 96.1924C34.5476 96.1924 36.5719 96.0084 38.2281 95.7017C39.8843 95.395 41.3565 95.0269 42.522 94.5975C43.6875 94.1682 44.6076 93.7388 45.2823 93.3094C46.0798 92.8186 46.3865 92.5119 46.5705 92.3893C46.9385 92.0826 47.1226 91.7145 47.1226 91.2238C47.1226 90.7944 46.9385 90.365 46.6318 89.997C46.2025 89.5062 45.7731 89.4449 45.4664 89.4449C45.3437 89.4449 45.221 89.4449 44.9756 89.5676C44.9143 89.5676 44.8529 89.6289 44.7916 89.6289C44.4236 89.8743 43.9328 90.181 43.3194 90.549C42.706 90.9171 41.9086 91.2238 40.8658 91.5918C39.8843 91.9599 38.6575 92.2052 37.2466 92.4506C35.8358 92.696 34.1796 92.8187 32.278 92.8187C30.6218 92.8187 29.1496 92.6346 27.9228 92.2666C26.7573 91.8985 25.7145 91.3465 24.917 90.6104C24.1196 89.8743 23.5062 88.8928 23.0768 87.666C22.7087 86.6232 22.4634 85.2737 22.402 83.8015H45.8344C46.2638 83.8015 46.5705 83.5561 46.7545 83.0041C46.8772 82.7587 46.9385 82.452 47.0612 82.0839C47.1226 81.7159 47.1839 81.3478 47.2453 80.9798C47.3066 80.6117 47.3066 80.2437 47.3066 79.937C47.3066 76.5632 46.1411 73.9869 43.8101 72.208ZM23.2608 77.5447C23.7515 76.5019 24.4876 75.6431 25.4078 74.9683C26.3279 74.2936 27.5547 73.8029 28.9042 73.4962C30.3151 73.1895 31.9713 73.0054 33.8115 73.0054C35.7744 73.0054 37.4307 73.1894 38.7188 73.5575C40.007 73.9255 41.0498 74.4163 41.8472 75.0297C42.5833 75.6431 43.1354 76.3792 43.5034 77.1153C43.8101 77.9127 43.9942 78.8328 43.9942 79.753V80.6731H22.4634C22.5861 79.5076 22.8314 78.4035 23.2608 77.5447Z"
          fill="#F3F3F3"
        />
        <path
          d="M80.2501 82.2068C78.9619 81.7161 77.4284 81.4094 75.7722 81.2253C74.1773 81.0413 72.4598 80.98 70.8035 80.98H65.8962C64.3627 80.98 62.9519 80.8573 61.7864 80.6119C60.6209 80.3666 59.7008 79.9985 59.026 79.5078C58.4739 79.0784 58.1672 78.465 58.1672 77.6675C58.1672 76.8088 58.4126 76.134 58.9033 75.5819C59.4554 74.9685 60.1915 74.4778 61.0503 74.1098C61.9704 73.7417 63.1359 73.435 64.3627 73.251C65.6509 73.0669 66.939 73.0056 68.2885 73.0056C70.9262 73.0056 73.3799 73.251 75.5268 73.803C77.6124 74.2938 79.514 75.0299 81.2316 75.8886C81.4156 76.0113 81.5996 76.0727 81.845 76.0727C82.1517 76.0727 82.5811 75.95 83.0104 75.4593C83.2558 75.0912 83.4398 74.7232 83.4398 74.2324C83.4398 74.1711 83.4398 74.1711 83.4398 74.1098C83.3785 73.8644 83.3172 73.619 83.2558 73.3736C83.1331 73.0669 82.8878 72.8216 82.5197 72.6376C80.4955 71.5334 78.2258 70.736 75.8949 70.3066C73.5639 69.8772 70.9876 69.6318 68.2885 69.6318C66.6323 69.6318 64.9761 69.7545 63.3812 69.9385C61.725 70.1839 60.2528 70.552 58.9647 71.1654C57.6152 71.7788 56.511 72.5762 55.6522 73.619C54.7935 74.6618 54.3027 76.0727 54.3027 77.7289C54.3027 79.3238 54.7321 80.6733 55.6522 81.5934C56.511 82.5135 57.6152 83.1883 58.9647 83.679C60.2528 84.1084 61.7864 84.4151 63.4426 84.5991C65.0375 84.7218 66.755 84.7831 68.4112 84.7831H73.3185C74.8521 84.7831 76.2629 84.9058 77.4284 85.2125C78.5939 85.4579 79.514 85.8873 80.1888 86.4393C80.7408 86.9301 81.0475 87.5435 81.0475 88.4023C81.0475 89.1997 80.8022 89.8131 80.3114 90.3038C79.7594 90.8559 78.9619 91.3466 77.9805 91.7147C76.9377 92.0827 75.7108 92.3281 74.3613 92.5121C72.9505 92.6962 71.5396 92.7575 70.0061 92.7575H66.2643C65.0988 92.7575 63.9947 92.6348 62.9519 92.4508C61.9091 92.2668 60.8662 91.9601 59.9461 91.592C59.026 91.224 58.1672 90.7332 57.3698 90.1812C57.1858 90.0585 56.9404 89.8745 56.511 89.8745C56.0816 89.8745 55.6522 90.0585 55.3455 90.4879C55.1002 90.8559 54.9775 91.224 54.9775 91.6534C54.9775 92.0214 55.1002 92.5735 55.7136 93.0642C56.6337 93.8616 57.7378 94.4751 59.026 94.9044C60.2528 95.3338 61.541 95.6405 62.8292 95.8859C64.1173 96.0699 65.4668 96.1926 66.755 96.1926H70.3128C72.153 96.1926 73.9319 96.0699 75.6495 95.8246C77.367 95.5792 78.9619 95.1498 80.3114 94.5977C81.7223 94.0457 82.8264 93.2482 83.6852 92.2668C84.6053 91.224 85.0347 89.9971 85.0347 88.4636C85.0347 86.8074 84.6053 85.5192 83.6852 84.5378C82.7037 83.4336 81.5996 82.6975 80.2501 82.2068Z"
          fill="#F3F3F3"
        />
        <path
          d="M97.9702 75.2752C98.9517 74.4778 100.178 73.8644 101.712 73.4963C103.307 73.1283 105.27 72.9443 107.539 72.9443C108.46 72.9443 109.441 73.0056 110.422 73.1283C111.404 73.251 112.385 73.435 113.244 73.6804C114.103 73.8644 114.962 74.1098 115.698 74.4165C116.434 74.6618 117.047 74.9072 117.477 75.1526C117.538 75.1526 117.538 75.1525 117.599 75.2139C117.967 75.3366 118.274 75.3979 118.458 75.3979C119.072 75.3979 119.44 75.1525 119.624 74.9685C119.93 74.6618 120.053 74.2938 120.053 73.8644C120.053 73.5577 119.992 73.251 119.808 72.9443C119.624 72.6376 119.378 72.3922 119.01 72.2082C117.17 71.2267 115.207 70.552 113.244 70.1839C111.281 69.8159 109.38 69.6318 107.539 69.6318C105.024 69.6318 102.755 69.8159 100.792 70.2452C98.7676 70.6746 97.0501 71.4107 95.6392 72.4535C94.2284 73.4963 93.1242 74.9072 92.3268 76.6247C91.5907 78.3423 91.2227 80.4892 91.2227 83.0042C91.2227 85.5806 91.652 87.7275 92.4495 89.3837C93.2469 91.1013 94.4124 92.4508 95.8846 93.4936C97.2954 94.475 99.0743 95.2111 101.037 95.5792C103 95.9472 105.147 96.1313 107.539 96.1313C109.38 96.1313 111.281 95.9472 113.244 95.5792C115.207 95.2111 117.17 94.5364 119.072 93.5549C119.44 93.3709 119.685 93.1255 119.869 92.8188C120.053 92.5121 120.114 92.2054 120.114 91.8987C120.114 91.4693 119.93 91.1013 119.685 90.7946C119.501 90.6106 119.133 90.3038 118.52 90.3038C118.335 90.3038 118.029 90.3652 117.661 90.4879C117.599 90.4879 117.599 90.4879 117.538 90.5492C117.047 90.7946 116.495 91.0399 115.759 91.2853C115.023 91.5307 114.164 91.776 113.306 92.0214C112.385 92.2054 111.465 92.3894 110.484 92.5735C109.502 92.6962 108.521 92.7575 107.601 92.7575C105.454 92.7575 103.614 92.5735 102.019 92.2054C100.485 91.8374 99.197 91.2853 98.2156 90.4879C97.2341 89.7518 96.498 88.7703 96.0073 87.5435C95.5165 86.3167 95.2712 84.7218 95.2712 82.9429C95.2712 81.164 95.5165 79.5691 95.9459 78.2809C96.314 77.0541 97.0501 76.0727 97.9702 75.2752Z"
          fill="#F3F3F3"
        />
        <path
          d="M147.231 70.3686C146.925 70.3073 146.618 70.1846 146.311 70.1233C146.005 70.0619 145.637 69.9392 145.146 69.8779C144.716 69.8165 144.226 69.7552 143.612 69.6939C142.385 69.5712 140.791 69.5712 138.705 69.8165C137.601 70.0006 136.497 70.3073 135.454 70.7367C134.411 71.2274 133.368 71.9022 132.51 72.6996C132.387 72.8223 132.203 73.0063 132.08 73.1903V72.7609C132.08 72.1475 132.019 71.6568 131.835 71.2274C131.712 70.8593 131.283 70.2459 130.24 70.2459C129.136 70.2459 128.645 70.7367 128.461 71.1661C128.277 71.5954 128.154 72.1475 128.154 72.7609V92.8809C128.154 93.1876 128.154 93.4943 128.216 93.7396C128.216 94.0464 128.338 94.4144 128.4 94.6598C128.522 95.0278 128.768 95.2732 129.074 95.5185C129.381 95.7639 129.749 95.8252 130.179 95.8252C131.037 95.8252 131.651 95.3959 131.896 94.5984C132.08 94.0463 132.141 93.4943 132.141 92.8809V78.527C132.448 77.6682 132.878 76.8708 133.43 76.196C134.043 75.5213 134.718 74.9079 135.515 74.4785C136.313 74.0491 137.294 73.681 138.276 73.4357C139.318 73.1903 140.423 73.0676 141.588 73.0676C142.385 73.0676 143.183 73.129 143.858 73.2517C144.532 73.3743 145.269 73.5584 146.127 73.8037H146.189C146.311 73.8651 146.495 73.8651 146.618 73.8651C147.354 73.8651 147.784 73.497 147.968 73.2517C148.274 72.8836 148.397 72.4542 148.397 72.0248C148.397 71.6568 148.336 71.3501 148.152 71.0434C147.968 70.7367 147.661 70.4913 147.231 70.3686Z"
          fill="#F3F3F3"
        />
        <path
          d="M179.988 72.7017C178.639 71.5975 176.982 70.8001 174.958 70.3093C172.995 69.8186 170.664 69.5732 167.965 69.5732C165.327 69.5732 162.935 69.8186 160.972 70.3093C158.948 70.8001 157.292 71.5975 155.942 72.7017C154.593 73.8058 153.55 75.2166 152.937 76.9342C152.323 78.5904 151.955 80.6147 151.955 82.9456C151.955 84.9699 152.262 86.8101 152.814 88.405C153.366 90.0612 154.347 91.4721 155.636 92.6376C156.924 93.803 158.58 94.6618 160.604 95.2752C162.628 95.8886 165.082 96.1954 167.965 96.1954C170.848 96.1954 173.302 95.8886 175.326 95.2752C177.35 94.6618 179.068 93.803 180.295 92.6376C181.583 91.4721 182.503 90.0612 183.116 88.405C183.669 86.8101 183.975 84.9699 183.975 82.9456C183.975 80.6147 183.669 78.6517 182.994 76.9342C182.38 75.278 181.338 73.8058 179.988 72.7017ZM180.049 82.9456C180.049 83.7431 179.988 84.6019 179.865 85.3993C179.743 86.1967 179.559 86.9328 179.252 87.6689C178.945 88.405 178.516 89.0184 178.025 89.6318C177.534 90.2452 176.798 90.736 175.94 91.2267C175.081 91.7174 173.977 92.0855 172.688 92.3309C171.4 92.5762 169.805 92.7602 168.026 92.7602C166.248 92.7602 164.653 92.6376 163.365 92.3309C162.076 92.0855 160.972 91.7174 160.113 91.2267C159.255 90.7973 158.519 90.2452 158.028 89.6318C157.476 89.0184 157.108 88.3437 156.801 87.6689C156.494 86.9328 156.31 86.1967 156.188 85.3993C156.065 84.6019 156.004 83.7431 156.004 82.9456C156.004 81.1054 156.249 79.5105 156.678 78.2224C157.108 76.9955 157.844 76.0141 158.764 75.2166C159.684 74.4192 160.972 73.8671 162.444 73.4991C163.978 73.131 165.88 72.947 168.026 72.947C170.173 72.947 172.075 73.131 173.609 73.4991C175.081 73.8671 176.369 74.4192 177.289 75.2166C178.209 76.0141 178.884 76.9955 179.375 78.2224C179.804 79.5105 180.049 81.1054 180.049 82.9456Z"
          fill="#F3F3F3"
        />
        <path
          d="M224.645 70.7978C223.909 70.0617 222.866 70.0004 222.008 70.6138C221.639 70.9205 221.333 71.3499 221.149 71.9633L215.383 89.8136L209.617 72.3927C209.371 71.6566 209.003 71.1045 208.574 70.7365C208.083 70.3684 207.531 70.123 206.979 70.123C206.12 70.123 205.016 70.4911 204.403 72.3313L198.637 89.7523L192.809 71.9019C192.564 71.2885 192.318 70.8591 191.95 70.5524C191.092 69.939 190.049 70.0004 189.313 70.7365C188.883 71.1659 188.699 71.6566 188.699 72.3313C188.699 72.7607 188.761 73.0674 188.883 73.3128L196.122 93.6781C196.735 95.5183 197.839 95.8864 198.575 95.8864C199.066 95.8864 199.557 95.7024 199.986 95.273C200.354 94.9049 200.661 94.4142 200.967 93.6781L206.979 76.0732L212.99 93.6781C213.236 94.4142 213.542 94.9049 213.91 95.273C214.34 95.641 214.831 95.8864 215.383 95.8864C215.935 95.8864 216.425 95.7024 216.855 95.273C217.284 94.9049 217.591 94.3528 217.836 93.6781L225.075 73.3128C225.197 73.0674 225.259 72.6994 225.259 72.3313C225.259 71.7793 225.013 71.2272 224.645 70.7978Z"
          fill="#F3F3F3"
        />
        <path
          d="M155.197 16.0813C152.866 9.70184 147.836 4.67186 141.334 2.27955C132.807 -0.848855 123.974 0.31663 116.981 5.4693L116.307 5.96003L115.939 5.71466C108.946 0.316629 99.9286 -0.910196 91.3408 2.27955C84.9 4.67186 79.87 9.6405 77.4777 16.02C74.4106 24.2397 75.3307 32.9502 80.1153 39.8204C84.8386 46.6293 92.5063 50.6778 100.726 50.6778C106.676 50.6778 111.215 49.1443 115.939 45.5251C116.061 45.4638 116.184 45.4025 116.245 45.4025C116.491 45.4025 116.675 45.5865 117.043 45.7705C121.643 49.0216 126.612 50.6778 131.826 50.6778C140.23 50.6778 147.775 46.8747 152.437 40.1885C157.283 33.3182 158.264 24.5464 155.197 16.0813ZM148.388 30.8032C146.793 36.2626 142.377 40.5565 136.917 42.1514C132.255 43.4395 127.471 42.8875 123.422 40.5565C123.116 40.3725 122.932 40.1271 122.932 39.7591C122.87 39.391 122.993 39.0843 123.3 38.8389L132.501 30.4352C132.869 30.0671 133.482 30.0671 133.85 30.3739C135.138 31.3553 135.936 31.7234 136.243 31.7234L138.758 20.9273C138.819 20.5592 138.758 20.1912 138.512 19.9458C138.267 19.6391 137.899 19.5164 137.531 19.5778L126.489 20.8046C126.428 20.8046 126.305 20.8046 126.244 20.866C126.244 21.234 126.857 22.5222 127.655 23.6263L127.962 24.0557L110.541 39.8204C107.596 41.8447 104.284 42.8875 100.787 42.8875C99.1925 42.8875 97.6589 42.7034 96.0641 42.2741C90.4207 40.7405 85.9428 36.3853 84.2866 30.8646C82.6917 25.4052 83.6118 19.7618 86.9242 15.3452C90.1753 10.99 95.328 8.41368 100.726 8.41368C103.732 8.41368 106.676 9.21111 109.252 10.6833C109.559 10.8673 109.743 11.1127 109.805 11.4807C109.866 11.8488 109.743 12.1555 109.436 12.4009L99.8672 21.1113C99.4992 21.4794 98.9471 21.4794 98.5177 21.1727C97.2296 20.1912 96.4321 19.8845 96.1868 19.8845L93.6718 30.6806C93.6104 31.0486 93.6718 31.4167 93.9171 31.662C94.1625 31.9687 94.5305 32.0914 94.8986 32.0301L105.94 30.8032C106.124 30.8032 106.247 30.7419 106.369 30.6192C106.369 30.3739 106.063 29.6991 104.959 28.3496C104.591 27.9202 104.652 27.3068 105.081 26.8774L121.766 11.6034C121.827 11.5421 121.827 11.5421 121.889 11.5421C124.833 9.45648 128.268 8.29099 131.887 8.29099C137.285 8.29099 142.438 10.8673 145.689 15.2226C149.002 19.7005 149.983 25.4052 148.388 30.8032Z"
          fill="url(#paint0_linear_448_285)"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_448_285"
          x="0.490234"
          y="0.540039"
          width="228.768"
          height="103.655"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_448_285"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_448_285"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_448_285"
          x1="99.1878"
          y1="3.00326"
          x2="144.984"
          y2="47.4681"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#13E6C0" />
          <stop offset="0.509176" stopColor="#5D98F0" />
          <stop offset="1" stopColor="#E020F1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

Logo.propTypes = {
  size: PropTypes.string,
  theme: PropTypes.string,
};
