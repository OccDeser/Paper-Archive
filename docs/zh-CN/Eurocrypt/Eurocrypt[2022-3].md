# Eurocrypt[2022-3]
## Key Guessing Strategies for Linear Key-Schedule Algorithms in Rectangle Attacks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#key-guessing-strategies-for-linear-key-schedule-algorithms-in-rectangle-attacks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#key-guessing-strategies-for-linear-key-schedule-algorithms-in-rectangle-attacks)**
### 作者
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Lingyue Qin, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Cryptology, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
### 摘要
> 当我们为具有线性密钥调度的密码生成长方形攻击的四重奏时，我们发现可能暗示密钥候选者的正确四重奏必须满足一些非线性关系。然而，一些生成的四重奏总是违反这些关系，因此它们将永远不会暗示任何密钥候选者。受以前长方形框架的启发，我们发现在生成四重奏之前猜测某些密钥单元可能会减少无效四重奏的数量。然而，一次猜测很多密钥单元可能会失去早期中止技术的好处，从而导致更高的总体复杂性。为了获得更好的权衡，我们在具有线性密钥调度的密码上构建了一个新的长方形框架，目的是减少总体复杂性或攻击更多轮次。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_1](https://doi.org/10.1007/978-3-031-07082-2_1)
## A Correlation Attack on Full SNOW-V and SNOW-Vi.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#a-correlation-attack-on-full-snow-v-and-snow-vi) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#a-correlation-attack-on-full-snow-v-and-snow-vi)**
### 作者
* Zhen Shi, PLA SSF Information Engineering University, Zhengzhou, 450000, China
* Chenhui Jin, PLA SSF Information Engineering University, Zhengzhou, 450000, China
* Jiyan Zhang, PLA SSF Information Engineering University, Zhengzhou, 450000, China
* Ting Cui, PLA SSF Information Engineering University, Zhengzhou, 450000, China
* Lin Ding, PLA SSF Information Engineering University, Zhengzhou, 450000, China
* Yu Jin, PLA SSF Information Engineering University, Zhengzhou, 450000, China
### 摘要
> 本文基于复合函数逼近技术，提出了一种用于搜索线性反馈移位寄存器（LFSR）的二进制流与SNOW-V和SNOW-Vi的密钥流之间相关性的方法。通过利用LFSR的四个触发器在三个连续时钟周期中输入有限状态机（FSM）的线性关系，我们提出了一种基于SAT/SMT技术的自动搜索模型，并找到了一系列具有高相关性的线性逼近路径。通过耗尽中间层掩码，我们找到了一个相关性为\(-2^{-47.76}\)的二进制线性逼近。利用这种逼近，我们提出了对SNOW-V的相关攻击，其预期时间复杂度为\(2^{246.53}\)，内存复杂度为\(2^{238.77}\)，并且由同一密钥和初始向量（IV）生成\(2^{237.5}\)个密钥流字。对于SNOW-Vi，我们提供了一个具有相同相关性的二进制线性逼近，并以与SNOW-V相同的复杂度进行相关攻击。据我们所知，这是对完整的SNOW-V和SNOW-Vi的首次已知攻击，相对于时间复杂度而言，它优于穷举密钥搜索。结果表明，如果我们忽略单一密钥和IV对应的密钥流最大长度小于\(2^{64}\)的设计约束，那么无论是SNOW-V还是SNOW-Vi都无法保证256位的安全级别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_2](https://doi.org/10.1007/978-3-031-07082-2_2)
## Refined Cryptanalysis of the GPRS Ciphers GEA-1 and GEA-2.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#refined-cryptanalysis-of-the-gprs-ciphers-gea-1-and-gea-2) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#refined-cryptanalysis-of-the-gprs-ciphers-gea-1-and-gea-2)**
### 作者
* Dor Amzaleg, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### 摘要
> 在 EUROCRYPT 2021 会议上，Beierle 等人首次公开分析了 GPRS 加密算法 GEA-1 和 GEA-2。他们展示了尽管 GEA-1 使用了 64 位会话密钥，但只需要在时间 \(2^{40}\) 内使用 44 GiB 的内存和仅仅 65 位密钥流信息，就可以恢复它。攻击利用了密码算法初始化过程中的一个弱点，这个弱点可能被设计者有意隐藏，以降低其安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_3](https://doi.org/10.1007/978-3-031-07082-2_3)
## Revamped Differential-Linear Cryptanalysis on Reduced Round ChaCha.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#revamped-differential-linear-cryptanalysis-on-reduced-round-chacha) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#revamped-differential-linear-cryptanalysis-on-reduced-round-chacha)**
### 作者
* Sabyasachi Dey, Department of Mathematics, Birla Institute of Technology and Science Pilani, Hyderabad, Jawahar Nagar, Hyderabad, 500078, India
* Hirendra Kumar Garai, Department of Mathematics, Birla Institute of Technology and Science Pilani, Hyderabad, Jawahar Nagar, Hyderabad, 500078, India
* Nitin Kumar Sharma, Department of Mathematics, Birla Institute of Technology and Science Pilani, Hyderabad, Jawahar Nagar, Hyderabad, 500078, India
* Santanu Sarkar, Department of Mathematics, Indian Institute of Technology Madras, Chennai, India
### 摘要
> 在这篇论文中，我们对ChaCha的现有差分线性攻击提出了几项改进。ChaCha是一种具有20轮的流密码。在CRYPTO 2020上，Beierle等人观察到，在选择正确的配对时，第3.5轮存在差分。他们利用此发展出了一种改进的攻击方法，但表明要实现正确的配对，平均需要进行\(2^5\)次迭代。在这个方向上，我们提供了一种通过列表帮助寻找正确配对的技术。此外，我们还在PNB构造、复杂度计算的修改以及使用两个输入输出对的替代攻击方法方面提供了战略上的改进。利用这些方法，我们改善了时间复杂度，将其从Beierle等人为ChaCha的256位版本报道的\(2^{230.86}\)降低到\(2^{221.95}\)。此外，长达十年后，我们将现有复杂度（Shi等人ICISC 2012）对于128位版本的6轮ChaCha的攻击次数提高了超过11百万倍，并首次攻击了6.5轮ChaCha128的时间复杂度为\(2^{123.04}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_4](https://doi.org/10.1007/978-3-031-07082-2_4)
## A Greater GIFT: Strengthening GIFT Against Statistical Cryptanalysis.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#a-greater-gift-strengthening-gift-against-statistical-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#a-greater-gift-strengthening-gift-against-statistical-cryptanalysis)**
### 作者
* Ling Sun, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Wei Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Ling Sun, State Key Laboratory of Cryptology, P.O.Box 5159, Beijing, 100878, China
* Ling Sun, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Wei Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Bart Preneel, Department of Electrical Engineering-ESAT, KU Leuven and imec, Leuven, Belgium
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
### 摘要
> GIFT-64是一种64比特分组密码，其128比特密钥比PRESENT更轻量。本文对GIFT-64在差分和线性攻击方面进行了详细分析。我们的工作通过仔细的手动分析，为自动搜索最佳差分和线性特性的方法提供了补充。这种混合方法带来了新的见解。在差分设置中，我们从理论上解释了每轮激活两个S盒的差分特性的存在，并推导出这些特性的一些新属性。此外，我们证明了覆盖超过七轮的GIFT-64的所有最佳差分特性都必须每轮激活两个S盒。我们可以手动构造所有最佳特性。与差分设置的工作并行进行，我们在线性设置下进行了类似的分析。然而，与差分设置中的清晰视图不同，GIFT-64的最佳线性特性必须至少有一轮只激活一个S盒。此外，在自动搜索方法的辅助下，我们确定了24种GIFT-64变体，其对差分攻击具有更好的抵抗性，同时在线性攻击方面保持了相似的安全级别。由于这些新变体增强了GIFT-64对统计密码分析的抵抗性，我们声称对于这些变体，轮数可以从28轮减少到26轮。这一观察结果使我们能够创建一个能耗比GIFT-64更低的密码。与GIFT-64的情况类似，我们并不声称循环减少的变体具有相关密钥安全性，因为这对大多数应用程序来说并不相关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_5](https://doi.org/10.1007/978-3-031-07082-2_5)
## Approximate Divisor Multiples - Factoring with Only a Third of the Secret CRT-Exponents.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#approximate-divisor-multiples-factoring-with-only-a-third-of-the-secret-crt-exponents) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#approximate-divisor-multiples-factoring-with-only-a-third-of-the-secret-crt-exponents)**
### 作者
* Alexander May, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
### 摘要
> 我们讨论了对具有小公钥指数e的CRT-RSA的部分密钥暴露攻击。对于固定的e，已知掌握\(d_p, d_q\)中一半位的信息足以通过Coppersmith的著名因式分解算法并带有提示结果来分解RSA模数N。我们将此设置扩展到非固定的e。令人惊讶的是，我们的攻击表明，对于大小为\(N^{\frac{1}{12}}\)的e，RSA最容易受到部分密钥暴露的攻击，因为在这种情况下，\(d_p, d_q\)的三分之一位足以通过多项式时间来分解N，无论是通过知道最高有效位（MSB）还是最低有效位（LSB）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_6](https://doi.org/10.1007/978-3-031-07082-2_6)
## Information-Combining Differential Fault Attacks on DEFAULT.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#information-combining-differential-fault-attacks-on-default) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#information-combining-differential-fault-attacks-on-default)**
### 作者
* Marcel Nageler, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
### 摘要
> 差分故障分析（DFA）是对对称加密实现非常强大的攻击手段。大多数对策都是在实施层面上应用的。在ASIACRYPT 2021年会议上，Baksi等人提出了一种设计策略，旨在通过使用具有线性结构的S盒在密码级别上提供天然的抵抗DFA的特性。他们认为，在他们的实例化中，分组密码DEFAULT，一个DFA对手最多只能了解128个密钥位中的64个，因此剩余的暴力破解复杂度\(2^{64}\)是不可行的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_7](https://doi.org/10.1007/978-3-031-07082-2_7)
## Private Circuits with Quasilinear Randomness.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#private-circuits-with-quasilinear-randomness) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#private-circuits-with-quasilinear-randomness)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Palo Alto, USA
* Yuval Ishai, Technion, Haifa, Israel
### 摘要
> 一个函数f的t-私有电路是一个随机化布尔电路C，该电路将输入x的随机编码映射到输出f(x)的编码，使得在C的任何位置探测t条线路都不会透露x的任何信息。私有电路可以用来保护嵌入式设备免受侧信道攻击。由于在这些设备中生成新的随机性的高昂成本，因此有几项工作研究了最小化私有电路的随机性复杂性的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_8](https://doi.org/10.1007/978-3-031-07082-2_8)
## Mitaka: A Simpler, Parallelizable, Maskable Variant of Falcon.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#mitaka-a-simpler-parallelizable-maskable-variant-of-falcon) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#mitaka-a-simpler-parallelizable-maskable-variant-of-falcon)**
### 作者
* Thomas Espitau, NTT Corporation, Tokyo, Japan
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
* Pierre-Alain Fouque, IRISA, Univ Rennes 1, Inria, Rennes Bretagne-Atlantique Center, Rennes, France
* Alexandre Wallet, IRISA, Univ Rennes 1, Inria, Rennes Bretagne-Atlantique Center, Rennes, France
* François Gérard, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Mélissa Rossi, ANSSI, Paris, France
* Akira Takahashi, Aarhus University, Aarhus, Denmark
* Yang Yu, BNRist, Tsinghua University, Beijing, China
### 摘要
> 这项研究描述了Mitaka签名方案：它是一种基于NTRU格的哈希和签名方案，可以看作是NIST最终候选方案Falcon的一种变体。它在效率上达到了可比较的水平，但更为简化，在线/离线操作更加容易并能更好地保护防止侧信道攻击，从实施的角度来看具有显著的优势。它在参数选择方面也更加灵活多样。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_9](https://doi.org/10.1007/978-3-031-07082-2_9)
## A Novel Completeness Test for Leakage Models and Its Application to Side Channel Attacks and Responsibly Engineered Simulators.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#a-novel-completeness-test-for-leakage-models-and-its-application-to-side-channel-attacks-and-responsibly-engineered-simulators) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#a-novel-completeness-test-for-leakage-models-and-its-application-to-side-channel-attacks-and-responsibly-engineered-simulators)**
### 作者
* Si Gao, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
### 摘要
> 如今的侧信道攻击目标通常是复杂设备，其指令以并行方式处理，并且适用于32位数据字。因此，参与产生现代设备中泄漏的状态不仅庞大，而且由于各种微架构因素导致其难以预测，用户可能并不了解。另一方面，基于最坏情况攻击或模拟器的安全评估明确依赖于底层状态：只要存在潜在的不完整状态，就很容易得出错误结论。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_10](https://doi.org/10.1007/978-3-031-07082-2_10)
## Towards Micro-architectural Leakage Simulators: Reverse Engineering Micro-architectural Leakage Features Is Practical.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#towards-micro-architectural-leakage-simulators-reverse-engineering-micro-architectural-leakage-features-is-practical) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#towards-micro-architectural-leakage-simulators-reverse-engineering-micro-architectural-leakage-features-is-practical)**
### 作者
* Si Gao, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Dan Page, Department of Computer Science, University of Bristol, Bristol, UK
### 摘要
> 泄漏模拟器为软件在存在侧信道泄漏方面提供了简便快捷的测试方法。其中关键因素是其内置泄漏模型的质量，包括准确包含微架构泄漏。微架构泄漏即使在低至中等商用处理器（如ARM Cortex M系列）中也是现实存在的。在“灰盒”环境下，处理微架构泄漏似乎一开始是不可行的：如果微架构元素不为公开所知，我们该如何描述它呢？

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_11](https://doi.org/10.1007/978-3-031-07082-2_11)
## Beyond Quadratic Speedups in Quantum Attacks on Symmetric Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#beyond-quadratic-speedups-in-quantum-attacks-on-symmetric-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#beyond-quadratic-speedups-in-quantum-attacks-on-symmetric-schemes)**
### 作者
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Ferdinand Sibleyras, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 在本论文中，我们报道了对对称分组密码设计的首次量子密钥恢复攻击。该攻击仅使用经典查询，在时间速度上相较最佳经典攻击提升了超过二次方倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_12](https://doi.org/10.1007/978-3-031-07082-2_12)
## Orientations and the Supersingular Endomorphism Ring Problem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#orientations-and-the-supersingular-endomorphism-ring-problem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#orientations-and-the-supersingular-endomorphism-ring-problem)**
### 作者
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
### 摘要
> 我们研究同构基密码学中的两个重要问题族以及它们之间的关系：计算超奇异椭圆曲线的自同态环，以及反演类群在定向超奇异曲线上的作用。我们证明，在假设广义黎曼猜想成立的情况下，这两个问题族之间通过多项式时间约化密切相关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_13](https://doi.org/10.1007/978-3-031-07082-2_13)
## Quantum Algorithms for Variants of Average-Case Lattice Problems via Filtering.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#quantum-algorithms-for-variants-of-average-case-lattice-problems-via-filtering) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#quantum-algorithms-for-variants-of-average-case-lattice-problems-via-filtering)**
### 作者
* Yilei Chen, Tsinghua University, Beijing, 100084, China
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 我们展示了以下问题的多项式时间量子算法：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_14](https://doi.org/10.1007/978-3-031-07082-2_14)
## Anonymous, Robust Post-quantum Public Key Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#anonymous-robust-post-quantum-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#anonymous-robust-post-quantum-public-key-encryption)**
### 作者
* Paul Grubbs, University of Michigan, Ann Arbor, USA
* Varun Maram, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Department of Computer Science, ETH Zurich, Zurich, Switzerland
### 摘要
> NIST PQC竞赛的核心目标是产生即使遭受大规模量子计算机攻击也能保持应用所需安全保证的PKE方案。在NIST PQC背景下，主要的安全关注点是IND-CCA安全，但其他应用要求PKE方案提供匿名性（Bellare等人，ASIACRYPT 2001）和健壮性（Abdalla等人，TCC 2010）。此类应用的例子包括匿名加密货币、可搜索加密和拍卖协议。然而，关于如何构建提供这些安全属性的后量子PKE方案，几乎没有任何了解。特别是，NIST PQC候选方案在匿名性和健壮性方面的现状尚不明确。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_15](https://doi.org/10.1007/978-3-031-07082-2_15)
## McEliece Needs a Break - Solving McEliece-1284 and Quasi-Cyclic-2918 with Modern ISD.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#mceliece-needs-a-break-solving-mceliece-1284-and-quasi-cyclic-2918-with-modern-isd) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#mceliece-needs-a-break-solving-mceliece-1284-and-quasi-cyclic-2918-with-modern-isd)**
### 作者
* Andre Esser, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Alexander May, Ruhr University Bochum, Bochum, Germany
* Floyd Zweydinger, Ruhr University Bochum, Bochum, Germany
### 摘要
> 随着最近转向后量子算法，为类似McEliece和BIKE、HQC等基于代码的密码学提供准确的比特安全估计变得越来越重要。尽管在过去十年中信息集译码算法取得了显著进展，但目前仍不清楚这对当前的密码学安全估计有多大影响。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_16](https://doi.org/10.1007/978-3-031-07082-2_16)
## Post-Quantum Security of the Even-Mansour Cipher.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#post-quantum-security-of-the-even-mansour-cipher) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#post-quantum-security-of-the-even-mansour-cipher)**
### 作者
* Gorjan Alagic, QuICS, University of Maryland, and NIST, College Park, USA
* Chen Bai, Department of Electrical and Computer Engineering, University of Maryland, College Park, USA
* Jonathan Katz, Department of Computer Science, University of Maryland, College Park, USA
* Christian Majenz, Department of Applied Mathematics and Computer Science, Technical University of Denmark, Kongens Lyngby, Denmark
### 摘要
> Even-Mansour密码是一种简单的方法，用于从公共随机排列\(P:\{0,1\}^n \rightarrow \{0,1\}^n\)构造一个（有密钥的）伪随机置换E。它对经典攻击是安全的，最优攻击需要对E进行\(q_E\)个查询和对P进行\(q_P\)个查询，使得\(q_E \cdot q_P \approx 2^n\)。然而，如果攻击者可以同时量子访问E和P，这个密码是完全不安全的，已知的攻击可以使用\(q_E, q_P = O(n)\)个查询。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_17](https://doi.org/10.1007/978-3-031-07082-2_17)
## Watermarking PRFs Against Quantum Adversaries.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#watermarking-prfs-against-quantum-adversaries) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#watermarking-prfs-against-quantum-adversaries)**
### 作者
* Fuyuki Kitagawa, NTT Corporation, Tokyo, Japan
* Ryo Nishimaki, NTT Corporation, Tokyo, Japan
### 摘要
> 我们发起了一项针对量子对手的软件水印研究。量子对手生成一个量子态作为盗版软件，可能从经典标记软件中移除嵌入的信息。从量子盗版软件中提取嵌入的信息很困难，因为测量可能会不可逆地改变量子态。在针对经典对手的软件水印中，提取嵌入的信息的算法关键地利用经典盗版软件的（输入-输出）行为。即使我们使用量子安全构建块来实例化现有的水印伪随机函数，由于上述量子特定属性，它们是否能抵御量子对手的攻击仍然不清楚。因此，我们需要全新的技术来实现针对量子对手的软件水印。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_18](https://doi.org/10.1007/978-3-031-07082-2_18)
## Non-malleable Commitments Against Quantum Attacks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#non-malleable-commitments-against-quantum-attacks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#non-malleable-commitments-against-quantum-attacks)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
* Huijia Lin, Washington University, Seattle, WA, USA
### 摘要
> 在标准困难假设下，我们构建了第一批针对量子攻击安全的非可塑承诺。我们的承诺在统计上具有约束力，并且符合承诺的标准非可塑概念。在假设存在后量子单向函数的情况下，我们得到了一个\(\log ^\star (\lambda )\)-轮的经典协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_19](https://doi.org/10.1007/978-3-031-07082-2_19)
## Anonymity of NIST PQC Round 3 KEMs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#anonymity-of-nist-pqc-round-3-kems) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#anonymity-of-nist-pqc-round-3-kems)**
### 作者
* Keita Xagawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 本文研究了NIST PQC第三轮密钥交换机制（KEM）的匿名性，包括经典的McEliece算法、Kyber算法、NTRU算法、Saber算法、BIKE算法、FrodoKEM算法、HQC算法、NTRU Prime算法（Streamlined NTRU Prime和NTRU LPRime）以及SIKE算法。我们展示了以下结果：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_20](https://doi.org/10.1007/978-3-031-07082-2_20)
## Practical Post-Quantum Signature Schemes from Isomorphism Problems of Trilinear Forms.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#practical-post-quantum-signature-schemes-from-isomorphism-problems-of-trilinear-forms) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#practical-post-quantum-signature-schemes-from-isomorphism-problems-of-trilinear-forms)**
### 作者
* Gang Tang, Centre for Quantum Software and Information, School of Computer Science, Faculty of Engineering and Information Technology, University of Technology Sydney, Ultimo, NSW, Australia
* Youming Qiao, Centre for Quantum Software and Information, School of Computer Science, Faculty of Engineering and Information Technology, University of Technology Sydney, Ultimo, NSW, Australia
* Dung Hoang Duong, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Thomas Plantard, Emerging Technology Research Group, PayPal, San Jose, USA
### 摘要
> 在本文中，我们提出了一种基于交替三线性形式等价问题的实用签名方案。我们的方案灵感来自Goldreich-Micali-Wigderson的用于图同构的零知识协议，并可作为NIST后量子数字签名的替代候选方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_21](https://doi.org/10.1007/978-3-031-07082-2_21)
## On IND-qCCA Security in the ROM and Its Applications - CPA Security Is Sufficient for TLS 1.3.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#on-ind-qcca-security-in-the-rom-and-its-applications-cpa-security-is-sufficient-for-tls-1-3) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#on-ind-qcca-security-in-the-rom-and-its-applications-cpa-security-is-sufficient-for-tls-1-3)**
### 作者
* Loïs Huguenin-Dumittan, EPFL, Lausanne, Switzerland
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### 摘要
> 有界IND-CCA安全（IND-qCCA）是一种类似于传统IND-CCA安全的概念，只是对手受限于恒定数量q的解密/解封装查询。我们在本文中表明，IND-qCCA可以轻松从任何在（Q）ROM中具有被动安全的公钥加密方案中获得。也就是说，简单地添加一个确认哈希或者将密文的哈希作为密钥计算可以得到一个IND-qCCA密钥交换机制。特别是，不需要类似于Fujisaki-Okamoto（FO）变换中的非确定性算法或重新加密。这使得此类IND-qCCA密钥交换机制的解封装过程比基于FO变换的密钥交换机制更加高效。此外，IND-qCCA密钥交换机制可以在最近提出的KEMTLS协议[29]中使用，并且此协议要求IND-1CCA短暂密钥交换机制，或者在TLS 1.3中使用。然后，我们使用类似的证明技巧表明CPA-安全的密钥交换机制足以确保TLS 1.3的握手安全，解决了ROM中的一个开放问题。反过来，这意味着用于证明TLS 1.3安全性的PRF-ODH假设是不必要的，并且可以在ROM中用CDH假设替代。我们还强调并简要讨论了IND-1CCA密钥交换机制在协议和拉信原语中的几个使用案例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_22](https://doi.org/10.1007/978-3-031-07082-2_22)
## On the Lattice Isomorphism Problem, Quadratic Forms, Remarkable Lattices, and Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#on-the-lattice-isomorphism-problem-quadratic-forms-remarkable-lattices-and-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#on-the-lattice-isomorphism-problem-quadratic-forms-remarkable-lattices-and-cryptography)**
### 作者
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Wessel van Woerden, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
### 摘要
> 在背包/格密码学文献中，一种自然而又经常出现的思想是从一个具有显著解码能力的格子开始作为你的私钥，并以某种方式隐藏起来形成公钥。这也是McEliece（1978）的基于代码的加密方案的进行方式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_23](https://doi.org/10.1007/978-3-031-07082-2_23)
## Online-Extractability in the Quantum Random-Oracle Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#online-extractability-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#online-extractability-in-the-quantum-random-oracle-model)**
### 作者
* Jelle Don, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Christian Majenz, Cyber Security Section, Department of Applied Mathematics and Computer Science, Technical University of Denmark, Kgs. Lyngby, Denmark
* Christian Schaffner, Informatics Institute, University of Amsterdam, Amsterdam, Netherlands
* Christian Schaffner, QuSoft, Amsterdam, Netherlands
### 摘要
> 我们展示了以下通用结果：当一个量子查询算法在量子随机预言模型中输出一个经典值t，该值被承诺与某个x的H(x)有紧密关系时，x可以以几乎确定的概率有效提取出来。提取是通过对随机预言的适当模拟实现的，并且是在线进行的，也就是说，是直线型的，即没有倒回，并且是即时的，即在协议执行期间（几乎）不干扰该过程。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_24](https://doi.org/10.1007/978-3-031-07082-2_24)
## Constant-Round Blind Classical Verification of Quantum Sampling.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#constant-round-blind-classical-verification-of-quantum-sampling) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#constant-round-blind-classical-verification-of-quantum-sampling)**
### 作者
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taipei, Taiwan
* Yi Lee, Department of Computer Science, University of Maryland, College Park, USA
* Xiaodi Wu, Department of Computer Science, University of Maryland, College Park, USA
* Han-Hsuan Lin, Department of Computer Science, National Tsing Hua University, Hsinchu, Taiwan
* Xiaodi Wu, Joint Center for Quantum Information and Computer Science, University of Maryland, College Park, USA
### 摘要
> 在最近的突破中，Mahadev构建了一个经典验证量子计算（CVQC）协议，用于将决策问题在\(\mathsf {BQP}\) 中委托给不可信的量子证明者，以计算假设为前提。在这项工作中，我们进一步探索了将CVQC应用于更普遍的BQP中的抽样问题以及可取得的盲目特性的可行性。我们提出了以下的积极解决方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_25](https://doi.org/10.1007/978-3-031-07082-2_25)
## Authentication in the Bounded Storage Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#authentication-in-the-bounded-storage-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#authentication-in-the-bounded-storage-model)**
### 作者
* Yevgeniy Dodis, NYU, New York, USA
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern and NTT Research, Boston, USA
### 摘要
> 我们考虑了有界存储模型（BSM）的流式变体，在其中诚实方可以向对方传输大量数据，同时仅维护大小为n的小内存。敌手也作为一种流算法运行，但其内存大小要大得多（m＞＞n）。目标是在BSM中构建无条件安全的加密方案，并且之前的作品已经针对对称密钥加密、密钥协商、盲传输和多方计算等问题进行了构建。在这项工作中，我们在BSM中构建了消息认证和签名。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_26](https://doi.org/10.1007/978-3-031-07082-2_26)
## Secure Non-interactive Simulation: Feasibility and Rate.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#secure-non-interactive-simulation-feasibility-and-rate) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#secure-non-interactive-simulation-feasibility-and-rate)**
### 作者
* Hamidreza Amini Khorasgani, Department of Computer Science, Purdue University, West Lafayette, USA
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Hai H. Nguyen, Department of Computer Science, Purdue University, West Lafayette, USA
### 摘要
> 一个增加安全计算效率的自然解决方案是将各种廉价生成的相关随机性（例如，来自噪声源的联合样本）非交互地和安全地转换为安全计算协议有用的相关性。受到安全计算的一般应用的启发，我们的工作引入了安全非交互模拟（SNIS）的概念。各方接收到相关随机性的样本，他们在没有任何交互的情况下将其安全地转换为来自另一个相关随机性的样本。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_27](https://doi.org/10.1007/978-3-031-07082-2_27)
## Secure Non-interactive Reduction and Spectral Analysis of Correlations.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#secure-non-interactive-reduction-and-spectral-analysis-of-correlations) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#secure-non-interactive-reduction-and-spectral-analysis-of-correlations)**
### 作者
* Pratyush Agarwal, Indian Institute of Technology Bombay, Mumbai, India
* Shreya Pathak, Indian Institute of Technology Bombay, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
* Mohammad Ali Rehan, Indian Institute of Technology Bombay, Mumbai, India
* Varun Narayanan, Technion, Haifa, Israel
* Vinod M. Prabhakaran, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 相关对的随机变量是信息论安全密码学中的一个核心概念。已经研究了不同相关性之间的安全还原，并且已知完备性结果。此外，这种还原的复杂性与电路复杂性和本地可解码码的效率紧密相关。因此，在这个研究中，我们研究了一种受限制的安全还原形式，即安全非交互还原（SNIR），它与原始问题仍然密切相关，并为其建立了几个基本结果和相关技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_28](https://doi.org/10.1007/978-3-031-07082-2_28)
