# Asiacrypt[2023-3]
## Quantum Attacks on Hash Constructions with Low Quantum Random Access Memory.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#quantum-attacks-on-hash-constructions-with-low-quantum-random-access-memory) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#quantum-attacks-on-hash-constructions-with-low-quantum-random-access-memory)**
### 作者
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyang Dong, State Key Laboratory of Cryptology, P.O.Box 5159, Beijing, 100878, China
* Shun Li, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Phuong Pham, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Guoyan Zhang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Guoyan Zhang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, China
* Xiaoyang Dong, Shandong Institute of Blockchain, Jinan, China
* Guoyan Zhang, Shandong Institute of Blockchain, Jinan, China
### 摘要
> 在 ASIACRYPT 2022，Benedikt、Fischlin 和 Huppert 首次提出了关于迭代哈希函数的量子聚集攻击。他们的攻击需要指数级的量子随机存储器（qRAM），更准确地说是 \(2^{0.43n}\) 量子可访问的经典存储器（QRACM）。鉴于大容量qRAM的存在成问题，Benedikt 等人提出了一个关于构建低-qRAM 量子聚集攻击的疑问。在本文中，我们通过构建一个量子聚集攻击来解决这个问题，其中时间复杂度从 Benedikt 等人的 \(2^{0.43n}\) 稍微增加到我们的 \(2^{0.46n}\)，但不再需要qRAM（简称为no-qRAM）。此外，我们还介绍了关于哈希串联组合器、哈希异或组合器、Hash-Twice 和 Zipper 哈希函数的各种低-qRAM 或 no-qRAM 量子攻击。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_1](https://doi.org/10.1007/978-981-99-8727-6_1)
## On Quantum Secure Compressing Pseudorandom Functions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#on-quantum-secure-compressing-pseudorandom-functions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#on-quantum-secure-compressing-pseudorandom-functions)**
### 作者
* Ritam Bhaumik, EPFL, Lausanne, Switzerland
* Benoît Cogliati, Thales DIS France SAS, Meudon, France
* Jordan Ethan, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 本文考察由n比特到n比特的Pseudorandom Functions（PRFs）通过最小数量的n比特到n比特PRFs和任意数量的线性函数构建所有2n比特到n比特的PRFs。首先，我们表明所有两轮构造都是经典不安全的，或易受到量子周期查找攻击的威胁。其次，我们将三轮构造分类，取决于它们对这些类型攻击的易受攻击性。这使我们能够确定构造的安全性。然后，我们继续展示以下三个候选者对于在最多进行\( 2^{n/4} \)（可能是叠加）查询的任何量子区分器的安全性：
> 
> 请注意，第一个构造是由Bao等人提出的具有经典安全性的可调密文块密码，第三个构造被Hosoyamada和Iwata证明是具有相似查询限制的量子安全可调密文块密码。值得注意的是，我们证明的框架是Chung等人在不可区分设置中对Zhandry的压缩Oracle技术严格公式化的适应，这可能具有独立的利益。与Hosoyamada-Iwata的Zhandry压缩Oracle的解释相比，这个框架给出了非常紧凑和大部分看起来像经典的证明。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_2](https://doi.org/10.1007/978-981-99-8727-6_2)
## Improved Quantum Circuits for AES: Reducing the Depth and the Number of Qubits.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#improved-quantum-circuits-for-aes-reducing-the-depth-and-the-number-of-qubits) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#improved-quantum-circuits-for-aes-reducing-the-depth-and-the-number-of-qubits)**
### 作者
* Qun Liu, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Zheng Zhao, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Meiqin Wang, Quan Cheng Laboratory, Jinan, China
* Qun Liu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Zheng Zhao, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 量子计算机具有解决经典计算机难以解决问题的潜力，因此越来越多的人关注新的密码学加密算法的开发。在NIST的后量子标准化过程中，安全等级是由量子密钥搜索AES的成本来定义的。然而，Grassl等人提供的搜索成本估计很高。NIST已经承认这些初始分类应该谨慎对待，因为最先进的攻击成本可以大幅降低。因此，精确的资源估计对于评估密码学针对量子对手的安全性至关重要。
> 
> 本文提出了一组通用技术，用于实现AES量子神谕，这对于Grover算法等量子攻击至关重要。首先，我们介绍了混合-XOR技术以重复使用占位符量子比特。在ASIACRYPT 2022上，黄等人提出了一种具有120个占位符量子比特的S-box结构。我们能够将占位符量子比特数量减少到83个，而不增加T深度。其次，我们提出了组合流水线结构和共享技术，将S-box及其反向结合起来，仅使用98个占位符量子比特即可实现，相比独立结构，实现了59%的显著降低。第三，我们使用一般算法确定量子电路的深度，搜索深度为16的AES MixColumns原地电路。应用这些改进，我们可以实现AES电路的较小量子深度，获得对Grover算法更精确的资源估计。对于AES-128、-192和-256，我们仅需要分别的深度为730、876和1,018。最近，社区也关注了AES量子电路的时间和空间成本的平衡。在这方面，我们提出了低DW成本的AES电路量子实现，采用了锯齿状建筑结构。与黄等人提出的电路相比，DW成本降低了35％。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_3](https://doi.org/10.1007/978-981-99-8727-6_3)
## Hidden Stabilizers, the Isogeny to Endomorphism Ring Problem and the Cryptanalysis of pSIDH.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#hidden-stabilizers-the-isogeny-to-endomorphism-ring-problem-and-the-cryptanalysis-of-psidh) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#hidden-stabilizers-the-isogeny-to-endomorphism-ring-problem-and-the-cryptanalysis-of-psidh)**
### 作者
* Mingjie Chen, University of Birmingham, Birmingham, UK
* Péter Kutas, University of Birmingham, Birmingham, UK
* Christophe Petit, University of Birmingham, Birmingham, UK
* Muhammad Imran, Budapest University of Technology and Economics, Budapest, Hungary
* Gábor Ivanyos, Institute for Computer Science and Control, Hungarian Research Network, Budapest, Hungary
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR, UMR 6625, Université de Rennes, Rennes, France
* Péter Kutas, Eötvös Loránd University, Budapest, Hungary
* Christophe Petit, Université libre de Bruxelles, Bruxelles, Belgium
### 摘要
> 同态环问题（IsERP）要求计算在特征p上的超奇异曲线之间同态的陪域的同态环，只给出了此同态的表示，即一些数据和一个用于在任何挠点上评估此同态的算法。这个问题在同态基密码学中起着核心作用；它是pSIDH协议（ASIACRYPT 2022）安全性的基础，并且是最近破解SIDH密钥交换的攻击的核心。在这项工作之前，我们并不知道针对一般同态度量解决IsERP的有效算法，在同态度量是素数时似乎是最难的情况。
> 
> 在本文中，我们介绍了一个新的量子多项式时间算法，用于解决奇数次同态的IsERP问题，其素数因子有\(O(\log \log p)\)个。作为主要技术工具，我们的算法使用了一个量子算法来计算隐藏的波列尔子群，来自EUROCRYPT 2021的超奇异同态的群作用，由于对Deuring对应的各种算法以及一个新的算法来将奇整数N的任意四元数秩模\(O(\log \log p)\)个素数因子提升为平滑幂。
> 
> 对于密码学的主要影响，我们获得了一个量子多项式时间密钥恢复攻击pSIDH的方法。我们使用的技术工具也可能具有独立的兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_4](https://doi.org/10.1007/978-981-99-8727-6_4)
## Concrete Analysis of Quantum Lattice Enumeration.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#concrete-analysis-of-quantum-lattice-enumeration) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#concrete-analysis-of-quantum-lattice-enumeration)**
### 作者
* Shi Bai, Florida Atlantic University, Boca Raton, USA
* Floyd B. Johnson, Florida Atlantic University, Boca Raton, USA
* Tran Ngo, Florida Atlantic University, Boca Raton, USA
* Maya-Iggy van Hoof, Horst Görtz Institute for IT-Security, Ruhr University Bochum, Bochum, Germany
* Tanja Lange, Eindhoven University of Technology, Eindhoven, The Netherlands
### 摘要
> 格点降维算法如BKZ（Block-Korkine-Zolotarev）在估计基于格的密码学安全性方面发挥着中心作用。 BKZ中的子例程可以通过枚举算法来实现，该算法在投影子格中找到最短向量。枚举过程可以看作是对一些“枚举树”的深度优先搜索，其节点表示系数的部分赋值，对应于将格点表示为与系数具有线性组合关系的格基。本文就基于Montanaro的量子树回溯算法的量子格点枚举成本提供了具体分析。更确切地说，我们在量子电路模型中给出了具体实现。我们还展示了如何通过并行化组件来优化电路深度。基于设计的电路，我们讨论了进行格点枚举所需的具体量子资源估计。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_5](https://doi.org/10.1007/978-981-99-8727-6_5)
## Forgery Attacks on Several Beyond-Birthday-Bound Secure MACs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#forgery-attacks-on-several-beyond-birthday-bound-secure-macs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#forgery-attacks-on-several-beyond-birthday-bound-secure-macs)**
### 作者
* Yaobin Shen, UCLouvain, ICTEAM, Crypto Group, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, UCLouvain, ICTEAM, Crypto Group, Louvain-la-Neuve, Belgium
* Lei Wang, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 在CRYPTO'18会议上，Datta等人提出了nPolyMAC并证明了在最多\(2^{2n/3}\)个认证查询和\(2^{n}\)个验证查询的情况下的安全性。在EUROCRYPT'19会议上，Dutta等人提出了CWC+并展示了在最多\(2^{2n/3}\)个查询的情况下的安全性。在FSE'19会议上，Datta等人提出了PolyMAC及其减少密钥的变体2k-PolyMAC，并展示了在最多\(2^{2n/3}\)个查询的情况下的安全性。然后，Kim等人（EUROCRYPT'20）和Datta等人（FSE'23）相继将此安全边界提高到\(\mathbf{2^{3n/4}}\)并适用于多用户情况。在FSE'20会议上，Chakraborti等人提出了\(\mathsf{{PDM}}^*\mathsf{{MAC}}\)和\(\mathsf{{1k}}\text {-}\mathsf{{PDM}}^*\mathsf{{MAC}}\)，并展示了在最多\(2^{2n/3}\)个查询的情况下的安全性。最近，Chen等人提出了\(\mathsf{{nEHtM}}_p^{+}\)并证明了在最多\(2^{2n/3}\)个查询的情况下的安全性。本文展示了对于nPolyMAC、CWC+、PolyMAC、2k-PolyMAC、\(\mathsf{{PDM}}^*\mathsf{{MAC}}\)、\(\mathsf{{1k}}\text {-}\mathsf{{PDM}}^*\mathsf{{MAC}}\)和\(\mathsf{{nEHtM}}_p^{+}\)的造假攻击。我们的攻击利用了基础多项式哈希函数Poly中的一些漏洞，并且(i)仅需要一个认证查询和一个验证查询；(ii)尊重Nonce；(iii)成功的概率为1。因此，我们的攻击否定了这些方案的可证高安全性声明。然后，我们重新审查它们的安全性分析并确定了出了什么问题。最后，我们提出了两个解决方案，可以恢复超越生日界限的安全性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_6](https://doi.org/10.1007/978-981-99-8727-6_6)
## Correlation Cube Attack Revisited - Improved Cube Search and Superpoly Recovery Techniques.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#correlation-cube-attack-revisited-improved-cube-search-and-superpoly-recovery-techniques) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#correlation-cube-attack-revisited-improved-cube-search-and-superpoly-recovery-techniques)**
### 作者
* Jianhua Wang, Key Laboratory of Mathematics Mechanization, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
* Lu Qin, China UnionPay Co., Ltd., Shanghai, China
* Lu Qin, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
* Baofeng Wu, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Baofeng Wu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 在这篇论文中，我们通过利用与立方多项式相对应的超多项式的低次因子来改进立方攻击，这可以被视为2018年欧洲密码大会提出的相关立方攻击的特例，但在我们的框架下，在密钥恢复阶段可以获得更多有益的关于密钥变量的方程。要发动我们的攻击，人们面临两个具有挑战性的问题：(1) 有效地恢复超多项式的代数标准形式并提取其低次因子；和 (2) 高效搜索大量良好的立方指数集(ISoC)。我们引入了新技术来解决这两个问题。
> 
> 首先，我们提出了密码中间轮的变量替换技术，其中在内部状态的代数表达式中的密钥变量的多项式被新变量替代。这将提高超多项式恢复的计算复杂性，并承诺更紧凑的超多项式，可以轻松地相对于新变量进行分解。其次，我们提出了向量数值映射技术，该技术寻求在超多项式的度评估中数字映射技术的效率与单项式预测技术(Crypto 2019)的准确性之间的折衷。结合这项技术，给出了一个快速的修剪方法，并通过整数线性规划(MILP)建模以过滤满足一定固定阈值的代数度的良好的ISoCs。由于自动化MILP求解器，全面搜索整个搜索空间中的好立方变得实际可行。
> 
> 为了说明我们技术的威力，我们将它们全部应用于Trivium流密码。结果，我们已经恢复了Kesarwani等人在2020年提出的三个立方体的超多项式，只是发现它们在842轮中并没有零和属性，正如他们在论文中所声称的那样。据我们所知，之前最佳的实用密钥恢复攻击是820轮Trivium，复杂度为\(2^{53.17}\)。我们提出了820、825和830轮的实用密钥恢复攻击，在这些攻击中，根据将\(2^{60}\)作为实际计算复杂性的上限，分别可以实际恢复\(\mathbf {2^{80}\times 87.8\%}\)、\(\mathbf {2^{80}\times 83\%}\)和\(\mathbf {2^{80}\times 65.7\%}\) 的密钥，如果我们考虑对于820轮(或者830轮)，即使计算能力不超过\(\mathbf {2^{52}}\)（或\(\mathbf {2^{55}}\)），我们仍然可以恢复\(\mathbf {58\%}\)（或\(\mathbf {46.6\%}\)）的密钥空间中的密钥。我们的攻击比之前最佳的实用攻击多了10轮。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_7](https://doi.org/10.1007/978-981-99-8727-6_7)
## Differential-Linear Approximation Semi-unconstrained Searching and Partition Tree: Application to LEA and Speck.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#differential-linear-approximation-semi-unconstrained-searching-and-partition-tree-application-to-lea-and-speck) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#differential-linear-approximation-semi-unconstrained-searching-and-partition-tree-application-to-lea-and-speck)**
### 作者
* Yi Chen, Institute for Advanced Study, Tsinghua University, Beijing, China
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Hongbo Yu, Department of Computer Science and Technology, Tsinghua University, Beijing, China
* Zhenzhen Bao, Zhongguancun Laboratory, Beijing, China
* Hongbo Yu, Zhongguancun Laboratory, Beijing, China
### 摘要
> 微分线性攻击是对ARX密码中最有效的攻击之一。然而，有两个技术问题阻碍了它的更高效和更多应用：（1）没有有效的方法来搜寻好的微分线性逼近。现有方法要么有很多限制，要么效率不高。 （2）分割技术有很大潜力降低密钥恢复攻击的时间复杂度，但目前没有构建ARX密码分割的通用工具。在这项工作中，我们采用新的技术解决这两个问题。首先，我们提出了一种新的想法，从已知逼近中生成新的好的微分线性逼近，并设计了新的搜寻算法。其次，我们提出了一种名为分割树的通用工具，用于构建ARX密码的分割。基于这些新技术，我们提出了更好的攻击，用于两个ISO/IEC标准，即LEA和Speck。对于LEA，我们提出了第一个17轮区分器，比之前最佳区分器多1轮。此外，我们提出了17轮LEA-128，18轮LEA-192和18轮LEA-256的首次密钥恢复攻击，比之前最佳攻击多攻击3，4和3轮。对于Speck，我们找到了更好的Speck48和Speck64微分线性区分器。还展示了Speck96和Speck128的第一个微分线性区分器。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_8](https://doi.org/10.1007/978-981-99-8727-6_8)
## Cryptanalysis of Elisabeth-4.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#cryptanalysis-of-elisabeth-4) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#cryptanalysis-of-elisabeth-4)**
### 作者
* Henri Gilbert, ANSSI, Paris, France
* Jérémy Jean, ANSSI, Paris, France
* Jean-René Reinhard, ANSSI, Paris, France
* Henri Gilbert, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, Versailles, France
* Rachelle Heim Boissier, Université Paris-Saclay, UVSQ, CNRS, Laboratoire de mathématiques de Versailles, Versailles, France
### 摘要
> Elisabeth-4是一种针对混合同态加密应用量身定制的流密码，由Cosseron等人在ASIACRYPT 2022中提出。本文介绍了对完整的Elisabeth-4进行密钥恢复攻击的几种变体，突破了该密码的128位安全性声明。我们最优化的攻击是一种选择IV攻击，时间复杂度为\(2^{88}\)个基本操作，内存复杂度为\(2^{54}\)位，数据复杂度为\(2^{41}\)位。
> 
> 我们的攻击将线性化技术应用于将一些密钥流比特与密钥比特相关联的非线性方程组，并利用密码的特定性质高效地解决了结果线性系统。首先，由于密码的结构，需解决的系统非常稀疏，这使得可以依赖于稀疏线性代数，尤其是Block Wiedemann算法。其次，过滤函数的两个非线性成分的代数性质会导致秩缺陷，这可以利用来减少数据和时间复杂度更高效地解决线性化系统。我们已在Elisabeth-4的玩具版本上实现了攻击以验证其正确性。它使用cado-nfs的Block Wiedemann算法高效实现了稀疏线性代数。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_9](https://doi.org/10.1007/978-981-99-8727-6_9)
## Algebraic Attacks on Round-Reduced Rain and Full AIM-III.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#algebraic-attacks-on-round-reduced-rain-and-full-aim-iii) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#algebraic-attacks-on-round-reduced-rain-and-full-aim-iii)**
### 作者
* Kaiyi Zhang, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Hongrui Cui, Shanghai Jiao Tong University, Shanghai, China
* Qingju Wang, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, Shandong, 266237, China
* Chun Guo, Shandong Research Institute of Industrial Technology, Jinan, Shandong, 250102, China
### 摘要
> Picnic是NIST PQC第3轮备选签名候选人，它基于对称原语，遵循头脑中的MPC范式进行构建。最近，研究人员一直在探索更安全/高效的签名方案，这些方案基于AES等保守单向函数，或者新的低复杂度单向函数，如Rain（CCS 2022）和AIM（CCS 2023以及NIST PQC宣布的第1轮附加签名）。基于Rain和AIM的签名方案目前是基于头脑中的MPC方案中效率最高的，使它们成为有希望的后量子数字签名候选人。
> 
> 然而，这些新单向函数的确切困难程度值得进一步研究和审查。本文针对特定实例提出了Rain和AIM的代数攻击，其中一轮Rain在安全参数\(n\in \{128,192,256\}\)下可能会在\(2^{n/2}\)内被破解，而两轮Rain分别可以在\(2^{120.3}\)、\(2^{180.4}\)和\(2^{243.1}\)个加密中被破解。此外，我们展示了对AIM-III（旨在提供192位安全性）的攻击，其复杂度为\(2^{186.5}\)个加密。这些攻击利用了特征2域上幂函数的代数结构，从而为对称原语的代数结构提供潜在见解，并因此可能具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_10](https://doi.org/10.1007/978-981-99-8727-6_10)
## Quantum Speed-Up for Multidimensional (Zero Correlation) Linear Distinguishers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#quantum-speed-up-for-multidimensional-zero-correlation-linear-distinguishers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#quantum-speed-up-for-multidimensional-zero-correlation-linear-distinguishers)**
### 作者
* Akinori Hosoyamada, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 这篇论文展示了如何实现量子加速来区分多维（零相关性）线性区分器。Kaplan等人之前的工作已经展示了一维线性区分器的量子二次加速。然而，经典线性密码分析通常利用多维逼近来实现更有效的攻击，事实上，Kaplan等人的技术能否扩展到多维情况是非常不平凡的。为了解决这个问题，我们研究了一种新的量子技术来加速多维线性区分器。首先，我们观察到Simon算法的子程序与傅立叶变换通过线性相关性之间存在密切关系。具体而言，Simon子程序的一个稍作修改的版本，我们称之为相关性提取算法（CEA），可以用来加速多维线性区分器。CEA还导致了对多维零相关性区分器的加速，以及通过Bogdanov等人和Sun等人展示的零相关性和积分属性之间的对应关系，也可以加速一些积分区分器。此外，当存在多个积分属性时，我们观察到某些特殊类型的积分区分器可能会出现超过二次的加速。特别地，我们展示了一个针对具有与2.5轮AES相同积分属性的4比特单查询区分器的SPN密码的攻击。我们的攻击是第一个观察到这种针对经典密码分析技术的加速，而无需依赖隐藏周期或移位。通过将CEA中的Hadamard变换替换为一般的量子傅里叶变换，我们的技术还可以加速任意有限阿贝尔群上的广义线性区分器。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_11](https://doi.org/10.1007/978-981-99-8727-6_11)
## Exact Security Analysis of ASCON.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#exact-security-analysis-of-ascon) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#exact-security-analysis-of-ascon)**
### 作者
* Bishwajit Chakraborty, Indian Statistical Institute, Kolkata, India
* Chandranan Dhar, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Bishwajit Chakraborty, Nanyang Technological University, Nanyang, Singapore
* Mridul Nandi, Institute for Advancing Intelligence, TCG CREST, Kolkata, India
### 摘要
> Ascon密码套件最近在NIST轻量级密码学（LwC）标准化过程中脱颖而出，既提供了关联数据的认证加密（AEAD）功能，也提供了哈希功能。Ascon中的AEAD方案，即Ascon-128和Ascon-128a，也曾被选为CAESAR竞赛中首选的轻量级认证加密解决方案。在本文中，我们在随机置换模型中对Ascon AEAD方案进行了严格和全面的安全性分析。Ascon（以及通常的任何双工AEAD方案）的现有完整性分析通常包括术语\(DT/2^c\)，其中D和T分别表示数据和时间复杂度，c表示底层海绵的容量。本文证明了当T受到\(\min \{2^{\kappa }, 2^c\}\)（其中\(\kappa \)为密钥大小）的限制并且DT受到\(2^b\)的限制时（其中b为底层置换的大小，对Ascon而言为320），Ascon可以实现AE安全性。我们的发现表明，符合NIST要求，Ascon允许标签大小低至64位，同时使速率达到了192位，超过了推荐的速率。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_12](https://doi.org/10.1007/978-981-99-8727-6_12)
## Automated Meet-in-the-Middle Attack Goes to Feistel.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#automated-meet-in-the-middle-attack-goes-to-feistel) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#automated-meet-in-the-middle-attack-goes-to-feistel)**
### 作者
* Qingliang Hou, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Guoyan Zhang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Xiaoyun Wang, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Qingliang Hou, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Lingyue Qin, BNRist, Tsinghua University, Beijing, China
* Guoyan Zhang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Xiaoyang Dong, Shandong Institute of Blockchain, Jinan, China
* Guoyan Zhang, Shandong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
### 摘要
> Feistel 网络及其广义形式 (GFN) 是构建哈希函数的重要组成部分，例如 Simpira v2、Areion 和 ISO 标准 Lesamnta-LW。密钥中间人 (MitM) 是一种通用范例，用于构建哈希函数的前像和碰撞攻击，已经在多篇论文中自动化。然而，这些自动工具大多关注以替代-置换网络 (SPN) 为构建块的哈希函数，而仅有 Schrottenloher 和 Stevens 在 CRYPTO 2022 中提出了一种针对 Feistel 网络的自动攻击工具。
> 
> 本文通过推广传统的直接或间接部分匹配策略以及 Sasaki 的多轮匹配策略，引入了一种针对 Feistel 网络的新型自动化 MitM 攻击模型。此外，我们发现 Feistel 和 GFN 的等效变换可以显著简化 MILP 模型。基于我们的自动化模型，我们改进了针对 Feistel-SP-MMO、Simpira-2/-4-DM 和 Areion-256/-512-DM 的前像攻击，使其攻击轮数增加 1-2 轮或显著降低了复杂度。此外，我们填补了 CRYPTO 2022 中 Schrottenloher 和 Stevens 在大分支 (\(b>4\)) Simpira-b 攻击方面留下的空白，提出了 Simpira-6 的首个 11 轮攻击。此外，我们显著改进了对 ISO 标准哈希 Lesamnta-LW 的碰撞攻击，将攻击轮数从先前的 11 轮提高到我们的 17 轮。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_13](https://doi.org/10.1007/978-981-99-8727-6_13)
## Revisiting Higher-Order Differential-Linear Attacks from an Algebraic Perspective.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#revisiting-higher-order-differential-linear-attacks-from-an-algebraic-perspective) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#revisiting-higher-order-differential-linear-attacks-from-an-algebraic-perspective)**
### 作者
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Thomas Peyrin, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Quan Quan Tan, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Trevor Yap, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> Biham等人在2005年FSE引入了高阶差分-线性（HDL）攻击，在这种攻击中，一个线性逼近被附加到高阶差分（HD）转换中。这是对差分-线性（DL）攻击的自然推广。然而，由于一些实际限制，HDL密码分析自提出以来，不幸地吸引了比其DL对应物少得多的关注。
> 
> 在本文中，我们从代数的角度重新讨论了HD/HDL密码分析，并提供了两种新工具，用于检测可能的HD/HDL区分器，包括：（a）用于概率HD/HDL攻击的高阶代数转换形式（HATF）；（b）用于确定性HD攻击的差分支持函数（DSF）。通常情况下，HATF可以估计\(\ell^{th}\)阶HDL逼近的偏差，其复杂度为\(\mathcal{O}(2^{\ell + d2^\ell })\)，其中d是所研究的函数的代数次数。如果函数是二次的，则复杂度可以进一步减少至\(\mathcal{O}(2^{3.8\ell})\)。因此，对于具有二次轮函数的密码，如Ascon和Xoodyak，HATF在HDL密码分析中非常有用。DSF提供了一种方便的方法来找到排列的输入上良好的线性化，这有助于搜索HD区分器。
> 
> 不足为奇的是，相较于更简单的差分/DL对应物，HD/HDL攻击具有更高的有效性潜力。使用HATF，我们发现了许多Ascon和Xoodyak初始的轮减少的HDL逼近，其偏差明显大于DL逼近。例如，对于Ascon/Xoodyak初始，分别存在确定性的2\(^{nd}\)/4\(^{th}\)阶HDL逼近（这在简单的DL情况下被认为不可能）。我们对5轮Ascon推导出高度偏置的HDL逼近，直到第8阶，这将5轮Ascon的区分攻击复杂度从\(2^{16}\)降低到\(2^{12}\)。我们还提出了针对6轮Ascon和5轮Xoodyak（在单密钥模型下）的HDL逼近，这迄今为止简单的DL无法达到。对于密钥恢复，HDL攻击也比DL攻击更有效，这要归功于HDL逼近的更大偏差。此外，HATF对于DL（1\(^{st}\)阶HDL）攻击效果良好，并且以前只能通过实验得到的Ascon和Xoodyak的一些著名的DL偏差现在可以在理论上预测。
> 
> 使用DSF，我们提出了一种针对8轮Ascon置换的新区分攻击，复杂度为\(2^{48}\)。此外，我们提供了一种新的零和区分器，可以对全12轮Ascon置换进行攻击，时间/数据复杂度为\(2^{55}\)。我们强调，我们的密码分析不会威胁Ascon或Xoodyak的安全性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_14](https://doi.org/10.1007/978-981-99-8727-6_14)
## More Insight on Deep Learning-Aided Cryptanalysis.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-3].md#more-insight-on-deep-learning-aided-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-3].md#more-insight-on-deep-learning-aided-cryptanalysis)**
### 作者
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Jinyu Lu, College of Sciences, National University of Defense Technology, Changsha, 410073, Hunan, China
* Jinyu Lu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yiran Yao, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Liu Zhang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Liu Zhang, School of Cyber Engineering, Xidian University, Xi’an, China
* Liu Zhang, State Key Laboratory of Cryptology, P.O.Box 5159, Beijing, 100878, China
* Zhenzhen Bao, Zhongguancun Laboratory, Beijing, China
### 摘要
> 在CRYPTO 2019中，Gohr展示了经过充分训练的神经网络能够执行比差分分布表（DDT）为基础的区分任务更出色的密码分析。这表明差分 - 神经区分器（\(\mathcal {N}\mathcal {D}\)）可能使用除纯密文差异之外的其他信息。然而，超出差分分布的明确知识仍不清楚。在这项工作中，我们提供了明确的规则，可与DDTs一起使用以提高与纯DDT区分器相比的区分器的有效性。这些规则基于通过用模\2^n的加法传递的XOR差分的右对比特值之间的强关联。有趣的是，它们可以与早期的多位约束研究和最近的固定密钥差分概率研究密切联系。相反，组合这些规则并不会改善\(\mathcal {N}\mathcal {D}\)的性能。这表明这些规则或它们的等效形式已经被\(\mathcal {N}\mathcal {D}\)使用，突出了神经网络在密码分析中的强大能力。
> 
> 此外，我们发现，为了提高差分神经区分器的准确性和回合数，调控差分传播至关重要。通常认为，在密钥中引入差异有助于消除加密状态中的差异，从而导致更强的差分传播。然而，差分神经攻击与传统攻击不同，因为它们没有指定输出差异或遵循单一的差分轨迹。这引发了在差分神经攻击中引入密钥差异的有用性以及Speck在相关密钥情况下对此类攻击的抵抗力的疑问。本工作表明，相关密钥情况下差分神经密码分析的能力可以超过单密钥情况，通过成功地对Speck32/64进行14回合密钥恢复攻击来证明这一点。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8727-6_15](https://doi.org/10.1007/978-981-99-8727-6_15)
