# Eurocrypt[2023-3]
## A Theory of Composition for Differential Obliviousness.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#a-theory-of-composition-for-differential-obliviousness) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#a-theory-of-composition-for-differential-obliviousness)**
### 作者
* Mingxun Zhou, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
* T.-H. Hubert Chan, The University of Hong Kong, Pokfulam, Hong Kong
* Shir Maimon, Cornell University, Ithaca, USA
### 摘要
> 差分无知（DO）是一个确保程序的访问模式满足差分隐私的隐私概念。最近一系列的研究作品中，差分无知被作为完全无知的一个放松概念进行了研究。早期的研究表明，DO不仅可以帮助我们规避完全无知算法的对数开销限制，在许多情况下，它还可以使我们在速度上取得多项式加速，因为它避免了完全无知算法中“填充至最坏情况”的行为。
> 
> 尽管差分无知（DO）有很多潜力，但阻碍其广泛应用的重要障碍之一是缺乏可组合性。特别是，当我们将一个DO算法应用于另一个DO算法的输出时，组合后的算法可能不再是DO（具有合理参数）。具体而言，第一个DO算法在两个相邻输入上的输出可能不再是相邻的，因此我们无法直接从第二个算法的DO保证中获益。
> 
> 在这项工作中，我们首次探索了差分无知算法的组合理论。我们提出了对DO概念的一种改进，称为\((\epsilon , \delta )\)-邻居保持-DO，简称为\((\epsilon , \delta )\)-NPDO，并且我们证明了我们的新概念确实提供了良好的组合保证。通过这种方式，算法设计者可以轻松追踪组合多个DO算法时的隐私损失。
> 
> 我们给出了几个示例应用，以展示我们的新NPDO概念的能力和表达性。其中一个例子是独立感兴趣的结果：我们使用组合框架来证明了差分无知混洗模型的最优隐私放大定理。换句话说，我们展示了对于一类分布式差分隐私机制，在混洗模型中可以用DO混洗器替换完全安全的混洗器，并且仍然可以享受到由混洗器提供的几乎相同的隐私放大效果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_1](https://doi.org/10.1007/978-3-031-30620-4_1)
## On Differential Privacy and Adaptive Data Analysis with Bounded Space.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#on-differential-privacy-and-adaptive-data-analysis-with-bounded-space) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#on-differential-privacy-and-adaptive-data-analysis-with-bounded-space)**
### 作者
* Itai Dinur, Ben-Gurion University, Be’er Sheva, Israel
* Uri Stemmer, Tel Aviv University, Tel Aviv-Yafo, Israel
* Uri Stemmer, Google Research, Tel Aviv-Yafo, Israel
* David P. Woodruff, Carnegie Mellon University, Pittsburgh, USA
* Samson Zhou, UC Berkeley, Berkeley, USA
* Samson Zhou, Rice University, Houston, USA
### 摘要
> 我们研究差分隐私和自适应数据分析这两个相关领域的空间复杂性。具体来说，
> 
> 1. 在标准加密假设下，我们表明存在一个问题P，使用差分隐私的高效解决方案需要指数级更多的空间，与无隐私解决方案相比。据我们所知，这是隐私和非隐私算法的空间复杂性首次出现差别。
> 
> 2. 自适应数据分析的工作重点是理解回答一系列自适应查询所需的样本数量。我们在基础层面重新审视了先前的下界，并表明它们是空间瓶颈而不是取样瓶颈的结果。
> 
> 为了得到我们的结果，我们定义并构建了一个带有多个密钥的加密方案，以非常特定的方式抵御有限数量的密钥泄漏。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_2](https://doi.org/10.1007/978-3-031-30620-4_2)
## Deniable Authentication When Signing Keys Leak.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#deniable-authentication-when-signing-keys-leak) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#deniable-authentication-when-signing-keys-leak)**
### 作者
* Suvradip Chakraborty, Visa Research, Palo Alto, USA
* Dennis Hofheinz, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zurich, Zürich, Switzerland
### 摘要
> 可否认认证（Deniable Authentication）是安全通信协议中一个非常期望的属性：它允许发送者Alice以真实的方式向指定接收者Bob传输消息，只有Bob确信Alice确实发送了这些消息。特别是，它保证即使Bob试图说服一个（非指定的）Judy，证明Alice发送了某条消息，即使Bob向Judy提供了自己的秘密密钥，Judy也不会相信：就Judy所知，Bob可能是在编造一切！
> 
> 在本文中，我们研究了当Judy可以获得Alice的秘密密钥时的可否认认证。简而言之，我们希望Alice的秘密密钥的知识不会帮助Judy判断Alice是否发送了任何消息，即使Bob没有Alice的秘密密钥，甚至如果Bob与Judy合作并给她自己的秘密密钥。这种更强的可否认认证在以群组消息为背景的情况下尤为重要，因为它为用户提供了更强的否认保证。
> 
> 我们的主要贡献是一个可扩展的“”（）方案-一种可否认认证的技术形式化，对于安全通信具有机密性保证-提供了这种更强的否认保证。其核心是全新的\(\mathrm { M{\textrm{DVS}}}\)（多指定验证者签名）和\(\text {PKEBC}\)（广播公钥加密）方案构建：我们的\(\mathrm { M{\textrm{DVS}}}\)不仅在新的否认性概念方面是安全的，而且是第一个在标准假设下严格安全的；我们的\(\text {PKEBC}\)（也具有独立兴趣）是第一个在密文大小和加密和解密时间只线性增长于接收者数量的方案。这是对Maurer等人（EUROCRYPT '22）提供的方案的显著改进，其密文大小和加密和解密时间是接收者数量的平方倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_3](https://doi.org/10.1007/978-3-031-30620-4_3)
## Let Attackers Program Ideal Models: Modularity and Composability for Adaptive Compromise.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#let-attackers-program-ideal-models-modularity-and-composability-for-adaptive-compromise) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#let-attackers-program-ideal-models-modularity-and-composability-for-adaptive-compromise)**
### 作者
* Joseph Jaeger, School of Cybersecurity and Privacy, Georgia Institute of Technology, Atlanta, USA
### 摘要
> 我们展示了Jaeger和Tyagi (Crypto '20)的自适应折衷安全定义在多个自然应用场景中无法应用。其中包括从单用户安全证明多用户安全性，级联伪随机函数（PRF）的安全性，以及共享相同理想原语方案的安全性。我们提供了这些定义的新变体，并展示它们如何通过组合解决了这些问题。将这些定义扩展到非对称设置中，我们确立了模块化KEM/DEM和Fujisaki-Okamoto公钥加密方法在完全自适应折衷设置下的安全性。这使得实例化比之前的构造更高效且更标准。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_4](https://doi.org/10.1007/978-3-031-30620-4_4)
## Almost Tight Multi-user Security Under Adaptive Corruptions & Leakages in the Standard Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#almost-tight-multi-user-security-under-adaptive-corruptions-leakages-in-the-standard-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#almost-tight-multi-user-security-under-adaptive-corruptions-leakages-in-the-standard-model)**
### 作者
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
### 摘要
> 在本篇论文中，我们考虑自适应腐败下的密集多用户安全性问题，其中对手可以自适应地腐败某些用户并获取他们的密钥。我们为一系列基元提出了通用构造，并利用矩阵决策Diffie-Hellman（MDDH）假设实现了以下方案：
> 
> （1）在标准模型中实现几乎密集强EUF-CMA安全的第一个数字签名（SIG）方案，适用于自适应腐败的多用户环境；
> 
> （2）在标准模型中实现几乎密集IND-CCA安全的第一个公钥加密（PKE）方案，适用于自适应腐败的多用户多挑战环境；
> 
> （3）在标准模型中实现几乎密集CCA攻击下的隐私和真实性的第一个签名密文（SC）方案，适用于自适应腐败的多用户多挑战环境。
> 
> 作为副产品，我们的SIG和SC自然地构成了第一个强安全的消息鉴别码（MAC）和第一个认证加密（AE）方案，这些方案在标准模型中实现了几乎密集自适应腐败的多用户安全性。我们进一步优化了SC、MAC和AE的构造，以提升效率。
> 
> 此外，我们考虑了除腐败外的密钥泄漏问题，作为密集自适应腐败下密钥安全性的一种自然加强。该安全性考虑了一个更自然和更完整的“全部-部分-无”的设置，其中用户的密钥要么完全暴露给对手（“全部”），要么完全对对手隐藏（“无”），要么部分泄漏给对手（“部分”），并且即使有有限的密钥泄漏，它也保护未腐败用户。我们所有的方案都支持有界密钥泄漏并且具有全紧凑性。这产生了第一个同时在自适应腐败和泄漏下几乎密集多用户安全的SIG、PKE、SC、MAC和AE方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_5](https://doi.org/10.1007/978-3-031-30620-4_5)
## Privately Puncturing PRFs from Lattices: Adaptive Security and Collusion Resistant Pseudorandomness.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#privately-puncturing-prfs-from-lattices-adaptive-security-and-collusion-resistant-pseudorandomness) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#privately-puncturing-prfs-from-lattices-adaptive-security-and-collusion-resistant-pseudorandomness)**
### 作者
* Rupeng Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
### 摘要
> 一种私密可穿孔伪随机函数（PRF）使得可以创建一个受限版本的PRF密钥，用于评估除了某些穿孔点之外的PRF。此外，受限密钥不会透露有关穿孔点和其上的PRF值的任何信息。现有的私密可穿孔PRF构造只能证明对于受限敌手，该构造在查看任何信息之前必须对穿孔点进行承诺时是安全的。实现更自然的自适应安全性，即敌手可以实时进行所有选择，是一个未解决的问题。
> 
> 在这项工作中，我们通过基于标准格假设构建了一个自适应安全的私密可穿孔PRF来解决这个问题。为了实现这个目标，我们提出了一个称为“可解释哈希”的新原语，它允许在给定输入上重新编程哈希函数。这个新的原语可以在构建更多具有自适应安全性的加密方案时发现进一步的应用。此外，我们的构造具有集结抵抗伪随机性，即即使有多个受限密钥，也没有人能够得知穿孔点上的PRF值。以前的工作只知道使用多线性映射或不可区分混淆来实现具有集结抵抗伪随机性的私密可穿孔PRF，而我们提供了首个基于标准格假设的解决方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_6](https://doi.org/10.1007/978-3-031-30620-4_6)
## Constrained Pseudorandom Functions from Homomorphic Secret Sharing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#constrained-pseudorandom-functions-from-homomorphic-secret-sharing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#constrained-pseudorandom-functions-from-homomorphic-secret-sharing)**
### 作者
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Reichman University, Herzliya, Israel
* Alain Passelègue, Inria, Paris, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Paris, France
* Mahshid Riahinia, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Paris, France
### 摘要
> 我们提出并分析了一种从同态秘密共享构建1键约束伪随机函数（CPRF）的简单策略。在此过程中，我们获得以下贡献：首先，我们确定了适用于我们策略的基础HSS方案的理想特性。其次，我们表明（大多数）最近存在的HSS方案满足这些特性，从而导致对各种限制和假设进行CPRF实例化。值得注意的是，我们从DCR假设中获得了内积的第一个（1键选择性安全，私有）CPRFs和\(\textsf{NC}^1\)的（1键选择性安全）CPRFs等更多内容。最后，我们重新审视了配备这些附加属性的HSS的两个应用以进行安全计算：我们获得了在沉默预处理模型中的安全计算，其中一方能够在甚至不知道另一方的情况下预先计算其整个预处理材料，并且我们针对计算的受限形式构建了具有次线性通信的单面统计安全计算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_7](https://doi.org/10.1007/978-3-031-30620-4_7)
## Efficient FHEW Bootstrapping with Small Evaluation Keys, and Applications to Threshold Homomorphic Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#efficient-fhew-bootstrapping-with-small-evaluation-keys-and-applications-to-threshold-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#efficient-fhew-bootstrapping-with-small-evaluation-keys-and-applications-to-threshold-homomorphic-encryption)**
### 作者
* Yongwoo Lee, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Andrey Kim, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Rakyong Choi, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Maxim Deryabin, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Jieun Eom, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Donghoon Yoo, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Daniele Micciancio, University of California, San Diego, USA
### 摘要
> 有两种竞争的方法可用于引导FHEW全同态加密方案（Ducas和Micciancio，Eurocrypt 2015）及其变种：原始 AP/FHEW 方法支持任意秘密密钥分布，改进的 GINX/TFHE 方法使用更小的评估密钥，但仅适用于二进制秘密密钥，限制了方案的适用性。
> 
> 在本文中，我们提出了一种新的FHEW类加密方案引导过程，同时实现了这两种方法最好的特性：对任意秘密密钥分布的支持不会增加额外的运行时间成本，同时使用较小的评估密钥。（对于一些重要的应用程序，如阈值和一些多密钥同态加密方案，对任意秘密密钥的支持至关重要。）作为附加好处，我们的新引导过程导致的噪声增长比AP和GINX都小，无论密钥分布如何。
> 
> 我们的改进在理论上具有重要意义（在运行时间或公共评估密钥大小方面，提供了渐近节约，最高可达到\(O(\log n)\)乘法因子），并且在实践中具有相关性。例如，对于具体的128位目标安全级别，我们展示了如何将已知最佳方案的评估密钥大小降低超过30％，同时稍微减少运行时间。我们通过在PALISADE/OpenFHE开源同态加密库中构建原型实现来证明所提方法的实用性。我们提供了经过优化的参数集和实现结果，显示出所提算法在运行时间和密钥大小方面具有所有已知FHEW引导方法中最佳的性能。我们通过描述基于FHEW的阈值同态加密的简单构建方式来说明我们方法的优势。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_8](https://doi.org/10.1007/978-3-031-30620-4_8)
## On Polynomial Functions Modulo pe and Faster Bootstrapping for Homomorphic Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#on-polynomial-functions-modulo-pe-and-faster-bootstrapping-for-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#on-polynomial-functions-modulo-pe-and-faster-bootstrapping-for-homomorphic-encryption)**
### 作者
* Robin Geelen, imec-COSIC, KU Leuven, Leuven, Belgium
* Jiayi Kang, imec-COSIC, KU Leuven, Leuven, Belgium
* Frederik Vercauteren, imec-COSIC, KU Leuven, Leuven, Belgium
* Ilia Iliashenko, CipherMode Labs, Los Angeles, USA
### 摘要
> 在本文中，我们对函数\(f: \mathbb {Z}_{p^e} \rightarrow \mathbb {Z}_{p^e}\)进行了系统性研究，并对那些可以由整数系数的多项式表示的函数进行了分类。具体而言，我们涵盖了以下属性：存在整数多项式表示的必要和充分条件；计算这种表示；以及表示给定函数的等价多项式的完整集合。
> 
> 作为应用，我们利用新开发的理论加速了BGV和BFV同态加密方案的引导。我们改进的关键因素是零多项式的存在，即在每个点上求值为零的非零多项式。我们利用这些零多项式的丰富代数结构来寻找更好的数字提取函数表示，这是引导过程中的主要瓶颈。因此，我们得到了比原始多项式少50%系数的稀疏多项式。此外，我们提出了一种将数字提取分解为多项式求值序列的新方法。这降低了模\(p^e\)下数字提取的时间复杂度，从\(\mathcal {O}(\sqrt{pe})\)降低到\(\mathcal {O}(\sqrt{p}\root ^4 \of {e})\)，但会稍微增加乘法深度。总体而言，我们在HElib中的实现显示出与最先进方法相比的显著加速，提高了最多2.6倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_9](https://doi.org/10.1007/978-3-031-30620-4_9)
## Functional Commitments for All Functions, with Transparent Setup and from SIS.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#functional-commitments-for-all-functions-with-transparent-setup-and-from-sis) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#functional-commitments-for-all-functions-with-transparent-setup-and-from-sis)**
### 作者
* Leo de Castro, EECS, Massachusetts Institute of Technology, Cambridge, USA
* Chris Peikert, Computer Science and Engineering, University of Michigan, Ann Arbor, USA
### 摘要
> 一个功能承诺方案使用户能够简洁地承诺到特定家族中的函数，然后在需要时简洁且可验证地公开函数在所需输入上的值。有用的特殊情况，已经在密码学领域中被应用，包括向量承诺和多项式承诺。
> 
> 迄今为止，功能承诺只针对基本上是线性的函数进行了构建（在可证伪的假设下），最近有一个例外，可以用于任意复杂的函数。然而，该方案在一个强大且非标准的模型中运作，需要在线的可信机构为任何打开的函数输入生成特殊密钥。
> 
> 在本研究中，我们提供了第一个针对非线性函数的功能承诺方案，事实上，对于任何有界复杂性的函数都适用，而且是在标准设置和可证伪的假设下。具体而言，设置是"透明"的，仅需要公共随机数（而不是任何可信实体），假设是标准的短整数解（SIS）格问题的难度。我们的构建还具有其他吸引人的特点，包括：通过通用可组合性实现无状态更新；对于验证者和提交者在向量承诺和多项式承诺等重要特殊情况下具有良好的渐近效率，通过预处理实现；以及后量子安全性，因为它基于SIS问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_10](https://doi.org/10.1007/978-3-031-30620-4_10)
## Batch Bootstrapping I: - A New Framework for SIMD Bootstrapping in Polynomial Modulus.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#batch-bootstrapping-i-a-new-framework-for-simd-bootstrapping-in-polynomial-modulus) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#batch-bootstrapping-i-a-new-framework-for-simd-bootstrapping-in-polynomial-modulus)**
### 作者
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Han Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Science, Beijing, China
* Han Wang, School of Cyber Security, University of Chinese Academy of Science, Beijing, China
### 摘要
> 在这一系列的工作中，我们旨在改进完全同态加密（FHE）的引导范例。我们的主要目标是展示在多项式模加密中引导的摊销成本只需要\(\tilde{O}(1)\)个FHE乘法。
> 
> 为了实现这一目标，我们在两篇论文中开发了重要的代数技巧。特别是，第一篇论文（本研究）提出了一个新的数学框架，用于批量同态计算，与现有的AP14/FHEW/TFHE引导方法相兼容。为了证明我们的整体方法只需要多项式模，我们开发了一个关于噪声增长的关键代数分析，可能是独立利益。总体而言，该框架产生了一个摊销复杂度\(\tilde{O}(\lambda ^{0.75})\)个FHE乘法，其中\(\lambda\)是安全参数。这改进了先前的AP14/FHEW/TFHE方法，其在摊销中需要\(O(\lambda)\)个FHE乘法。
> 
> 基于本研究的基础，开发了许多重要的新技术，续集（Bootstrapping II，Eurocrypt 2023）展示了如何进一步改进MS18（Micciancio and Sorrell，ICALP 2018）的递归引导方法，从而实现了一个重要的理论改进，可能导致更实用的方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_11](https://doi.org/10.1007/978-3-031-30620-4_11)
## Batch Bootstrapping II: - Bootstrapping in Polynomial Modulus only Requires O~(1)\documentclass[12pt]{minimal} \usepackage{amsmath} \usepackage{wasysym} \usepackage{amsfonts} \usepackage{amssymb} \usepackage{amsbsy} \usepackage{mathrsfs} \usepackage{upgreek} \setlength{\oddsidemargin}{-69pt} \begin{document}$$\tilde{O}(1)$$\end{document} FHE Multiplications in Amortization.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#batch-bootstrapping-ii-bootstrapping-in-polynomial-modulus-only-requires-o-1-documentclass-12pt-minimal-usepackage-amsmath-usepackage-wasysym-usepackage-amsfonts-usepackage-amssymb-usepackage-amsbsy-usepackage-mathrsfs-usepackage-upgreek-setlength-oddsidemargin-69pt-begin-document-tilde-o-1-end-document-fhe-multiplications-in-amortization) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#batch-bootstrapping-ii-bootstrapping-in-polynomial-modulus-only-requires-o-1-documentclass-12pt-minimal-usepackage-amsmath-usepackage-wasysym-usepackage-amsfonts-usepackage-amssymb-usepackage-amsbsy-usepackage-mathrsfs-usepackage-upgreek-setlength-oddsidemargin-69pt-begin-document-tilde-o-1-end-document-fhe-multiplications-in-amortization)**
### 作者
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
* Han Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Science, Beijing, China
* Han Wang, School of Cyber Security, University of Chinese Academy of Science, Beijing, China
### 摘要
> 这项工作继续了《Batch Bootstrapping I》（刘和王，Eurocrypt 2023）中提出的批处理框架的探索。通过基于批处理框架进一步设计新颖的批处理同态算法，本研究展示了如何在多项式模数内使用\(\tilde{O}(\lambda)\)个FHE乘法操作对\(\lambda\)个LWE输入密文进行引导。这意味着每个输入密文的平摊复杂度为\(\tilde{O}(1)\)个FHE乘法操作，显著改进了我们的第一项工作（其平摊复杂度为\(\tilde{O}(\lambda^{0.75})\)）和理论最前沿的MS18（Micciancio和Sorrell，ICALP 2018），其平摊复杂度为\(O(3^{1/\epsilon} \cdot \lambda^{\epsilon})\)，其中\(\epsilon\)为任意常数。
> 
> 我们相信我们所有的新同态算法可能在一般应用中非常有用，并因此具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_12](https://doi.org/10.1007/978-3-031-30620-4_12)
## Succinct Vector, Polynomial, and Functional Commitments from Lattices.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#succinct-vector-polynomial-and-functional-commitments-from-lattices) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#succinct-vector-polynomial-and-functional-commitments-from-lattices)**
### 作者
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### 摘要
> 向量承诺方案允许用户承诺一组值 \(\textbf{x}\in \{0,1\}^\ell \)，并在之后根据特定的位置打开该承诺。承诺和打开的大小都应该是简洁的（即与向量的长度 \(\ell \) 的对数多项式大小）。向量承诺及其对多项式承诺和功能承诺的扩展是许多密码协议的关键构建模块。
> 
> 我们引入了一个用于构建非交互式基于格的向量承诺及其扩展的新框架。我们的框架的简单实例从标准短整数解（SIS）假设中产生了一种支持私密打开和大型消息的新向量承诺方案。然后，我们展示了如何利用我们的框架来获得第一个简洁功能承诺方案，该方案支持与任意有界深度布尔电路相关的打开。在该方案中，用户承诺一组 \(\textbf{x}\in \{0,1\}^\ell\)，稍后将该承诺打开给任何函数 \(f(\textbf{x})\)。承诺和打开都是非交互式和简洁的：即它们的大小为 \(\textsf{poly}(\lambda , d, \log \ell )\)，其中 \(\lambda\) 是安全参数，d 是计算 f 的布尔电路的深度。以前的功能承诺构造只能支持常度多项式，或者需要一个可信的在线机构，或者依赖于不可伪造的假设。我们的功能承诺方案的安全性建立在我们在这项工作中引入的一组新的可伪造的“基础增强”SIS假设（\(\textsf{BASIS}\)）上。
> 
> 我们还展示了如何使用我们的向量承诺框架来获得以下扩展：(1) 多项式承诺方案，其中用户可以承诺一个多项式 \(f \in \mathbb {Z}_{q}[x]\)，然后将承诺打开为一个求值 \(f(x) \in \mathbb {Z}_{q}\)；(2) 可累积向量（或功能）承诺，其中用户可以对多个索引（或函数求值）进行承诺，并将它们合并为一个简短的承诺。这两个扩展都依赖于我们用于获得简洁功能承诺方案的相同的 \(\textsf{BASIS}\) 假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_13](https://doi.org/10.1007/978-3-031-30620-4_13)
## Efficient Laconic Cryptography from Learning with Errors.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#efficient-laconic-cryptography-from-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#efficient-laconic-cryptography-from-learning-with-errors)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Chuanwei Lin, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Dimitris Kolonelos, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, Universidad Politecnica de Madrid, Madrid, Spain
* Russell W. F. Lai, Aalto University, Espoo, Finland
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Ahmadreza Rahimi, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 简洁密码学是一种新兴范式，可以在仅有两个消息的情况下实现具有亚线性通信复杂度的加密原语。特别地，如果Alice和Bob之间的两个消息协议的通信和计算复杂度与Alice输入的大小基本无关，则该协议被称为简洁。这可以被视为完全同态加密的对偶概念，因为它实现了“以Bob为优化目标”的协议。这个范式在最近几年取得了巨大的进展。然而，所有现有的简洁原语构造都只被认为是理论上的兴趣：它们都依赖于非黑盒的密码技术，这是非常不实际的。
> 
> 本文表明，基本的简洁密码学原语并不需要非黑盒技术。我们在这项工作中提出了一种完全代数的简洁加密构造，这是我们引入的一个概念，它作为我们框架的基石。我们证明了在标准的学习与错误假设下（具有多项式模量噪声比），该方案是安全的。我们首次提供了简洁原语的概念验证实现，证明了该构造确实是实际可行的：对于一个大小为\(2^{50}\)的数据库，加密和解密的时间在几毫秒的量级内。
> 
> 简洁加密可以被用作黑盒来构造其他简洁原语。具体而言，我们展示了如何构造：
> 
> 简洁无记名传输
> 
> 基于注册的加密方案
> 
> 简洁私有集交集协议
> 
> 以上所有的东西都具有基本最优的参数和类似的实际效率。此外，我们的简洁加密可以进行预处理，从而使得在线加密步骤完全是组合性的，因此更加高效。使用类似的技术，我们还获得了具有无界身份空间和严格安全证明（在标准模型中）的基于身份的加密。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_14](https://doi.org/10.1007/978-3-031-30620-4_14)
## Fully Adaptive Decentralized Multi-Authority ABE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#fully-adaptive-decentralized-multi-authority-abe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#fully-adaptive-decentralized-multi-authority-abe)**
### 作者
* Pratish Datta, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, NTT Research, Sunnyvale, CA, 94085, USA
* Brent Waters, NTT Research, Sunnyvale, CA, 94085, USA
* Ilan Komargodski, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Brent Waters, University of Texas at Austin, Austin, TX, 78712, USA
### 摘要
> 分散的多权威属性基加密（MA-ABE）是标准（密文策略）属性基加密的分布式推广，其中不存在可信任的中央权威：任何一方都可以成为权威并发放私钥，除了创建一组初始的共同参考参数外，不需要任何全局协调的要求。
> 
> 我们提出了第一种可以证明完全自适应安全的多权威属性基加密方案。换句话说，我们的构建是安全的，可以抵抗在系统的整个生命周期中可能会破坏部分权威并执行密钥查询的攻击者。我们的主要构建依赖于一个素数阶双线性群，其中k-线性假设成立，同时依赖于一个随机预言机。在此过程中，我们还提出了一个概念上更简单的构建，它依赖于具有标准子群决策假设的合成阶双线性群，以及一个随机预言机。
> 
> 在此工作之前，并没有任何能够抵御权威的自适应破坏的构建，无论使用了什么假设。实际上，我们指出，即使是标准的复杂性利用型论证也不适用于多权威的情境。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_15](https://doi.org/10.1007/978-3-031-30620-4_15)
## On the Optimal Succinctness and Efficiency of Functional Encryption and Attribute-Based Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#on-the-optimal-succinctness-and-efficiency-of-functional-encryption-and-attribute-based-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#on-the-optimal-succinctness-and-efficiency-of-functional-encryption-and-attribute-based-encryption)**
### 作者
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Ji Luo, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 我们通过证明内在的空间-时间权衡和构造几乎最优方案，研究了功能加密（FE）和属性加密（ABE）的最佳（渐进）效率。我们考虑了部分隐藏功能加密（PHFE）的一般概念，包括FE和ABE，并考虑了最高效的随机访问机（RAM）计算模型。在PHFE中，秘密密钥\(\textsf{sk}_f\)与函数f相关联，而密文\(\textsf{ct}_x(y)\)与公共输入x相关联，并加密私有输入y。解密会揭示f(x, y)以及y的其他信息。
> 
> 我们提出了首个仅基于电路上FE必要假设的RAM的PHFE。相比之前方案的效率显著改善，我们的构造实现了几乎最优的简洁性和计算时间：
> 
> 它的秘密密钥\(\textsf{sk}_f\)尺寸恒定（最优），与函数描述长度 |f| 无关，即\({|\textsf{sk}_f|={\text {poly}}(\lambda )}\)。
> 
> 它的密文\(\textsf{ct}_x(y)\)在私有输入长度|y|上具有速率-2（几乎最优），与公共输入长度|x|无关，即\({|\textsf{ct}_x(y)|=2|y|+{\text {poly}}(\lambda )}\)。
> 
> 解密时间与RAM计算实例运行时间T，以及函数和公共/私有输入长度成线性关系，即\({T_\textsf{Dec}=(T+|f|+|x|+|y|){\text {poly}}(\lambda )}\)。
> 
> 作为推论，我们获得了首个同时具有恒定尺寸密钥和密文的ABE，同时享受着与Luo（ePrint '22）下界最佳匹配的解密时间。我们还分别实现了几个已知下界的最优ABE。
> 
> 我们研究了进一步提高效率的障碍。我们证明了（PH-）FE的首个无条件空间-时间权衡：
> 
> 没有安全的（PH-）FE可以使|\textsf{sk}_f|和T_\textsf{Dec}都亚线性地与|f|相关。
> 
> 没有安全的PHFE可以使|\textsf{ct}_x(y)|和T_\textsf{Dec}都亚线性地与|x|相关。
> 
> 我们的下界甚至适用于最弱的选择性秘密密钥1密钥1密文方案。此外，我们展示了一种条件性的障碍，达到最优的解密时间\({T_\textsf{Dec}=T{\text {poly}}(\lambda )}\)，同时保持线性大小依赖 —— 任何这样的（PH-）FE方案都意味着具有线性大小预处理数据库的双倍效率的私有信息检索(DE-PIR)，目前尚无候选方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_16](https://doi.org/10.1007/978-3-031-30620-4_16)
## Registered Attribute-Based Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#registered-attribute-based-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#registered-attribute-based-encryption)**
### 作者
* Susan Hohenberger, Johns Hopkins University, Baltimore, MD, USA
* George Lu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 属性基加密（ABE）将公钥加密概念推广，并实现对加密数据的细粒度控制。然而，ABE打破了公钥加密的传统信任模型，要求一个可信的中央机构发布解密密钥。如果对手入侵了中央机构并窃取了其秘密密钥，那么对手就能解密系统中的每个密文。
> 
> 本文引入了注册ABE，这是一种允许用户自行生成密钥并将相关的公钥与其属性一起注册给“密钥管理员”的基本原理。密钥管理员将不同用户的公钥聚合为一个紧凑的主公钥。用户需要从密钥管理员获取辅助解密密钥，并将其与自己的密钥相结合以进行解密。我们要求聚合公钥、辅助解密密钥、密文以及加密/解密时间的大小都与注册用户数的对数成多项式关系。此外，密钥管理员完全透明，不保留任何秘密。注册ABE将Garg等人（TCC 2018）提出的基于注册的加密（RBE）概念推广了出来，他们专注于基于身份的加密的简化设置。
> 
> 我们构建了一个支持预先有界用户数和可由线性秘密共享方案（例如单调布尔公式）描述的策略的注册ABE方案，基于对组合阶配对群的假设。我们的方法与以前构建RBE的技术大相径庭，只使用了密码学黑盒。所有现有的RBE构建（比注册ABE更弱的概念）都依赖于复杂的非黑盒技术。我们构建的方案的加密和解密成本与基本配对-ABE的成本相当。我们方案的两个限制是，它需要一个结构化的参考字符串，其大小与用户数量的平方成正比（与属性宇宙的大小成线性关系），并且注册时间与用户数量成线性关系。
> 
> 最后，作为可行性结果，我们构建了一个从不可区分混淆和某种统计绑定哈希函数支持通用策略和任意用户数的注册ABE方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_17](https://doi.org/10.1007/978-3-031-30620-4_17)
## Unbounded Quadratic Functional Encryption and More from Pairings.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#unbounded-quadratic-functional-encryption-and-more-from-pairings) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#unbounded-quadratic-functional-encryption-and-more-from-pairings)**
### 作者
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 我们提出了第一个无限制的二次函数功能加密（FE）方案及其扩展，其中要加密的消息大小先前并没有限制。在我们的工作之前，所有针对二次函数的FE方案都是有限制的，这意味着消息长度在设置时被固定。在第一个方案中，加密采用\(\{x_{i}\}_{i \in S_{c}}\)，密钥生成采用\(\{c_{i,j}\}_{i,j \in S_{k}}\)，解密仅当\(S_{k} \subseteq S_{c}\)时输出\(\sum _{i,j \in S_{k}} c_{i,j}x_{i}x_{j}\)，其中\(S_{c}\)和\(S_{k}\)的大小可以是任意的。我们的第二个方案是第一个方案的扩展，用于部分隐藏FE，它计算公共输入上的算术分支程序和私有输入上的二次函数。具体而言，加密需要一个公共输入\(\textbf{u}\)以及\(\{x_{i}\}_{i \in S_{c}}\)，与算术分支程序\(\{f_{i,j}\}_{i,j \in S_{k}}\)相关联的秘密密钥，并且只有当\(S_{k} \subseteq S_{c}\)时，解密才会产生\(\sum _{i,j \in S_{k}} f_{i,j}(\textbf{u})x_{i}x_{j}\)。我们两个方案都基于配对，并且在标准MDDH假设下，在仿真模型中是安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_18](https://doi.org/10.1007/978-3-031-30620-4_18)
## Multi-key and Multi-input Predicate Encryption from Learning with Errors.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#multi-key-and-multi-input-predicate-encryption-from-learning-with-errors) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#multi-key-and-multi-input-predicate-encryption-from-learning-with-errors)**
### 作者
* Danilo Francati, Aarhus University, Aarhus, Denmark
* Daniele Friolo, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 我们提出了谓词加密（PE）的两个自然推广，称为多密钥和多输入PE。具体而言，我们的贡献有三个方面。
> 
> 定义。我们按照标准的不可区分性范式形式化了多密钥PE和多输入PE的安全性，并对恶意发送方（即加密密钥的破坏）和恶意接收方（即串通）进行建模。
> 
> 构建。我们构建了支持多个多任意单输入谓词的适应性安全的多密钥和多输入PE，假设学习有错误（LWE）问题具有亚指数难度。
> 
> 应用。我们展示了对于足够表达力的谓词，多密钥和多输入PE足以用于有趣的密码应用，包括非交互多方计算（NI-MPC）和匹配加密（ME）。
> 
> 特别地，通过我们的多密钥和多输入PE构建，并在亚指数LWE假设下，我们获得了支持任意政策并具有无限串通的首个ME，以及对于满足重用性非平凡概念且支持常数（多项式）个方程的所谓全有或全无函数的鲁棒（非鲁棒）NI-MPC。在我们的工作之前，这两个应用都需要诸如不可区分性混淆或紧凑功能加密等更复杂的工具。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_19](https://doi.org/10.1007/978-3-031-30620-4_19)
## Broadcast, Trace and Revoke with Optimal Parameters from Polynomial Hardness.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#broadcast-trace-and-revoke-with-optimal-parameters-from-polynomial-hardness) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#broadcast-trace-and-revoke-with-optimal-parameters-from-polynomial-hardness)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Simran Kumari, IIT Madras, Chennai, India
* Anshu Yadav, IIT Madras, Chennai, India
* Shota Yamada, AIST, Tokyo, Japan
### 摘要
> 一个广播、追踪和撤销系统将广播加密和叛徒追踪进行了推广。在这种方案中，加密器可以指定一个被撤销的用户列表 \(L \subseteq N\)，使得：（i）列表 L 中的用户不能解密密文，（ii）密文大小与 L 无关，（iii）一个盗版解密盒支持对受损用户的追踪。这一领域的“圣杯”是构建一个能抵抗无限串谋的系统，实现所有参数（包括公钥和私钥）的大小与 |L| 和 |N| 无关，并基于多项式难度假设。本文的主要贡献如下：
> 
> 1. 公开追踪设置：我们提供了一个构造，（i）实现了最佳参数，（ii）支持将身份（来自指数空间）嵌入到用户的秘密密钥中，（iii）依赖于多项式难度假设，即紧凑型函数加密（\(\textsf{FE}\)）和基于密钥策略的属性加密（\({\textsf{ABE}}\)) 具有特殊效率特性，（iv）在撤销列表方面具有自适应安全性。之前已知的最佳构造由 Nishimaki、Wichs 和 Zhandry (Eurocrypt 2016) 提出，实现了最佳参数和嵌入身份，但依赖于可区分性混淆，该假设被认为是固有的亚指数假设，并且仅在与撤销列表相关的选择性安全性方面实现了安全性。
> 
> 2. 秘密追踪设置：我们提供了第一个具有最佳密文、公钥和私钥大小以及来自 Obfustopia 之外的任何假设的构造。具体而言，我们的构造依赖于 Lockable Obfuscation，该构造可以使用 \(\textsf{LWE}\)（Goyal、Koppula、Waters 和 Wichs，Zirdelis，Focs 2017）以及两个 \({\textsf{ABE}}\) 方案来构造：（i）Boneh 等人提出的具有特殊效率特性的基于密钥策略的方案 (Eurocrypt 2014)，以及（ii）Wee 最近使用一种称为 evasive and tensor \(\textsf{LWE}\) 的新假设构建的针对 \(\textsf{P}\) 的密文策略 \({\textsf{ABE}}\)（Eurocrypt 2022）。这种用于构建 \({\textsf{ABE}}\) 的假设被认为比基于格的假设更弱 - 特别是它甚至对于基于格的广播，而不是追踪，也是必需的。此外，通过依赖于 \(\textsf{LWE}\) 的亚指数安全性，我们的两个构造都可以支持超多项式大小的撤销列表，只要它允许有效的表示和成员测试。据我们所知，这是首次实现此目标的工作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_20](https://doi.org/10.1007/978-3-031-30620-4_20)
## Traitor Tracing with N1/3-Size Ciphertexts and O(1)-Size Keys from k-Lin.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-3].md#traitor-tracing-with-n1-3-size-ciphertexts-and-o-1-size-keys-from-k-lin) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-3].md#traitor-tracing-with-n1-3-size-ciphertexts-and-o-1-size-keys-from-k-lin)**
### 作者
* Junqing Gong, East China Normal University, Shanghai, China
* Junqing Gong, Shanghai Qi Zhi Institute, Shanghai, China
* Ji Luo, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Hoeteck Wee, NTT Research, Sunnyvale, USA
### 摘要
> 我们提出了一种基于配对的叛徒追踪方案，适用于N个用户。
> 
> 这是第一个能够实现\( | \textsf{pk}| \cdot | \textsf{sk}| \cdot | \textsf{ct}| = o(N) \)的基于配对的方案。我们的构建依赖于(双边) k-Lin 假设，并实现了私密追踪和完全共谋抵抗。我们的结果同时改进了Boneh-Sahai-Waters [Eurocrypt '06]中\( \textsf{pk}, \textsf{ct}\)的大小，以及Zhandry [Crypto '20]中\( \textsf{sk}\)的大小，并进一步消除了后者工作中对通用群模型的依赖。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30620-4_21](https://doi.org/10.1007/978-3-031-30620-4_21)
