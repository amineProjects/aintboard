const KnightAvatar = ({ ...props }) => (
  <svg
    width="1000"
    height="1000"
    viewBox="0 0 1000 1000"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clip-path="url(#clip0)">
      <path
        d="M702.6 802.28L706.07 802.72C704.77 805.03 703.31 807.27 702.2 809.72C696.967 821.053 691.793 832.387 686.68 843.72C677.68 863.72 668.44 883.62 659.89 903.81C656.94 910.81 655.77 918.09 661.43 925.28C675.59 943.28 689.3 961.63 702.99 979.99C707.7 986.31 711.82 993.08 716.21 999.64H500.21C500.56 978.01 500.97 956.38 501.13 934.75C501.13 933.13 499.41 931.5 498.49 929.87C497.74 931.5 496.36 933.11 496.33 934.76C495.84 956.38 495.55 978.01 495.21 999.64H270.21C271.78 997.64 273.08 995.27 274.97 993.64C288.82 981.24 302.8 968.98 316.73 956.64C327.92 946.74 339.05 936.78 350.3 926.93C355.09 922.74 356.23 918.05 353.48 912.32C352.7 910.67 351.91 909.01 351.25 907.32C343.51 887.32 335.73 867.38 328.08 847.37C323.4 835.14 318.93 822.83 314.36 810.56C316.473 811.404 318.519 812.407 320.48 813.56C359.44 840.693 398.39 867.847 437.33 895.02C441.68 898.02 446.49 900.4 451.52 903.32C453.1 897.72 449.09 897.44 446.95 895.94C406.99 867.94 367.02 839.94 327.04 811.94C320.47 807.31 314.36 802.02 308.04 797.03L357.52 731.47C373.91 735.09 390.08 739.56 406.52 742.04C421.87 744.35 437.52 744.61 453.09 745.54C454.35 745.62 455.72 743.89 457.04 743C455.75 742.25 454.5 741 453.15 740.86C440.28 739.72 427.38 738.93 414.52 737.74C396.95 736.11 379.71 732.74 363.4 725.74C360.352 724.299 357.799 721.989 356.06 719.1C352.01 712.43 348.74 705.29 344.99 698.43C330.99 672.85 318.28 646.7 309.19 618.94C304.95 606 301.43 592.84 297.19 579.94C296.63 578.22 293.68 575.94 292.12 576.17C289.24 576.54 288.89 579.23 289.78 582.09C292.19 589.86 294.28 597.72 296.66 605.49C299.43 614.54 302.39 623.49 305.26 632.54C289.41 633.34 276.39 627.17 270.16 612.83C260.16 589.96 253 566.01 252.24 540.72C251.915 532.947 254.388 525.315 259.21 519.21C259.91 533.14 260.51 547.08 261.34 561C261.57 564.87 262.71 568.51 266.23 569.34C269.83 564.72 272.23 559.59 276.23 556.8C310.41 533.15 344.86 509.89 379.28 486.59C399.787 472.703 420.357 458.903 440.99 445.19C457.33 434.36 473.81 423.75 490.32 413.19C500.51 406.67 510.79 407.06 520.65 413.9C534.43 423.46 548 433.32 561.77 442.9C576.11 452.9 590.55 462.66 605 472.47C643.8 498.803 682.617 525.107 721.45 551.38C728.31 556.03 735.83 559.96 737.69 569.14C737.69 569.32 738.25 569.4 738.69 569.6C742.69 568.21 743.89 564.78 744.11 561.02C744.91 547.1 745.53 533.16 746.23 519.23C753.4 528.64 754.96 539.73 752.66 550.57C748.688 569.76 743.738 588.735 737.83 607.42C732.31 624.56 716.08 634.32 700.08 632.35C702.29 623.35 704.55 614.47 706.7 605.51C708.85 596.55 711.11 587.61 712.89 578.58C713.54 575.31 714.79 570.89 708.95 570.34L704.95 568.22C704.11 566.75 703.58 564.91 702.37 563.88C700.11 561.95 697.37 560.56 694.96 558.88C661.453 535.22 627.953 511.553 594.46 487.88C568.46 469.46 542.46 451.01 516.46 432.53C509.03 427.23 501.46 426.63 493.85 431.64C480.39 440.48 466.993 449.427 453.66 458.48C413.78 485.54 373.923 512.637 334.09 539.77C322.82 547.43 311.49 555 300.29 562.77C298.43 564.06 294.85 565.01 297.21 568.72C299.21 571.2 300.92 573.96 303.21 576.08C304.99 577.71 307.57 578.44 309.71 579.72C328.41 590.923 348.282 600.041 368.97 606.91C396.51 616.15 425.41 618.05 454.11 620.63C465.5 621.63 476.93 622.24 488.34 623.03C488.28 628.03 487.97 633.14 488.22 638.17C488.767 648.903 489.48 659.623 490.36 670.33C491.54 684.97 492.93 699.6 494.19 714.24C494.91 722.46 495.03 730.79 496.46 738.89C497.15 742.89 500.09 746.47 502.33 750.05C502.63 750.52 504.8 749.82 506.1 749.67C508.295 750.117 510.511 750.451 512.74 750.67C519.74 751.01 526.74 751.18 533.82 751.42C534.52 751.81 535.23 752.54 535.93 752.54C549.52 752.6 563.22 753.72 576.66 752.3C600.513 749.932 623.739 743.258 645.21 732.6C648.04 731.19 649.81 731.45 651.77 734.42C659.63 746.33 667.86 757.98 675.88 769.79C682.76 779.93 689.54 790.14 696.47 800.48C695.41 801.32 694.81 801.85 694.16 802.3C683.77 809.46 673.35 816.57 663 823.79C659.61 826.16 656.31 828.7 653.16 831.38C652.39 832.02 652.37 833.54 652.01 834.66C653.203 834.852 654.416 834.896 655.62 834.79C656.547 834.432 657.399 833.903 658.13 833.23C669.29 825.72 680.48 818.23 691.58 810.66C695.38 808.03 698.93 805.08 702.6 802.28ZM502.21 907.75C502.21 905.19 502.21 903.39 502.21 901.59C502.53 879.59 502.99 857.67 503.15 835.71C503.32 811.71 503.27 787.71 503.15 763.71C503.15 761.22 504.78 757.26 500.49 757.06C499.54 757.06 497.43 761.6 497.42 764.06C497.227 813.053 497.183 862.053 497.29 911.06C497.434 913.032 497.701 914.992 498.09 916.93C500.44 915.83 502.09 915.12 503.64 914.33C545.6 893.35 587.543 872.35 629.47 851.33C630.905 850.408 632.245 849.346 633.47 848.16L631.95 845.54C588.35 864.6 545.64 885.7 502.21 907.75ZM359.99 749.84C358.99 748.53 358.04 746.72 357.57 746.84C355.81 747.26 353.42 747.84 352.67 749.19C346.263 760.41 340.063 771.743 334.07 783.19C333.43 784.4 334.3 786.4 334.47 788.03C335.79 787.27 337.63 786.85 338.36 785.72C343.93 777.1 349.36 768.37 354.68 759.61C356.55 756.53 358.12 753.29 359.99 749.84ZM675.66 799.6C674.02 799.05 671.66 797.53 670.86 798.12C666.333 801.459 661.993 805.045 657.86 808.86C657.27 809.38 657.33 811.12 657.7 812.06C657.95 812.71 659.63 813.55 660.02 813.29C665.02 810.06 669.9 806.68 674.73 803.21C675.21 802.83 675.14 801.66 675.66 799.6Z"
        fill="#939596"
      />
      <path
        d="M137.13 983.6C136.21 978.44 134.83 973.31 134.43 968.1C132.52 943.71 132.07 919.34 138.3 895.39C143.98 873.57 154.15 854.15 170.83 838.66C188.83 821.96 210.45 812.21 234.13 806.66C238.8 805.56 243.52 804.66 248.21 803.66L276.31 800.74C276.419 801.39 276.586 802.03 276.81 802.65C292.41 836.263 308.047 869.887 323.72 903.52C326.82 910.15 326.79 910.25 321.16 915.05C307.16 927 293.26 939.14 279.24 951.11C264.71 963.5 250.01 975.68 235.54 988.11C231.48 991.6 227.97 995.73 224.21 999.57H198.21C197 998.67 195.9 997.41 194.54 996.95C191.09 995.796 187.582 994.825 184.03 994.04C168.41 990.533 152.777 987.053 137.13 983.6Z"
        fill="#C4C4C3"
      />
      <path
        d="M742.09 803.76C767.81 807.41 792.51 814.25 814.8 828.03C842.06 844.88 859.13 869.16 866.16 900.42C870.664 920.382 871.386 941.012 868.29 961.24C867.21 968.44 865.99 975.62 864.83 982.81C863.1 982.65 861.24 982.01 859.64 982.41C840.353 987.163 821.093 992.023 801.86 996.99C800.51 997.34 799.42 998.71 798.21 999.6H749.21C747.14 995.7 745.41 991.6 742.94 987.93C724.273 960.41 705.527 932.957 686.7 905.57C684.48 902.35 683.89 899.94 686.18 896.26C701.32 872 716.18 847.59 731.08 823.17C734.94 816.82 738.43 810.24 742.09 803.76Z"
        fill="#C4C4C3"
      />
      <path
        d="M314.36 810.48C318.93 822.75 323.36 835.06 328.08 847.29C335.73 867.29 343.51 887.29 351.25 907.24C351.91 908.94 352.7 910.6 353.48 912.24C356.23 917.97 355.09 922.66 350.3 926.85C339.05 936.7 327.92 946.66 316.73 956.56C302.8 968.88 288.82 981.14 274.97 993.56C273.08 995.24 271.78 997.56 270.21 999.56H232.21C232.415 999.107 232.684 998.686 233.01 998.31C247.123 986.23 261.247 974.16 275.38 962.1C294.1 946.22 312.93 930.48 331.56 914.5C334.08 912.34 336.04 909.29 331.85 906.26C330.626 905.169 329.685 903.796 329.11 902.26C313.777 868.353 298.487 834.43 283.24 800.49L302.63 799.57L314.36 810.48Z"
        fill="#C4C3C2"
      />
      <path
        d="M716.21 999.6C711.82 993.04 707.7 986.27 702.99 979.95C689.3 961.59 675.59 943.23 661.43 925.24C655.77 918.05 656.94 910.74 659.89 903.77C668.44 883.58 677.67 863.68 686.68 843.68C691.787 832.347 696.96 821.013 702.2 809.68C703.31 807.28 704.77 805.04 706.07 802.68L735.42 802.96C734.42 804.88 733.57 806.86 732.42 808.71C714.773 838.23 697.107 867.73 679.42 897.21C677.27 900.76 677.12 903.81 679.61 907.21C690.79 922.69 702.08 938.1 712.91 953.83C723.28 968.83 733.14 984.27 743.22 999.52L716.21 999.6Z"
        fill="#C4C3C2"
      />
      <path
        d="M283.21 800.49C298.543 834.423 313.843 868.347 329.11 902.26C329.685 903.796 330.626 905.169 331.85 906.26C336.04 909.26 334.08 912.34 331.56 914.5C312.93 930.5 294.1 946.22 275.38 962.1C261.207 974.1 247.083 986.17 233.01 998.31C232.684 998.686 232.415 999.107 232.21 999.56H224.21C227.97 995.72 231.48 991.56 235.54 988.1C250.01 975.64 264.71 963.46 279.24 951.1C293.24 939.1 307.13 926.99 321.16 915.04C326.79 910.24 326.82 910.14 323.72 903.51C308.047 869.897 292.41 836.26 276.81 802.6C276.586 801.98 276.419 801.34 276.31 800.69L283.21 800.49Z"
        fill="#959799"
      />
      <path
        d="M743.21 999.6C733.13 984.35 723.27 968.95 712.9 953.91C702.07 938.18 690.78 922.77 679.6 907.29C677.11 903.85 677.26 900.8 679.41 897.29C697.15 867.83 714.817 838.33 732.41 808.79C733.52 806.94 734.41 804.96 735.41 803.04L742.08 803.8C738.42 810.28 734.93 816.86 731.08 823.21C716.21 847.6 701.32 872 686.21 896.26C683.92 899.94 684.51 902.35 686.73 905.57C705.583 932.963 724.33 960.417 742.97 987.93C745.44 991.57 747.17 995.7 749.24 999.6H743.21Z"
        fill="#959799"
      />
      <path
        d="M798.21 999.6C799.42 998.71 800.51 997.34 801.86 996.99C821.093 992.03 840.353 987.17 859.64 982.41C861.24 982.01 863.1 982.65 864.83 982.81L863.83 988.33C861.89 988.76 859.94 989.13 858.02 989.63C845.433 992.963 832.847 996.297 820.26 999.63L798.21 999.6Z"
        fill="#959799"
      />
      <path
        d="M137.13 983.6C152.77 987.08 168.403 990.57 184.03 994.07C187.582 994.855 191.09 995.826 194.54 996.98C195.9 997.44 197 998.7 198.21 999.6H179.21C178.527 999.186 177.799 998.85 177.04 998.6C164.14 995.867 151.24 993.16 138.34 990.48L137.13 983.6Z"
        fill="#959799"
      />
      <path
        d="M495.21 999.6C495.55 977.97 495.84 956.34 496.33 934.72C496.33 933.07 497.74 931.46 498.49 929.83C499.41 931.46 501.15 933.09 501.13 934.71C500.97 956.34 500.56 977.97 500.21 999.6H495.21Z"
        fill="#7C7673"
      />
      <path
        d="M820.21 999.6C832.797 996.267 845.383 992.933 857.97 989.6C859.89 989.1 861.84 988.73 863.78 988.3C862.92 992.053 862.063 995.81 861.21 999.57L820.21 999.6Z"
        fill="#C4C3C2"
      />
      <path
        d="M138.34 990.49C151.24 993.19 164.14 995.897 177.04 998.61C177.799 998.86 178.527 999.196 179.21 999.61H142.21L138.34 990.49Z"
        fill="#C4C3C2"
      />
      <path
        d="M746.21 519.2C745.51 533.13 744.89 547.07 744.09 560.99C743.87 564.75 742.69 568.18 738.67 569.57C738.22 569.37 737.67 569.29 737.67 569.11C735.81 559.93 728.29 556 721.43 551.35C682.617 525.09 643.807 498.787 605 472.44C590.55 462.63 576.11 452.83 561.77 442.87C548 433.3 534.43 423.44 520.65 413.87C510.79 407.03 500.51 406.64 490.32 413.16C473.81 423.74 457.32 434.35 440.99 445.16C420.323 458.84 399.753 472.64 379.28 486.56C344.86 509.86 310.41 533.12 276.28 556.77C272.28 559.56 269.85 564.69 266.28 569.31C262.76 568.48 261.62 564.84 261.39 560.97C260.56 547.05 259.96 533.11 259.26 519.18C258.64 503.62 258.26 488.06 257.33 472.53C256.81 463.58 260.27 456.66 265.89 450.03C280.03 433.38 293.81 416.43 307.73 399.59C309.26 398.35 310.89 397.2 312.31 395.84C325.13 383.48 337.23 370.25 350.88 358.84C378.06 336.2 405.61 313.91 433.95 292.76C452.7 278.76 473.03 266.88 492.8 254.29C501.14 248.97 510.09 249.53 518.36 254.29C535.2 264.05 552.49 273.29 568.31 284.49C607.8 312.49 646.37 341.8 678.31 378.72C684.31 385.63 690.96 391.93 697.31 398.51C706.283 409.33 715.25 420.157 724.21 430.99C730.43 438.54 736.66 446.08 742.75 453.74C745.136 456.639 746.821 460.049 747.674 463.705C748.528 467.361 748.526 471.165 747.67 474.82C747.489 475.629 747.382 476.452 747.35 477.28C746.95 491.287 746.57 505.26 746.21 519.2ZM703.21 509.6C706.36 513.79 710.49 514.43 715.1 512.6C721.7 509.99 723.81 504.53 724.22 497.95C724.77 488.88 725.37 479.81 726.16 470.76C726.8 463.34 721.74 455.86 714.98 454.71C708.42 453.59 702.07 458.86 700.59 466.71C699.83 477.12 698.77 487.51 698.47 497.93C698.34 502.16 698.47 507.02 703.21 509.6ZM286.21 459.5C284.9 461.69 282.56 463.82 282.44 466.07C281.857 474.148 281.893 482.258 282.55 490.33C283.15 496.2 285.55 501.88 287.14 507.64C290.24 511.77 294.14 514.42 299.5 513.24C305.26 511.96 308.5 507.83 309.75 502.24C310.188 500.13 310.323 497.968 310.15 495.82C309.57 486.24 309.1 476.65 308.15 467.11C307.964 464.433 306.974 461.875 305.309 459.771C303.644 457.667 301.382 456.116 298.82 455.32C293.64 453.6 289.3 454.9 286.21 459.53V459.5ZM646.61 458.5C647.74 466.29 651.61 470.42 657.99 470.62C666.56 470.89 671.8 465.78 672.25 456.92C672.87 444.99 673.59 433.06 674.25 421.14C674.5 416.84 675.25 412.54 675.1 408.25C674.92 402.31 668.93 396.25 663.41 395.71C657.89 395.17 653.02 398.94 651.28 404.65C650.42 409.35 649.13 414.01 648.79 418.74C647.85 431.98 647.3 445.25 646.58 458.5H646.61ZM340.1 466.71C344.02 471.3 349.01 471.5 354.17 469.71C359.77 467.77 361.95 463.04 362.11 457.6C362.25 452.82 361.52 448.01 361.22 443.22C360.52 432.29 360.04 421.35 359.09 410.44C358.33 401.66 353.09 396.04 346.16 395.71C340.58 395.44 335.08 400.65 333.49 407.71C332.8 410.39 331.39 413.11 331.55 415.71C332.24 427.07 332.91 438.48 334.55 449.71C335.38 455.54 334.85 462.19 340.07 466.71H340.1ZM531.1 391.71C533.55 395.89 538.42 397.71 543.95 396.47C548.2 395.47 552.82 390.05 553.22 385.16C553.66 379.72 553.78 374.26 554.22 368.82C555.47 352.67 556.68 336.52 558.13 320.39C558.7 314.14 554.32 306.02 549.13 304.71C541.85 302.89 536.73 305.56 534.2 312.5C533.55 313.99 532.52 315.42 532.3 316.96C531.2 324.81 529.98 332.67 529.43 340.57C528.52 353.62 527.94 366.7 527.56 379.78C527.35 384.03 526.12 388.93 531.07 391.75L531.1 391.71ZM598.02 349.33C596.77 351.87 594.79 354.33 594.4 356.95C592.82 367.9 591.58 378.9 590.48 389.9C589.36 401.07 588.55 412.26 587.6 423.45C587.92 430.29 593.15 436.04 599.48 436.5C605.3 436.93 612.28 431.19 613.1 424.85C614.04 417.47 614.51 410.04 615.27 402.64C616.15 393.92 617.13 385.22 618.05 376.52C618.79 369.45 619.97 362.39 620.11 355.31C620.25 348.59 615.84 344.03 609.44 342.8C604.76 341.94 600.21 344.6 597.99 349.37L598.02 349.33ZM452.12 313.54C451.51 315.73 450.37 317.92 450.4 320.09C450.57 333.02 450.86 345.96 451.4 358.88C451.635 365.825 452.334 372.747 453.49 379.6C454.18 383.46 456.49 387.04 458.03 390.75C461.08 396.27 465.87 398.21 471.86 396.21C478.68 393.93 481.17 387.68 480.78 381.1C479.83 365.05 478.37 349.02 477.17 332.98C476.77 327.69 476.59 322.38 476.17 317.08C475.63 310.31 470.6 304.84 464.82 304.55C457.46 304.18 453.45 307.02 452.12 313.54ZM397.21 428.6C400.95 437.19 410.04 439.13 416.57 432.86C418.341 431.208 419.681 429.148 420.474 426.86C421.267 424.571 421.489 422.124 421.12 419.73C419.12 401.62 417.12 383.5 415.06 365.4C414.713 360.947 413.96 356.536 412.81 352.22C411.01 346.42 404.36 342.09 399.5 342.76C393.34 343.61 389.72 347.37 389.1 353.55C388.78 355.32 388.1 357.11 388.21 358.84C389.52 375.96 390.68 393.09 392.52 410.15C393.21 416.39 395.61 422.45 397.21 428.6Z"
        fill="#C4C3C2"
      />
      <path
        d="M697.21 398.6C690.86 392.02 684.21 385.72 678.21 378.81C646.29 341.9 607.72 312.6 568.21 284.6C552.39 273.36 535.1 264.16 518.26 254.4C509.99 249.61 501.04 249.05 492.7 254.4C472.93 266.99 452.6 278.87 433.85 292.87C405.51 314.02 377.96 336.31 350.78 358.95C337.13 370.32 325.03 383.55 312.21 395.95C310.79 397.31 309.21 398.46 307.63 399.7C324.37 339.28 357.5 290.93 412.63 259.38C423.92 252.91 436.74 249.1 448.85 244.05C450.53 243.35 452.17 242.59 453.85 241.85C456.41 242.99 458.85 244.73 461.54 245.17C482.54 248.65 503.2 248.47 523.31 240.23C526.657 238.873 530.328 238.525 533.87 239.23C542.936 241.22 551.859 243.813 560.58 246.99C577.21 253.25 594.09 259.08 608.46 270.13C615.56 275.58 622.94 280.69 630.19 285.95C640.29 297.18 651.19 307.79 660.33 319.76C677.55 342.35 688.1 368.43 696.77 395.29C697.006 396.38 697.153 397.487 697.21 398.6V398.6Z"
        fill="#858281"
      />
      <path
        d="M630.14 285.83C622.89 280.57 615.51 275.46 608.41 270.01C594.04 258.96 577.16 253.13 560.53 246.87C551.809 243.693 542.886 241.1 533.82 239.11C530.278 238.405 526.607 238.753 523.26 240.11C503.15 248.35 482.46 248.53 461.49 245.05C458.81 244.61 456.36 242.87 453.8 241.73C444.97 231.36 444.31 225.12 451.93 213.97C466.38 192.85 485.93 179.66 512.14 181.06C531.8 182.11 549.3 190.47 563.97 204.13C574.68 214.13 585.42 224.13 596.63 233.5C606.075 241.533 617.693 246.58 630.01 248C637.23 248.85 643.75 247.52 649.82 243.17C651.59 241.9 655.3 241.5 657.01 242.53C658.72 243.56 660.2 247.2 659.72 249.18C655.79 265.18 646.45 277.18 632.06 285.28C631.445 285.543 630.8 285.728 630.14 285.83Z"
        fill="#C64538"
      />
      <path
        d="M157.21 631.6C152.08 627.99 146.56 624.83 141.91 620.69C128.52 608.77 125.77 588.46 132.63 571.91C138.91 556.77 156 545.63 173.04 545.68C184.562 545.802 195.589 550.378 203.812 558.45C212.035 566.522 216.815 577.462 217.15 588.98C217.15 590.48 217.22 591.98 217.26 593.48C216.858 594.36 216.543 595.278 216.32 596.22C213.86 614.22 199.69 629.94 181.72 632.52C173.76 633.66 165.39 631.98 157.21 631.6Z"
        fill="#F0DCA8"
      />
      <path
        d="M283.21 800.49L276.28 800.69L248.21 803.6C246.21 799.7 244.31 795.69 242.03 791.93C234.83 780.05 227.48 768.25 220.18 756.42C223.87 753.93 227.46 751.28 231.26 748.97C248.56 738.457 265.877 728 283.21 717.6C292.72 732.32 302.21 747.07 311.78 761.72C314.1 765.23 316.98 768.38 319.6 771.72C314.91 777.9 310.29 784.13 305.51 790.24C303.31 793.06 301.15 795.74 302.66 799.63L283.21 800.49Z"
        fill="#E5E5E4"
      />
      <path
        d="M283.21 717.6C265.877 728.06 248.57 738.53 231.29 749.01C227.49 751.32 223.9 754.01 220.21 756.46C216.15 758.71 212.15 761.07 208.02 763.18C202.75 765.87 198.72 765.45 195.02 760.9C191.489 756.497 188.432 751.734 185.9 746.69C183.34 741.57 185.3 736.82 190.63 733C194.27 730.39 198.01 727.91 201.71 725.38L208.21 721.6L217.21 715.72L242.48 700L252.42 693.69L259.18 689.75L266.46 684.94L285.46 672.67C287.81 671.48 290.23 670.4 292.46 669.07C300.62 664.3 306.46 665.55 311.59 673.43C313.556 676.321 315.349 679.327 316.96 682.43C319.72 687.97 318.5 692.91 313.54 696.99C311.49 698.68 309.25 700.12 307.1 701.68L295.1 709.68L283.21 717.6Z"
        fill="#F0DCA8"
      />
      <path
        d="M302.63 799.6C301.12 795.71 303.28 793.03 305.48 790.21C310.26 784.1 314.88 777.87 319.57 771.69L327.42 761.84L336.56 749.84C341.51 742.96 346.56 736.16 351.29 729.13C351.97 728.13 351.43 725.75 350.73 724.4C340.55 704.77 330.03 685.32 320.08 665.58C315.37 656.25 311.71 646.4 307.54 636.79C306.89 635.29 306.05 633.88 305.29 632.43C302.42 623.43 299.46 614.43 296.69 605.38C294.31 597.61 292.22 589.75 289.81 581.98C288.92 579.12 289.27 576.43 292.15 576.06C293.71 575.86 296.66 578.06 297.22 579.83C301.44 592.77 304.96 605.93 309.22 618.83C318.31 646.59 331.03 672.74 345.02 698.32C348.77 705.18 352.02 712.32 356.09 718.99C357.829 721.879 360.382 724.189 363.43 725.63C379.74 732.54 396.98 735.95 414.55 737.63C427.41 738.82 440.31 739.63 453.18 740.75C454.53 740.86 455.78 742.14 457.07 742.89C455.75 743.78 454.38 745.51 453.12 745.43C437.58 744.5 421.9 744.24 406.55 741.93C390.08 739.45 373.91 734.98 357.55 731.36L308.02 796.9C314.36 801.9 320.47 807.18 327.02 811.81C366.94 839.897 406.91 867.897 446.93 895.81C449.07 897.31 453.08 897.59 451.5 903.19C446.5 900.27 441.66 897.92 437.31 894.89C398.317 867.79 359.367 840.637 320.46 813.43C318.499 812.277 316.453 811.274 314.34 810.43L302.63 799.6Z"
        fill="#7C7672"
      />
      <path
        d="M708.96 570.31C714.8 570.86 713.55 575.31 712.9 578.55C711.12 587.55 708.9 596.55 706.71 605.48C704.52 614.41 702.3 623.37 700.09 632.32C699.334 633.239 698.693 634.246 698.18 635.32C688.18 664.61 677.18 693.47 659.96 719.48C654.19 728.17 654.14 728.23 660.05 736.93C672.3 754.93 684.69 772.86 696.84 790.93C699.18 794.42 700.7 798.47 702.6 802.26C698.93 805.06 695.38 808.01 691.6 810.61C680.5 818.21 669.31 825.67 658.15 833.18C657.419 833.853 656.567 834.382 655.64 834.74C654.436 834.846 653.223 834.802 652.03 834.61C652.39 833.49 652.41 831.97 653.18 831.33C656.33 828.65 659.63 826.11 663.02 823.74C673.37 816.52 683.79 809.41 694.18 802.25C694.83 801.8 695.43 801.25 696.49 800.43C689.56 790.09 682.78 779.88 675.9 769.74C667.9 757.93 659.65 746.28 651.79 734.37C649.79 731.37 648.06 731.14 645.23 732.55C623.769 743.174 600.561 749.822 576.73 752.17C563.29 753.59 549.59 752.47 536 752.41C535.3 752.41 534.59 751.68 533.89 751.29C538.89 750.88 543.89 750.8 548.76 749.98C560.39 748.03 571.97 745.85 583.53 743.56C604.39 739.43 625.17 734.99 644.6 725.92C645.91 725.3 647.53 724.59 648.19 723.45C655.97 710.11 664.62 697.15 671.06 683.18C686.98 648.69 699.06 612.85 705.47 575.25C705.76 573.47 707.75 571.96 708.96 570.31Z"
        fill="#7D7672"
      />
      <path
        d="M217.21 715.68L208.21 721.6C209.64 714.18 211.21 706.77 212.37 699.31C212.54 698.25 211.14 696.06 210.14 695.82C202.14 693.95 194.07 692.43 186.01 690.82L181.21 681.6C182.67 681.84 184.16 681.98 185.59 682.33C193.64 684.33 201.66 686.33 209.71 688.25C212.04 688.81 214.61 689.25 215.09 685.83C216.18 677.97 217.09 670.09 218.18 662.22C218.69 658.42 217.1 656.96 213.29 656.53C205.09 655.6 196.9 654.39 188.78 652.89C180.78 651.42 172.97 649.43 165.07 647.67C163.67 644.65 162.273 641.63 160.88 638.61C163 638.89 165.15 639.02 167.23 639.49C179.95 642.34 192.63 645.4 205.38 648.11C209.76 649.04 214.3 649.19 219.1 649.73C219.1 633.25 219.1 617.82 219.1 602.39C219.1 600.18 219.03 597.96 219 595.75L227.57 606.14V649.71H265.95L271.47 656.28C269.803 665.82 268.137 675.36 266.47 684.9L259.21 689.71C258.99 688.52 258.916 687.308 258.99 686.1C260.75 676.86 262.62 667.64 264.66 657.38C259.66 657.83 255.8 658.49 251.91 658.46C244.91 658.46 237.98 657.92 231.01 657.69C228.43 657.61 225.54 656.91 225.21 661.13C224.75 667.07 223.91 672.98 223.26 678.9C222.86 682.6 222.51 686.3 222.1 690.35L252.45 693.65L242.51 699.96L220.4 697.82C219.32 703.8 218.27 709.74 217.21 715.68Z"
        fill="#7B7471"
      />
      <path
        d="M165.1 647.67C173 649.43 180.85 651.42 188.81 652.89C196.93 654.39 205.12 655.6 213.32 656.53C217.13 656.96 218.72 658.42 218.21 662.22C217.15 670.09 216.21 677.97 215.12 685.83C214.64 689.28 212.12 688.83 209.74 688.25C201.69 686.32 193.67 684.25 185.62 682.33C184.19 681.98 182.7 681.84 181.24 681.6L165.1 647.67Z"
        fill="#939596"
      />
      <path
        d="M219.02 595.75C219.02 597.96 219.12 600.18 219.12 602.39C219.12 617.82 219.12 633.25 219.12 649.73C214.32 649.19 209.78 649.04 205.4 648.11C192.65 645.4 179.97 642.34 167.25 639.49C165.17 639.02 163.02 638.89 160.9 638.61C159.66 636.27 158.427 633.937 157.2 631.61C165.38 632 173.75 633.68 181.71 632.53C199.71 629.95 213.85 614.28 216.31 596.23C216.533 595.288 216.848 594.37 217.25 593.49L219.02 595.75Z"
        fill="#959696"
      />
      <path
        d="M265.97 649.71H227.59V606.14C232.51 611.49 237.53 616.75 242.32 622.21C250.28 631.31 258.09 640.54 265.97 649.71Z"
        fill="#949697"
      />
      <path
        d="M336.56 749.83L327.42 761.83C322.13 754.06 316.53 746.48 311.61 738.48C305.82 729.06 300.61 719.28 295.15 709.65L307.15 701.65C308.99 705.3 310.54 709.13 312.7 712.57C320.57 725.03 328.6 737.41 336.56 749.83Z"
        fill="#E5E5E4"
      />
      <path
        d="M185.98 690.75C194.04 692.39 202.11 693.91 210.11 695.75C211.11 695.99 212.51 698.18 212.34 699.24C211.21 706.73 209.61 714.14 208.21 721.6L201.75 725.39C197.08 715.57 192.38 705.76 187.75 695.91C187.06 694.226 186.469 692.503 185.98 690.75V690.75Z"
        fill="#949697"
      />
      <path
        d="M266.47 684.9C268.137 675.36 269.803 665.82 271.47 656.28L285.47 672.63L266.47 684.9Z"
        fill="#949697"
      />
      <path
        d="M708.96 570.31C707.75 571.96 705.76 573.47 705.45 575.31C699.04 612.91 686.96 648.75 671.04 683.24C664.6 697.24 655.95 710.17 648.17 723.51C647.51 724.65 645.89 725.36 644.58 725.98C625.15 735.05 604.37 739.49 583.51 743.62C571.95 745.91 560.37 748.09 548.74 750.04C543.85 750.86 538.84 750.94 533.87 751.35C526.87 751.11 519.81 750.94 512.79 750.6C510.561 750.381 508.345 750.047 506.15 749.6C505.745 748.338 505.434 747.048 505.22 745.74C503.22 723.56 501.07 701.39 499.22 679.2C497.73 661.64 496.54 644.06 495.16 626.49C494.81 622.04 492.85 621.09 488.43 622.96C477.02 622.17 465.59 621.58 454.2 620.56C425.5 617.98 396.6 616.08 369.06 606.84C348.356 599.957 328.47 590.823 309.76 579.6C307.62 578.32 305.04 577.6 303.26 575.96C300.94 573.84 299.21 571.08 297.26 568.6L305.11 567.6C320.42 575.6 335.51 584.01 351.11 591.4C369.644 600.034 389.478 605.545 409.81 607.71C422.13 609.12 434.39 611.06 446.72 612.44C457.89 613.69 469.1 614.5 480.3 615.5H486.21C514.12 614.89 542.02 616.87 569.96 613.86C590.24 611.68 609.79 606.69 629.1 600.92C653.55 593.63 676.33 582.17 698.18 568.97L705.02 568.2L708.96 570.31Z"
        fill="#C4C4C2"
      />
      <path
        d="M305.08 567.6L297.21 568.6C294.85 564.89 298.43 563.94 300.29 562.65C311.49 554.87 322.82 547.3 334.09 539.65C373.95 512.55 413.807 485.453 453.66 458.36C466.993 449.313 480.39 440.367 493.85 431.52C501.48 426.52 509.03 427.11 516.46 432.41C542.42 450.917 568.42 469.367 594.46 487.76C627.94 511.46 661.44 535.127 694.96 558.76C697.4 560.49 700.11 561.88 702.37 563.76C703.58 564.76 704.11 566.63 704.95 568.1L698.11 568.87C667.297 547.13 636.483 525.403 605.67 503.69C602.73 501.61 599.49 499.96 596.38 498.11C591.9 494.63 587.49 491.04 582.89 487.72C580.462 486.156 577.952 484.724 575.37 483.43C574.381 482.172 573.273 481.013 572.06 479.97C553.62 466.87 534.88 454.17 516.76 440.64C508.1 434.16 500.12 434.69 491.99 440.13C470.21 454.85 448.58 469.79 426.88 484.6L405.21 499.47C389.92 509.78 374.6 520.03 359.36 530.41C341.22 542.75 323.127 555.147 305.08 567.6Z"
        fill="#7F7671"
      />
      <path
        d="M502.21 907.75C545.68 885.75 588.39 864.61 632.03 845.53L633.55 848.15C632.325 849.336 630.985 850.398 629.55 851.32C587.63 872.347 545.687 893.347 503.72 914.32C502.14 915.11 500.52 915.82 498.17 916.92C497.781 914.982 497.514 913.022 497.37 911.05C497.37 862.057 497.413 813.057 497.5 764.05C497.5 761.59 499.62 757.05 500.57 757.05C504.86 757.25 503.22 761.21 503.23 763.7C503.32 787.7 503.37 811.7 503.23 835.7C503.07 857.7 502.61 879.62 502.29 901.58C502.14 903.39 502.21 905.19 502.21 907.75Z"
        fill="#7C7673"
      />
      <path
        d="M488.39 622.93C492.81 621.06 494.77 622.01 495.12 626.46C496.5 644.03 497.69 661.61 499.18 679.17C501.07 701.36 503.18 723.53 505.18 745.71C505.394 747.018 505.705 748.308 506.11 749.57C504.81 749.72 502.64 750.42 502.34 749.95C500.1 746.37 497.16 742.75 496.47 738.79C495.04 730.69 494.92 722.36 494.2 714.14C492.94 699.5 491.55 684.87 490.37 670.23C489.51 659.517 488.797 648.797 488.23 638.07C488.02 633.04 488.33 627.98 488.39 622.93Z"
        fill="#7C7571"
      />
      <path
        d="M359.99 749.84C358.12 753.29 356.55 756.53 354.68 759.6C349.33 768.36 343.93 777.09 338.36 785.71C337.63 786.84 335.79 787.26 334.47 788.02C334.3 786.39 333.47 784.39 334.07 783.18C340.07 771.747 346.27 760.413 352.67 749.18C353.42 747.85 355.81 747.25 357.57 746.83C358.04 746.72 358.98 748.53 359.99 749.84Z"
        fill="#C1C1C0"
      />
      <path
        d="M675.66 799.6C675.14 801.67 675.21 802.84 674.66 803.21C669.83 806.68 664.93 810.06 659.95 813.29C659.56 813.55 657.88 812.71 657.63 812.06C657.26 811.12 657.2 809.38 657.79 808.86C661.923 805.044 666.263 801.459 670.79 798.12C671.68 797.52 674.02 799.04 675.66 799.6Z"
        fill="#C1C1C0"
      />
      <path
        d="M389.11 353.54C389.73 347.36 393.35 343.6 399.51 342.75C404.37 342.08 411.02 346.41 412.82 352.21C413.97 356.526 414.723 360.937 415.07 365.39C417.16 383.49 419.13 401.61 421.13 419.72C421.499 422.114 421.277 424.561 420.484 426.85C419.691 429.138 418.351 431.198 416.58 432.85C410.05 439.12 400.96 437.18 397.22 428.59L402.44 430.69C402.58 428.78 403.03 427.22 402.74 425.82C402.11 422.76 400.66 419.82 400.32 416.74C398.17 397.43 396.09 378.1 394.32 358.74C394 354.94 392.99 353.15 389.11 353.54Z"
        fill="#939597"
      />
      <path
        d="M452.12 313.54C453.45 307.02 457.46 304.18 464.81 304.54C470.59 304.83 475.62 310.3 476.16 317.07C476.59 322.37 476.77 327.68 477.16 332.97C478.36 348.97 479.82 365.04 480.77 381.09C481.16 387.67 478.67 393.92 471.85 396.2C465.85 398.2 461.07 396.26 458.02 390.73C462.78 389.59 461.16 385.99 460.82 383.08C460.07 376.7 458.59 370.37 458.31 363.98C457.66 348.92 457.42 333.84 457.31 318.76C457.26 314.9 456 313.16 452.12 313.54Z"
        fill="#939597"
      />
      <path
        d="M597.99 349.37C600.18 344.56 604.76 341.94 609.41 342.84C615.81 344.07 620.22 348.63 620.08 355.35C619.94 362.43 618.76 369.49 618.02 376.56C617.1 385.26 616.12 393.96 615.24 402.68C614.48 410.08 614.01 417.51 613.07 424.89C612.25 431.23 605.27 436.97 599.45 436.54C593.12 436.08 587.89 430.33 587.57 423.49C592.68 426.18 593.57 425.76 594.21 419.92C595.29 409.59 596.11 399.24 597.21 388.92C598.44 377.62 599.66 366.31 601.39 355.09C601.96 351.6 601.09 350.12 597.99 349.37Z"
        fill="#949597"
      />
      <path
        d="M534.12 312.54C536.65 305.6 541.77 302.93 549.05 304.75C554.27 306.06 558.65 314.18 558.05 320.43C556.6 336.56 555.39 352.71 554.14 368.86C553.72 374.3 553.6 379.76 553.14 385.2C552.74 390.09 548.14 395.56 543.87 396.51C538.34 397.74 533.47 395.93 531.02 391.75C532.02 389.68 533.94 387.65 534.02 385.54C534.61 371.77 534.47 357.97 535.29 344.22C535.8 335.52 537.36 326.86 538.86 318.22C539.66 313.95 538.33 312.26 534.12 312.54Z"
        fill="#939597"
      />
      <path
        d="M333.46 407.7C335.05 400.65 340.55 395.44 346.13 395.7C353.08 396.03 358.3 401.65 359.06 410.43C360.01 421.34 360.49 432.28 361.19 443.21C361.49 448 362.19 452.81 362.08 457.59C361.92 463.03 359.74 467.76 354.14 469.7C348.98 471.49 343.99 471.29 340.07 466.7C343.61 466.65 344.88 465.05 343.71 461.59C343.011 459.736 342.518 457.811 342.24 455.85C340.83 441.44 339.42 427.03 338.3 412.6C338.03 409.17 337.36 407.1 333.46 407.7Z"
        fill="#949597"
      />
      <path
        d="M651.3 404.65C653.04 398.94 658.06 395.24 663.43 395.71C668.8 396.18 674.94 402.31 675.12 408.25C675.24 412.54 674.52 416.84 674.27 421.14C673.56 433.06 672.84 444.99 672.27 456.92C671.82 465.78 666.58 470.92 658.01 470.62C651.63 470.42 647.76 466.29 646.63 458.5L651.92 460.44C652.508 458.678 652.939 456.868 653.21 455.03C653.49 450.73 653.31 446.39 653.63 442.1C654.41 431.39 655.41 420.7 656.24 409.99C656.45 406.6 654.97 404.6 651.3 404.65Z"
        fill="#949597"
      />
      <path
        d="M286.21 459.53C289.33 454.9 293.67 453.6 298.79 455.37C301.352 456.166 303.614 457.718 305.279 459.822C306.944 461.925 307.934 464.483 308.12 467.16C309.12 476.7 309.57 486.29 310.12 495.87C310.293 498.018 310.158 500.18 309.72 502.29C308.44 507.86 305.23 511.99 299.47 513.29C294.14 514.47 290.21 511.82 287.11 507.69C290.42 507.83 291.82 506.04 291.11 503.04C287.93 490.44 288.27 477.6 288.19 464.77C288.13 463.01 286.87 461.27 286.21 459.53Z"
        fill="#949597"
      />
      <path
        d="M700.58 466.71C702.06 458.9 708.41 453.63 714.97 454.71C721.73 455.86 726.79 463.34 726.15 470.76C725.36 479.81 724.76 488.88 724.21 497.95C723.8 504.53 721.69 509.95 715.09 512.6C710.48 514.42 706.35 513.78 703.2 509.6C703.87 507.86 705.02 506.16 705.2 504.38C706 493.38 706.5 482.38 707.2 471.45C707.58 466.01 706.15 464.88 700.58 466.71Z"
        fill="#949597"
      />
      <path
        d="M534.12 312.54C538.33 312.26 539.66 313.95 538.92 318.26C537.42 326.86 535.86 335.52 535.35 344.26C534.53 358.01 534.67 371.81 534.08 385.58C533.99 387.69 532.08 389.72 531.08 391.79C526.08 388.97 527.36 384.07 527.49 379.86C527.87 366.78 528.49 353.7 529.36 340.65C529.91 332.75 531.13 324.89 532.23 317.04C532.44 315.46 533.47 314.03 534.12 312.54Z"
        fill="#868482"
      />
      <path
        d="M452.12 313.54C456 313.16 457.26 314.9 457.29 318.78C457.43 333.86 457.67 348.94 458.29 364C458.57 370.39 460.05 376.72 460.8 383.1C461.14 386.01 462.8 389.61 458 390.75C456.43 387.05 454.15 383.47 453.46 379.61C452.313 372.754 451.625 365.828 451.4 358.88C450.83 345.96 450.54 333.02 450.4 320.09C450.37 317.92 451.51 315.73 452.12 313.54Z"
        fill="#868482"
      />
      <path
        d="M389.11 353.54C392.99 353.15 394 354.94 394.34 358.75C396.09 378.1 398.17 397.43 400.34 416.75C400.68 419.83 402.13 422.75 402.76 425.83C403.05 427.23 402.6 428.83 402.46 430.7L397.21 428.6C395.6 422.46 393.21 416.4 392.52 410.15C390.68 393.09 389.52 375.96 388.21 358.84C388.08 357.1 388.79 355.31 389.11 353.54Z"
        fill="#868482"
      />
      <path
        d="M597.99 349.37C601.09 350.12 601.99 351.58 601.41 355.09C599.68 366.31 598.41 377.62 597.23 388.92C596.11 399.24 595.29 409.59 594.23 419.92C593.62 425.76 592.7 426.18 587.59 423.49C588.54 412.3 589.35 401.11 590.47 389.94C591.57 378.94 592.81 367.94 594.39 356.99C594.76 354.34 596.74 351.91 597.99 349.37Z"
        fill="#868382"
      />
      <path
        d="M333.46 407.7C337.36 407.1 338.03 409.17 338.3 412.61C339.42 427.04 340.83 441.45 342.24 455.86C342.518 457.821 343.011 459.746 343.71 461.6C344.88 465.06 343.61 466.66 340.07 466.71C334.85 462.19 335.38 455.54 334.53 449.71C332.88 438.46 332.21 427.05 331.53 415.71C331.36 413.1 332.77 410.38 333.46 407.7Z"
        fill="#868382"
      />
      <path
        d="M651.3 404.65C654.97 404.56 656.45 406.6 656.19 409.99C655.36 420.7 654.36 431.39 653.58 442.1C653.26 446.39 653.44 450.73 653.16 455.03C652.889 456.868 652.458 458.678 651.87 460.44L646.58 458.5C647.3 445.25 647.85 431.98 648.81 418.74C649.15 414.01 650.44 409.35 651.3 404.65Z"
        fill="#868382"
      />
      <path
        d="M286.21 459.53C286.9 461.27 288.16 463.01 288.21 464.75C288.29 477.58 287.95 490.42 291.13 503.02C291.89 506.02 290.49 507.81 287.13 507.67C285.54 501.91 283.13 496.23 282.54 490.36C281.883 482.288 281.847 474.178 282.43 466.1C282.53 463.85 284.87 461.72 286.21 459.53Z"
        fill="#868382"
      />
      <path
        d="M700.58 466.71C706.15 464.88 707.58 466.01 707.2 471.48C706.45 482.48 705.95 493.48 705.2 504.41C705.07 506.19 703.92 507.89 703.2 509.63C698.47 507.02 698.34 502.16 698.46 497.93C698.76 487.51 699.82 477.12 700.58 466.71Z"
        fill="#868482"
      />
      <path
        d="M295.15 709.6C300.61 719.23 305.82 729.01 311.61 738.43C316.53 746.43 322.13 754.01 327.42 761.78L319.57 771.63C316.95 768.32 314.07 765.17 311.75 761.63C302.14 746.98 292.69 732.23 283.18 717.51L295.15 709.6Z"
        fill="#C4C4C3"
      />
      <path
        d="M252.43 693.65L222.08 690.35C222.49 686.35 222.84 682.6 223.24 678.9C223.89 672.98 224.73 667.07 225.19 661.13C225.52 656.91 228.41 657.61 230.99 657.69C237.99 657.92 244.92 658.42 251.89 658.46C255.78 658.46 259.67 657.83 264.64 657.38C262.64 667.64 260.73 676.86 258.97 686.1C258.896 687.308 258.97 688.52 259.19 689.71L252.43 693.65Z"
        fill="#929496"
      />
      <path
        d="M217.21 715.68C218.26 709.74 219.31 703.8 220.37 697.82L242.48 699.96L217.21 715.68Z"
        fill="#929496"
      />
      <path
        d="M426.88 484.6C448.58 469.79 470.21 454.85 492.03 440.22C500.16 434.78 508.14 434.22 516.8 440.73C534.92 454.26 553.66 466.96 572.1 480.06C573.313 481.103 574.421 482.262 575.41 483.52C563.96 485.2 552.54 487.17 541.04 488.4C536.34 488.91 531.47 487.56 526.68 487.55C521.28 487.55 517.21 490.81 516.27 495.21C515.11 500.64 517.27 505.95 522.27 508.11C525.453 509.51 528.867 510.313 532.34 510.48C554.6 511.24 575.86 506.56 596.39 498.2C599.5 500.05 602.74 501.7 605.68 503.78C636.52 525.473 667.333 547.2 698.12 568.96C676.27 582.16 653.49 593.62 629.04 600.91C609.73 606.68 590.18 611.67 569.9 613.85C541.96 616.85 514.06 614.85 486.15 615.49C486.87 609.26 488.01 603.04 488.25 596.79C488.78 582.69 489.55 568.54 488.89 554.48C488.44 544.82 485.89 535.24 483.89 525.72C483.55 524.15 480.89 523.08 479.28 521.78C478.502 523.574 477.877 525.431 477.41 527.33C477.23 528.33 478.13 529.51 478.32 530.65C479.97 540.74 482.32 550.79 483.02 560.94C484.21 579.17 482.87 597.39 480.24 615.48C469.04 614.48 457.83 613.67 446.66 612.42C434.33 611.04 422.07 609.1 409.75 607.69C389.418 605.525 369.584 600.014 351.05 591.38C335.47 583.99 320.38 575.56 305.05 567.58C323.157 555.193 341.25 542.803 359.33 530.41C374.57 520.03 389.89 509.78 405.18 499.47C417.25 503.05 429.18 507.42 441.45 509.93C450.27 511.72 459.71 512.27 468.45 508.48C470.674 507.571 472.532 505.948 473.73 503.865C474.928 501.783 475.399 499.361 475.068 496.982C474.736 494.603 473.622 492.401 471.9 490.726C470.178 489.051 467.948 487.996 465.56 487.73C463.078 487.543 460.583 487.66 458.13 488.08C447.46 489.36 436.95 488.98 426.88 484.6ZM403.21 555.53H403.5C403.5 560.19 403.14 564.89 403.58 569.53C404.64 580.88 413.01 589.04 423.63 589.53C434.63 590.06 444.53 582.82 445.63 571.32C446.619 560.722 446.351 550.045 444.83 539.51C443.18 528.17 432.69 521.32 421.83 522.51C411.63 523.65 403.54 532.95 403.21 544.01C403.08 547.87 403.21 551.7 403.21 555.53ZM589.29 558.6H589.21C589.21 554.6 589.34 550.6 589.21 546.6C588.73 534.23 580.21 524.89 569.15 524.42C557.46 523.94 547.93 532.11 546.95 544.78C546.263 554.076 546.387 563.415 547.32 572.69C547.857 577.987 550.411 582.875 554.452 586.341C558.493 589.807 563.713 591.586 569.03 591.31C579.75 590.91 588.32 582.69 589.27 571.56C589.6 567.3 589.29 562.95 589.29 558.6Z"
        fill="#F7BF97"
      />
      <path
        d="M480.21 615.48C482.84 597.39 484.21 579.17 482.99 560.94C482.33 550.79 479.94 540.74 478.29 530.65C478.1 529.51 477.2 528.35 477.38 527.33C477.846 525.431 478.472 523.574 479.25 521.78C480.84 523.08 483.52 524.15 483.86 525.72C485.91 535.24 488.43 544.82 488.86 554.48C489.52 568.54 488.75 582.69 488.22 596.79C487.98 603.04 486.84 609.26 486.12 615.49L480.21 615.48Z"
        fill="#EFAF80"
      />
      <path
        d="M596.42 498.2C575.89 506.56 554.63 511.2 532.37 510.48C528.897 510.313 525.483 509.51 522.3 508.11C517.3 505.95 515.11 500.64 516.3 495.21C517.24 490.81 521.3 487.55 526.71 487.55C531.5 487.55 536.37 488.91 541.07 488.4C552.57 487.17 563.99 485.2 575.44 483.52C578.022 484.814 580.532 486.246 582.96 487.81C587.53 491.13 591.94 494.72 596.42 498.2Z"
        fill="#B68565"
      />
      <path
        d="M426.88 484.6C436.95 488.98 447.46 489.36 458.17 488.08C460.623 487.66 463.118 487.543 465.6 487.73C467.987 487.997 470.218 489.051 471.94 490.726C473.661 492.402 474.776 494.603 475.107 496.982C475.439 499.362 474.968 501.783 473.77 503.866C472.572 505.948 470.714 507.571 468.49 508.48C459.71 512.27 450.27 511.72 441.49 509.93C429.21 507.42 417.21 503.05 405.21 499.47L426.88 484.6Z"
        fill="#B68565"
      />
      <path
        d="M403.21 555.53C403.21 551.7 403.11 547.87 403.21 544.04C403.54 532.98 411.63 523.68 421.83 522.54C432.66 521.32 443.15 528.17 444.83 539.54C446.351 550.075 446.619 560.752 445.63 571.35C444.55 582.85 434.68 590.09 423.63 589.56C413.01 589.05 404.63 580.89 403.58 569.56C403.14 564.94 403.5 560.24 403.5 555.56L403.21 555.53Z"
        fill="#282521"
      />
      <path
        d="M589.29 558.6C589.29 562.93 589.6 567.28 589.23 571.6C588.28 582.73 579.71 590.95 568.99 591.35C563.673 591.626 558.453 589.847 554.412 586.381C550.371 582.915 547.817 578.027 547.28 572.73C546.347 563.455 546.223 554.116 546.91 544.82C547.91 532.15 557.42 523.98 569.11 524.46C580.19 524.93 588.69 534.27 589.17 546.64C589.32 550.64 589.17 554.64 589.17 558.64L589.29 558.6Z"
        fill="#282521"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect
          width="741.17"
          height="818.6"
          fill="white"
          transform="translate(129 181)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default KnightAvatar;