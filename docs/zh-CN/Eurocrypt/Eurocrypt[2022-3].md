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
> 当生成线性密钥调度密码的矩形攻击的四元组时，我们发现合适的四元组可能会提示密钥候选者必须满足一些非线性关系。然而，有些生成的四元组总是违反这些关系，因此它们永远不会提示任何密钥候选者。受以前的矩形框架启发，我们发现，在生成四元组之前猜测某些关键单元格可以减少无效四元组的数量。然而，一次猜测很多个关键单元格可能会丧失使用早期中止技术的好处，从而导致更高的整体复杂度。为了获得更好的平衡，我们在具有线性密钥调度的密码上构建了一个新的矩形框架，目的是减少总体复杂度或攻击更多轮。
> 
> 在折衷模型中，有许多参数影响总体复杂度，特别是在生成四元组之前选择关键猜测单元格的数量和位置。为了确定最佳参数，我们以 SKINNY 为例构建了一个统一的自动工具，其中包括用于密钥恢复阶段的最优矩形区分器，生成四元组之前的关键猜测单元格的数量和位置，影响穷举搜索步骤的密钥计数器的大小等。基于自动工具，我们在相关密钥设置中识别出用于 SKINNY-128-384 的 32 轮密钥恢复攻击，其比以前最好的攻击扩展了 2 轮。对于其他版本的 n-2n 或 n-3n，我们也比以前多实现了一轮。此外，使用以前的矩形区分器，我们在轮降低的 ForkSkinny、Deoxys-BC-384 和 GIFT-64 上实现了更好的攻击。最后，我们讨论了将我们的矩形框架从相关密钥设置转换为单键设置，并给出了对 10 轮 Serpent 的新单键矩形攻击。

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
> 本论文基于复合函数近似技术，提出了一种用于搜索线性反馈移位寄存器（LFSR）的二进制流与SNOW-V和SNOW-Vi的密钥流之间相关性的方法。借助LFSR的四个触发器输入在三个连续时钟周期内进入有限状态机（FSM）的线性关系，我们提出了一种基于SAT/SMT技术的自动搜索模型，并找到了一系列高相关性的线性逼近路径。通过对中间掩码的穷举，我们找到了一个相关性为\(-2^{-47.76}\)的二进制线性逼近。利用这种逼近，我们提出了一种对SNOW-V的相关攻击，预期时间复杂度为\(2^{246.53}\)，内存复杂度为\(2^{238.77}\)，并且由相同的密钥和初始向量（IV）生成\(2^{237.5}\)个密钥流字。对于SNOW-Vi，我们提供了一个具有相同相关性的二进制线性逼近，并进行了与SNOW-V相同复杂度的相关攻击。据我们所知，这是对完整的SNOW-V和SNOW-Vi的首次已知攻击，其时间复杂度比穷举密钥搜索更好。结果表明，如果忽略单个密钥和IV对的密钥流的最大长度小于\(2^{64}\)的设计约束，则SNOW-V和SNOW-Vi都无法保证256位的安全级别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_2](https://doi.org/10.1007/978-3-031-07082-2_2)
## Refined Cryptanalysis of the GPRS Ciphers GEA-1 and GEA-2.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#refined-cryptanalysis-of-the-gprs-ciphers-gea-1-and-gea-2) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#refined-cryptanalysis-of-the-gprs-ciphers-gea-1-and-gea-2)**
### 作者
* Dor Amzaleg, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
* Itai Dinur, Department of Computer Science, Ben-Gurion University, Beersheba, Israel
### 摘要
> 在EUROCRYPT 2021中，Beierle等人首次公开分析了GPRS密码算法GEA-1和GEA-2。他们指出，尽管GEA-1使用了64位会话密钥，但只需知道65位密钥流，就可以在\(2^{40}\)时间内使用44 GiB的内存恢复它。这种攻击利用了密码算法初始化过程中的一个弱点，设计者可能故意隐藏了这个弱点，以降低其安全性。
> 
> 尽管没有发现GEA-2的类似弱点，但作者们还是提出了一种对该密码算法的攻击方法，时间复杂度约为\(2^{45}\)。主要的实际障碍是需要知道用于加密完整GPRS帧的12800位密钥流。对于给定的较少连续密钥流位或者不包含较长连续区块的密钥流，攻击的变体也是适用的（但代价更高）。
> 
> 本文改进和补充了GEA-1和GEA-2之前的分析。对于GEA-1，我们设计了一种攻击方法，将内存复杂性从44 GiB降低了大约\(2^{13} = 8192\)倍，约为4 MiB，而时间复杂性仍为\(2^{40}\)。我们的实现在现代笔记本上平均花费2.5小时恢复GEA-1会话密钥。
> 
> 对于GEA-2，我们描述了两种攻击方法，补充了Beierle等人的分析。第一种攻击获得了攻击者可获得的连续密钥流位数（表示为\(\ell \)）与时间复杂性之间的线性权衡。它在\(\ell \le 7000\)范围内改进了先前的攻击。具体而言，对于\(\ell = 1100\)，我们的攻击复杂度约为\(2^{54}\)，而先前的攻击复杂度并不比\(2^{64}\)的暴力攻击复杂度更快。如果可用的密钥流是分段的，我们的第二种攻击将先前攻击的内存复杂性从32 GiB降低了512倍，约为64 MiB，而没有时间复杂性的惩罚。
> 
> 我们的攻击基于流密码密码分析技术和其他上下文中使用的算法技术（如解决k-XOR问题）的新组合。

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
> 在这篇论文中，我们对ChaCha的差分线性攻击进行了几项改进。ChaCha是一个具有20轮的流密码。在CRYPTO 2020上，Beierle等人观察到了第3.5轮的差分效应，如果选择正确的配对，他们使用这个差分效应进行了改进的攻击，但他们表明为了获得正确的配对，我们平均需要进行\(2^5\)次迭代。在这个方向上，我们提供了一种通过列表技术找到正确配对的方法。此外，我们对PNB构建、复杂度计算的修改和使用两个输入-输出配对的另一种攻击方法进行了战略性的改进。通过这些改进，我们改善了时间复杂度，从Beierle等人报告的256位版本ChaCha的\(2^{230.86}\)减少到\(2^{221.95}\)。此外，在十年后，我们将Shi等人在ICISC 2012中提出的128位ChaCha的6轮攻击的复杂度改进了超过1100万倍，并首次对6.5轮ChaCha128进行了攻击，其时间复杂度为\(2^{123.04}\)。

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
> GIFT-64是一种64位分组密码，使用128位密钥，比PRESENT更轻量。本文对GIFT-64进行了详细的差分和线性攻击分析。我们的工作通过仔细的手动分析，补充了自动搜索最佳差分和线性特征的方法。这种混合方法导致了新的见解。在差分设置中，我们从理论上解释了每轮两个活跃S盒的差分特征的存在，并推导出了这些特征的一些新颖属性。此外，我们证明了覆盖七轮以上的GIFT-64的所有最佳差分特征必须每轮激活两个S盒。我们可以手工构造所有最佳特征。与差分设置中的工作并行，我们在线性设置中进行了类似的分析。然而，与差分设置中清晰的视图不同，GIFT-64的最佳线性特征必须至少激活一个轮只有一个S盒。此外，在自动搜索方法的帮助下，我们确定了24种GIFT-64变种，对抗差分攻击的能力更强，同时对抗线性攻击的安全级别相似。由于新变种强化了GIFT-64对统计密码分析的抵抗力，我们声称变种的轮数可以从28减少到26。这一观察结果使我们能够创建一个比GIFT-64能耗更低的密码。与GIFT-64的情况类似，我们不主张轮数减少的变种具有任何相关密钥安全性，因为对大多数应用来说这并不相关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_5](https://doi.org/10.1007/978-3-031-07082-2_5)
## Approximate Divisor Multiples - Factoring with Only a Third of the Secret CRT-Exponents.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#approximate-divisor-multiples-factoring-with-only-a-third-of-the-secret-crt-exponents) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#approximate-divisor-multiples-factoring-with-only-a-third-of-the-secret-crt-exponents)**
### 作者
* Alexander May, Ruhr-University Bochum, Bochum, Germany
* Julian Nowakowski, Ruhr-University Bochum, Bochum, Germany
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
### 摘要
> 我们研究了在具有小公共指数e的CRT-RSA中，对秘密指数\(d_p, d_q\)的部分密钥暴露攻击。对于常数e，已知只需知道\(d_p, d_q\)其中一个的一半比特位，即可利用库珀史密斯（Coppersmith）著名分解方法得到RSA模N的因子。我们将这个设置扩展到非常数e。令人惊讶的是，我们的攻击显示，当e的大小为\(N^{\frac{1}{12}}\)时，RSA最容易受到部分密钥暴露攻击，因为在这种情况下，仅需知道\(d_p, d_q\)的三分之一比特位即可在多项式时间内分解N，可以是最高有效位（MSB）或最低有效位（LSB）。
> 
> 设\(ed_p = 1 + k(p-1)\)和\(ed_q = 1 + \ell (q-1)\)。在技术上，我们采用了一种新颖的两步方法来分解N。第一步中，我们在多项式时间内恢复了k和\(\ell\)，在MSB情况下完全使用基本方法，在LSB情况下使用库珀史密斯的基于格的方法。然后，通过计算模kp的单变量多项式的根来得到N的素因子分解，其中k是已知的。这可以看作是将Howgrave-Graham的近似因子算法扩展到已知倍数k的未知因子p的情况。近似因子倍数的关键在于，可以在多项式时间内恢复的未知因子随倍数k的大小线性增长。
> 
> 我们得到的已知MSB的部分密钥暴露攻击是完全严密的，而在LSB情况下，我们依赖于标准的库珀史密斯类型启发式方法。我们通过实验证实了我们的启发式方法，并显示在实践中，我们已经使用小的格维度达到了渐近界限。因此，我们的攻击非常高效。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_6](https://doi.org/10.1007/978-3-031-07082-2_6)
## Information-Combining Differential Fault Attacks on DEFAULT.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#information-combining-differential-fault-attacks-on-default) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#information-combining-differential-fault-attacks-on-default)**
### 作者
* Marcel Nageler, Graz University of Technology, Graz, Austria
* Maria Eichlseder, Graz University of Technology, Graz, Austria
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
### 摘要
> 差分故障分析（DFA）是对对称加密实现非常有威力的攻击手段。大多数防护措施是应用在实现层面上。在ASIACRYPT 2021中，Baksi等人提出了一种旨在通过使用具有线性结构的S盒在密码编码层面上提供内在的DFA抵抗能力的设计策略。他们认为，在他们的实例化中，DFA对手最多可以了解128个密钥位中的64个，因此剩余的暴力破解复杂度\(2^{64}\)是不可行的。
> 
> 在本文中，我们展示了DFA对手可以跨轮组合信息以恢复完整的密钥，从而否定了他们的安全主张。特别地，我们观察到这种密码编码还表现出大量等效密钥类，可以以线性方程的规范形式高效地表示。我们利用这一点，结合DEFAULT强密钥计划的特定情况，仅需不到100个错误计算和微不足道的时间复杂度就能恢复密钥。此外，我们还展示了即使是独立轮密钥的理想版本DEFAULT也容易受到基于规范密钥的信息组合攻击的影响。

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
> 一个对函数 f 的 t-私有电路是一个随机布尔电路 C，它将输入 x 的随机编码映射为输出 f(x) 的编码，这样在 C 中的任何位置探测 t 条线路都无法透露关于 x 的任何信息。私有电路可用于保护嵌入式设备免受侧信道攻击。受到在此类设备中生成新鲜随机性耗费高昂的启发，一些研究已经探讨了最小化私有电路随机性复杂度的问题。
> 
> 目前已知的最佳上界由 Coron 等人（Eurocrypt 2020）给出，即 \(O(t^2\cdot \log ts)\) 随机比特，其中 s 是函数 f 的电路大小。我们改进了这个上界为 \(O(t\cdot \log ts)\)，包括输入编码器使用的随机性，并将这个上界推广到带状态的私有电路。我们的构造是半显式的，也就是说存在一个高效的随机化算法，能够从 f 的电路中生成私有电路 C，并且具有可忽略的失败概率。

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
> 这项工作描述了三鼎哈希签名方案：这是一种基于NTRU格的新的哈希和签名方案，可以看作是NIST决赛者Falcon的一个变种。它具有可比较的效率，但相对简化，支持在线/离线操作，易于并行化和抵抗侧信道攻击，因此在实施中提供了显著的优势。在参数选择方面，它也更加灵活。
> 
> 我们通过使用Ducas和Prest的“混合”采样器来替换Falcon中的FFO格高斯采样器来获得这个签名方案，并进行了详细的和修正的安全性分析。从理论上说，这种改变可能会导致重大的安全性损失，但我们表明可以使用新的密钥生成技术大大减轻这种损失，从而相对廉价地构造出更高质量的混合采样器的格陷阱。这种新方法还可以通过多种基本字段实例化，与Falcon只能在二次数循环群约束相比，更加灵活。
> 
> 我们还引入了一种新的格高斯采样器，具有相同的质量和效率，但与Ducas等人的整数矩阵Gram根技术兼容，可以避免浮点算术。这使得我们可以在支持浮点数不佳的平台上高效实现Mitaka相同的签名方案。
> 
> 最后，我们描述了对Mitaka的可证安全掩盖。更确切地说，我们引入了新颖的小工具，可以以比以前的基于高斯采样的签名方案的掩饰技术更低的代价进行可证掩饰，以实现廉价和可靠的侧信道保护。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_9](https://doi.org/10.1007/978-3-031-07082-2_9)
## A Novel Completeness Test for Leakage Models and Its Application to Side Channel Attacks and Responsibly Engineered Simulators.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#a-novel-completeness-test-for-leakage-models-and-its-application-to-side-channel-attacks-and-responsibly-engineered-simulators) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#a-novel-completeness-test-for-leakage-models-and-its-application-to-side-channel-attacks-and-responsibly-engineered-simulators)**
### 作者
* Si Gao, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
### 摘要
> 现今的边信道攻击目标通常是复杂的设备，其中指令并行处理并操作32位数据单元。因此，在这些现代设备中产生泄漏的状态不仅庞大，而且由于各种微体系结构因素的存在，用户可能无法预测。另一方面，基于最坏情况攻击或模拟器的安全评估明确依赖底层状态：潜在的不完整状态很容易导致错误的结论。
> 
> 我们提出了一个关于“假定状态完整性”的新概念，并结合基于“折叠模型”的高效统计测试。我们的新测试可以在灰盒环境中用于恢复包含多个32位变量的状态。我们说明了我们的新测试如何帮助引导边信道攻击，并揭示了现有实现的新攻击向量。然后，我们演示了该测试在泄漏建模中的应用，并确认即使是最新的泄漏模拟器也未能捕获其相应目标设备的所有可用泄漏。我们的新测试使得能够找到捕获所有可用泄漏但不对敌方提供帮助的名义模型。通过这样的研究，我们迈出了朝着负责任工程化的泄漏模拟器迈出了第一步。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_10](https://doi.org/10.1007/978-3-031-07082-2_10)
## Towards Micro-architectural Leakage Simulators: Reverse Engineering Micro-architectural Leakage Features Is Practical.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#towards-micro-architectural-leakage-simulators-reverse-engineering-micro-architectural-leakage-features-is-practical) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#towards-micro-architectural-leakage-simulators-reverse-engineering-micro-architectural-leakage-features-is-practical)**
### 作者
* Si Gao, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Elisabeth Oswald, Digital Age Research Center (D!ARC), University of Klagenfurt, Klagenfurt, Austria
* Dan Page, Department of Computer Science, University of Bristol, Bristol, UK
### 摘要
> 泄漏模拟器为软件测试提供了便捷快速的方法，以确定侧信道泄漏的存在。其中，其内置的泄漏模型的质量至关重要，包括忠实地包括微架构泄漏。即使在低至中档商用处理器（如ARM Cortex M系列）上，微架构泄漏也是现实。然而，在“灰盒”设置中处理它似乎是不可行的：如果微架构元素不为公开所知，我们应该如何描述它呢？
> 
> 我们首次证明，使用最新的泄漏建模技术，可以逆向工程商用处理器的微架构泄漏的重要元素是可行的。我们的方法首先恢复了流水线中每个阶段的微架构泄漏，以及已知产生故障的元素的泄漏。利用逆向工程的泄漏特征，我们构建了一种增强版的流行泄漏模拟器ELMO。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_11](https://doi.org/10.1007/978-3-031-07082-2_11)
## Beyond Quadratic Speedups in Quantum Attacks on Symmetric Schemes.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#beyond-quadratic-speedups-in-quantum-attacks-on-symmetric-schemes) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#beyond-quadratic-speedups-in-quantum-attacks-on-symmetric-schemes)**
### 作者
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Ferdinand Sibleyras, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 在这篇论文中，我们报告了对对称分组密码设计的第一次量子密钥恢复攻击，仅使用经典查询，并与最佳经典攻击相比，速度提升超过二次方。
> 
> 我们研究了Gaži和Tessaro（EUROCRYPT 2012）的2XOR-Cascade构造。这是一种密钥长度扩展技术，通过理想模型中的一个n位块密码提供了一个具有\(\frac{5n}{2}\)位安全性的n位块密码，密钥长度为2n位。我们证明了Bonnetain等人（ASIACRYPT 2019）的offline-Simon算法可以扩展到特殊情况，即在量子时间 \(\widetilde{\mathcal {O}}\left( 2^n \right) \) 内攻击这种构造，提供了对最佳经典攻击的2.5倍量子加速。
> 
> 关于对称密码的后量子安全性，普遍认为加倍密钥长度足以预防。这是因为Grover的量子搜索算法及其衍生算法最多只能达到二次方的加速。我们的攻击表明，可以利用某些对称构造的结构来克服这一限制。特别地，2XOR-Cascade不能用于普遍加固防御量子对手的块密码，因为它只能提供与块密码本身相同的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_12](https://doi.org/10.1007/978-3-031-07082-2_12)
## Orientations and the Supersingular Endomorphism Ring Problem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#orientations-and-the-supersingular-endomorphism-ring-problem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#orientations-and-the-supersingular-endomorphism-ring-problem)**
### 作者
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
### 摘要
> 我们研究了同构密码学中两个重要问题族的相关性。第一个问题族是计算超奇异椭圆曲线的自同态环，第二个问题族是在定向超奇异曲线上反向类群的操作。我们证明了这两个问题族在广义黎曼假设下可以通过多项式时间约简密切相关。
> 
> 我们确定了两类本质上等价的问题。第一类对应于计算定向曲线的自同态环问题。大量密码系统（如CSIDH等）的安全性与该类问题的安全性相关联，并且有启发式的量子算法可以在次指数时间内运行。第二类对应于计算可定向曲线的自同态环问题。几乎所有同构密码系统的安全性都与这第二类问题相关，而目前已知的最佳算法仍然是指数级的。
> 
> 我们的一些约简不仅泛化了，而且加强了先前已知的结果。例如，已知在定义在\(\mathbf {F}_p\)上的曲线的特殊情况中，CSIDH的安全性可以通过次指数时间内的自同态环问题来约简。我们的约简意味着在多项式时间内可以将CSIDH的安全性等同于自同态环问题（绕过了证明此类约简不太可能的论证）。

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
> 
> 1. 无穷范数下的短整数解（SIS）问题，其中公共矩阵非常宽，模数是一个多项式大小的质数，无穷范数的边界被设置为模数的一半减去一个常数。
> 
> 2. 使用多项式大模和特定误差分布（包括有界均匀分布和拉普拉斯分布）的LWE类量子态的学习与误差（LWE）问题。
> 
> 3. 具有特定参数的外推二面角余类（EDCP）问题。
> 
> SIS，LWE和EDCP问题在它们的标准形式下解决最坏情况下解决格问题一样困难。然而，我们可以解决的变体并不在已知与解决最坏情况的格问题一样困难的参数范围内。然而，目前还没有已知对于我们考虑的SIS和LWE的变体的古典或量子多项式时间算法。对于EDCP，我们的量子算法略微扩展了Ivanyos等人（2018年）的结果。
> 
> 我们对SIS和EDCP的变体的算法使用了现有的从这些问题到LWE问题的量子约简，更准确地说，是解决在给定LWE类量子态的情况下解决LWE问题。我们的主要贡献是使用滤波技术解决具有有趣参数的LWE类量子态问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_14](https://doi.org/10.1007/978-3-031-07082-2_14)
## Anonymous, Robust Post-quantum Public Key Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#anonymous-robust-post-quantum-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#anonymous-robust-post-quantum-public-key-encryption)**
### 作者
* Paul Grubbs, University of Michigan, Ann Arbor, USA
* Varun Maram, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Department of Computer Science, ETH Zurich, Zurich, Switzerland
### 摘要
> NIST PQC竞赛的核心目标之一是产生公钥加密方案，即使在遭受大规模量子计算机的攻击下，仍能保持应用所需的安全性保证。NIST PQC背景下的主要安全关注点是IND-CCA安全性，但其他应用要求公钥加密方案提供匿名性（Bellare等人，ASIACRYPT 2001）和健壮性（Abdalla等人，TCC 2010）。此类应用的示例包括匿名加密货币、可搜索加密和拍卖协议。然而，几乎没有关于如何构建满足这些安全属性的后量子公钥加密方案的相关研究。特别地，关于NIST PQC候选方案在匿名性和健壮性方面的状况尚不明确。
> 
> 本文首次系统研究了后量子公钥加密方案的匿名性和健壮性。首先，我们确定隐式拒绝是大多数后量子密钥交换机制的关键设计选择，展示了隐式拒绝使得之前对密钥交换机制与数据加密机制公钥加密方案匿名性和健壮性的研究结果不适用，并在可能的情况下将之前的研究结果转移到了隐式拒绝设置中。其次，由于藤崎-冈本（FO）变换（Fujisaki和Okamoto，Journal of Cryptology 2013）被广泛用于构建后量子公钥加密方案，我们探究了它们如何增加基本公钥加密方案的健壮性和改善其弱匿名性。
> 
> 然后，我们利用我们的理论结果研究了三个NIST密钥交换机制的匿名性和健壮性——Saber、Kyber和Classic McEliece，以及其中的一个替代方案FrodoKEM。总体而言，我们对健壮性的发现是确定的：我们为Saber、Kyber和FrodoKEM提供了积极的健壮性结果，但对于Classic McEliece则得到了消极的结果。我们的消极结果源于Classic McEliece密钥交换机制构建的KEM-DEM公钥加密方案的一个显著属性：对于任何消息m，我们可以构造一个单一的混合密文c，在任何Classic McEliece私钥下解密为所选的m。
> 
> 我们对匿名性的发现更为复杂：我们发现了阻碍为Saber、Kyber和Classic McEliece证明匿名性的障碍。我们还发现，在Saber和Kyber的情况下，这些障碍导致它们在IND-CCA 安全性方面存在问题。我们已与Saber和Kyber团队合作解决了这些问题，但问题尚未解决。值得一提的是，我们能够证明FrodoKEM和D’Anvers等人（AFRICACRYPT 2018）引入的Saber变种具有匿名性。我们对这两个方案的分析也发现了它们IND-CCA安全性声明中的技术漏洞，但我们已经解决了这些问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_15](https://doi.org/10.1007/978-3-031-07082-2_15)
## McEliece Needs a Break - Solving McEliece-1284 and Quasi-Cyclic-2918 with Modern ISD.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#mceliece-needs-a-break-solving-mceliece-1284-and-quasi-cyclic-2918-with-modern-isd) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#mceliece-needs-a-break-solving-mceliece-1284-and-quasi-cyclic-2918-with-modern-isd)**
### 作者
* Andre Esser, Cryptography Research Center, Technology Innovation Institute, Abu Dhabi, UAE
* Alexander May, Ruhr University Bochum, Bochum, Germany
* Floyd Zweydinger, Ruhr University Bochum, Bochum, Germany
### 摘要
> 最近，随着后量子算法的出现，为像McEliece和类拟循环BIKE以及HQC这样的基于代码的加密提供精确的比特安全估计变得越来越重要。虽然在过去的十年中，信息集译码（ISD）算法取得了显著进展，但目前仍不清楚这在多大程度上影响了当前的加密安全估计。
> 
> 我们提供了第一个用于表示基本ISD（例如May-Meurer-Thomae（MMT）或Becker-Joux-May-Meurer（BJMM））的具体实现，其参数针对McEliece和类拟循环设置进行了优化。尽管MMT和BJMM比像Prange这样的朴素ISD算法需要更多的内存，但我们证明这些算法可以在中等规模的实例（大约60个比特）上对实际密码分析进行显着加速。更具体地说，我们提供了McEliece-1223和McEliece-1284的记录计算数据（旧记录：1161），以及类拟循环设置的编码长度为2918（之前：1938）的数据。
> 
> 基于我们的记录计算，我们将推断出NIST标准化过程中建议的BIKE、HQC和McEliece参数的比特安全级别。对于BIKE/HQC，我们还展示了如何将解码-一出多（DOOM）技术转移到MMT/BJMM。虽然我们取得了显着的DOOM加速，但我们的估计证实了BIKE和HQC的比特安全水平。
> 
> 然而，对于建议的McEliece第3轮192比特和两个中的三个256比特参数集，我们的推断表明，安全级别被高估了约20和10比特，分别意味着高安全级别的McEliece实例可能比预期的稍微不安全一些。

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
> Even-Mansour密码是一种简单的方法，用于从公共随机置换 \(P:\{0,1\}^n \rightarrow \{0,1\}^n\) 构造一个（带密钥的）伪随机置换 E。它对抗传统攻击是安全的，最优攻击需要对 E 进行 \(q_E\) 次查询和对 P 进行 \(q_P\) 次查询，使得 \(q_E \cdot q_P \approx 2^n\)。然而，如果攻击者被赋予了对 E 和 P 的量子访问权限，该密码就完全不安全了，已知可以使用 \(q_E, q_P = O(n)\) 次查询进行攻击。
> 
> 然而，在任何合理的现实世界环境中，量子攻击者只能对由诚实方实施的带密钥置换 E 进行经典访问，同时保留对 P 的量子访问权限。已知在这种情况下的攻击需要 \(q_E \cdot q_P^2 \approx 2^n\)，表明与纯经典情况相比，安全性会下降，但无法确定 Even-Mansour密码在这种自然的“后量子”情况下是否仍然可以被证明安全。
> 
> 我们解决了这个问题，证明了在这种情况下，任何攻击都需要 \(q_E \cdot q^2_P + q_P \cdot q_E^2 \approx 2^n\)。我们的结果适用于Even-Mansour的双密钥和单密钥变体。在此过程中，我们建立了几个关于量子查询下界的结果的推广，这可能是独立感兴趣的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_17](https://doi.org/10.1007/978-3-031-07082-2_17)
## Watermarking PRFs Against Quantum Adversaries.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#watermarking-prfs-against-quantum-adversaries) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#watermarking-prfs-against-quantum-adversaries)**
### 作者
* Fuyuki Kitagawa, NTT Corporation, Tokyo, Japan
* Ryo Nishimaki, NTT Corporation, Tokyo, Japan
### 摘要
> 我们展开了针对量子对手的软件水印研究。量子对手会生成一个作为盗版软件的量子状态，并有可能从经典标记软件中去除嵌入的信息。从量子盗版软件中提取嵌入的信息是困难的，因为测量可能会无法逆转地改变量子状态。在针对经典对手的软件水印中，嵌入信息的提取算法关键地利用了经典盗版软件的（输入-输出）行为来提取嵌入的信息。即使我们使用具备抵抗量子攻击特性的现有水印伪随机函数构建，也不清楚它们是否能够抵御量子对手攻击，这是由于上述量子特定属性所致。因此，我们需要完全新的技术来实现针对量子对手的软件水印。
> 
> 在本研究中，我们定义了针对量子对手的安全水印伪随机函数（对抗量子对手时不可移除）。我们还介绍了两种水印伪随机函数，如下所示。
> 
> 我们利用学习与错误问题（LWE）的量子困难性构建了针对量子对手的私密可提取的水印伪随机函数。标记和提取算法分别使用公共参数和私密提取密钥。即使对手拥有（公共参数和）提取预言机的访问权限，返回查询的量子电路提取结果，水印伪随机函数仍然是不可移除的。
> 
> 我们利用不可区分性混淆（IO）和学习与错误问题的量子困难性构建了针对量子对手的公开可提取的水印伪随机函数。标记和提取算法分别使用公共参数和公开提取密钥。即使对手拥有提取密钥（和公共参数），水印伪随机函数仍然是不可移除的。
> 
> 我们开发了一种量子提取技术，可以从量子态中提取信息（一个经典字符串），而不会破坏太多的态。我们还引入了非提取型水印伪随机函数的概念，作为实现上述结果的关键组成部分，通过将该工具与我们的量子提取技术相结合。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_18](https://doi.org/10.1007/978-3-031-07082-2_18)
## Non-malleable Commitments Against Quantum Attacks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#non-malleable-commitments-against-quantum-attacks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#non-malleable-commitments-against-quantum-attacks)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Omri Shmueli, Tel Aviv University, Tel Aviv, Israel
* Huijia Lin, Washington University, Seattle, WA, USA
### 摘要
> 我们依据标准的困难性假设，构造了第一个抵御量子攻击的非可塑承诺。我们的承诺在统计上是有约束力的，并满足与承诺相关的标准非可塑性概念。我们得到了一个经典协议，其轮数为\(\log ^\star (\lambda )\)，前提是后量子单向函数的存在。
> 
> 以前，只有针对一类受限制的对手（称为同步对手）已知存在具有量子安全性的非可塑承诺。我们结果的核心是一种新的通用技术，可以从任何可提取承诺协议模块地获得非可塑承诺，无论其底层提取策略（黑盒或非黑盒）或轮数复杂度如何。该转换在经典环境中也可能引起兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_19](https://doi.org/10.1007/978-3-031-07082-2_19)
## Anonymity of NIST PQC Round 3 KEMs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#anonymity-of-nist-pqc-round-3-kems) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#anonymity-of-nist-pqc-round-3-kems)**
### 作者
* Keita Xagawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 本论文调查了NIST PQC Round 3 KEMs（经典McEliece、Kyber、NTRU、Saber、BIKE、FrodoKEM、HQC、NTRU Prime（简化的NTRU Prime和NTRU LPRime）以及SIKE）的匿名性。我们展示了以下结果：
> 
> 如果底层确定性PKE是强分离模拟的，那么在量子随机预言机模型（QROM）中，NTRU是匿名的。NTRU在QROM中是无碰撞的。由NTRU构建的混合PKE方案作为KEM和适当的DEM是匿名且健壮的。（类似结果适用于BIKE、FrodoKEM、HQC、NTRU LPRime和SIKE，除了HQC的三组参数之一。）
> 
> 如果底层PKE是强分离模拟的并且由此构建的混合PKE方案作为KEM和适当的DEM也是匿名的，那么经典McEliece在QROM中是匿名的。
> 
> Grubbs、Maram和Paterson指出，Kyber和Saber在目前QROM中的IND-CCA安全证明存在问题（EUROCRYPT 2022）。我们发现Streamlined NTRU Prime在QROM中存在另一个技术障碍来证明IND-CCA安全性。
> 
> 这些结果解决了Grubbs、Maram和Paterson（EUROCRYPT 2022）提出的调查NIST PQC Round 3 KEMs的匿名性和健壮性的开放问题。
> 
> 我们使用KEM底层PKE的强分离模拟性质以及KEM的强伪随机性和光滑/稀疏性作为主要工具，这将是一个与独立利益相关的方面。

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
> 在这篇论文中，我们提出了一种基于交替三线性形式等价问题的实用签名方案。我们的方案受到了Goldreich-Micali-Wigderson关于图同构的零知识协议的启发，并可作为NIST后量子数字签名的备选候选人。
> 
> 首先，我们提供了理论证据，特别是在后量子密码学背景下支持其安全性。这些证据来自于几个研究领域，包括隐藏子群问题、多变量密码学、基于群操作的密码学、量子随机预言模型，以及算法和复杂性中针对代数结构同构问题的最新进展。
> 
> 其次，我们展示了其在实际应用中的潜力。基于算法研究，我们提出了具体的参数选择，并实现了一个原型。其中一个具体方案在公钥大小约为4100字节，签名大小约为6800字节，以及运行时间（密钥生成、签名、验证）在普通笔记本电脑上约为0.8毫秒，实现了128位安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_21](https://doi.org/10.1007/978-3-031-07082-2_21)
## On IND-qCCA Security in the ROM and Its Applications - CPA Security Is Sufficient for TLS 1.3.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#on-ind-qcca-security-in-the-rom-and-its-applications-cpa-security-is-sufficient-for-tls-1-3) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#on-ind-qcca-security-in-the-rom-and-its-applications-cpa-security-is-sufficient-for-tls-1-3)**
### 作者
* Loïs Huguenin-Dumittan, EPFL, Lausanne, Switzerland
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### 摘要
> 有界IND-CCA安全（IND-qCCA）是一种类似于传统IND-CCA安全性的概念，不同之处在于对手只能进行常数次数q的解密/解封装查询。我们在本文中展示了IND-qCCA可以从任何在（Q）ROM中具有被动安全的PKE中轻松获得。也就是说，简单地添加一个确认哈希或者将密文的哈希作为密钥计算，就可以得到一个IND-qCCA KEM。特别是，不需要像Fujisaki-Okamoto（FO）变换[15]中那样进行去随机化或重新加密。相比于使用FO变换的KEM，这使得这种IND-qCCA KEM的解封装过程更加高效。此外，IND-qCCA KEM可以在最近提出的需要IND-1CCA临时密钥交换机制的KEMTLS协议[29]中使用，或者在TLS 1.3中使用。然后，使用类似的证明技术，我们展示了CPA安全的KEM对于TLS 1.3握手的安全性是足够的，从而解决了ROM中的一个悬而未决的问题。反过来，这意味着用于证明TLS 1.3安全性的PRF-ODH假设并不是必需的，可以用ROM中的CDH假设替代。我们还突出并简要讨论了在协议和锁定原语中使用IND-1CCA KEM的几个用例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_22](https://doi.org/10.1007/978-3-031-07082-2_22)
## On the Lattice Isomorphism Problem, Quadratic Forms, Remarkable Lattices, and Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#on-the-lattice-isomorphism-problem-quadratic-forms-remarkable-lattices-and-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#on-the-lattice-isomorphism-problem-quadratic-forms-remarkable-lattices-and-cryptography)**
### 作者
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Wessel van Woerden, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
### 摘要
> 在背包/格密码学文献中一个自然而又经常出现的想法是，以解码能力显著的格子为您的私钥开始，并以某种方式隐藏它以生成公钥。这也是McEliece（1978）的基于代码加密方案的方法。
> 
> 对于格子来说，这个想法从来没有很好地实现过：已经有一些临时方法被提出来，但它们已经遭到了针对格约简算法之外的技巧的攻击。另一方面，由Short Integer Solution（SIS）和Learning With Errors（LWE）问题提供的框架虽然方便而且成立，但从编码角度来看仍然令人沮丧：底层解码算法相当简单，解码表现不佳。
> 
> 在这项工作中，我们通过基于格子同构问题（LIP）构建密码学体系的方式，提供了这个自然想法的通用实现（与选择的显著格子无关）。更具体地，我们提供了：
> 
> 在同构类内基于搜索-LIP和区分-LIP的最差到平均情况的约化，通过扩展Haviv和Regev（SODA 2014）的技术。
> 
> 同构的零知识证明（ZKPoK）。这意味着基于搜索-LIP的识别方案。
> 
> 基于区分-LIP的密钥封装机制（KEM）和哈希然后签名的签名方案。
> 
> 这种方法的目的是为了使显著的格子提高基于格子的加密的安全性和性能。例如，在显着的格子中从Minkowski限制中解码对数对抗格子攻击的KEM将导致多项式对数逼近因子。最近已经为某些格子达到了这样的解码器（Chor-Rivest，Barnes-Sloan），但由于它们的对偶距离很短，所以它们并不完全符合我们的需要。

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
> 我们展示了以下通用结果：当在量子随机预言模型中的量子查询算法输出被承诺与某个x的H(x)有密切关系的经典值t时，可以高效地几乎确定地提取x。这种提取是通过对随机预言的适当模拟完成的，并且可以在线工作，即是直线的，即在没有倒带的情况下进行，并且是即时的，在协议执行期间（几乎）不干扰它。
> 
> 我们结果的技术核心是一个新的交换子上界，该上界限制了描述压缩预言演变的酉算符（用于模拟上述随机预言）和提取x的测量的交换子的算符范数。
> 
> 我们展示了我们通用在线可提取性结果的两个应用。我们展示了在量子设置中对提交并公开的Σ-协议的紧密在线可提取性，并且我们提供了对Fujisaki-Okamoto变换的首个完整的后量子安全性证明，即在没有调整以简化证明的情况下，包括具体的安全性界限。

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
> 在最近的突破中，Mahadev为经典客户端构建了一种量子计算的经典验证（CVQC）协议，以在计算假设下将决策问题委托给不受信任的量子证明者。在本研究中，我们进一步探讨了CVQC在更一般的BQP采样问题和理想的"盲目性"性质中的可行性。我们分别提供了这两个问题的肯定解决方案。
> 
> 受许多量子应用（例如量子机器学习和量子卓越任务的量子算法）的采样性质的启发，我们开始研究量子采样问题的CVQC（用\(\mathsf {SampBQP}\)表示）。更具体地说，在\(\mathsf {SampBQP}\)问题的CVQC协议中，证明者和验证者被给定一个输入\(x\in \{0,1\}^n\)和一个量子电路C，并且经典客户端的目标是通过与不可信证明者的交互中学习到一个与输出\(z \leftarrow C(x)\)存在很小误差的样本。我们通过基于量子学习与错误假设构建了一个基于四个消息的\(\mathsf {SampBQP}\)的CVQC协议来证明其可行性。
> 
> CVQC协议的盲目性是指协议的一个属性，即证明者不了解客户端的输入，因此是盲目的。这是一种非常理想的属性，已经在委托量子计算方面进行了密集研究。我们提供了一个简单而强大的通用编译器，可以将任何CVQC协议转换为盲目的协议，同时保持其完整性和正确性误差以及回合数。
> 
> 将我们的编译器应用于Mahadev的\(\mathsf {BQP}\)的CVQC协议（并行重复）和我们的\(\mathsf {SampBQP}\)的CVQC协议，分别得到了\(\mathsf {BQP}\)和\(\mathsf {SampBQP}\)的首个常数轮盲目CVQC协议，分别具有可忽略和反向多项式正确性误差以及可忽略的完整性误差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_25](https://doi.org/10.1007/978-3-031-07082-2_25)
## Authentication in the Bounded Storage Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#authentication-in-the-bounded-storage-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#authentication-in-the-bounded-storage-model)**
### 作者
* Yevgeniy Dodis, NYU, New York, USA
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern and NTT Research, Boston, USA
### 摘要
> 我们考虑了有界存储模型（BSM）的流式变体，其中诚实的各方可以互相流式传输大量数据，同时只保持大小为 n 的小内存。敌方也以流式算法运作，但拥有的内存大小 \(m \gg n\) 大得多。 目标是在 BSM 中构建无条件安全的加密方案，先前的研究已为对称密钥加密、密钥协议、无意识转移和多方计算实现了这一点。在这项研究中，我们在 BSM 中构建了消息认证和签名。 首先，我们考虑对称密钥设置，其中 Alice 和 Bob 分享一个小的秘密密钥。Alice 可以通过流式传输大小为 \(k \gg m\) 的长认证标签向 Bob 认证任意多的消息，同时确保标签可以使用只有 n 位内存的标签生成和验证。我们展示了一个使用局部提取器（Vadhan；JoC '04)的解决方案，允许敌人的内存空间 \(m = 2^{O(n)}\) 成倍增长，并且标签大小为 \(k= O(m)\)。
> 
> 其次，我们考虑与上述相同的设置，但现在进一步要求每个单独的标签大小小，即 \(k \le n\)。我们证明了当敌人的内存为 \(m = O(n^2)\) 时，解决方案仍然可能，这是最优的。我们的解决方案依赖于学习奇偶校验的空间下限（Raz；FOCS ’16)。
> 
> 第三，我们考虑公钥签名设置。签名者 Alice 最初通过一个真实的渠道流式传输一个长的验证密钥，同时只在她的内存中保留一个短的签名密钥。接收者 Bob 接收流式传输的验证密钥，并生成他在内存中保留的一个短的验证摘要。后来，Alice 可以使用她的签名密钥通过流式传输大的签名给 Bob，Bob 可以使用他的验证摘要来验证他们。我们展示了一个 \(m= O(n^2)\) 的解决方案，我们证明这是最优的。我们的解决方案依赖于一个新的熵引理，这在独立的研究中已经引起了兴趣。我们表明，如果一个块序列具有足够高的最小熵，那么大量的单独块必须具有高最小熵。这个引理的初版是

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_26](https://doi.org/10.1007/978-3-031-07082-2_26)
## Secure Non-interactive Simulation: Feasibility and Rate.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-3].md#secure-non-interactive-simulation-feasibility-and-rate) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-3].md#secure-non-interactive-simulation-feasibility-and-rate)**
### 作者
* Hamidreza Amini Khorasgani, Department of Computer Science, Purdue University, West Lafayette, USA
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Hai H. Nguyen, Department of Computer Science, Purdue University, West Lafayette, USA
### 摘要
> 提高安全计算效率的一种自然解决方案是非交互式地将各种廉价生成的相关随机性（如来自噪声源的联合样本）安全转化为安全计算协议中有用的相关性。基于安全计算的这一通用应用，我们的工作引入了安全非交互模拟（SNIS）的概念。参与方接收到相关随机性的样本，并在没有任何交互的情况下，将其安全地转换为来自另一个相关随机性的样本。
> 
> 我们的工作提出了SNIS的基于模拟的安全定义，并开始研究SNIS的可行性和效率。我们还研究了一些基本的相关随机性之间的SNIS，如来自二元对称信道和二元抹除信道的随机样本，分别由BSS和BES表示。我们证明了BSS和BES样本之间的相互转换是不可能的。
> 
> 接下来，我们证明了从BES（ε'）样本（具有噪声特性ε'的BES）到BES（ε）样本的SNIS可行，当且仅当（1-ε'）=（1-ε）^k，其中k为自然数。在这个背景下，我们证明了所有的SNIS构造必须是线性的。此外，如果（1-ε'）=（1-ε）^k，则模拟多个独立的BES（ε'）样本的速率最多为1/k，这也可以通过（块）线性构造实现。
> 
> 最后，我们证明了从BSS（ε'）样本到BSS（ε）样本的SNIS是可行的，当且仅当（1-2ε'）=（1-2ε）^k，其中k为自然数。有趣的是，存在线性和非线性的SNIS构造。当（1-2ε'）=（1-2ε）^k时，我们证明了完全安全的SNIS的速率最多为1/k，这可以通过线性和非线性构造实现。
> 
> 我们的技术方法是对SNIS的定义进行代数化，并通过傅里叶分析进行处理。我们的工作为布尔函数的一般分析方法提供了发展方向，并明确考虑了密码安全约束。我们的工作还证明了从统计安全的SNIS到完全安全的错误纠正转换的强形式。我们展示了我们的研究与齐次布尔函数和距离不变码的联系，这可能具有独立的研究兴趣。

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
> 随机变量之间的相关对是信息理论安全密码学中的核心概念。已经研究了不同相关性之间的安全减少，并且已知了完整性结果。此外，这种减少的复杂性与电路复杂性和本地可解码代码的效率紧密相关。因此，对这些复杂性问题的进展面临着强大的障碍。出于这个原因，在这项工作中，我们研究了安全减少的一种受限形式——即安全非交互减少（SNIR）——它仍然与原始问题密切相关，并为其建立了几项基本结果和相关技术。
> 
> 我们发现了SNIR与相关性的线性代数性质之间的惊人联系。具体来说，我们定义了相关性的谱，并且表明目标相关性仅当后者的谱包含前者的完整谱时，才能对源相关性进行SNIR。我们还建立了一个“镜像引理”，展示了在谱分析的视角下，SNIR中的两方之间存在意想不到的对称性。我们还利用密码学的见解和基本线性代数分析来完全描述通用随机性以及SNIR中的本地随机性的作用。我们利用这些结果来解决关于SNIR的一些基本问题，并定义未来的方向。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-07082-2_28](https://doi.org/10.1007/978-3-031-07082-2_28)
