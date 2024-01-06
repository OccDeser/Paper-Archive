# Asiacrypt[2021-2]
## Secure and Efficient Software Masking on Superscalar Pipelined Processors.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#secure-and-efficient-software-masking-on-superscalar-pipelined-processors) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#secure-and-efficient-software-masking-on-superscalar-pipelined-processors)**
### 作者
* Barbara Gigerl, Graz University of Technology, Graz, Austria
* Robert Primas, Graz University of Technology, Graz, Austria
* Stefan Mangard, Graz University of Technology, Graz, Austria
* Stefan Mangard, Lamarr Security Research, Graz, Austria
### 摘要
> 物理侧信道攻击（如功耗分析）对密码设备在实际应用中构成严重威胁。因此，设备实施算法对策，如掩码。过去，关于设计和验证掩码软件实现的工作主要集中在智能卡上使用的简单微处理器上。然而，许多其他应用（如汽车工业）要求在更强大的中央处理器上进行侧信道保护密码计算。在这种情况下，复杂的架构副作用引起的安全损失、相应的性能降低以及适当的探测模型和验证技术的讨论仍然是广泛未开发的研究问题。
> 
> 我们回答了这些问题，并对更复杂的处理器架构在掩码相关副作用的背景下进行了全面分析。首先，我们分析了RISC-V SweRV内核，该内核具有9级流水线、两个执行单元和加载/存储缓冲区，并指出在简单软件探测模型中的安全性与在这种CPU上的实际安全性存在显著差距。更具体地说，我们通过在硬件探测模型中进行形式化分析以及通过门级时序模拟进行实证分析，展示了复杂CPU架构的体系结构副作用可以显著降低掩码软件的保护顺序。然后，我们讨论了在硬件上修复这些问题或将它们作为软件约束的选项。基于这些软件约束，我们为更复杂的CPU设计掩码软件提出了一般规则。最后，我们比较了几种掩码方案的实施策略，并在案例研究中展示了在复杂CPU上设计安全的掩码软件仍然可能，开销仅为13%。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_1](https://doi.org/10.1007/978-3-030-92075-3_1)
## Fault-Injection Attacks Against NIST's Post-Quantum Cryptography Round 3 KEM Candidates.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#fault-injection-attacks-against-nists-post-quantum-cryptography-round-3-kem-candidates) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#fault-injection-attacks-against-nists-post-quantum-cryptography-round-3-kem-candidates)**
### 作者
* Akira Ito, Tohoku University, 2–1–1 Katahira, Aoba-ku, Sendai-shi, 980-8577, Japan
* Rei Ueno, Tohoku University, 2–1–1 Katahira, Aoba-ku, Sendai-shi, 980-8577, Japan
* Naofumi Homma, Tohoku University, 2–1–1 Katahira, Aoba-ku, Sendai-shi, 980-8577, Japan
* Rei Ueno, PRESTO, Japan Science and Technology Agency, 4–1–8 Honcho, Kawaguchi, Saitama, 332-0012, Japan
* Keita Xagawa, NTT Social Informatics Laboratories, 3-9-11 Midori-cho, Musashino-shi, Tokyo, 180-8585, Japan
* Junko Takahashi, NTT Social Informatics Laboratories, 3-9-11 Midori-cho, Musashino-shi, Tokyo, 180-8585, Japan
* Naofumi Homma, CREST, Japan Science and Technology Agency, 4–1–8 Honcho, Kawaguchi, Saitama, 332-0012, Japan
### 摘要
> 我们从容错攻击的角度调查了所有NIST PQC第3轮KEM候选方案：Classic McEliece、Kyber、NTRU、Saber、BIKE、FrodoKEM、HQC、NTRU Prime和SIKE。所有KEM方案都使用Fujisaki-Okamoto变换的变体，因此在解封装中重新加密的相等测试至关重要。当我们可以跳过相等测试时，我们调查了有效的密钥恢复攻击。我们发现了针对Kyber、NTRU、Saber、FrodoKEM、HQC、NTRU Prime中的两个KEM方案和SIKE的现有密钥恢复攻击。我们针对NTRU Prime中的另一个KEM方案提出了一种新的密钥恢复攻击。我们还报告了一种针对BIKE的攻击，导致秘钥信息泄漏。开源的pqm4库包含了除Classic McEliece和HQC之外的所有KEM方案。我们表明，在解封装过程中只需出现单一指令跳过错误，就会导致Kyber、NTRU、Saber、BIKE和SIKE实际上跳过相等测试。我们还报告了针对它们的实验性攻击。我们还报告了NTRU Prime的实现允许自由的选择密文攻击，而FrodoKEM的时序侧信道报告在Guo，Johansson和Nilsson（CRYPTO 2020）中仍然存在，尽管在其NIST PQC第3轮提交中没有这样的错误。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_2](https://doi.org/10.1007/978-3-030-92075-3_2)
## Divided We Stand, United We Fall: Security Analysis of Some SCA+SIFA Countermeasures Against SCA-Enhanced Fault Template Attacks.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#divided-we-stand-united-we-fall-security-analysis-of-some-sca-sifa-countermeasures-against-sca-enhanced-fault-template-attacks) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#divided-we-stand-united-we-fall-security-analysis-of-some-sca-sifa-countermeasures-against-sca-enhanced-fault-template-attacks)**
### 作者
* Sayandeep Saha, Department of Computer Science and Engineering, IIT Kharagpur, Kharagpur, India
* Arnab Bag, Department of Computer Science and Engineering, IIT Kharagpur, Kharagpur, India
* Debdeep Mukhopadhyay, Department of Computer Science and Engineering, IIT Kharagpur, Kharagpur, India
* Dirmanto Jap, Temasek Labs, Nanyang Technological University, Singapore, Singapore
* Shivam Bhasin, Temasek Labs, Nanyang Technological University, Singapore, Singapore
### 摘要
> 保护免受侧信道（SCA）和故障攻击（FA）需要同时嵌入两类对策于加密实现中。已经证明了将SCA和FA对策直接组合是易受FA攻击的，例如统计失效故障分析（SIFA）和故障模板攻击（FTA）。因此，提出了新的对策类别来防止SIFA攻击，并包括SCA的掩蔽。虽然它们在个别情况下对SIFA和SCA安全，但一个重要问题是，在存在组合SCA和FA对手的情况下，安全性声明是否仍然成立。然而，希望能够具备对抗组合攻击的安全性，因为这样的实施方案包含了对两种威胁的对策。
> 
> 在本论文中，我们展示了最近提出的一些组合SIFA和SCA对策方案在面对组合攻击时的脆弱性。为此，我们通过考虑在故障注入过程中的侧信道信息来增强FTA攻击。所提出的攻击成功来源于S-盒的一些非平凡故障传播特性，这在原始的FTA方案中尚未被发掘。所提出的攻击方法通过使用激光故障注入和功耗测量验证了基于Keccak的开源软件实现中采用SIFA保护的\(\chi _5\) S-盒，以及通过门级功耗追踪模拟验证了基于硬件实施的SIFA保护的\(\chi _3\) S-盒。最后，我们讨论了一些强化现有对策方案的缓解策略。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_3](https://doi.org/10.1007/978-3-030-92075-3_3)
## Efficient Leakage-Resilient MACs Without Idealized Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#efficient-leakage-resilient-macs-without-idealized-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#efficient-leakage-resilient-macs-without-idealized-assumptions)**
### 作者
* Francesco Berti, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* Thomas Peters, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* Francesco Berti, TU Darmstadt, Germany, CAC - Applied Cryptography, Darmstadt, Germany
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, Shandong, China
* Chun Guo, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
### 摘要
> 基于对称构件的泄露抗性MAC的安全性证明目前依赖于理想化假设，这些假设很难转化为对实施这些方案的密码工程师的可解释性指导。在本文中，我们首先提出一个泄漏抗性MAC，它在标准和易于解释的黑盒和物理假设下既高效又安全。它只需要一个抗碰撞哈希函数和对泄漏具有不可预测性的可调块密码（\(\mathsf {TBC}\)）对每个消息进行一次认证调用。这种构造利用了两种设计技巧：\(\mathsf {TBC}\)的大调整和校验过程，检查逆\(\mathsf {TBC}\)是否与一个常数相匹配。它具有超越生日安全界限。然后，我们讨论了摆脱这些设计技巧的成本。我们表明安全性也可以在没有它们的情况下得到证明。然而，一个没有大调整的构造需要更强（非理想化）的假设，并且如果可以利用具有大调整的专门\(\mathsf {TBC}\)，可能会导致性能开销，而一个没有扭曲验证的构造则需要更强的假设（仍然非理想化），并且会导致更复杂的界限。这些结果的结合为我们的第一个实用构造提供了支持，并建议设计具有大调整和良好的侧信道对策特性的\(\mathsf {TBC}\)是一个有趣的挑战。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_4](https://doi.org/10.1007/978-3-030-92075-3_4)
## DEFAULT: Cipher Level Resistance Against Differential Fault Attack.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#default-cipher-level-resistance-against-differential-fault-attack) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#default-cipher-level-resistance-against-differential-fault-attack)**
### 作者
* Anubhab Baksi, Nanyang Technological University, Singapore, Singapore
* Mustafa Khairallah, Nanyang Technological University, Singapore, Singapore
* Thomas Peyrin, Nanyang Technological University, Singapore, Singapore
* Shivam Bhasin, Temasek Labs NTU, Singapore, Singapore
* Jakub Breier, Silicon Austria Labs, Graz, Austria
* Sumanta Sarkar, University of Warwick, Coventry, UK
* Siang Meng Sim, DSO National Laboratories, Singapore, Singapore
### 摘要
> 差分故障分析（DFA）是一种众所周知的密码学分析技术，利用加密设备的故障输出。尽管它深受欢迎并与经典的差分分析（DA）相似，但文献中缺乏对设计师观点下的DFA进行彻底分析。据我们所知，迄今为止还没有提出一种在算法级别免受DFA影响的分组密码。此外，所有已知的DFA对策在某种程度上都依赖于设备/协议或实现，比如重复/比较。由于所有这些都超出了密码设计范围，我们专注于设计一种可以独自保护免受DFA侵害的密码。我们提出了密码级DFA抵抗的第一个概念，它不依赖于任何设备/协议相关的假设，也不依赖于任何形式的重复。我们的构造简单且对软件/硬件友好，DFA安全可扩展到状态大小。它可以在（几乎）任何对称密钥密码之前和/或之后插入，并确保免受DFA的非平凡搜索复杂性。我们DFA保护层的一个关键组件是具有线性结构的SBox。这样的SBox在密码设计中从未被使用，因为它们对差分攻击表现不佳。我们认为实际上它们代表了良好的密码属性和DFA抵抗之间的有趣权衡。作为概念验证，我们构建了一个名为DEFAULT-LAYER的DFA保护层，以及一个完整的分组密码DEFAULT。我们的解决方案与当前最先进的技术相比具有优势，优于像无可挑剔的电路/CRAFT或传染性对策等复杂的重复解决方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_5](https://doi.org/10.1007/978-3-030-92075-3_5)
## Dynamic Random Probing Expansion with Quasi Linear Asymptotic Complexity.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#dynamic-random-probing-expansion-with-quasi-linear-asymptotic-complexity) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#dynamic-random-probing-expansion-with-quasi-linear-asymptotic-complexity)**
### 作者
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Abdul Rahman Taleb, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### 摘要
> 掩码对策被广泛用于保护密码实现免受侧信道攻击。虽然许多掩码方案在广泛部署的探测模型中被证明是安全的，但后者引发了许多关于其在实际中的相关性的担忧。该模型将固定数量的中间变量的知识提供给对手，它无法捕获所谓的水平攻击，后者利用敏感变量的重复操作。因此，最近的研究集中在随机探测模型上，其中每个计算变量都以给定概率p泄露。这种模型更符合嵌入式设备的现实情况。特别是，Belaïd、Coron、Prouff、Rivain和Taleb（CRYPTO 2020）提出了一个生成随机探测电路的框架。他们的编译器会在满足所谓的随机探测可扩展性（RPE）的情况下扩展基础部件。来自Belaïd、Rivain和Taleb（EUROCRYPT 2021）的后续工作在更严格的性质和改进的复杂性方面更进一步。特别是，他们的构造在\(\kappa \)-bit安全性下达到\(\mathcal {O}(\kappa ^{3.9})\)的复杂性，同时容忍泄露概率\(p=2^{-7.5}\)。
> 
> 在本文中，我们通过在扩展过程的每个步骤中考虑基础部件的动态选择来推广随机探测扩展方法。这种方法可以使用具有较高份额数量的部件 - 这些部件在扩展框架中具有更好的渐近复杂性 - 同时仍然容忍通常用于小型部件的最佳泄露率。我们研究了编译器序列的选择策略，并展示它可以将AES实现的复杂性降低一个数量级。我们还通过展示新的渐近部件构造显着改进了扩展编译器的渐近复杂性。具体来说，我们引入了具有准线性复杂性的线性运算的RPE部件以及具有线性乘法数量的RPE乘法部件。这些新的部件将扩展编译器的复杂性从二次降低到准线性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_6](https://doi.org/10.1007/978-3-030-92075-3_6)
## Homomorphic Secret Sharing for Multipartite and General Adversary Structures Supporting Parallel Evaluation of Low-Degree Polynomials.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#homomorphic-secret-sharing-for-multipartite-and-general-adversary-structures-supporting-parallel-evaluation-of-low-degree-polynomials) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#homomorphic-secret-sharing-for-multipartite-and-general-adversary-structures-supporting-parallel-evaluation-of-low-degree-polynomials)**
### 作者
* Reo Eriguchi, The University of Tokyo, Tokyo, Japan
* Koji Nuida, Kyushu University, Fukuoka, Japan
* Reo Eriguchi, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
* Koji Nuida, National Institute of Advanced Industrial Science and Technology, Tokyo, Japan
### 摘要
> 同态秘密分享（Homomorphic secret sharing，HSS）适用于函数 f，允许输入方将私有输入分配为份额，然后从这些份额中本地计算输出份额，从而恢复出 f 的值。HSS 可直接用于实现二轮多方计算（multiparty computation，MPC）协议，适用于可能非阈值敌手结构，其通信复杂度与 f 的大小无关。本文提出了两种 HSS 方案的构建，支持对单个低次多项式的并行评估，并容忍多参与方和一般敌手结构。我们的多参与方方案在单次评估的特定情况下，比之前的多参与方方案容忍更广泛的敌手结构，并且份额尺寸指数级缩小于一般构建。虽然我们的方案限制了可容忍的敌手结构范围（但仍适用于非阈值方案），但与简单使用独立实例的 \(\ell\) 次方式相比，我们的方案在通信复杂度上执行了 \(\ell/\log \ell\) 倍的并行评估。我们还规范化了两类考虑现实情况的敌手结构，这是以前的阈值方案所不适用的。我们的方案可以进行 O(m) 次并行评估，几乎与单次评估的通信成本相同，其中 m 是参与方的数量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_7](https://doi.org/10.1007/978-3-030-92075-3_7)
## Improved Single-Round Secure Multiplication Using Regenerating Codes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#improved-single-round-secure-multiplication-using-regenerating-codes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#improved-single-round-secure-multiplication-using-regenerating-codes)**
### 作者
* Mark Abspoel, CWI, Amsterdam, Netherlands
* Ronald Cramer, CWI, Amsterdam, Netherlands
* Ronald Cramer, Leiden University, Leiden, Netherlands
* Daniel Escudero, J.P. Morgan AI Research, New York, USA
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Chaoping Xing, School of Electronic Information and Electric Engineering, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 在2016年，Guruswami和Wootters展示了Shamir的秘密共享方案在扩展域上具有再生性质。换句话说，我们可以通过应用线性形式将每个份额压缩为基字段的一个元素，从而秘密由压缩份额的线性组合确定。这似乎立即可以被应用于改善无条件安全的多方计算的复杂性；然而，到目前为止，还没有发布结果。
> 
> 我们介绍了再生码在多方计算中的首次应用，并展示了它在减少回合数方面的实用性。具体而言，我们提出了一个协议，以摊还的方式在并行评估中在\(d + O(1)\)回合中隐匿地评估深度为d的算术电路，每次乘法通信的环元素少于\(o(n^2)\)。我们的协议利用了函数相关的预处理，并且对最大敌手有\(t < n/2\)的党派进行了安全保障。在这种情况下，所有现有方法的复杂度均为\(\varOmega (n^2)\)。
> 
> 此外，我们将一些与再生码有关的理论扩展到伽罗瓦环上。已经知道，在字段上的MDS码的修复性质可以完全用其对偶码来表征。我们展示了这种表征扩展到了伽罗瓦环上的线性码，并用它来展示Guruswami和Wootters的结果对于Shamir在伽罗瓦环上的方案也是正确的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_8](https://doi.org/10.1007/978-3-030-92075-3_8)
## Garbling, Stacked and Staggered - Faster k-out-of-n Garbled Function Evaluation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#garbling-stacked-and-staggered-faster-k-out-of-n-garbled-function-evaluation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#garbling-stacked-and-staggered-faster-k-out-of-n-garbled-function-evaluation)**
### 作者
* David Heath, Georgia Institute of Technology, Atlanta, GA, USA
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, GA, USA
* Stanislav Peceny, Georgia Institute of Technology, Atlanta, GA, USA
### 摘要
> 堆叠遮掩（SGC）是一种提升遮掩电路（GC）的方法，能够高效且安全地评估具有条件分支的程序。SGC可以减少带宽消耗，使通信与最长程序执行路径的大小成比例，而不是整个程序的大小。与经典GC相比，参与方需要付出更多的计算努力。
> 
> 我们的研究动机来自于在计算服务或任务菜单中获得子集，我们考虑已知（或最终揭示给GC评估员E）的k个n选一分支的GC评估。在此设置下，我们使用堆叠和交错技术来分摊GC计算。我们保留了SGC的通信优势，并显著改进了计算和实时墙钟时间。也就是说，每个GC参与方将n个分支全部遮掩（或评估），这相对于标准SGC需要进行的O(n·k)次遮掩/评估来说是一个重大的改进。我们将我们的构建方案呈现为一种遮掩方案。
> 
> 我们的技术在各种设置中都带来了显著的整体性能提升，包括那些通常在文献中考虑的情况：例如，在1Gbps局域网上，我们对128个函数进行了16选一的评估，比标准堆叠遮掩快了约7.68倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_9](https://doi.org/10.1007/978-3-030-92075-3_9)
## Better Security-Efficiency Trade-Offs in Permutation-Based Two-Party Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#better-security-efficiency-trade-offs-in-permutation-based-two-party-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#better-security-efficiency-trade-offs-in-permutation-based-two-party-computation)**
### 作者
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
* Stefano Tessaro, Paul G. Allen School of Computer Science and Engineering, University of Washington, Seattle, USA
### 摘要
> 我们改进了（可调整的）相关性强密码函数的安全性，这些函数是加密方案和遗忘传输扩展方案的关键组成部分。我们特别关注排列构造，并在安全性和效率方面改进了Guo等人的工作（IEEE S&P ’20）。
> 
> 我们提出了一种可调用的单次构造，其安全性与最安全的两次调用构造相匹配-结果的安全性边界形式为\(O((p+q)q/2^n)\)，其中q是构造评估的数量，p是对底层n位排列的直接对抗查询的数量，该排列被建模为随机。
> 
> 此外，我们提出了一种新的两次调用构造，具有更好的安全性退化-特别是对于感兴趣的应用程序，在每个调整（tweak）只进行常数次数的评估时，安全性将退化为\(O((\sqrt{q} p+q^2)/2^n)\)。我们的安全性证明依赖于求和捕捉定理（Babai ’02；Steinberger ’12，Cogliati和Seurin ’18），以及关于有限独立球投掷的新球入箱组合引理。
> 
> 另外我们还提供了一个独立相关的具体安全处理的遗忘传输扩展说明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_10](https://doi.org/10.1007/978-3-030-92075-3_10)
## Two-Round Adaptively Secure MPC from Isogenies, LPN, or CDH.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#two-round-adaptively-secure-mpc-from-isogenies-lpn-or-cdh) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#two-round-adaptively-secure-mpc-from-isogenies-lpn-or-cdh)**
### 作者
* Navid Alamati, UC Berkeley and Visa Research, Berkeley, USA
* Hart Montgomery, Fujitsu Research of America, Sunnyvale, USA
* Sikhar Patranabis, ETH Zürich and Visa Research, Zürich, Switzerland
* Pratik Sarkar, Boston University, Boston, USA
### 摘要
> 我们提出了一个新的框架来构建轮完美（两轮）适应性安全的多方计算协议。我们证明了一种相对较弱的OT概念，我们称之为可分样本不可区分性OT（\(\mathsf {r\hbox {-}iOT}\)），足以在CRS模型下构建针对恶意敌手的两轮适应性安全的多方计算协议。然后，我们展示了如何从CDH、LPN或同构基于假设（例如CSIDH和CSI-FiSh）构造\(\mathsf {r\hbox {-}iOT}\)，这些假设可以被视为群操作。这给出了从CDH、LPN或同构基于假设构造的首个针对恶意敌手的两轮适应性安全的多方计算协议。我们进一步将非同构结果扩展到纯模型，实现了（据我们所知）首个从LPN构建的两轮适应性安全的多方计算协议，针对的是诚实但好奇的敌手。
> 
> 我们的结果使我们能够从密码学中几乎所有研究过的假设中构建针对恶意敌手的两轮适应性安全的多方计算协议。此外，我们从同构或LPN构造中得出的结果，为轮完美适应性安全的多方计算协议提供了首个后量子替代方案，以替代基于LWE的构建。在这一过程中，我们还展示了\(\mathsf {r\hbox {-}iOT}\)也意味着非承诺加密（NCE），从而从同构或LPN的角度得出了首个非承诺加密的构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_11](https://doi.org/10.1007/978-3-030-92075-3_11)
## Reverse Firewalls for Adaptively Secure MPC Without Setup.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#reverse-firewalls-for-adaptively-secure-mpc-without-setup) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#reverse-firewalls-for-adaptively-secure-mpc-without-setup)**
### 作者
* Suvradip Chakraborty, IST Austria, Klosterneuburg, Austria
* Chaya Ganesh, IISc Bangalore, Bengaluru, India
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Pratik Sarkar, Boston University, Boston, USA
### 摘要
> 我们研究在敌对设置下的多方计算（MPC），其中对诚实方的机器进行篡改。我们的目标是构建主动安全的MPC协议，其中各方会被敌对方自适应地腐败（与标准自适应安全设置相同），并且诚实方的机器受到损害。
> 
> 反防火墙（RF）的概念于EUROCRYPT'15由Mironov和Stephens-Davidowitz引入，作为一种保护协议免受诚实方设备被破坏的方法。直观上说，对于一方\(\mathcal {P}\)，其RF是一个外部实体，位于\(\mathcal {P}\)和外部世界之间，其任务是在其计算机被颠覆的情况下净化\(\mathcal {P}\)的输入和输出消息。Mironov和Stephens-Davidowitz构建了一个被动安全的两方计算协议。在CRYPTO'20上，Chakraborty、Dziembowski和Nielsen构建了一个改进了这一结果的具有防火墙的安全计算协议，既将其扩展到多方计算协议，也考虑了静态腐败存在时的主动安全性。
> 
> 在本文中，我们开始研究自适应设置下MPC的RF。我们提出了自适应安全MPC在反防火墙设置中的定义，探讨了安全概念之间的关系，然后在这个更强的自适应安全设置下构建MPC的反防火墙。我们还通过消除构建MPC的RF时所需的可信设置，解决了Chakraborty、Dziembowski和Nielsen的未解问题。
> 
> 为此，我们构建了适应安全的增强硬币抛掷协议和适应安全的零知识协议的反防火墙，并得到了一个无需设置的常数轮次适应安全MPC协议。在此过程中，我们提出了一种新的多方自适应安全硬币抛掷协议，具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_12](https://doi.org/10.1007/978-3-030-92075-3_12)
## On Time-Lock Cryptographic Assumptions in Abelian Hidden-Order Groups.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#on-time-lock-cryptographic-assumptions-in-abelian-hidden-order-groups) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#on-time-lock-cryptographic-assumptions-in-abelian-hidden-order-groups)**
### 作者
* Aron van Baarsen, CWI, Cryptology Group, Amsterdam, The Netherlands
* Marc Stevens, CWI, Cryptology Group, Amsterdam, The Netherlands
### 摘要
> 在本文中，我们研究了未知阶数的密码学有限阿贝尔群和在这些群中的困难假设。阿贝尔群需要多个群生成元，可以随机选择。我们对此设置以及其中的困难假设进行了形式化处理。此外，我们将代数群模型和强代数群模型从循环群推广到任意未知阶的有限阿贝尔群。基于这些形式化处理，我们提出了应对这个新设置的技术，并证明了新的归约关系。这些结果与虚二次数域的类群和基于时钟锁的密码学相关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_13](https://doi.org/10.1007/978-3-030-92075-3_13)
## Astrolabous: A Universally Composable Time-Lock Encryption Scheme.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#astrolabous-a-universally-composable-time-lock-encryption-scheme) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#astrolabous-a-universally-composable-time-lock-encryption-scheme)**
### 作者
* Myrto Arapinis, The University of Edinburgh, Edinburgh, UK
* Nikolaos Lamprou, The University of Edinburgh, Edinburgh, UK
* Thomas Zacharias, The University of Edinburgh, Edinburgh, UK
### 摘要
> 在这项工作中，我们研究了时钟加密（Time-Lock Encryption，TLE）密码学原语。TLE的概念涉及发起方对一条消息进行加密，只有在特定时间过去后才能解密。在Canetti（IEEE FOCS 2001）引入的通用可组合性（Universal Composability，UC）范式的基础上，我们将TLE的概念形式化为理想功能。此外，我们以基于游戏的方式提供了安全TLE方案的独立定义，并设计了一个依赖于此类安全TLE方案的混合协议。我们证明，如果底层的TLE方案满足独立的基于游戏的安全定义，则我们的混合协议在随机预言机模型下实现了TLE功能。最后，我们提出了Astrolabous，这是一个满足我们安全定义的TLE构造，从而实现了TLE功能的第一个UC实现。
> 
> 有趣的是，很难证明文献中提出的任何TLE构造都是UC安全的。这困难的原因与UC框架本身有关。直观地说，为了捕捉语义安全性，在理想世界中不应泄露关于明文的任何信息，因此密文不应包含与消息相关的任何信息。另一方面，所有密文最终都会被解密，导致在标准模型中无法区分真实世界和理想世界。我们通过在随机预言机模型中采用Nielsen（CRYPTO 2002）的技术来克服这个限制。具体而言，扩展后的TLE算法描述包括对随机预言机的调用，从而使我们的模拟器可以进行等价替换。这个扩展可以应用于任何满足我们独立基于游戏的安全定义的TLE算法，特别是Astrolabous。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_14](https://doi.org/10.1007/978-3-030-92075-3_14)
## Identity-Based Encryption for Fair Anonymity Applications: Defining, Implementing, and Applying Rerandomizable RCCA-Secure IBE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#identity-based-encryption-for-fair-anonymity-applications-defining-implementing-and-applying-rerandomizable-rcca-secure-ibe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#identity-based-encryption-for-fair-anonymity-applications-defining-implementing-and-applying-rerandomizable-rcca-secure-ibe)**
### 作者
* Yi Wang, School of Computer, National University of Defense Technology, Changsha, China
* Rongmao Chen, School of Computer, National University of Defense Technology, Changsha, China
* Baosheng Wang, School of Computer, National University of Defense Technology, Changsha, China
* Xinyi Huang, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Computer and Cyber Security, Fujian Normal University, Fuzhou, China
* Jianting Ning, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Computer and Cyber Security, Fujian Normal University, Fuzhou, China
* Jianting Ning, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York, USA
### 摘要
> 我们的背景是匿名加密方案隐藏其接收者，但在允许当局在需要时揭示接收者的环境中。虽然匿名身份基础加密（IBE）是这种公平匿名的自然选择（它通过设计让受信任的当局获得访问权），但事实上的安全标准（即IND-ID-CCA）与对匿名通信至关重要的密文重新随机性是不兼容的。因此，我们旨在将IBE的IND-ID-CCA安全性扩展为一个可以针对重新随机性进行有意义放宽，同时仍然保护免受主动对手的概念。为此，受到重放自适应选择密文攻击（RCCA）安全性概念（Canetti等人，Crypto’03）的启发，我们正式化了一个名为Anonymous Identity-Based RCCA（ANON-ID-RCCA）的新安全概念，针对可重新随机化IBE，并提出了第一个经过严格安全分析的建构。我们方案的核心是对双链范式的新颖扩展，这最初由Golle等人（CT-RSA’04）提出，并后来由Prabhakaran和Rosulek（Crypto’07）扩展到著名的Gentry-IBE（Eurocrypt’06）。值得注意的是，到目前为止，我们的方案是第一个同时满足自适应安全性、重新随机性和接收者匿名性的IBE。作为我们新概念的应用，我们设计了一个新的基于身份的通用混合网络，不需要公钥分发（具有公平匿名性）。更一般地说，我们的新概念也适用于大多数现有的具有重新随机化RCCA安全性的应用，以消除对公钥分发基础设施的需要，同时实现公平性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_15](https://doi.org/10.1007/978-3-030-92075-3_15)
## Simulation-Based Bi-Selective Opening Security for Public Key Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#simulation-based-bi-selective-opening-security-for-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#simulation-based-bi-selective-opening-security-for-public-key-encryption)**
### 作者
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
### 摘要
> 选择性开放攻击（SOA）（用于公钥加密，PKE）涉及这样一种多用户场景，对手动地污染一部分用户以破解诚实创建的密文子集，并试图了解一些未打开（但可能相关）密文的消息的情况。到目前为止，选择性开放攻击的概念仅在两种情况下考虑：发送者选择性开放（SSO），其中部分发送者被污染并且消息以及用于加密的随机性被公开；和接收者选择性开放（RSO），其中部分接收者被污染并且消息以及用于解密的秘钥被公开。
> 
> 在本文中，我们考虑了更自然和更一般的选择性开放安全设置。在这种设置中，对手可能会同时自适应地污染部分发送者和接收者，并获得明文消息以及用于加密的内部随机性和用于解密的秘钥，同时希望未被污染的方保持保护。我们将其表示为Bi-SO安全，因为它让人想起了PKE的双重否认。
> 
> 我们首先通过基于模拟（SIM）风格来正式界定Bi-SO安全的要求，并证明一些实际的PKE方案在随机预言机模型中实现了SIM-Bi-SO-CCA安全。然后，我们提出了一个Bi-SO安全的弱模型，称为SIM-wBi-SO-CCA安全，并论证了它仍然是有意义和有用的。我们提出了一种实现了SIM-wBi-SO-CCA安全的PKE方案的通用构造，并从各种标准假设中实例化它们。我们的通用构造是建立在一种新提出的原语之上，即具有密钥等价性的universalκ哈希证明系统，这可能具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_16](https://doi.org/10.1007/978-3-030-92075-3_16)
## Key Encapsulation Mechanism with Tight Enhanced Security in the Multi-user Setting: Impossibility Result and Optimal Tightness.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#key-encapsulation-mechanism-with-tight-enhanced-security-in-the-multi-user-setting-impossibility-result-and-optimal-tightness) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#key-encapsulation-mechanism-with-tight-enhanced-security-in-the-multi-user-setting-impossibility-result-and-optimal-tightness)**
### 作者
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
### 摘要
> 在多用户环境中部署的密钥封装机制（KEM）可能会面临对手损坏某些用户以获取其秘密密钥并由于用户的粗心密钥管理而获得一些封装密钥的情况。为了抵抗此类攻击，我们规范了Enhanced security against Chosen Plaintext/Ciphertext Attack (ECPA/ECCA)，要求未透露的封装密钥在未被破坏的用户下具有伪随机性。这种增强的KEM安全性对于基于KEM构建的一类认证密钥交换协议的安全性非常有效。
> 
> 本文研究了在多用户环境中实现紧凑的ECPA和ECCA安全性的可行性，并提出了一种无法实现的结果和一个可以得到的最优安全损失因子。由于Bader等人（EUROCRYPT 2016）提出的现有元归约技术排除了一些KEMs，但许多众所周知的KEMs，如Cramer-Shoup KEM（SIAM J. Comput. 2003），Kurosawa-Desmedt KEM（CRYPTO 2004），都无法满足需求。为了解决这个问题，我们开发了一种名为KEM的秩和一种新的元归约秘密密钥分割策略的新技术工具。借助这个新工具和新策略，我们证明了多项式有界秩的KEM方案无法从非交互复杂性假设中实现紧凑的ECPA和ECCA安全，并且安全损失至少与用户数量n成线性关系。这种无法实现结果涵盖了许多众所周知的KEMs，包括Cramer-Shoup KEM，Kurosawa-Desmedt KEM等等。此外，我们通过提供具有安全损失\(\varTheta (n)\)的具体KEMs表明了线性安全损失是最优的。这是通过从ECPA/ECCA安全到传统的多挑战CPA/CCA安全的线性损失因子进行非平凡的安全归约来证明的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_17](https://doi.org/10.1007/978-3-030-92075-3_17)
## Hierarchical Integrated Signature and Encryption - (or: Key Separation vs. Key Reuse: Enjoy the Best of both Worlds).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#hierarchical-integrated-signature-and-encryption-or-key-separation-vs-key-reuse-enjoy-the-best-of-both-worlds) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#hierarchical-integrated-signature-and-encryption-or-key-separation-vs-key-reuse-enjoy-the-best-of-both-worlds)**
### 作者
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
* Qiang Tang, School of Computer Science, University of Sydney, Sydney, Australia
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
### 摘要
> 在这项工作中，我们引入了分层集成签名与加密（HISE）的概念。其中，一个单一的公钥同时用于签名和加密，并且可以从签名密钥派生仅用于解密的秘密密钥，从而实现安全的解密能力委派。HISE具有密钥重用的优势，并支持个别密钥的托管。我们提出了两种通用的HISE构建方法。一种是基于（受限）身份密码体制的构建方法，另一种是基于统一单向函数、公钥加密和通用型公开硬币零知识证明的构建方法。为了进一步实现全局密钥托管，我们稍微绕了一下路来重新审视全局托管PKE（Public Key Encryption）作为一个独立感兴趣的对象及其众多应用。我们形式化了全局托管PKE的语法和安全模型，并提供了两种通用的构建方法。第一种方法是将任何PKE编译为具有全局托管属性的方法的通用方法。第二种方法建立了三方非交互式密钥交换与全局托管PKE之间的联系。结合上述研究结果，我们获得了支持个别和全局密钥托管的HISE方案。我们实例化了我们的通用构建方法，在128位安全性下实现了所有具体方案。我们的方案在性能上与最好的笛卡尔积组合公钥方案相当，并在功能更丰富且公钥重用方面具有优势。作为一个副产品，我们还获得了一个新的全局托管PKE方案，其速度比之前的最佳工作快12-30倍，这可能是一个独立引人关注的成果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_18](https://doi.org/10.1007/978-3-030-92075-3_18)
## Tardigrade: An Atomic Broadcast Protocol for Arbitrary Network Conditions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#tardigrade-an-atomic-broadcast-protocol-for-arbitrary-network-conditions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#tardigrade-an-atomic-broadcast-protocol-for-arbitrary-network-conditions)**
### 作者
* Erica Blum, University of Maryland, College Park, MD, USA
* Jonathan Katz, University of Maryland, College Park, MD, USA
* Julian Loss, CISPA Helmoltz Center for Information Security, Saarbrücken, Germany
### 摘要
> 我们研究了原子广播问题——区块链协议所解决的基本问题。在恶意对手存在的情况下，对正在运行该协议的$n$个参与方中的一部分参与方进行破坏。现有的协议要么在同步网络（其中消息在某个已知时间$\varDelta$内被传递）中对任意数量的破坏具有鲁棒性，但一旦同步假设被违反就会失败；要么在异步网络中对少于$n/3$个破坏的参与方具有容错能力（其中消息可以任意延迟），即使网络表现良好，也无法容忍更多的破坏。
> 
> 我们设计了一种原子广播协议（Tardigrade），在网络是同步的情况下，对于任何满足$t_s \ge t_a$且$2t_s + t_a < n$的值，如果有$t_s$个破坏的参与方，提供安全性，在异步网络中即使有$t_a$个破坏的参与方仍然保持安全。我们证明了Tardigrade在$t_s$和$t_a$之间实现了最优的权衡。最后，我们展示了第二个协议（upgrade），它具有类似的（但稍微较弱）保证，并且实现了与$n$线性的每个交易通信复杂度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_19](https://doi.org/10.1007/978-3-030-92075-3_19)
## Onion Routing with Replies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#onion-routing-with-replies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#onion-routing-with-replies)**
### 作者
* Christiane Kuhn, Karlsruhe Institute of Technology, KASTEL, Karlsruhe, Germany
* Thorsten Strufe, Karlsruhe Institute of Technology, KASTEL, Karlsruhe, Germany
* Dennis Hofheinz, ETH Zürich, Zürich, Switzerland
* Andy Rupp, University of Luxembourg, Esch-sur-Alzette, Luxembourg
### 摘要
> 洋葱路由（OR）协议是提供匿名互联网通信的重要工具。OR协议使用户可以匿名向服务器发送请求。OR协议的一个基本问题是如何处理回复：理想情况下，我们希望服务器能够向匿名用户发送回复，而不知道或泄露用户的身份。
> 
> 现有的OR协议确实允许这样的回复，但不能证明保护回复的有效载荷（即消息）免受操纵。 Kuhn等人（IEEE S&P 2020）表明，实际上可以利用这种操纵来打破整个协议的匿名性。
> 
> 在这项工作中，我们弥补了这一不足，并提供了OR具有受保护回复的第一个框架和协议。我们以通用可组合性模型中理想功能的意义上定义了安全性，并为单个属性提供了相应的（较不复杂的）基于游戏的安全概念。
> 
> 我们还提供了我们框架的两个安全实例：一个基于可更新加密，另一个基于简洁的非交互性论证（SNARGs）来验证请求和回复中的有效载荷。在这两种情况下，我们的中心技术手段是对传输的有效载荷数据的隐式认证，而不是在以前的解决方案中明确但不足的认证（使用MAC）。我们的结果展示了可更新加密在长期数据存储之外的新颖和令人惊讶的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_20](https://doi.org/10.1007/978-3-030-92075-3_20)
## Private Join and Compute from PIR with Default.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#private-join-and-compute-from-pir-with-default) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#private-join-and-compute-from-pir-with-default)**
### 作者
* Tancrède Lepoint, Menlo Park, USA
* Sarvar Patel, Google LLC, Menlo Park, USA
* Mariana Raykova, Google LLC, Menlo Park, USA
* Karn Seth, Google LLC, Menlo Park, USA
* Ni Trieu, Arizona State University, Tempe, USA
### 摘要
> 私有连接和计算（PJC）功能使跨不同数据库分布的数据进行安全计算，并适用于各种应用程序，其中许多应用于输入数据库显着不同大小的设置。
> 
> 我们引入了具有默认值的私有信息检索（PIR）概念，该概念以一种方式实现了两方PJC功能，它隐藏了两个数据库交集的大小，并且在较大数据库的大小上产生了次线性通信成本。我们提供了两种构造此功能的方法，其中一种需要离线线性通信，可以在查询中摊销，而另一种则对每个查询提供了次线性成本，但依赖于更昂贵的计算工具。我们构造了内积PJC，它适用于广告转化测量和接触者追踪，依赖于带有默认值的PIR的扩展。我们评估了我们的构造的效率，它可以使数据库大小为2的25次方（或具有如此大小的数据库的内积PJC）进行2的8次方PIR具有默认值的查找，通信为44MB，客户端成本低于0.17美分，服务器成本为26.48美分。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_21](https://doi.org/10.1007/978-3-030-92075-3_21)
## Generalized Channels from Limited Blockchain Scripts and Adaptor Signatures.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#generalized-channels-from-limited-blockchain-scripts-and-adaptor-signatures) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#generalized-channels-from-limited-blockchain-scripts-and-adaptor-signatures)**
### 作者
* Lukas Aumayr, Technische Universität Wien, Vienna, Austria
* Matteo Maffei, Technische Universität Wien, Vienna, Austria
* Oguzhan Ersoy, Delft University of Technology, Delft, Netherlands
* Andreas Erwig, Technische Universität Darmstadt, Darmstadt, Germany
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Siavash Riahi, Technische Universität Darmstadt, Darmstadt, Germany
* Kristina Hostáková, ETH Zürich, Zürich, Switzerland
* Pedro Moreno-Sanchez, IMDEA Software Institute, Madrid, Spain
### 摘要
> 去中心化和无需许可的账本由于它们的共识协议要求在链上存储每笔交易，因此提供了固有的低交易速率。解决这种可扩展性问题的一个重要方案是利用离链协议，其中各方只需将有限数量的交易发布到链上。现有解决方案可以大致分为以下几类：（i）应用特定通道（如支付通道），其功能严格弱于潜在的区块链；以及（ii）状态通道，支持任意智能合约，但只与具有图灵完备脚本语言（如以太坊）的少数区块链兼容。
> 
> 在这项工作中，我们引入并正式化了广义通道的概念，允许用户以离链方式执行底层区块链支持的任何操作。广义通道因此扩展了支付通道的功能，并放宽了状态通道的定义。我们提出了一种具体的构建方法，适用于支持事务授权、时间锁和常数个布尔"与"和"或"操作的任何区块链——许多（非图灵完备）区块链，包括流行的比特币，在满足这些要求。为此，我们利用适配器签名——这是密码学上已经使用的一种原语，但在本研究中首次被形式化为一个独立的原语。我们在通用组合性框架中形式地证明了我们广义通道构建的安全性。
> 
> 作为一个重要的实际贡献，我们的广义通道构建在效率方面优于最先进的支付通道构建——闪电网络。具体来说，它将离链通信复杂度减半，并将在离链应用数量的情况下争议时的链上占用从线性降低到常量。最后，我们通过原型实施评估了我们构建的实用性，并讨论了各种应用，包括金融保障的公平双方计算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_22](https://doi.org/10.1007/978-3-030-92075-3_22)
## ConTra Corona: Contact Tracing against the Coronavirus by Bridging the Centralized-Decentralized Divide for Stronger Privacy.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#contra-corona-contact-tracing-against-the-coronavirus-by-bridging-the-centralized-decentralized-divide-for-stronger-privacy) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#contra-corona-contact-tracing-against-the-coronavirus-by-bridging-the-centralized-decentralized-divide-for-stronger-privacy)**
### 作者
* Wasilij Beskorovajnov, FZI Research Center for Information Technology, Karlsruhe, Germany
* Felix Dörre, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Gunnar Hartung, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Alexander Koch, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Jörn Müller-Quade, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
* Thorsten Strufe, Competence Center for Applied Security Technology (KASTEL), Karlsruhe Institute of Technology (KIT), Karlsruhe, Germany
### 摘要
> 接触者追踪是减缓任何大流行传播的最重要干预措施之一，通常采用手动接触者追踪的形式。智能手机便利的数字接触者追踪可以帮助增加追踪能力，并将覆盖范围扩展到那些自己不认识的联系人。大多数已实施的协议使用本地蓝牙低功耗（BLE）通信来检测与传染相关的近距离，再加上必要的加密保护来提高此类系统用户的隐私。然而，当前的分散式协议，包括DP3T[T+20]，并未充分保护感染用户免受其状态被揭露给他们的联系人，这引发了对社会污名化的恐惧。
> 
> 我们通过提出一个新的实际解决方案来缓解这一问题，该方案具有更强的隐私保证来对抗主动敌对者。它基于“上传你所观察到的”模式，包括服务器端的职责分离和一个机制来确保用户无法推断出哪次相遇导致了高时间分辨率的警告。最后，我们在真实-理想设置中提出了基于模拟的数字接触者追踪安全概念，并证明了我们的协议在这一框架下的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_23](https://doi.org/10.1007/978-3-030-92075-3_23)
## Cryptographic Analysis of the Bluetooth Secure Connection Protocol Suite.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-2].md#cryptographic-analysis-of-the-bluetooth-secure-connection-protocol-suite) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-2].md#cryptographic-analysis-of-the-bluetooth-secure-connection-protocol-suite)**
### 作者
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Olga Sanina, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 我们对蓝牙安全连接协议套件进行了密码分析。蓝牙支持多个子协议，如数字比对，密码输入和即插即用，以匹配设备的不同输入/输出能力。先前的分析（如Lindell，CT-RSA'09或Troncoso和Hale，NDSS'21）通常只考虑（并确认）单个子协议的安全性。然而，最近实际验证的攻击，例如蓝牙的身份验证和密钥保密性的方法混淆攻击（von Tschirschnitz等人，S＆P 21），通常利用了不同子协议之间的不良相互作用。更糟糕的是，其中一些攻击表明无法证明蓝牙协议套件是安全的经过身份验证的密钥交换协议。因此，我们的目标是尽最大可能，并且表明，如果假定信任-首次使用（TOFU）关系，则协议仍满足密钥交换协议的常见密钥保密要求。这意味着对手需要在初始连接期间发动主动攻击，否则随后的重新连接仍然安全。在调查蓝牙协议的密码强度时，我们还研究了蓝牙中地址随机化的隐私机制（仅适用于低功耗版本）。我们表明，加密确实提供了相当程度的地址隐私，尽管这并不排除可以通过其他手段（如物理特征）识别设备。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92075-3_24](https://doi.org/10.1007/978-3-030-92075-3_24)
