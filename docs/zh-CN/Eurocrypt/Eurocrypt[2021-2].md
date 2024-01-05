# Eurocrypt[2021-2]
## Ciminion: Symmetric Encryption Based on Toffoli-Gates over Large Finite Fields.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#ciminion-symmetric-encryption-based-on-toffoli-gates-over-large-finite-fields) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#ciminion-symmetric-encryption-based-on-toffoli-gates-over-large-finite-fields)**
### 作者
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
* Christoph Dobraunig, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Anna Guinet, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Daniël Kuijsters, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 受到安全多方计算（MPC）、完全同态加密（FHE）和零知识证明（ZK）等新应用的推动，对于在自然算法描述中最小化字段乘法数量的对称加密方案的需求显而易见。这一发展引出了许多专用的对称加密方案，以最小化在\( \mathbb {F}_{2^n} \)或\( \mathbb {F}_{p} \)（其中p是素数）中的乘法运算次数。这些新颖方案带来了新的密码分析洞察，破解了其中的许多方案。有趣的是，据我们所知，所有旨在最小化乘法次数的新提议方案，都只在基于幂映射的S盒中使用了这些乘法运算，通常采用\( x^3 \)或\( x^{-1} \)的形式。此外，大多数方案依赖复杂且资源密集型的线性层来实现低乘法计数。在本文中，我们提出了Ciminion，一种在大型二进制或素数域中最小化字段乘法数量的加密方案，并使用非常轻量级的线性层。与那些旨在最小化\( \mathbb {F}_{2^n} \)或\( \mathbb {F}_{p} \)中字段乘法的其他方案不同，Ciminion依赖于Toffoli门来改善整体设计的非线性扩散。此外，我们还将基元量身定制为Farfalle-like结构的使用，以尽可能减少所使用的基元的轮数和字段乘法的数量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_1](https://doi.org/10.1007/978-3-030-77886-6_1)
## Mind the Middle Layer: The HADES Design Strategy Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#mind-the-middle-layer-the-hades-design-strategy-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#mind-the-middle-layer-the-hades-design-strategy-revisited)**
### 作者
* Nathan Keller, Mathematics Department, Bar Ilan University, Ramat Gan, Israel
* Asaf Rosemarin, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> HADES 设计策略将经典 SPN 构造与部分 SPN (PSPN) 构造相结合，其中在每个加密轮中，非线性层仅应用于状态的一部分。在 HADES 设计中，由 PSPN 轮组成的中间层被 SPN 轮的外层包围。HADES 的安全性论证仅涉及 SPN 轮，而不考虑 PSPN 轮。这使设计者不需要对用作线性混合操作的 MDS 矩阵施加任何限制。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_2](https://doi.org/10.1007/978-3-030-77886-6_2)
## Password Hashing and Preprocessing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#password-hashing-and-preprocessing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#password-hashing-and-preprocessing)**
### 作者
* Pooya Farshim, University of York, York, UK
* Stefano Tessaro, University of Washington, Seattle, USA
### 摘要
> 当可获取哈希函数的任意预处理信息时，损害m个实例出的t个哈希密码所需的密码分析努力如何随用户数量的变化而变化？我们为这个问题在辅助信息下的多实例设置中提供了正式的处理。我们工作的一个中心贡献是一个（可以说是简单的）转录统计论点，它使我们能够解决Bellare，Ristenpart和Tessaro (BRT; CRYPTO 2012)在多实例安全性中遗留下来的基本问题。我们利用这种证明技术，在随机模型协议情况下，正式证明在具有辅助信息的环境下，哈希加盐密码的不可恢复性。为此，我们利用了Coretti等人 (CRYPTO 2018) 针对处理辅助信息的最新预采样技术。我们的约束与实践中常常假设的紧密匹配。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_3](https://doi.org/10.1007/978-3-030-77886-6_3)
## Compactness of Hashing Modes and Efficiency Beyond Merkle Tree.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#compactness-of-hashing-modes-and-efficiency-beyond-merkle-tree) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#compactness-of-hashing-modes-and-efficiency-beyond-merkle-tree)**
### 作者
* Elena Andreeva, Technical University of Vienna, Vienna, Austria
* Rishiraj Bhattacharyya, NISER, HBNI, Jatani, India
* Arnab Roy, University of Klagenfurt, Klagenfurt, Austria
### 摘要
> 我们重新考虑了设计最优高效的密码学安全哈希函数的经典问题。传统上，哈希函数是通过在较小域上的原语上应用操作模式进行设计的。 Shrimpton和Stam（ICALP 2008）、Rogaway和Steinberger（CRYPTO 2008）以及Mennink和Preneel（CRYPTO 2012）的结果展示了如何通过非压缩原语实现2n到n位压缩函数的最优高效设计，并具有渐近最优的\(2^{n/2-\epsilon }\)-query碰撞抵抗性。为更大域（\({>}{2n}\)位）设计最优高效和安全的哈希函数仍然是一个未解决的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_4](https://doi.org/10.1007/978-3-030-77886-6_4)
## Three Third Generation Attacks on the Format Preserving Encryption Scheme FF3.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#three-third-generation-attacks-on-the-format-preserving-encryption-scheme-ff3) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#three-third-generation-attacks-on-the-format-preserving-encryption-scheme-ff3)**
### 作者
* Ohad Amon, Computer Science Department, Tel Aviv University, Tel Aviv, Israel
* Eyal Ronen, Computer Science Department, Tel Aviv University, Tel Aviv, Israel
* Orr Dunkelman, Computer Science Department, University of Haifa, Haifa, Israel
* Nathan Keller, Department of Mathematics, Bar-Ilan University, Ramat Gan, Israel
* Adi Shamir, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 格式保留加密（FPE）方案接受来自任何有限值集合（如社会安全号码或出生日期）的明文，并产生属于同一集合的密文。它们在实践中非常有用，因为它们使得可以加密现有的数据库或通信数据包而不改变其格式。由于行业需求，NIST在2016年标准化了两种这样的加密方案，称为FF1和FF3。它们立即吸引了大量的密码分析关注，攻击复杂性逐渐降低。目前对Feistel构造的FF3的最佳已知攻击具有数据和内存复杂性为\({O}(N^{11/6})\)和时间复杂性为\({O}(N^{17/6})\)，其中输入属于大小为\(N \times N\)的域。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_5](https://doi.org/10.1007/978-3-030-77886-6_5)
## Cryptanalysis of the GPRS Encryption Algorithms GEA-1 and GEA-2.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#cryptanalysis-of-the-gprs-encryption-algorithms-gea-1-and-gea-2) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#cryptanalysis-of-the-gprs-encryption-algorithms-gea-1-and-gea-2)**
### 作者
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* David Rupprecht, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
* Patrick Derbez, Univ Rennes, CNRS, IRISA, Rennes, France
* Gaëtan Leurent, Inria, Paris, France
* Håvard Raddum, Simula UiB, Bergen, Norway
* Yann Rotella, Laboratoire de Mathématiques de Versailles, Université Paris-Saclay, UVSQ, CNRS, Versailles, France
### 摘要
> 本论文首次公开提出了对GEA-1和GEA-2算法的密码分析攻击。我们发现，与提供全64位安全性不同，从只有65位已知密钥流（至少包含来自一个帧的24位）中可以恢复GEA-1的初始状态，并且需要2^{40}次GEA-1评估和44.5 GiB的内存。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_6](https://doi.org/10.1007/978-3-030-77886-6_6)
## Pre-computation Scheme of Window τNAF for Koblitz Curves Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#pre-computation-scheme-of-window-naf-for-koblitz-curves-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#pre-computation-scheme-of-window-naf-for-koblitz-curves-revisited)**
### 作者
* Wei Yu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Guangwu Xu, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Qingdao, 266237, Shandong, China
* Guangwu Xu, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, Shandong, China
### 摘要
> 设\(E_a/ \mathbb {F}_{2}\)：\(y^2+xy=x^3+ax^2+1\)是一条Koblitz曲线。窗口\(\tau\)- 递次非相邻形式（窗口\(\tau\)NAF）目前是在\(E_a/ \mathbb {F}_{2^m}\)上执行标量乘法的标准表示系统，利用 Frobenius 映射\(\tau\)。本研究关注标量乘法的预先计算部分。我们首先介绍\(\mu \bar{\tau}\)-运算，其中\(\mu = (-1)^{1-a}\)，\(\bar{\tau}\)是\(\tau\)的共轭复数。然后，我们推导出\(\mu \bar{\tau}\)-运算的高效公式，并将其用于一种新颖的预先计算方案。我们的预先计算方案需要的运算量为6M\(\,+\,6\)S，18M\(\,+\,17\)S，44M\(\,+\,32\)S和88M\(\,+\,62\)S (\(a=0\))，以及6M\(\,+\,6\)S，19M\(\,+\,17\)S，46M\(\,+\,32\)S和90M\(\,+\,62\)S (\(a=1\))，对于窗口\(\tau\)NAF的宽度分别为4到7。相比于现有文献中的预先计算技术，其速度大约提高了两倍。我们新的高效预先计算方案的影响也体现在标量乘法的显著改进上。传统上，窗口\(\tau\)NAF最多使用宽度为6以实现最佳的标量乘法。由于所提出的预先计算方案的成本大幅降低，我们能够将窗口\(\tau\)NAF的宽度增加到7以实现更好的标量乘法。这表明预先计算部分在执行标量乘法中变得更加重要。通过我们的高效预先计算和新的窗口宽度，我们的标量乘法运行时间至少为 Kohel 先生的工作（Eurocrypt'2017）及之前最佳预先计算的 85.2%。我们的研究结果将 Koblitz 曲线的标量乘法推向一个重要的新阶段，这是一个研究已久且广泛研究的领域。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_7](https://doi.org/10.1007/978-3-030-77886-6_7)
## Dummy Shuffling Against Algebraic Attacks in White-Box Implementations.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#dummy-shuffling-against-algebraic-attacks-in-white-box-implementations) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#dummy-shuffling-against-algebraic-attacks-in-white-box-implementations)**
### 作者
* Alex Biryukov, DCS and SnT, University of Luxembourg, Luxembourg City, Luxembourg
* Aleksei Udovenko, CryptoExperts, Paris, France
### 摘要
> 在2016年的CHES会议上，Bos等人展示了大部分现有的白盒实现在标准侧信道攻击下容易被破解。一个自然的想法是应用已经发展良好的侧信道对抗方案 - 线性掩码方案 - 但是这些实现仍然容易受到线性代数攻击的威胁，这种攻击利用白盒环境中没有噪声可利用，并且适用于任何线性掩码阶层。在2018年的ASIACRYPT会议上，Biryukov和Udovenko提出了一种保护免受线性代数攻击的安全模型（简称BU模型）以及一种新的二次掩码方案，在该模型下可以证明其安全性。然而，针对更高阶层攻击的对策问题尚未解决。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_8](https://doi.org/10.1007/978-3-030-77886-6_8)
## Advanced Lattice Sieving on GPUs, with Tensor Cores.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#advanced-lattice-sieving-on-gpus-with-tensor-cores) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#advanced-lattice-sieving-on-gpus-with-tensor-cores)**
### 作者
* Léo Ducas, CWI, Amsterdam, The Netherlands
* Marc Stevens, CWI, Amsterdam, The Netherlands
* Wessel van Woerden, CWI, Amsterdam, The Netherlands
### 摘要
> 在这项工作中，我们研究了格子的各种最先进的筛选算法（Becker-Gama-Joux 2015，Becker-Ducas-Gama-Laarhoven 2016，Herold-Kirshanova 2017）在General Sieve Kernel (G6K, Albrecht等人，2019)上的GPU实现。我们充分利用了最近引入的Tensor Cores，这些核心最初是为光线追踪和机器学习而设计的，并展示了它们在密码分析任务中的适用性。我们还提出了一种新的双哈希技术，用于高效检测“值得提升”的对，以加速G6K的一个关键组成部分：寻找短向量的提升。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_9](https://doi.org/10.1007/978-3-030-77886-6_9)
## Fast Verification of Masking Schemes in Characteristic Two.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#fast-verification-of-masking-schemes-in-characteristic-two) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#fast-verification-of-masking-schemes-in-characteristic-two)**
### 作者
* Nicolas Bordes, Univ. Grenoble Alpes, CNRS, Grenoble INP, Institute of Engineering Univ. Grenoble Alpes, LJK, 38000, Grenoble, France
* Pierre Karpman, Univ. Grenoble Alpes, CNRS, Grenoble INP, Institute of Engineering Univ. Grenoble Alpes, LJK, 38000, Grenoble, France
### 摘要
> 我们重新研究了由Belaïd等人在CRYPTO 2017年引入的以矩阵模型为基础的非干扰（NI）探测掩码设备安全性的方法。这导致了两个主要结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_10](https://doi.org/10.1007/978-3-030-77886-6_10)
## On the Power of Expansion: More Efficient Constructions in the Random Probing Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#on-the-power-of-expansion-more-efficient-constructions-in-the-random-probing-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#on-the-power-of-expansion-more-efficient-constructions-in-the-random-probing-model)**
### 作者
* Sonia Belaïd, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Abdul Rahman Taleb, CryptoExperts, Paris, France
* Abdul Rahman Taleb, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
### 摘要
> 随机探测模型是一种泄漏模型，其中电路的每根导线以给定的概率p进行泄漏。由于可以将该模型简化为噪声泄漏模型，因此该模型在实际中具有重要意义，噪声泄漏模型被认为是对功耗和电磁泄漏攻击的正确形式化。此外，相比于噪声泄漏模型，随机探测模型更方便用于证明遮蔽方案的安全性。在最近的一项工作中，Ananth、Ishai和Sahai（CRYPTO 2018）引入了一种良好的扩展策略来构建随机探测安全电路。他们的构造容忍了一个\(2^{-26}\)的泄漏概率，这是随机探测模型中可达到的第一个量化泄漏概率。在后续的一项工作中，Belaïd、Coron、Prouff、Rivain和Taleb（CRYPTO 2020）推广了他们的想法，并提出了一个完整而实用的框架来生成随机探测安全电路。所谓的扩展编译器可以引导简单的基本装置，只要它们满足一种称为随机探测可扩展性（RPE）的新安全概念。他们还提供了一个框架的具体实例，该实例容忍\(2^{-8}\)的泄漏概率，在复杂度为\(\mathcal {O}(\kappa ^{7.5})\)（其中\(\kappa \)表示安全参数）的情况下进行。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_11](https://doi.org/10.1007/978-3-030-77886-6_11)
## Leakage-Resilience of the Shamir Secret-Sharing Scheme Against Physical-Bit Leakages.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilience-of-the-shamir-secret-sharing-scheme-against-physical-bit-leakages) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilience-of-the-shamir-secret-sharing-scheme-against-physical-bit-leakages)**
### 作者
* Hemanta K. Maji, Department of Computer Science, Purdue University, West Lafayette, USA
* Hai H. Nguyen, Department of Computer Science, Purdue University, West Lafayette, USA
* Mingyuan Wang, Department of Computer Science, Purdue University, West Lafayette, USA
* Anat Paskin-Cherniavsky, Department of Computer Science, Ariel University, Ariel, Israel
* Tom Suad, Department of Computer Science, Ariel University, Ariel, Israel
### 摘要
> 高效的Reed-Solomon码重建算法，例如Guruswami和Wootters（STOC-2016）的研究，可以转化为对Shamir秘密分享方案在特征2域上的本地泄漏攻击。然而，Benhamouda、Degwekar、Ishai和Rabin（CRYPTO-2018）显示，如果重建阈值大约是总参与方数量的0.87倍，那么Shamir秘密分享方案在素数域上对于一位本地泄漏具有泄漏容忍性。在一些应用场景中，如安全多方乘法运算，重建阈值必须最多为参与方数量的一半。此外，Shamir秘密分享方案能够容忍的泄漏位数也不明确。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_12](https://doi.org/10.1007/978-3-030-77886-6_12)
## Leakage Resilient Value Comparison with Application to Message Authentication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilient-value-comparison-with-application-to-message-authentication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#leakage-resilient-value-comparison-with-application-to-message-authentication)**
### 作者
* Christoph Dobraunig, Lamarr Security Research, Graz, Austria
* Christoph Dobraunig, Graz University of Technology, Graz, Austria
* Bart Mennink, Radboud University, Nijmegen, The Netherlands
### 摘要
> 侧信道攻击对存储在设备上的秘密信息构成威胁，尤其是当对手物理接触设备时。因此，针对密码算法的此类攻击采取防范措施已经是一个被大量研究的课题。在本文中，我们摒弃对密码算法的研究，转而关注更基本操作的侧信道保护，即对已知的对手控制值与秘密值进行比较。在消息认证码（MAC）或认证加密过程的标签比较中会发生与侧信道泄漏有关的比较，但通常在安全分析中被省略。此外，作为故障防护措施的比较也可能对侧信道攻击敏感。在本研究中，我们利用通常作为实现一部分的密码构建模块对值进行泄漏鲁棒性的形式化分析。我们的研究结果表明，如果已经存在受足够保护的对公共密码置换或（可调整）分组密码进行实现的资源，那么没有必要额外投入资源来实现保护的比较操作本身。我们通过将研究结果应用于轻型认证加密方案ISAP所使用的SuKS消息认证码和经典的散列-然后伪随机函数构造来补充我们的贡献。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_13](https://doi.org/10.1007/978-3-030-77886-6_13)
## The Mother of All Leakages: How to Simulate Noisy Leakages via Bounded Leakage (Almost) for Free.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#the-mother-of-all-leakages-how-to-simulate-noisy-leakages-via-bounded-leakage-almost-for-free) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#the-mother-of-all-leakages-how-to-simulate-noisy-leakages-via-bounded-leakage-almost-for-free)**
### 作者
* Gianluca Brian, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Antonio Faonio, EURECOM, Sophia-Antipolis, France
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* João Ribeiro, Imperial College London, London, UK
* Mark Simkin, Aarhus University, Aarhus, Denmark
* Maciej Skórski, University of Luxembourg, Luxembourg, Luxembourg
### 摘要
> 我们展示了最常见的噪声泄漏可以在信息理论设置中使用有界泄漏的单个查询进行模拟，直到小的统计模拟误差和泄漏参数的轻微损失。后者特别适用于最常用的噪声泄漏模型之一，其中使用条件平均 min-熵（Naor 和 Segev，CRYPTO'09 和 SICOMP'12）来测量嘈杂程度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_14](https://doi.org/10.1007/978-3-030-77886-6_14)
## Message-Recovery Laser Fault Injection Attack on the Classic McEliece Cryptosystem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#message-recovery-laser-fault-injection-attack-on-the-classic-mceliece-cryptosystem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#message-recovery-laser-fault-injection-attack-on-the-classic-mceliece-cryptosystem)**
### 作者
* Pierre-Louis Cayrel, Univ Lyon, UJM-Saint-Etienne, CNRS, Laboratoire Hubert Curien UMR 5516, 42023, Saint-Etienne, France
* Lilian Bossuet, Univ Lyon, UJM-Saint-Etienne, CNRS, Laboratoire Hubert Curien UMR 5516, 42023, Saint-Etienne, France
* Brice Colombier, Univ Grenoble Alpes, CNRS, Grenoble INP, TIMA, 38000, Grenoble, France
* Vlad-Florin Drăgoi, Faculty of Exact Sciences, Aurel Vlaicu University, Arad, Romania
* Vlad-Florin Drăgoi, LITIS, University of Rouen Normandie, Mont-Saint-Aignan, France
* Alexandre Menu, IMT, Mines Saint-Etienne, Centre CMP, Equipe Commune CEA Tech-Mines Saint-Etienne, 13541, Gardanne, France
### 摘要
> 编码为基础的公钥加密系统是作为抗量子攻击的公钥加密算法的有前途的候选者。它们的安全性是建立在综合译码问题的难题上的。在有限域（通常为\(\mathbb {F}_{2}\)）中计算综合译码可以确保构建的安全性。本文显示，如果在\(\mathbb {N}\)中计算综合译码，则问题变得更容易解决。通过激光故障注入，我们说明了如何通过破坏特定指令在\(\mathbb {N}\)中计算矩阵-向量乘积，并进行了实验证实。为了在\(\mathbb {N}\)中解决综合译码问题，我们提出了将其简化为整数线性规划问题。我们利用线性规划求解器的计算效率，对NIST后量子密码标准化挑战中的基于编码的提案进行实时消息恢复攻击。我们在最坏情况下进行攻击，即考虑随机二进制码，并在台式计算机上在几分钟内恢复出初始消息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_15](https://doi.org/10.1007/978-3-030-77886-6_15)
## Multi-source Non-malleable Extractors and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#multi-source-non-malleable-extractors-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#multi-source-non-malleable-extractors-and-applications)**
### 作者
* Vipul Goyal, CMU and NTT Research, Pittsburgh, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
* Chenzhi Zhu, Tsinghua University, Beijing, China
### 摘要
> 我们引入了两个源非可损坏提取器（Cheragachi和Guruswami，TCC 2014）的自然泛化，称为多源非可损坏提取器。多源非可损坏提取器是满足额外非可损坏性属性的特殊独立源提取器。该属性要求提取器的输出即使在多个源进行篡改的情况下，仍保持接近均匀分布。我们正式定义了这个原语，给出了一个对抗广泛篡改函数的安全构造，并提供应用。具体来说，我们得到以下结果：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_16](https://doi.org/10.1007/978-3-030-77886-6_16)
## Secure Software Leasing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#secure-software-leasing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#secure-software-leasing)**
### 作者
* Prabhanjan Ananth, UC Santa Barbara, Santa Barbara, USA
* Rolando L. La Placa, MIT, Santa Barbara, USA
### 摘要
> 制定密码学定义以防止软件盗版是一个重要的研究方向，但却没有得到很多关注。由于使用经典密码学的自然定义是不可能实现的（因为经典程序总是可以复制的），这使我们转向使用量子计算技术。Aaronson [CCC'09] 的开创性工作恰好引入了量子复制保护的概念，以解决软件反盗版问题。然而，尽管这是量子密码学中最重要的问题之一，但对于任何功能类别，目前还没有已知的可证安全的量子复制保护解决方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_17](https://doi.org/10.1007/978-3-030-77886-6_17)
## Oblivious Transfer Is in MiniQCrypt.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#oblivious-transfer-is-in-miniqcrypt) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#oblivious-transfer-is-in-miniqcrypt)**
### 作者
* Alex B. Grilo, CNRS, LIP6, Sorbonne Université, Paris, France
* Huijia Lin, University of Washington, Seattle, WA, USA
* Fang Song, Portland State University, Portland, OR, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### 摘要
> MiniQCrypt是一个存在量子安全单向函数和量子通信的世界。我们在MiniQCrypt中构建了一个无忧传输（OT）协议，该协议能够在普通模型下抵御恶意量子多项式时间对手的模拟安全性攻击，基于Crépeau和Killian（FOCS 1988）以及Bennett，Brassard，Crépeau和Skubiszewska（CRYPTO 1991）的基础工作。通过将OT协议与之前的工作相结合，我们在MiniQCrypt中获得了安全的两方和多方计算协议。这与在经典世界中普遍认为仅有单向函数无法实现无忧传输（OT）的情况形成了鲜明对比。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_18](https://doi.org/10.1007/978-3-030-77886-6_18)
## Security Analysis of Quantum Lightning.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#security-analysis-of-quantum-lightning) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#security-analysis-of-quantum-lightning)**
### 作者
* Bhaskar Roberts, UC Berkeley, Berkeley, USA
### 摘要
> 量子闪电是一种新的密码学对象，提供了强大的量子货币形式。Zhandry最近定义了量子闪电，并基于低秩矩阵的叠加构建了该方案。该方案不寻常，因此很难将方案的安全性基于任何广泛的计算假设。相反，Zhandry提出了一个新的困难假设，如果成立，可以用来证明安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_19](https://doi.org/10.1007/978-3-030-77886-6_19)
## Classical vs Quantum Random Oracles.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#classical-vs-quantum-random-oracles) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#classical-vs-quantum-random-oracles)**
### 作者
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Palo Alto, USA
### 摘要
> 在本文中，我们研究了用随机神谕模型（ROM）和量子随机神谕模型（QROM）衡量加密方案安全性之间的关系。首先，我们引入了一种量子访问随机神谕的证明（PoQRO）概念，它是一种用于向经典验证者证明量子访问随机神谕能力的协议。我们观察到Brakerski等人最近提出的量子性证明可以看作是PoQRO。我们还构建了一个相对于经典神谕的公开可验证的PoQRO。基于这些结果，我们构建了在ROM中安全但在QROM中不安全的数字签名和公钥加密方案。特别地，我们得到了第一个基于标准密码假设下区分ROM和QROM的自然密码方案示例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_20](https://doi.org/10.1007/978-3-030-77886-6_20)
## On the Compressed-Oracle Technique, and Post-Quantum Security of Proofs of Sequential Work.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#on-the-compressed-oracle-technique-and-post-quantum-security-of-proofs-of-sequential-work) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#on-the-compressed-oracle-technique-and-post-quantum-security-of-proofs-of-sequential-work)**
### 作者
* Kai-Min Chung, Academia Sinica, Taipei City, Taiwan
* Serge Fehr, CWI, Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Yu-Hsuan Huang, National Chiao-Tung University, Hsinchu City, Taiwan
* Tai-Ning Liao, National Taiwan University, Taipei City, Taiwan
### 摘要
> 我们重新审视了Zhandry引入的所谓压缩预言者技术，用于在量子随机预言者模型（QROM）中分析量子算法。首先，我们提供了该技术的简明阐述，该技术可以轻松扩展到并行查询的QROM。在每个查询回合中，考虑的算法可以并行地向QROM提出多个查询。这种QROM的变体允许进行更细粒度的查询复杂度分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_21](https://doi.org/10.1007/978-3-030-77886-6_21)
## Classical Proofs of Quantum Knowledge.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#classical-proofs-of-quantum-knowledge) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#classical-proofs-of-quantum-knowledge)**
### 作者
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
* Tina Zhang, Division of Physics, Mathematics and Astronomy, California Institute of Technology, Pasadena, USA
### 摘要
> 我们在验证者为经典的情况下，定义了知识证明的概念，而证明者是量子的，并且证明者所持有的证据通常是一个量子态。我们建立了我们定义的一些简单属性，其中包括：如果某个状态存在一种非破坏性的经典证明其对量子知识的证据，那么这个状态可以被一个无限制的对手进行克隆；在我们定义的参数满足一定条件的情况下，一个难以克隆的状态的知识证明协议可以用作（破坏性的）量子货币验证协议。此外，我们提供了两个协议的示例（受到私钥经典验证协议对于量子货币方案的启发），我们可以证明它们在我们的定义下是量子知识的证明。在这样做的过程中，我们引入了一些分析此类协议的技术，这些技术基于非局域博弈的文献结果。最后，我们证明，在我们的定义下，由Mahadev（FOCS 2018）引入的验证协议是针对QMA关系的经典论证。在所有情况下，我们构造了一个明确的量子提取器，可以通过对证明者进行黑盒量子（重放）访问来生成量子见证，后者包括在验证者的消息叠加上控制着证明者的黑盒电路的连贯执行能力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_22](https://doi.org/10.1007/978-3-030-77886-6_22)
## Order-C Secure Multiparty Computation for Highly Repetitive Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#order-c-secure-multiparty-computation-for-highly-repetitive-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#order-c-secure-multiparty-computation-for-highly-repetitive-circuits)**
### 作者
* Gabrielle Beck, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Gabriel Kaptchuk, Boston University, Boston, USA
### 摘要
> 运行具有数百或数千个参与方的安全多方计算（MPC）协议，将允许利用大型志愿者网络（例如区块链和Tor），并有助于证明诚实多数的假设。然而，大多数现有协议至少具有对参与方数量的线性（乘法）依赖性，这使得扩展变得困难。已知的具有与参与方数量无关的渐近效率（不包括加性因素）的协议需要昂贵的电路转换，从而产生大量开销。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_23](https://doi.org/10.1007/978-3-030-77886-6_23)
## The More the Merrier: Reducing the Cost of Large Scale MPC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#the-more-the-merrier-reducing-the-cost-of-large-scale-mpc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#the-more-the-merrier-reducing-the-cost-of-large-scale-mpc)**
### 作者
* S. Dov Gordon, George Mason University, Fairfax, USA
* Daniel Starin, Perspecta Labs, Basking Ridge, USA
* Arkady Yerukhimovich, George Washington University, Washington, D.C., USA
### 摘要
> 安全多方计算（MPC）允许多个参与方对其私有输入进行安全联合计算。如今，MPC的应用正在增长，有成千上万的参与方希望建立联邦机器学习模型或用于区块链的可信设定。为了应对这些场景，我们提出了一套新颖的MPC协议，能够在大量参与方运行时最大限度地提高吞吐量。特别是，我们的协议在通信和计算复杂性方面都随参与方数量的减少而降低。我们的协议基于之前基于打包密钥共享的协议，引入了新的技术来构建更高效的通用电路计算。具体而言，我们介绍了一种处理使用打包密钥共享的协议中出现的线性攻击的新方法，并提出了一种在不增加渐近成本的情况下解压共享乘法三元组的方法。与之前的工作相比，我们避免了在通用编译电路的大小为|C|时需要的\(\log |C|\)开销，并且通过一个统计安全参数的因子O(s)改进了民间的“委员会式”解决方案。在实践中，基于合理的参数设置，我们的协议比已知的任何构造都快10倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_24](https://doi.org/10.1007/978-3-030-77886-6_24)
## Multiparty Reusable Non-interactive Secure Computation from LWE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#multiparty-reusable-non-interactive-secure-computation-from-lwe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#multiparty-reusable-non-interactive-secure-computation-from-lwe)**
### 作者
* Fabrice Benhamouda, Algorand Foundation, New York, USA
* Aayush Jain, UCLA, Los Angeles, CA, 90095, USA
* Aayush Jain, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Huijia Lin, University of Washington, Seattle, WA, 98195, USA
### 摘要
> 受到设计多功能和灵活安全计算协议的目标的激励，我们提出了新的多方重复使用的非交互式安全计算（mrNISC）协议。这个概念是由Benhamouda和Lin（TCC 2020）最近引入的，本质上是两轮的多方计算（MPC）协议，第一轮消息用作参与方的私有输入的可重复使用承诺。利用这些承诺，任何一部分参与方可后续通过向无状态评估者发送一条单一消息来计算其各自输入上的所选任何函数，传达计算结果但不包含其他信息。重要的是，输入承诺可以在不知道其他参与方的任何信息（包括其身份和数量）的情况下计算，并且它们可以在任意数量的所需计算中重复使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_25](https://doi.org/10.1007/978-3-030-77886-6_25)
## Unbounded Multi-party Computation from Learning with Errors.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#unbounded-multi-party-computation-from-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#unbounded-multi-party-computation-from-learning-with-errors)**
### 作者
* Prabhanjan Ananth, University of California, Santa Barbara, CA, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, MD, USA
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 我们考虑无界MPC（多方计算）的回合最优问题：在第一轮中，各方发布一个仅依赖于它们的输入的消息。在第二轮中，任意子集的各方可以联合和安全地在一轮广播中计算出他们输入上的任何函数f。我们不对参与方的数量或可以计算的函数大小施加任何事先限制。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_26](https://doi.org/10.1007/978-3-030-77886-6_26)
## Generic Compiler for Publicly Verifiable Covert Multi-Party Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#generic-compiler-for-publicly-verifiable-covert-multi-party-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#generic-compiler-for-publicly-verifiable-covert-multi-party-computation)**
### 作者
* Sebastian Faust, Technical University of Darmstadt, Darmstadt, Germany
* David Kretzler, Technical University of Darmstadt, Darmstadt, Germany
* Benjamin Schlosser, Technical University of Darmstadt, Darmstadt, Germany
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 隐蔽安全性被引入作为半诚实和恶意安全之间的妥协。简而言之，隐蔽安全性保证了恶意行为可以以一定的概率被诚实方检测到，但如果检测失败，则所有赌注都无效。虽然隐蔽安全性所提供的安全保证比完全恶意安全性要弱，但其效率显著提高。Asharov和Orlandi（ASIACRYPT’12）引入了隐蔽安全性的一个重要扩展，即公开可验证性，该扩展允许诚实方创建一个公开可验证的恶意行为证书。公开可验证性显著加强了隐蔽安全性，因为证书允许通过外部方（例如法官）进行惩罚。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_27](https://doi.org/10.1007/978-3-030-77886-6_27)
## Constant-Overhead Unconditionally Secure Multiparty Computation Over Binary Fields.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#constant-overhead-unconditionally-secure-multiparty-computation-over-binary-fields) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#constant-overhead-unconditionally-secure-multiparty-computation-over-binary-fields)**
### 作者
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们研究了在诚实大多数情况下，无条件安全的多方计算（MPC）协议的通信复杂性。尽管在计算假设下为二元字段实现高效协议做出了巨大的努力，但在这种情况下没有高效的无条件MPC协议。特别是，在门电路每次通信复杂度为 O(n) 位的情况下，没有常数开销的n方协议。Cascudo，Cramer，Xing和Yuan（CRYPTO 2018）是第一批通过在二元字段中并行评估\(O(\log n)\)个相同电路的情况下实现了这样的开销。在本文中，我们构建了第一个无条件MPC协议，在诚实大多数情况下对抗恶意对手，只评估具有分摊通信复杂度O(n) 的单个布

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_28](https://doi.org/10.1007/978-3-030-77886-6_28)
## Breaking the Circuit Size Barrier for Secure Computation Under Quasi-Polynomial LPN.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#breaking-the-circuit-size-barrier-for-secure-computation-under-quasi-polynomial-lpn) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#breaking-the-circuit-size-barrier-for-secure-computation-under-quasi-polynomial-lpn)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Pierre Meyer, École Normale Supérieure de Lyon and IDC Herzliya, Herzliya, Israel
### 摘要
> 在这项研究中，我们针对所有\(\log /\log \log \)本地电路引入了一种新的依赖于电路的同态秘密共享（HSS）方案，通信量仅与电路宽度成比例，多项式计算，假设学习带噪声的奇偶校验 (\(\mathsf {LPN}\)) 难度为超多项式。新构造的核心是伪随机相关生成器 (PCG)，它允许两个参与方从短种子本地拉伸任意\(\log /\log \log \)本地可加相关的伪随机实例。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_29](https://doi.org/10.1007/978-3-030-77886-6_29)
## Function Secret Sharing for Mixed-Mode and Fixed-Point Secure Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#function-secret-sharing-for-mixed-mode-and-fixed-point-secure-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#function-secret-sharing-for-mixed-mode-and-fixed-point-secure-computation)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Nishanth Chandran, Microsoft Research, Bengaluru, India
* Divya Gupta, Microsoft Research, Bengaluru, India
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Nishant Kumar, University of Illinois at Urbana-Champaign, Champaign, USA
* Mayank Rathee, University of California, Berkeley, USA
### 摘要
> Boyle等人（TCC 2019）提出了一种新的安全计算方法，建立在函数秘密共享（FSS）上，以预处理模型为基础，并通过FSS方案对相关偏移量族的门g进行评估，其中\(g_r(x)=g(x+r)\)。他们进一步提出了基于任何伪随机生成器（PRG）的有效FSS方案，用于用于“混合模式”安全计算中出现的几个有用门g的偏移族。这些包括用于零测试、整数比较、ReLU和样条函数的门。与基于加密电路或秘密共享的替代技术相比，基于FSS的方法在在线通信和回合复杂度方面都能带来显著

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_30](https://doi.org/10.1007/978-3-030-77886-6_30)
## VOLE-PSI: Fast OPRF and Circuit-PSI from Vector-OLE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2021-2].md#vole-psi-fast-oprf-and-circuit-psi-from-vector-ole) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2021-2].md#vole-psi-fast-oprf-and-circuit-psi-from-vector-ole)**
### 作者
* Peter Rindal, Visa Research, Palo Alto, USA
* Phillipp Schoppmann, Humboldt-Universität zu Berlin, Berlin, Germany
### 摘要
> 在这项工作中，我们提出了一种基于向量 OLE 和 PaXoS 数据结构的批处理无知伪随机函数 (OPRF) 的新构建。然后，我们使用它在标准转换中实现从 OPRF 实现私有集合交集 (PSI)。我们的整体构建非常高效，通信和计算都为 O(n)。我们还证明了相比于半诚实变体，我们的协议在只有非常小的开销的情况下可以实现恶意安全性。对于输入大小为 \(n = 2^{20}\)，我们的恶意协议只需 6.2 秒和不到 59 MB 的通信。这相当于每个元素不到 450 位，这是迄今为止发表的任何 PSI 协议（半诚实或恶意）中最低的数字。此外，理论上我们的半诚实（或恶意）协议可以在每个元素的成本为 219（或 260）位时实现 \(n=2^{20}\)，但需要插值一个 n 个元素的多项式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-77886-6_31](https://doi.org/10.1007/978-3-030-77886-6_31)
