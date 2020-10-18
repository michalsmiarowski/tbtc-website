import React from 'react'

const UniswapLogo = ({ width, height }) => {
  return (
    <svg className="uniswap-logo" width={width} height={height} viewBox="0 0 29 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.590935 0.731581C4.40029 5.30051 8.58289 11.0405 9.25947 11.969C9.29555 12.0185 9.32166 12.0543 9.33722 12.0756C9.69781 12.5681 9.99551 12.9342 10.2216 13.2123C10.7235 13.8296 10.8725 14.0129 10.573 14.1811C10.3315 14.3168 10.0823 14.3616 9.83359 14.3616C9.55233 14.3616 9.23545 14.2277 9.00473 14.0114C8.84164 13.8586 7.72572 12.257 6.20617 9.92704C5.04351 8.14421 4.0705 6.66529 4.04395 6.64053C3.98259 6.58326 3.98363 6.5852 6.08763 10.3054C7.40875 12.6414 8.31245 14.3677 8.31245 14.4781C8.31245 14.7028 8.25041 14.8209 7.96998 15.13C7.50249 15.6454 7.2935 16.2245 7.14264 17.423C6.97352 18.7664 6.49796 19.7155 5.18003 21.3397C4.40857 22.2905 4.28234 22.4648 4.08767 22.848C3.84249 23.3306 3.77505 23.6009 3.74773 24.2103C3.71885 24.8546 3.7751 25.2709 3.97429 25.8868C4.14869 26.4261 4.33071 26.7823 4.79606 27.4944C5.19765 28.1091 5.42889 28.5659 5.42889 28.7446C5.42889 28.8868 5.45635 28.887 6.07865 28.7482C7.56789 28.4158 8.77714 27.8314 9.45725 27.1151C9.87816 26.6716 9.97699 26.4269 9.98018 25.8193C9.9823 25.4219 9.96814 25.3388 9.85945 25.1101C9.6825 24.7379 9.36036 24.4286 8.65037 23.949C7.72008 23.3205 7.32274 22.8146 7.21299 22.1188C7.12296 21.5479 7.22741 21.1451 7.74205 20.0792C8.27472 18.9759 8.40673 18.5058 8.49603 17.3936C8.55369 16.6751 8.63357 16.3918 8.84247 16.1644C9.06034 15.9272 9.25647 15.8469 9.79564 15.774C10.6747 15.6554 11.2344 15.4306 11.6945 15.0117C12.0936 14.6482 12.2606 14.298 12.2862 13.7708L12.3057 13.3712L12.0827 13.1142C11.2749 12.1836 0.0500143 0 0.000307435 0C-0.0103114 0 0.255482 0.329237 0.590935 0.731581ZM5.8823 24.9393C6.06493 24.6196 5.9679 24.2089 5.66241 24.0081C5.37378 23.8185 4.92542 23.9078 4.92542 24.1549C4.92542 24.2303 4.96761 24.2852 5.06273 24.3337C5.22288 24.4151 5.23451 24.5067 5.1085 24.6938C4.98089 24.8834 4.99118 25.05 5.13756 25.1631C5.37346 25.3458 5.7074 25.2454 5.8823 24.9393ZM11.3791 7.51055C11.0187 7.45532 11.0035 7.44884 11.1731 7.42308C11.4981 7.37369 12.2654 7.441 12.7942 7.56526C14.0287 7.85523 15.152 8.59807 16.351 9.91736L16.6695 10.2678L17.1253 10.1955C19.0451 9.89057 20.9981 10.1329 22.6317 10.8786C23.0811 11.0838 23.7896 11.4921 23.8781 11.5971C23.9062 11.6305 23.9582 11.8458 23.9931 12.0756C24.1145 12.8703 24.0538 13.4796 23.8077 13.9346C23.674 14.1822 23.6665 14.2607 23.7564 14.4726C23.8282 14.6417 24.0285 14.7668 24.2269 14.7666C24.6328 14.766 25.0697 14.1175 25.2722 13.2152L25.3526 12.8568L25.512 13.0352C26.3857 14.0135 27.0721 15.3477 27.19 16.2974L27.2206 16.545L27.0739 16.3199C26.821 15.9326 26.5671 15.6689 26.2418 15.4562C25.6556 15.0729 25.0355 14.9424 23.3939 14.8569C21.9111 14.7797 21.072 14.6546 20.2399 14.3864C18.824 13.9303 18.1104 13.3228 16.4286 11.1423C15.6816 10.1738 15.2199 9.63799 14.7607 9.20649C13.7171 8.22598 12.6917 7.71174 11.3791 7.51055ZM24.2125 9.67293C24.2498 9.02396 24.3389 8.59591 24.518 8.205C24.5888 8.05026 24.6552 7.92361 24.6654 7.92361C24.6757 7.92361 24.6449 8.03783 24.5969 8.1774C24.4668 8.55679 24.4454 9.0757 24.5351 9.67941C24.6489 10.4454 24.7137 10.556 25.5329 11.3834C25.9172 11.7716 26.3642 12.2611 26.5263 12.4712L26.821 12.8534L26.5263 12.5803C26.166 12.2463 25.3374 11.595 25.1544 11.5019C25.0316 11.4395 25.0133 11.4405 24.9377 11.515C24.8679 11.5836 24.8532 11.6867 24.8435 12.1741C24.8284 12.9337 24.7237 13.4213 24.4708 13.9088C24.334 14.1725 24.3124 14.1162 24.4362 13.8186C24.5286 13.5964 24.538 13.4987 24.5374 12.7633C24.5359 11.2858 24.3583 10.9306 23.3173 10.3221C23.0538 10.1679 22.6191 9.94563 22.3518 9.82804C22.0846 9.71043 21.8722 9.60801 21.8798 9.60037C21.9094 9.57137 22.9246 9.86419 23.3332 10.0195C23.941 10.2505 24.0412 10.2805 24.1151 10.2526C24.1645 10.2339 24.1885 10.0915 24.2125 9.67293ZM10.9929 8.53859C10.8949 9.67934 11.3475 11.2053 12.079 12.2006C12.6461 12.9721 13.5252 13.5716 14.1742 13.6295C14.5991 13.6674 14.7268 13.536 14.5346 13.2585C14.2677 12.8734 13.9394 12.2803 13.8526 12.0263C13.7986 11.8686 13.6813 11.4026 13.592 10.9909C13.2868 9.58511 12.9869 9.03766 12.294 8.62185C12.0416 8.4703 11.5024 8.27198 11.1897 8.21563L11.0232 8.18559L10.9929 8.53859ZM23.3253 19.6078C19.9065 18.2476 18.7023 17.0669 18.7023 15.0747C18.7023 14.7815 18.7126 14.5416 18.725 14.5416C18.7376 14.5416 18.8697 14.6384 19.0189 14.7567C19.7122 15.3061 20.4885 15.5408 22.6377 15.8507C23.9022 16.033 24.6139 16.1802 25.2705 16.3955C27.3571 17.0793 28.6482 18.4671 28.956 20.3574C29.0455 20.9067 28.993 21.9366 28.848 22.4795C28.7335 22.9083 28.384 23.6811 28.2914 23.7108C28.2656 23.719 28.2404 23.6217 28.2339 23.4893C28.1987 22.7795 27.8358 22.0885 27.2262 21.5708C26.5331 20.9822 25.6019 20.5138 23.3253 19.6078ZM20.76 19.4582C20.808 19.5994 20.8823 19.921 20.9251 20.1729C21.1989 21.7834 20.3435 23.0846 18.6794 23.5887C18.5033 23.6421 17.8094 23.7763 17.1374 23.8868C15.7771 24.1106 15.17 24.2692 14.5601 24.5595C14.1276 24.7654 13.6039 25.0738 13.6351 25.1044C13.6451 25.1143 13.7438 25.091 13.8544 25.0526C14.6235 24.7858 15.4795 24.6476 16.78 24.5808C17.2961 24.5544 17.8831 24.5121 18.0845 24.4871C19.2431 24.3428 20.0461 23.995 20.6706 23.367C21.018 23.0174 21.2251 22.6918 21.3921 22.2327C21.4979 21.9416 21.5122 21.8333 21.513 21.3173C21.514 20.7915 21.5011 20.6953 21.3864 20.3719C21.2363 19.9479 21.0591 19.6298 20.8348 19.3809L20.6728 19.2013L20.76 19.4582ZM22.4924 22.9234C22.038 21.9584 21.9338 21.0268 22.1826 20.158C22.2093 20.0651 22.252 19.9891 22.2779 19.9891C22.3036 19.9891 22.4107 20.0464 22.516 20.1164C22.7253 20.2556 23.1451 20.4902 24.2635 21.0927C25.6592 21.8446 26.455 22.4268 26.996 23.0922C27.4699 23.6747 27.7632 24.3382 27.9042 25.1473C27.9843 25.6056 27.9374 26.7085 27.8184 27.1699C27.4432 28.6251 26.5711 29.7681 25.3272 30.4351C25.145 30.5327 24.9814 30.6129 24.9636 30.6134C24.9459 30.6137 25.0123 30.4469 25.1112 30.2426C25.5296 29.3781 25.5773 28.5373 25.261 27.6015C25.0672 27.0285 24.6722 26.3293 23.8748 25.1474C22.9477 23.7735 22.7203 23.4078 22.4924 22.9234ZM13.9363 26.0884C12.4984 26.3192 10.9199 27.0711 9.65119 28.1296L9.27348 28.4448L9.60542 28.4961C11.3376 28.7633 11.8041 29.0003 13.0056 30.2234C13.697 30.9272 13.9306 31.0838 14.5041 31.2285C15.3464 31.441 16.1768 31.0506 16.4616 30.308C16.5888 29.9762 16.5718 29.4268 16.4259 29.1507C16.0786 28.4939 15.0669 28.2816 14.5776 28.7628C14.1701 29.1636 14.2889 29.7674 14.7957 29.8713C14.9117 29.8952 14.9084 29.8901 14.7661 29.8265C14.5443 29.7273 14.448 29.5899 14.4467 29.3713C14.4439 28.8585 15.0376 28.5707 15.59 28.8169C15.9944 28.9973 16.155 29.233 16.155 29.6461C16.155 30.2822 15.6071 30.7615 14.9695 30.6832C14.6287 30.6412 14.212 30.4258 13.9885 30.176C13.4261 29.5478 13.6452 28.5563 14.4303 28.1758C15.0281 27.8862 15.8226 27.9576 16.4387 28.3562C17.1466 28.8144 17.4476 29.2331 18.0573 30.6073C18.2559 31.0548 18.5114 31.5585 18.6249 31.7265C19.2026 32.581 19.8945 33 20.7281 33C21.1878 33 21.5337 32.917 21.9688 32.7024C22.292 32.5428 22.7504 32.2395 22.7173 32.2071C22.7079 32.1979 22.5739 32.2391 22.4193 32.2986C21.5092 32.6494 20.584 32.6253 20.0467 32.2366C19.7084 31.992 19.4354 31.5046 19.2952 30.895C19.2709 30.7895 19.1908 30.3235 19.1171 29.8594C18.9303 28.6832 18.7509 28.1545 18.3326 27.5477C17.9047 26.927 17.0819 26.406 16.1622 26.1734C15.5883 26.0282 14.556 25.9887 13.9363 26.0884ZM11.9225 16.9943C12.0466 16.5411 12.4478 16.1089 12.8604 15.9836C13.1228 15.904 13.6652 15.9549 13.9203 16.0829C14.4145 16.3313 14.7733 16.8969 14.6954 17.3051C14.6005 17.803 13.7835 18.2013 12.8437 18.2078C12.3637 18.2111 12.1865 18.1474 12.0032 17.9055C11.8897 17.7557 11.8467 17.2708 11.9225 16.9943ZM13.7941 16.2604C14.0405 16.4092 14.1039 16.6291 13.959 16.8325C13.8592 16.9727 13.5502 17.1059 13.3243 17.1059C12.985 17.1059 12.6149 16.8678 12.6149 16.6497C12.6149 16.2116 13.3247 15.9771 13.7941 16.2604Z" fill="#FFFDFC"/>
    </svg>
  )
}

export default UniswapLogo
