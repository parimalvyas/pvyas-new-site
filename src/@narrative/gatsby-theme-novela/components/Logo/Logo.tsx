import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
  return (
    <LogoContainer>
      <svg
        width="155"
        height="43"
        viewBox="0 0 155 43"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Desktop"
      >
      <g id="Artboard-Copy-3" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <rect id="Rectangle" stroke={fill} stroke-width="0.25" x="2.125" y="2.125" width="150.75" height="36.75"></rect>
          <g id="Group" transform="translate(12.000000, 10.000000)" fill-rule="nonzero">
              <path d="M0.0482910156,19.3266454 L1.75947266,19.0366359 L1.75947266,6.73194839 L0.0482910156,6.44193892 L0.0482910156,5.12653883 L3.53364258,5.12653883 L3.72260742,6.49372633 C4.100539,5.98275471 4.56069879,5.59262682 5.10310059,5.32333097 C5.64550239,5.05403511 6.27362924,4.9193892 6.9875,4.9193892 C8.39424531,4.9193892 9.48778093,5.47005644 10.2681396,6.57140743 C11.0484984,7.67275843 11.4386719,9.12796996 11.4386719,10.9370857 L11.4386719,11.1545928 C11.4386719,12.7703679 11.0467487,14.0736713 10.2628906,15.0645419 C9.47903254,16.0554125 8.39774452,16.5508404 7.01899414,16.5508404 C6.31912085,16.5508404 5.70499125,16.4351831 5.17658691,16.2038648 C4.64818258,15.9725466 4.19852073,15.6290269 3.82758789,15.1732955 L3.82758789,19.0366359 L5.53876953,19.3266454 L5.53876953,20.6420455 L0.0482910156,20.6420455 L0.0482910156,19.3266454 Z M9.36005859,10.9370857 C9.36005859,9.65965665 9.10810799,8.61356152 8.60419922,7.79876894 C8.10029045,6.98397636 7.35143726,6.57658617 6.35761719,6.57658617 C5.76972362,6.57658617 5.26582241,6.70777962 4.84589844,6.97017045 C4.42597446,7.23256129 4.08654101,7.59161704 3.82758789,8.04734848 L3.82758789,13.505741 C4.08654101,13.9683775 4.42422481,14.325707 4.84064941,14.5777403 C5.25707402,14.8297736 5.76972352,14.9557884 6.37861328,14.9557884 C7.35843589,14.9557884 8.10029045,14.6036375 8.60419922,13.8993253 C9.10810799,13.1950131 9.36005859,12.2801114 9.36005859,11.1545928 L9.36005859,10.9370857 Z M20.7294434,16.3333333 C20.6664548,16.0295124 20.6174644,15.7567681 20.5824707,15.5150923 C20.547477,15.2734166 20.5229818,15.0317444 20.5089844,14.7900687 C20.1100566,15.2941353 19.6114044,15.713609 19.0130127,16.0485026 C18.414621,16.3833962 17.7759962,16.5508404 17.0971191,16.5508404 C15.9143333,16.5508404 15.0150096,16.2660126 14.3991211,15.6963482 C13.7832326,15.1266839 13.475293,14.3239872 13.475293,13.2882339 C13.475293,12.2248605 13.9109576,11.4049015 14.7822998,10.8283321 C15.6536421,10.2517628 16.8486578,9.96348248 18.3673828,9.96348248 L20.4984863,9.96348248 L20.4984863,8.65843987 C20.4984863,8.00246279 20.2885275,7.48286768 19.8686035,7.09963897 C19.4486795,6.71641025 18.8642941,6.52479877 18.1154297,6.52479877 C17.5975235,6.52479877 17.140863,6.59039549 16.7454346,6.72159091 C16.3500062,6.85278633 16.0298189,7.0323142 15.7848633,7.26017992 L15.5644043,8.44093277 L13.9687012,8.44093277 L13.9687012,6.26586174 C14.4866074,5.85846545 15.1129846,5.53220806 15.8478516,5.28707978 C16.5827185,5.0419515 17.3805621,4.9193892 18.2414063,4.9193892 C19.5291731,4.9193892 20.5719687,5.24392037 21.3698242,5.89299242 C22.1676798,6.54206448 22.5666016,7.470776 22.5666016,8.67915483 L22.5666016,14.0754025 C22.5666016,14.2204079 22.5683512,14.3619587 22.5718506,14.5000592 C22.57535,14.6381596 22.5840982,14.776258 22.5980957,14.9143584 L23.4379395,15.0282907 L23.4379395,16.3333333 L20.7294434,16.3333333 Z M17.4015625,14.8418561 C18.0874383,14.8418561 18.7138155,14.6795905 19.2807129,14.3550545 C19.8476103,14.0305184 20.2535307,13.6403905 20.4984863,13.1846591 L20.4984863,11.3410275 L18.2938965,11.3410275 C17.4470498,11.3410275 16.7769312,11.5343652 16.2835205,11.9210464 C15.7901098,12.3077276 15.5434082,12.7772621 15.5434082,13.3296638 C15.5434082,13.8199204 15.697378,14.1945122 16.0053223,14.4534505 C16.3132665,14.7123888 16.7786753,14.8418561 17.4015625,14.8418561 Z M25.1596191,6.44193892 L25.1596191,5.12653883 L28.718457,5.12653883 L28.9179199,6.75266335 C29.2398616,6.17954653 29.6370338,5.73072684 30.1094482,5.40619081 C30.5818627,5.08165479 31.1225067,4.9193892 31.7313965,4.9193892 C31.8923673,4.9193892 32.0585848,4.93147281 32.2300537,4.95564039 C32.4015227,4.97980796 32.5327469,5.00570141 32.6237305,5.0333215 L32.3507812,6.92874053 L31.175,6.86659564 C30.6290988,6.86659564 30.1706887,6.9926104 29.7997559,7.2446437 C29.428823,7.496677 29.1418793,7.85055407 28.938916,8.30628551 L28.938916,14.7382812 L30.6500977,15.0282907 L30.6500977,16.3333333 L25.1596191,16.3333333 L25.1596191,15.0282907 L26.8708008,14.7382812 L26.8708008,6.73194839 L25.1596191,6.44193892 Z M34.0514648,15.0282907 L35.7626465,14.7382812 L35.7626465,6.73194839 L34.0514648,6.44193892 L34.0514648,5.12653883 L37.8307617,5.12653883 L37.8307617,14.7382812 L39.5419434,15.0282907 L39.5419434,16.3333333 L34.0514648,16.3333333 L34.0514648,15.0282907 Z M37.8307617,2.25751657 L35.7626465,2.25751657 L35.7626465,0.175662879 L37.8307617,0.175662879 L37.8307617,2.25751657 Z M40.7072266,15.0282907 L42.4184082,14.7382812 L42.4184082,6.73194839 L40.7072266,6.44193892 L40.7072266,5.12653883 L44.2765625,5.12653883 L44.4130371,6.58694366 C44.7769712,6.05525697 45.2458793,5.64441433 45.8197754,5.35440341 C46.3936715,5.06439249 47.0585411,4.9193892 47.8144043,4.9193892 C48.5702675,4.9193892 49.2193902,5.09201216 49.761792,5.43726326 C50.3041938,5.78251435 50.7118639,6.30038323 50.9848145,6.99088542 C51.3417498,6.3556234 51.8141572,5.85156436 52.4020508,5.47869318 C52.9899443,5.105822 53.6758099,4.9193892 54.459668,4.9193892 C55.6214576,4.9193892 56.5382779,5.31124332 57.2101563,6.0949633 C57.8820346,6.87868329 58.2179688,8.05769809 58.2179688,9.63204309 L58.2179688,14.7382812 L59.9291504,15.0282907 L59.9291504,16.3333333 L54.4281738,16.3333333 L54.4281738,15.0282907 L56.1393555,14.7382812 L56.1393555,9.61132812 C56.1393555,8.50652462 55.9468932,7.72454262 55.5619629,7.26535866 C55.1770326,6.80617471 54.6066444,6.57658617 53.8507813,6.57658617 C53.1299118,6.57658617 52.5507753,6.82688946 52.1133545,7.32750355 C51.6759337,7.82811764 51.4222334,8.45819144 51.3522461,9.21774384 L51.3522461,14.7382812 L53.0634277,15.0282907 L53.0634277,16.3333333 L47.5729492,16.3333333 L47.5729492,15.0282907 L49.2841309,14.7382812 L49.2841309,9.61132812 C49.2841309,8.5617648 49.0864196,7.79359263 48.6909912,7.30678859 C48.2955628,6.81998455 47.723425,6.57658617 46.9745605,6.57658617 C46.3446746,6.57658617 45.8267761,6.70432716 45.4208496,6.95981297 C45.0149231,7.21529878 44.7034842,7.57435454 44.4865234,8.036991 L44.4865234,14.7382812 L46.1977051,15.0282907 L46.1977051,16.3333333 L40.7072266,16.3333333 L40.7072266,15.0282907 Z M68.8419922,16.3333333 C68.7790036,16.0295124 68.7300132,15.7567681 68.6950195,15.5150923 C68.6600259,15.2734166 68.6355307,15.0317444 68.6215332,14.7900687 C68.2226054,15.2941353 67.7239532,15.713609 67.1255615,16.0485026 C66.5271699,16.3833962 65.8885451,16.5508404 65.209668,16.5508404 C64.0268821,16.5508404 63.1275584,16.2660126 62.5116699,15.6963482 C61.8957814,15.1266839 61.5878418,14.3239872 61.5878418,13.2882339 C61.5878418,12.2248605 62.0235064,11.4049015 62.8948486,10.8283321 C63.7661909,10.2517628 64.9612066,9.96348248 66.4799316,9.96348248 L68.6110352,9.96348248 L68.6110352,8.65843987 C68.6110352,8.00246279 68.4010763,7.48286768 67.9811523,7.09963897 C67.5612284,6.71641025 66.9768429,6.52479877 66.2279785,6.52479877 C65.7100723,6.52479877 65.2534118,6.59039549 64.8579834,6.72159091 C64.462555,6.85278633 64.1423678,7.0323142 63.8974121,7.26017992 L63.6769531,8.44093277 L62.08125,8.44093277 L62.08125,6.26586174 C62.5991562,5.85846545 63.2255334,5.53220806 63.9604004,5.28707978 C64.6952673,5.0419515 65.4931109,4.9193892 66.3539551,4.9193892 C67.6417219,4.9193892 68.6845175,5.24392037 69.482373,5.89299242 C70.2802286,6.54206448 70.6791504,7.470776 70.6791504,8.67915483 L70.6791504,14.0754025 C70.6791504,14.2204079 70.6809,14.3619587 70.6843994,14.5000592 C70.6878988,14.6381596 70.6966471,14.776258 70.7106445,14.9143584 L71.5504883,15.0282907 L71.5504883,16.3333333 L68.8419922,16.3333333 Z M65.5141113,14.8418561 C66.1999872,14.8418561 66.8263644,14.6795905 67.3932617,14.3550545 C67.9601591,14.0305184 68.3660795,13.6403905 68.6110352,13.1846591 L68.6110352,11.3410275 L66.4064453,11.3410275 C65.5595986,11.3410275 64.88948,11.5343652 64.3960693,11.9210464 C63.9026587,12.3077276 63.655957,12.7772621 63.655957,13.3296638 C63.655957,13.8199204 63.8099268,14.1945122 64.1178711,14.4534505 C64.4258153,14.7123888 64.8912241,14.8418561 65.5141113,14.8418561 Z M72.9887207,1.49106297 L72.9887207,0.175662879 L76.7680176,0.175662879 L76.7680176,14.7382812 L78.4791992,15.0282907 L78.4791992,16.3333333 L72.9887207,16.3333333 L72.9887207,15.0282907 L74.6999023,14.7382812 L74.6999023,1.78107244 L72.9887207,1.49106297 Z" id="parimal" fill={fill}></path>
              <path d="M87.4968115,6.04835464 L86.0795752,6.15192945 L88.9140479,13.526456 L89.2814795,14.8418561 L89.3444678,14.8418561 L89.7433936,13.526456 L92.535874,6.15192945 L91.1186377,6.04835464 L91.1186377,5.12653883 L94.9399268,5.12653883 L94.9399268,6.04835464 L93.8271338,6.14157197 L89.8168799,16.3333333 L88.8090674,16.3333333 L84.7883154,6.14157197 L83.6755225,6.04835464 L83.6755225,5.12653883 L87.4968115,5.12653883 L87.4968115,6.04835464 Z M107.222642,6.04835464 L106.067856,6.14157197 L101.48021,18.1251776 C101.186263,18.88473 100.804838,19.5303398 100.335923,20.0620265 C99.8670077,20.5937132 99.1811422,20.8595526 98.2783057,20.8595526 C98.1313323,20.8595526 97.9528673,20.8440165 97.7429053,20.8129439 C97.5329433,20.7818713 97.3789735,20.7490729 97.2809912,20.7145478 L97.4279639,19.6787997 C97.5119487,19.6926098 97.6466722,19.7081458 97.8321387,19.7254084 C98.0176051,19.7426709 98.1488294,19.7513021 98.2258154,19.7513021 C98.7787153,19.7513021 99.2161296,19.5614168 99.5380713,19.1816406 C99.860013,18.8018644 100.143457,18.3081628 100.388413,17.7005208 L100.976304,16.1986861 L96.9450537,6.14157197 L95.7902686,6.04835464 L95.7902686,5.12653883 L99.695542,5.12653883 L99.695542,6.04835464 L98.3412939,6.15192945 L101.112778,13.2985914 L101.511704,14.6450639 L101.574692,14.6450639 L104.682114,6.15192945 L103.296372,6.04835464 L103.296372,5.12653883 L107.222642,5.12653883 L107.222642,6.04835464 Z M116.334946,16.3333333 C116.250961,15.9535571 116.191473,15.6255735 116.156479,15.3493726 C116.121486,15.0731718 116.103989,14.7935226 116.103989,14.5104167 C115.684065,15.0973435 115.124175,15.5841403 114.424302,15.9708215 C113.724428,16.3575027 112.937083,16.5508404 112.062241,16.5508404 C110.949443,16.5508404 110.088611,16.2677388 109.479722,15.701527 C108.870832,15.1353152 108.566392,14.3688693 108.566392,13.4021662 C108.566392,12.3664129 109.017803,11.5447276 109.92064,10.9370857 C110.823476,10.3294438 112.048236,10.0256274 113.594956,10.0256274 L116.103989,10.0256274 L116.103989,8.54450758 C116.103989,7.74352504 115.84329,7.11517747 115.321885,6.65944602 C114.800479,6.20371458 114.070872,5.97585227 113.133042,5.97585227 C112.503156,5.97585227 111.927519,6.06043752 111.406113,6.22961056 C110.884708,6.3987836 110.449043,6.62837213 110.099106,6.91838305 L109.994126,8.4202178 L108.954819,8.4202178 L108.965317,6.26586174 C109.490222,5.86537047 110.118349,5.54083931 110.849717,5.29225852 C111.581084,5.04367773 112.359682,4.9193892 113.185532,4.9193892 C114.438305,4.9193892 115.446108,5.23356299 116.20897,5.86191998 C116.971832,6.49027697 117.353257,7.39136882 117.353257,8.56522254 L117.353257,14.0754025 C117.353257,14.3032682 117.358506,14.5224993 117.369004,14.7331025 C117.379502,14.9437057 117.402248,15.149127 117.437241,15.3493726 L118.57103,15.421875 L118.57103,16.3333333 L116.334946,16.3333333 Z M112.198716,15.4529474 C113.108551,15.4529474 113.909894,15.2457999 114.602769,14.8314986 C115.295643,14.4171973 115.796045,13.8820661 116.103989,13.226089 L116.103989,10.9785156 L113.57396,10.9785156 C112.433166,10.9785156 111.521595,11.2115566 110.839219,11.6776456 C110.156842,12.1437346 109.815659,12.7323789 109.815659,13.4435961 C109.815659,14.044333 110.027368,14.5294035 110.450791,14.8988222 C110.874214,15.2682409 111.45685,15.4529474 112.198716,15.4529474 Z M128.596665,8.5859375 L127.567856,8.5859375 L127.420884,7.0012429 C127.105941,6.67670687 126.708769,6.42467735 126.229355,6.24514678 C125.749942,6.06561621 125.1988,5.97585227 124.575913,5.97585227 C123.659079,5.97585227 122.971464,6.17091622 122.513047,6.56104995 C122.05463,6.95118369 121.825425,7.40863453 121.825425,7.93341619 C121.825425,8.45129284 122.023136,8.87939777 122.418564,9.21774384 C122.813993,9.55608992 123.603088,9.85300141 124.785874,10.1084872 C126.136629,10.4054032 127.147931,10.8110671 127.81981,11.3254912 C128.491688,11.8399154 128.827622,12.5390384 128.827622,13.4228812 C128.827622,14.3550591 128.444447,15.1094214 127.678086,15.6859908 C126.911725,16.2625601 125.898673,16.5508404 124.638901,16.5508404 C123.799053,16.5508404 123.034453,16.4351831 122.345078,16.2038648 C121.655703,15.9725466 121.05907,15.6462892 120.555161,15.2250829 L120.555161,12.967152 L121.573472,12.967152 L121.751938,14.5622041 C122.087878,14.8936451 122.513044,15.133591 123.027451,15.282049 C123.541858,15.430507 124.079003,15.5047348 124.638901,15.5047348 C125.548737,15.5047348 126.266096,15.3079447 126.791001,14.9143584 C127.315906,14.5207722 127.578354,14.0443328 127.578354,13.485026 C127.578354,12.9602444 127.359647,12.5010673 126.922227,12.1074811 C126.484806,11.7138948 125.69571,11.3928161 124.554917,11.1442353 C123.204162,10.8542244 122.201608,10.4692752 121.547227,9.98937618 C120.892845,9.50947716 120.565659,8.83797385 120.565659,7.97484612 C120.565659,7.1186234 120.933087,6.39533321 121.667954,5.80495384 C122.402821,5.21457446 123.372131,4.9193892 124.575913,4.9193892 C125.408762,4.9193892 126.169863,5.04540396 126.859238,5.29743726 C127.548613,5.54947056 128.110253,5.88953779 128.544175,6.31764915 L128.596665,8.5859375 Z" id="vyas" fill="#7A8085"></path>
          </g>
          <rect id="Rectangle" stroke="#44484B" stroke-width="0.5" fill="#FFFFFF" x="0.25" y="0.25" width="3.5" height="3.5"></rect>
          <rect id="Rectangle-Copy" stroke="#44484B" stroke-width="0.5" fill="#FFFFFF" x="0.25" y="19.25" width="3.5" height="3.5"></rect>
          <rect id="Rectangle-Copy-2" stroke="#44484B" stroke-width="0.5" fill="#FFFFFF" x="0.25" y="37.25" width="3.5" height="3.5"></rect>
          <rect id="Rectangle-Copy-5" stroke="#44484B" stroke-width="0.5" fill="#FFFFFF" x="76.25" y="0.25" width="3.5" height="3.5"></rect>
          <rect id="Rectangle-Copy-4" stroke="#44484B" stroke-width="0.5" fill="#FFFFFF" x="151.25" y="19.25" width="3.5" height="3.5"></rect>
          <rect id="Rectangle-Copy-7" stroke="#44484B" stroke-width="0.5" fill="#FFFFFF" x="151.25" y="37.25" width="3.5" height="3.5"></rect>
          <rect id="Rectangle-Copy-6" stroke="#44484B" stroke-width="0.5" fill="#FFFFFF" x="151.25" y="0.25" width="3.5" height="3.5"></rect>
          <rect id="Rectangle-Copy-3" stroke="#44484B" stroke-width="0.5" fill="#FFFFFF" x="76.25" y="37.25" width="3.5" height="3.5"></rect>
      </g>
        <defs>
          <clipPath id="clip0">
            <rect width="191.156" height="23" fill={fill} />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="18"
        height="23"
        viewBox="0 0 18 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="Logo__Mobile"
      >
        <path d="M17.5907 20.2954H0V23H17.5907V20.2954Z" fill={fill} />
        <path
          d="M0 7.96484V18.9537L5.38796 15.1843V11.7343L0 7.96484Z"
          fill={fill}
        />
        <path
          d="M17.5689 10.9463V0L12.1597 3.74815V7.13426L17.5689 10.9463Z"
          fill={fill}
        />
        <path
          d="M17.5907 18.975L17.5694 12.288L0 0V6.62315L17.5907 18.975Z"
          fill={fill}
        />
      </svg>
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;