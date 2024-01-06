# Eurocrypt[2023-5]
## Unique-Path Identity Based Encryption with Applications to Strongly Secure Messaging.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#unique-path-identity-based-encryption-with-applications-to-strongly-secure-messaging) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#unique-path-identity-based-encryption-with-applications-to-strongly-secure-messaging)**
### 作者
* Paul Rösler, FAU Erlangen-Nürnberg, Erlangen, Germany
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
* Christoph Striecks, AIT Austrian Institute of Technology, Vienna, Austria
### 摘要
> 分层身份基加密（HIBE）是一个经过深入研究的多用途工具，在许多密码协议中得到了应用。然而，由于所有已知 HIBE 构造的性能被广泛视为具有限制性，一些实际应用在牺牲安全性的情况下避免使用 HIBE。一个突出的例子是安全通信：强安全的通信协议可以被证明与密钥可更新密钥封装机制（KU-KEM）等效（Balli et al.，Asiacrypt 2020）；迄今为止，所有的 KU-KEM 构造都依赖于具有自适应无限深度的 HIBE（Poettering 和 Rösler，Jaeger 和 Stepanovs，CRYPTO 2018）。通过减少安全要求以提高效率，许多通信协议可以不使用 HIBE。
> 
> 在这项工作中，我们旨在在不牺牲安全的前提下提高效率。为此，我们观察到像通信这样的应用只需要强安全性的一种受限变体的 HIBE。这种变体，我们称之为唯一路径身份基加密（UPIBE），通过要求每个秘密密钥最多只能委派一个从属秘密密钥来限制 HIBE。然而，与前向安全公钥加密中的固定秘密密钥委派不同，UPIBE 中的委派（与 HIBE 相同）是由指数级大空间中的可变身份字符串唯一确定的。我们研究了这种温和但出乎意料的有效限制，并展示了它提供的复杂性和性能优势。
> 
> 更具体地说，我们从标准模型中的有界勾结 IBE 构建了有界深度 UPIBE；并从随机预言模型中的选择性有界深度 HIBE 构建了自适应无限深度 UPIBE。这些结果显著扩展了底层假设和高效实例的范围。最后，我们对我们的 UPIBE 设计进行了严格的性能评估。除了通过减少 KU-KEM 和强安全的通信协议的复杂性和提高效率来解决具有挑战性的开放问题外，我们对有界勾结设置提供了一个新的定义性观点。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_1](https://doi.org/10.1007/978-3-031-30589-4_1)
## On the Hardness of the Finite Field Isomorphism Problem.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#on-the-hardness-of-the-finite-field-isomorphism-problem) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#on-the-hardness-of-the-finite-field-isomorphism-problem)**
### 作者
* Dipayan Das, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 有限域同构问题（FFI）在PKC’18中被引入，作为平均情况格问题（如LWE、SIS或NTRU）的一种替代。在同一篇论文中，利用FFI问题构建了一个完全同态加密方案。在这项工作中，我们证明了FFI问题的决策变体可以在多项式时间内解决，对于任意域特征\(q= \varOmega (\beta n^2)\)，其中\(q,\beta ,n\)是FFI问题的参数。然后，我们利用FFI区分器的结果提出了对完全同态加密方案语义安全性的多项式时间攻击。此外，为了完整性，我们还研究了FFI问题的搜索变体，并展示了如何将其陈述为一个q-ary格问题，这在先前是未知的。因此，我们可以使用简单的格缩减方法解决先前难以处理的一些参数的搜索问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_12](https://doi.org/10.1007/978-3-031-30589-4_12)
## End-to-End Secure Messaging with Traceability Only for Illegal Content.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#end-to-end-secure-messaging-with-traceability-only-for-illegal-content) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#end-to-end-secure-messaging-with-traceability-only-for-illegal-content)**
### 作者
* James Bartusek, University of California, Berkeley, USA
* Sanjam Garg, University of California, Berkeley, USA
* Guru-Vamsi Policharla, University of California, Berkeley, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
### 摘要
> 随着端到端加密的消息服务变得广泛采用，执法机构越来越担心这些服务干扰了他们维护公共安全的能力。实际上，在保护用户隐私和使内容适度进行管理之间存在着明显的紧张关系。最近的研究开始解决这种紧张关系，提出了一些旨在在“诚实”用户的隐私和“恶意”用户的可追溯性之间取得平衡的系统。不幸的是，这些系统缺乏对恶意或被胁迫的服务提供商的防护。在本研究中，我们通过预约束密码学的视角来解决隐私与内容适度管理问题[Ananth et al., ITCS 2022]。我们引入集合预约束（\(\textsf{SPC}\)）群签名的概念，以确保对恶意密钥生成器的安全性。\(\textsf{SPC}\)群签名能够追踪在消息系统中发布预定义非法内容（如儿童色情材料）的用户，同时提供对恶意服务提供商的安全性。我们构建了针对\(\textsf{SPC}\)群签名的具体高效协议，并通过实现展示了我们方法的真实可行性。我们解决方案的起点是最近引入的苹果PSI系统，我们对其进行了重大改进以提高安全性和扩展功能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_2](https://doi.org/10.1007/978-3-031-30589-4_2)
## New Time-Memory Trade-Offs for Subset Sum - Improving ISD in Theory and Practice.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#new-time-memory-trade-offs-for-subset-sum-improving-isd-in-theory-and-practice) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#new-time-memory-trade-offs-for-subset-sum-improving-isd-in-theory-and-practice)**
### 作者
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Floyd Zweydinger, Ruhr University Bochum, Bochum, Germany
### 摘要
> 我们提出了新的时间-内存权衡方法，用于在$$\mathbb {Z}_{2^n}$$上定义的随机子集和问题\((a_1,\ldots ,a_n,t)\)。我们的权衡方法为每个固定的内存限制\(M\ge 2^{0.091n}\)带来了显著的运行时改进。此外，我们还插值到了当内存不受限制时最快已知算法的运行时间。从技术上讲，我们的设计引入了一种修剪策略，用于Becker-Coron-Joux（BCJ）的构造，从而允许出现指数级小的成功概率。我们通过多次随机执行来弥补这种减少的概率。我们的主要改进源于在后续执行中巧妙地重用计算的部分，以降低每次迭代的时间复杂度。
> 
> 作为我们构造的一个应用，我们得到了信息集译码（ISD）算法的首个非平凡时间-内存权衡。我们的新算法在渐近情况下和实际情况下都优于先前的（隐含的）权衡。此外，由于减少了内存访问成本，我们优化后的实现也提高了运行时间。我们通过获得解码准则循环码（QC-3138）的新记录计算来证明这一点。然后，利用我们新获得的数据点，我们对NIST PQC第四轮候选者McEliece、BIKE和HQC所建议的参数集的难度进行外推，将先前的估计降低了多达6位，并进一步提高了它们的可靠性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_13](https://doi.org/10.1007/978-3-031-30589-4_13)
## Finding Many Collisions via Reusable Quantum Walks - Application to Lattice Sieving.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#finding-many-collisions-via-reusable-quantum-walks-application-to-lattice-sieving) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#finding-many-collisions-via-reusable-quantum-walks-application-to-lattice-sieving)**
### 作者
* Xavier Bonnetain, Université de Lorraine, CNRS, Inria, Nancy, France
* André Chailloux, Inria, Paris, France
* André Schrottenloher, Inria, Univ. Rennes, IRISA, Rennes, France
* Yixin Shen, Royal Holloway, University of London, Egham, UK
### 摘要
> 给定一个定义域为\([2^n]\)，值域为\([2^m]\)的随机函数f，其中\(m \ge n\)，f的碰撞是指具有相同映射的不同输入对。碰撞查找是密码分析中一个普遍存在的问题，并且已经通过经典和量子算法进行了深入研究。事实上，该问题的量子查询复杂度已被广泛研究，为\(\varTheta (2^{m/3})\)，并且已经找到了适用于m的所有值的匹配算法。
> 
> 当我们寻找多个碰撞对时，情况变得不同。在这种情况下，对于\(2^k\)个碰撞，刘和Zhandry（EUROCRYPT 2019）证明了一个查询下界为\(\varTheta (2^{(2k+m)/3})\) 。已知一个匹配算法，但仅适用于m相对较小且存在许多碰撞的情况。在本文中，我们改进了该问题的算法，并特别扩展了满足下界的可接受参数的范围。
> 
> 我们的新方法依赖于一种链接的量子行走算法，可能具有独立的兴趣。它可以提取出MNRS风格量子行走的多个解，而无需重新计算整个过程：在找到解并输出后，当前状态将被重用作另一个行走的初始状态。
> 
> 作为应用，我们改进了最短向量问题（SVP）的量子筛选算法，其复杂度为\(2^{0.2563d + o(d)}\)，而不是之前的\(2^{0.2570d + o(d)}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_8](https://doi.org/10.1007/978-3-031-30589-4_8)
## M-SIDH and MD-SIDH: Countering SIDH Attacks by Masking Information.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#m-sidh-and-md-sidh-countering-sidh-attacks-by-masking-information) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#m-sidh-and-md-sidh-countering-sidh-attacks-by-masking-information)**
### 作者
* Tako Boris Fouotsa, LASEC-EPFL, Lausanne, Switzerland
* Tomoki Moriya, The University of Tokyo, Tokyo, Japan
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, University of Birmingham, Birmingham, UK
### 摘要
> SIDH协议是由Jao和De Feo于2011年设计的一种基于等同曲线的密钥交换协议，使用超奇异等同映射。该协议是SIKE算法的基础，该算法在2022年5月进入了NIST后量子标准化项目的第四轮。该算法被认为非常有前途：事实上，对SIDH的最主要攻击是具有指数复杂度的meet-in-the-middle变体和只适用于不平衡参数（特别是不适用于SIKE）的扭点攻击。
> 
> 然而这个安全情况在2022年8月发生了巨大改变，Castryck-Decru、Maino-Martindale和Robert提出了新的攻击方法。与之前对不平衡版本的攻击类似，这些新攻击利用SIDH协议中提供的扭点信息。关键是，新攻击将等同问题嵌入到较高维度的类似等同问题中，也影响到平衡参数。因此，通过这些研究，SIKE算法从理论上和实践上都已经完全被攻破。
> 
> 鉴于近年来SIKE和相关协议所引起的广泛关注，自然而然地需要寻找对这些新攻击的对策。在本文中，我们介绍了两种基于部分隐藏等同映射度数和扭点信息的SIDH协议对抗措施。我们对所得方案进行了初步分析，包括对之前攻击方法的非平凡推广。基于此分析，我们为我们的M-SIDH变体建议了参数，其中公钥大小分别为4434、7037和9750字节，适用于NIST安全级别1、3和5。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_10](https://doi.org/10.1007/978-3-031-30589-4_10)
## Password-Authenticated TLS via OPAQUE and Post-Handshake Authentication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#password-authenticated-tls-via-opaque-and-post-handshake-authentication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#password-authenticated-tls-via-opaque-and-post-handshake-authentication)**
### 作者
* Julia Hesse, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Stanislaw Jarecki, UC Irvine, Irvine, USA
* Hugo Krawczyk, Algorand Foundation, Boston, USA
* Christopher Wood, Cloudflare, San Francisco, USA
### 摘要
> OPAQUE 是一种对称密码认证密钥交换（aPAKE）协议，由 IETF（互联网工程任务组）标准化，作为传统“密码覆盖 TLS”机制的更安全替代方案。OPAQUE 通过摒弃对 PKI 和 TLS 安全的依赖，确保密码不会对服务器或除客户端输入密码的客户机以外的任何人可见，从而防御了 password-over-TLS 的各种漏洞。为了便于实际应用中使用 OPAQUE，需要将 OPAQUE 与 TLS 集成。主要提案是利用 TLS 1.3 中支持后握手认证且允许与 OPAQUE 平稳结合的导出认证器（TLS-EA）机制来标准化这种集成。我们将此集成称为 TLS-OPAQUE，并在通用可组合性（UC）框架中对其进行了详细的安全分析。
> 
> 我们的处理是通用的，并包括在 TLS-OPAQUE 分析中所需的组件的形式化描述，但这些组件具有更广泛的适用性，因为它们在实践中用于许多协议。具体而言，我们在 UC 模型中提供了关于后握手认证和通道绑定概念的形式化描述。其中，特别是通道绑定在实践中很难安全地实现，导致了多个协议失败，包括针对较早版本 TLS 的重大攻击。我们是首次以具有可组合性保证的计算模型对这些概念进行处理。
> 
> 除了理论工作外，我们还详细探讨了在实际环境和应用中使用和部署 TLS-OPAQUE 的实际考虑因素。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_4](https://doi.org/10.1007/978-3-031-30589-4_4)
## Breaking SIDH in Polynomial Time.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#breaking-sidh-in-polynomial-time) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#breaking-sidh-in-polynomial-time)**
### 作者
* Damien Robert, INRIA Bordeaux-Sud-Ouest, 200 Avenue de la Vieille Tour, 33405, Talence Cedex, France
* Damien Robert, Institut de Mathématiques de Bordeaux, 351 cours de la liberation, 33405, Talence Cedex, France
### 摘要
> 我们展示了即使在随机起始曲线 \(E_0\) 的情况下，我们也可以在（经典的）多项式时间内打破 SIDH。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_17](https://doi.org/10.1007/978-3-031-30589-4_17)
## Randomized Half-Ideal Cipher on Groups with Applications to UC (a)PAKE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#randomized-half-ideal-cipher-on-groups-with-applications-to-uc-a-pake) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#randomized-half-ideal-cipher-on-groups-with-applications-to-uc-a-pake)**
### 作者
* Bruno Freitas Dos Santos, University of California, Irvine, Irvine, USA
* Yanqi Gu, University of California, Irvine, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, Irvine, USA
### 摘要
> 一个理想密码（IC）是一种密码，其中每个密钥在域上定义了一个随机排列。在群上的理想密码有许多吸引人的应用，例如密钥交换（EKE）协议用于密码认证密钥交换（PAKE）[8]，或非对称PAKE（aPAKE）[31，33]。然而，已知的群域上的IC构造都有一些缺点，包括从时间信息泄漏密钥[12]，如果IC是8轮费斯特尔密码，则需要4个哈希到群的操作[22]，并且将域限制为群的一半[9]或者使用可变时间编码[39, 47]，如果IC通过从群到位串的（准）双射实现[33]。
> 
> 我们提出了一个称为（随机）半理想密码（HIC）的IC松弛方法，并且我们展示了如何通过修改的2轮费斯特尔密码（m2F）来实现群上的HIC，只需进行1次哈希到群的操作，这打破了现有IC的构造在多样性和计算成本方面的限制。HIC通过部分密文变为非随机来削弱了IC的特性，但我们举例说明它可以被用作IC的替代品，通过展示EKE [8]和[33]中的aPAKE分别实现UC PAKE和UC aPAKE，即使它们使用的是HIC而不是IC。m2F构造还可以作为IC域扩展的一种方式，因为m2F通过RO不可区分的哈希到D和一个\(2{\kappa }\)-bit位串上的IC构造了域D上的HIC，其中\({\kappa }\)是一个安全参数。这样的扩展器的一个应用是使用以HIC为实例化的EKE和匿名基于格的KEM的模块化基于格的UC PAKE。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_5](https://doi.org/10.1007/978-3-031-30589-4_5)
## Just How Hard Are Rotations of $\mathbb {Z}^n$? Algorithms and Cryptography with the Simplest Lattice.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#just-how-hard-are-rotations-of-mathbb-z-n-algorithms-and-cryptography-with-the-simplest-lattice) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#just-how-hard-are-rotations-of-mathbb-z-n-algorithms-and-cryptography-with-the-simplest-lattice)**
### 作者
* Atul Ganju, Cornell University, Ithaca, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
* Huck Bennett, Oregon State University, Corvallis, USA
* Pura Peetathawatchai, Stanford University, Stanford, USA
### 摘要
> 我们研究的计算问题是在\(\mathbb{Z}^n\)的旋转中寻找最短的非零向量，我们称之为\(\mathbb{Z}\)SVP。确定是否存在一个\(\mathbb{Z}\)SVP的多项式时间算法一直以来都是一个未决问题，而现在已经有了一个漂亮的工作线表明如何在某些非常特殊的情况下高效地解决该问题。然而，尽管所有这些工作，目前已被证明可用于解决\(\mathbb{Z}\)SVP的最快已知算法仍然是解决SVP（即在任意格点中找到最短的非零向量的问题）的最快已知算法，其运行时间为\(2^{n + o(n)}\)。
> 
> 因此，我们暂时放弃了（也许是不可能的）寻找\(\mathbb{Z}\)SVP的高效算法的目标，而是问自己对该问题还能说出哪些其他的东西。例如，我们能否在最佳已知SVP算法之上找到任何非平凡的加速？如果\(\mathbb{Z}\)SVP实际上是一个困难问题，那么会有什么结果？我们的结果如下：
> 
> 1. 我们展示了一个程度上比任意格点上SVP更容易的\(\mathbb{Z}\)SVP。具体而言，我们展示了如何将\(\mathbb{Z}\)SVP归约为同一维度上SVP的一个近似版本（实际上，甚至是近似唯一SVP，对于任意常数的近似因子）。这样的归约在SVP本身上似乎非常不可能实现，因此我们将其视为\(\mathbb{Z}\)SVP与SVP之间的定性分离。由于这种归约，我们获得了一个\(2^{n/2 + o(n)}\)时间复杂度的\(\mathbb{Z}\)SVP算法，即对于一般格点上已知的最优算法的首个非平凡加速。（实际上，该归约适用于一个更一般的格点类别——具有不太大的\(\lambda _1\)的半稳定格点。）
> 
> 2. 我们展示了一个简单的公钥加密方案，如果（适当变种的）\(\mathbb{Z}\)SVP问题真的很难，那么该方案是安全的。具体来说，我们的方案是安全的，如果很难在最坏情况下区分\(\mathbb{Z}^n\)的旋转和具有所有非零向量长度大于\(\sqrt{n/\log n}\)或平滑参数显著小于\(\mathbb{Z}^n\)的格点之间的区别。后一结果与反向Minkowski定理有一个有趣的定性联系，该定理在某种意义上表明“\(\mathbb{Z}^n\)具有最大的平滑参数”。
> 
> 3. 我们展示了一组旋转的\(\mathbb{Z}^n\)基的分布\(\textbf{B}\)，如果对于任何输入基底，\(\mathbb{Z}\)SVP都很困难，那么在输入\(\textbf{B}\)的情况下\(\mathbb{Z}\)SVP也很困难。这给出了对\(\mathbb{Z}^n\)中采样困难基底问题的令人满意的理论解决方案，该问题由Blanks和Miller [9]进行了

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_9](https://doi.org/10.1007/978-3-031-30589-4_9)
## A Direct Key Recovery Attack on SIDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#a-direct-key-recovery-attack-on-sidh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#a-direct-key-recovery-attack-on-sidh)**
### 作者
* Luciano Maino, University of Bristol, Bristol, UK
* Chloe Martindale, University of Bristol, Bristol, UK
* Giacomo Pope, University of Bristol, Bristol, UK
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Giacomo Pope, NCC Group, Cheltenham, UK
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> 我们提出了一种利用两个超奇异椭圆曲线的极化乘积之间的同源关系对SIDH进行攻击的方法。对于任意起始曲线的情况下，我们的攻击（独立于[8]的发现）具有次指数复杂度，从而显著降低了SIDH和SIKE的安全性。当起始曲线的自同态环已知时，我们的攻击（从[8]推导得到）在广义黎曼假设下具有多项式时间复杂度。我们的攻击适用于任何基于同源关系的密码系统，例如Séta [13]和B-SIDH [11]。但不适用于CSIDH [9]，CSI-FiSh [3]或SQISign [14]。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_16](https://doi.org/10.1007/978-3-031-30589-4_16)
## Caveat Implementor! Key Recovery Attacks on MEGA.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#caveat-implementor-key-recovery-attacks-on-mega) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#caveat-implementor-key-recovery-attacks-on-mega)**
### 作者
* Martin R. Albrecht, King’s College London, London, UK
* Miro Haller, Applied Cryptography Group, ETH Zurich, Zurich, Switzerland
* Kenneth G. Paterson, Applied Cryptography Group, ETH Zurich, Zurich, Switzerland
* Lenka Mareková, Information Security Group, Royal Holloway, University of London, London, UK
### 摘要
> MEGA是一个大规模的云存储和通信平台，旨在为存储的数据提供端到端的加密。Backendal, Haller和Paterson（IEEE S &P 2023）通过展示可能由MEGA服务提供商发起的针对MEGA的实际攻击，否定了这些安全性声明。作为回应，MEGA的开发者在MEGA中使用的用户RSA私钥上加入了轻量级的合理性检查，足以防止之前的攻击。
> 
> 我们分析了这些新的合理性检查，并展示了如何利用它们自身来发起针对MEGA的新型攻击，只需要略高一些的攻击复杂度就能够恢复目标用户的RSA私钥。我们发现在MEGA系统中，目标用户的主密钥下存在一个ECB加密预言机；这个预言机为我们的对手提供了部分覆写目标用户RSA私钥的能力，这是我们在攻击中使用的一项强大能力。然后，我们提出了两种不同类型的攻击，每种类型都利用了在合理性检查和后续加密处理过程中出现的不同错误条件，这些处理过程是在MEGA的用户认证程序中进行的。第一种类型似乎是新颖的，利用了MEGA代码在重新计算\(u=q^{-1} \bmod p\)时处理模逆的方式。第二种可以被视为小群攻击（van Oorschot和Wiener，EUROCRYPT 1996，Lim和Lee，CRYPTO 1998）。我们原型化了攻击并展示了它们在实践中的效果。
> 
> 作为一个额外的贡献，我们展示了如何改进Backendal-Haller-Paterson对未修补的MEGA版本的RSA密钥恢复攻击，只需要2次登录而不是原来的512次。
> 
> 我们最后讨论了我们的工作揭示的关于加密实现安全的更广泛的教训。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_7](https://doi.org/10.1007/978-3-031-30589-4_7)
## A Lower Bound on the Length of Signatures Based on Group Actions and Generic Isogenies.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#a-lower-bound-on-the-length-of-signatures-based-on-group-actions-and-generic-isogenies) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#a-lower-bound-on-the-length-of-signatures-based-on-group-actions-and-generic-isogenies)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Jiaxin Guan, Princeton University, Princeton, USA
* Mark Zhandry, Princeton University, Princeton, USA
* Mark Zhandry, NTT Research, Inc., Sunnyvale, USA
### 摘要
> 我们给出了基于群作用的签名协议的第一个黑盒下界，其中包括许多基于同源的协议。我们表明，对于一个大类的签名方案，通过使用（可能是非阿贝尔的）群作用的黑盒，签名长度必须为Ω(λ^2/ log λ)。我们的签名类广义上涵盖了所有已知的仅以群作用为安全基础的签名方案，并且我们的下界与现有技术水平相匹配，表明在不偏离群作用框架的情况下无法改善签名长度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_18](https://doi.org/10.1007/978-3-031-30589-4_18)
## Short Signatures from Regular Syndrome Decoding in the Head.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#short-signatures-from-regular-syndrome-decoding-in-the-head) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#short-signatures-from-regular-syndrome-decoding-in-the-head)**
### 作者
* Eliana Carozza, IRIF, Université Paris Cité, Paris, France
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 我们介绍了一种基于常规综合译码（RSD）假设的新型量子后数字签名方案，这是综合译码假设的一个已建立的变体，它断言在二元有限域\(\mathbb {F}_2\)上找到 \(w \)-regular 线性方程组的解是困难的（向量如果是 \(w \) 个单位向量的连接则为 regular）。我们的签名是通过引入和编译一个使用MPC-in-the-head范例构建的新的五轮零知识证明系统而获得的。我们结果的核心是在预处理模型中的高效MPC协议，它通过使用共享环-转换机制来检查正则综合译码实例的正确性。
> 
> 我们对构造的分析是非平凡的，并对我们工作的核心技术贡献形成了重要部分。它需要仔细的组合分析并结合了几个新的思路，例如在一个宽松的环境中分析合理性，在这个环境中欺骗者被允许使用任何足够接近正则向量的见证。我们将我们的分析与现有对 RSD 的攻击进行了详尽的概述。
> 
> 我们的签名与目前已知的基于码的签名具有竞争力，尺寸范围从12.52 KB（快速设置，在标准笔记本单核上的签名时间为几毫秒数量级）到大约9 KB（简短设置，估计的签名时间约为15毫秒数量级）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_19](https://doi.org/10.1007/978-3-031-30589-4_19)
## End-to-End Encrypted Zoom Meetings: Proving Security and Strengthening Liveness.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#end-to-end-encrypted-zoom-meetings-proving-security-and-strengthening-liveness) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#end-to-end-encrypted-zoom-meetings-proving-security-and-strengthening-liveness)**
### 作者
* Yevgeniy Dodis, New York University, New York, USA
* Daniel Jost, New York University, New York, USA
* Balachandar Kesavan, Zoom Video Communications, San Jose, USA
* Antonio Marcedone, Zoom Video Communications, San Jose, USA
### 摘要
> 2020年5月，Zoom Video Communications, Inc.（Zoom）宣布了一个多步骤计划，全面支持端到端加密（E2EE）的群组视频通话，并在2020年10月向客户推出了基本的E2EE支持。在这项工作中，我们首次提供了Zoom的E2EE协议的正式安全分析，并为E2EE群组视频通信的一般问题奠定了基础。
> 
> 我们观察到，广泛分析异步消息传递的安全文献在同步视频通话中无法很好地转换。也就是说，虽然对于（通常是短暂的）视频通话来说，强的前向保密性和事后妥协安全性不太重要，但各种活动性属性变得至关重要。例如，要求参与者快速了解会议名单和密钥的更新，显示的媒体流是最新的，并且被禁止的参与者迅速失去对会议的任何访问权限。我们的主要结果如下：
> 
> 1. 提出一种新的基于领导者的连续群组密钥协商与活动性的概念，准确地捕捉了同步通信场景中特定的E2EE属性。
> 
> 2. 在上述明确定义的模型中证明了Zoom的E2EE会议协议的安全性。
> 
> 3. 提出了通过对原始协议进行简单修改来加强Zoom的活动性属性的方法，这些修改已被投入使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_6](https://doi.org/10.1007/978-3-031-30589-4_6)
## Asymmetric Group Message Franking: Definitions and Constructions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#asymmetric-group-message-franking-definitions-and-constructions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#asymmetric-group-message-franking-definitions-and-constructions)**
### 作者
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Gongxian Zeng, Peng Cheng Laboratory, Shenzhen, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Xin Mu, Peng Cheng Laboratory, Shenzhen, China
* Siu Ming Yiu, The University of Hong Kong, Hong Kong, China
### 摘要
> 随着在线群组交流场景在近年来变得越来越常见，恶意或不愉快的信息更容易在互联网上传播。信息签名是一种关键的加密机制，旨在用于在线端到端消息系统中的内容管理，使接收到恶意信息的人可以向管理员报告该信息。不幸的是，现有的信息签名方案只考虑了一对一的通信场景。
> 
> 本文系统地探讨了群组通信场景中的信息签名。我们引入了不对称群组信息签名（AGMF）的概念，并形式化了其安全要求。然后，我们提出了一种基于新原语的AGMF构建框架。我们还基于DDH假设给出了一个构建方案。将具体方案插入到我们的AGMF框架中，我们得到了一个基于DDH的AGMF方案，支持群组通信场景中的信息签名。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_3](https://doi.org/10.1007/978-3-031-30589-4_3)
## An Efficient Key Recovery Attack on SIDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#an-efficient-key-recovery-attack-on-sidh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#an-efficient-key-recovery-attack-on-sidh)**
### 作者
* Wouter Castryck, imec-COSIC, KU Leuven, Leuven, Belgium
* Thomas Decru, imec-COSIC, KU Leuven, Leuven, Belgium
* Wouter Castryck, Vakgroep Wiskunde: Algebra en Meetkunde, Universiteit Gent, Ghent, Belgium
### 摘要
> 我们提出了一种对超奇异同源Diffie-Hellman（SIDH）协议的高效密钥恢复攻击。该攻击基于Kani的“可约性判据”，针对从椭圆曲线乘积产生的同源变换，且强烈依赖Alice和Bob在协议期间交换的扭曲点映射。如果我们假设已知起始曲线的自同构环，那么经典的运行时间在输入大小上是多项式级别的（启发式地），除了对系统参数依赖的一小部分整数进行因式分解。如果一方使用2同源变换并且起始曲线配备具有非标量自同构的非常小的次数，则该攻击特别快速和易于实施。这是SIKE的情况，SIKE是SIDH的实例，最近在NIST的后量子密码学标准化工作的第四轮中取得了进展。我们的Magma实现能够在一个核心上在大约十分钟内破解目标安全级别为1的SIKEp434。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_15](https://doi.org/10.1007/978-3-031-30589-4_15)
## Threshold and Multi-signature Schemes from Linear Hash Functions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#threshold-and-multi-signature-schemes-from-linear-hash-functions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#threshold-and-multi-signature-schemes-from-linear-hash-functions)**
### 作者
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 本文提出了两轮多签名和门限签名的新构造，其安全性仅依赖于离散对数问题或RSA问题的困难度，同时还假设随机预言机。它们的签名协议是部分非交互的，即签名协议的第一轮与被签名消息无关。
> 
> 通过将最高效的离散对数方案\(\textsf{MuSig2}\)(Nick, Ruffing和Seurin, CRYPTO '21)和\(\textsf{FROST}\)(Komlo和Goldberg, SAC '20)推广到适当定义的线性哈希函数上，我们获得了这些构造。虽然原始方案依赖于更强大且更有争议的一次更多离散对数假设，但我们表明哈希函数的适当实例化使得安全性能够基于纯离散对数假设或RSA。我们方案产生的签名等同于从Okamoto的身份识别方案(CRYPTO '92)获得的签名。
> 
> 更抽象地说，我们的结果提出了将在OMDL安全的方案转化为在纯DL假设下安全的方案，并在某些限制下转化为在RSA下安全的一般框架。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_22](https://doi.org/10.1007/978-3-031-30589-4_22)
## Chopsticks: Fork-Free Two-Round Multi-signatures from Non-interactive Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#chopsticks-fork-free-two-round-multi-signatures-from-non-interactive-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#chopsticks-fork-free-two-round-multi-signatures-from-non-interactive-assumptions)**
### 作者
* Jiaxin Pan, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### 摘要
> 多签名在近年来引起了广泛关注，因为它们在加密货币中的应用。早期的多签名构造大多需要三轮签名，而最近的构造成功将轮数复杂度减少到了两轮。然而，它们的安全性证明大多基于非标准的交互假设（例如，one-more假设），并且由于多次使用回溯（又称Forking Lemma）而导致安全性损失巨大。这使得安全性证明给出的量化保证变得无用。
> 
> 在本研究中，我们通过提出两种基于（标准的非交互式）决策性Diffie-Hellman（DDH）假设的高效两轮多签名方案来改进现有技术水平。这两种方案都在随机预言机模型下证明了安全性，而且不需要回溯。我们也不需要任何配对。我们的第一种方案支持密钥聚合，但在签名查询次数上具有线性的安全性损失，而我们的第二种方案则是第一个具有严密安全性的构造。
> 
> 我们构造中的一个关键成分是一种用于群元素的新型同态双模承诺方案，可以用于等价于特定结构的消息。该承诺方案的定义和高效构造具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_21](https://doi.org/10.1007/978-3-031-30589-4_21)
## Rai-Choo! Evolving Blind Signatures to the Next Level.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#rai-choo-evolving-blind-signatures-to-the-next-level) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#rai-choo-evolving-blind-signatures-to-the-next-level)**
### 作者
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, Saarland University, Saarbrücken, Germany
### 摘要
> 盲签名是保护隐私应用程序的基础工具。已知的并发安全盲签名方案的构造要么效率过低，要么依赖于非标准假设，即使在随机预言模型中也是如此。最近的研究（ASIACRYPT ‘21, CRYPTO ‘22）基于随机预言模型，开始对基于良好理解的假设的具体有效方案进行研究。然而，这些方案仍然有几个主要缺点：1）签名者需要保持状态；2）计算量随着签名交互次数的增加而线性增长，使得方案不实用；3）方案至少需要五个交互动作。
> 
> 在本文中，我们介绍了一种同时消除上述所有缺点的盲签名方案。具体而言，我们展示了一种环最优、具体有效、并发安全和无状态的盲签名方案，在其中通信和计算与签名交互次数无关。我们的构造也自然地推广到部分盲签名设置。
> 
> 我们的方案基于非对称配对设置中的\(\textsf{CDH}\)假设，并可以使用标准的BLS曲线实例化。我们获得的签名和通信大小分别为9 KB和36 KB。为了进一步提高方案的效率，我们展示了如何获得具有更好的摊销通信效率的方案。我们的方法批量处理多个消息的签名发行。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_26](https://doi.org/10.1007/978-3-031-30589-4_26)
## Disorientation Faults in CSIDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#disorientation-faults-in-csidh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#disorientation-faults-in-csidh)**
### 作者
* Gustavo Banegas, Inria and Laboratoire d’Informatique de l’Ecole polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Juliane Krämer, University of Regensburg, Regensburg, Germany
* Michael Meyer, University of Regensburg, Regensburg, Germany
* Tanja Lange, Eindhoven University of Technology, Eindhoven, The Netherlands
* Tanja Lange, Academia Sinica, Taipei, Taiwan
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Krijn Reijnders, Radboud University, Nijmegen, The Netherlands
* Monika Trimoska, Radboud University, Nijmegen, The Netherlands
* Jana Sotáková, University of Amsterdam and QuSoft, Amsterdam, The Netherlands
### 摘要
> 我们研究了针对CSIDH家族密码学群操作的一类新的故障注入攻击。我们的定向攻击有效地改变了一些同态密码步骤的方向。我们通过对与群操作评估过程中的Legendre符号或Elligator计算相关的特定子例程进行故障注入来实现这一点。这些子例程几乎存在于所有已知的CSIDH实现中。对一组有故障的样本进行后处理，我们可以推断出对秘密密钥的约束。细节是特定于实施的，但我们表明，在许多情况下，只需适量成功的故障注入和适度的计算资源，就可能恢复完整的秘密密钥。我们提供了攻击原始CSIDH概念验证软件以及CTIDH恒时间实现的详细信息。最后，我们提出了一套针对攻击的轻量级对策措施，并讨论了它们的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_11](https://doi.org/10.1007/978-3-031-30589-4_11)
## Non-interactive Blind Signatures for Random Messages.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#non-interactive-blind-signatures-for-random-messages) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#non-interactive-blind-signatures-for-random-messages)**
### 作者
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 盲签名允许签名者对由签名接收者选择的消息进行签名。其主要特点是接收者的消息对签名者来说是隐藏的。盲签名有许多应用，包括Chaum的电子现金系统和隐私通行证，它们不需要对签名的消息进行特殊分发，消息可以是随机的。有趣的是，现有概念没有单独考虑这种实际用例。在本文中，我们展示了限制接收者对消息分发的选择会产生一个令人惊讶的新原语，它改进了已经得到确认的最新技术。我们通过引入非交互盲签名（NIBS）的概念来形式化这个概念。简单来说，签名者可以创建一个预签名，并考虑到一个特定的接收者，通过公钥进行识别。接收者可以使用她的秘钥进行最终化，并获得在最终化过程中确定的随机消息上的盲签名。关键的想法是签名者和接收者之间的在线交互是不必要的。我们展示了在随机预言机模型中基于等价类上的签名的NIBS的高效实例化。令人兴奋的是，在这种情况下，对于接收者的公钥，我们可以使用Schnorr、ECDSA签名、El-Gamal加密方案甚至是Diffie-Hellman密钥交换的预先存在的密钥。重用现有的公钥使我们能够类似于加密货币空投方式来分发匿名令牌。额外的贡献包括带标签的非交互盲签名（TNIBS）及其高效实例化。在基于可验证随机函数、标准签名和非交互证明系统的随机预言机或公共参考字符串模型中的通用构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_25](https://doi.org/10.1007/978-3-031-30589-4_25)
## Revisiting BBS Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#revisiting-bbs-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#revisiting-bbs-signatures)**
### 作者
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> BBS签名是由Boneh、Boyen和Shacham（CRYPTO '04）隐含提出的其组签名方案的一部分，并由Camenisch和Lysyanskaya（CRYPTO '04）明确提出为独立的签名。然后，Au、Susilo和Mu（SCN '06）提出了一种可证明安全的版本，称为BBS +，目前正在进行的标准化工作已导致最近的RFC草案。BBS +签名适用于匿名凭证和DAA系统中，因为它们的代数结构可以实现对支持部分披露的消息-签名对的高效知识证明。
> 
> BBS +签名由一个群元素和两个标量组成。作为我们的第一个贡献，我们证明了BBS +的一个变种，可以生成更短的签名，只包含一个群元素和一个标量，并且也是安全的。所得到的方案本质上是最初的BBS建议，缺乏安全性证明。在这里，我们展示它在q-SDH假设下满足与BBS +相同的可证明安全保证。我们还在代数群模型中提供了补充的严密分析，从启发上证明了具有潜在较短签名的实例化。
> 
> 此外，我们设计了简化和更短的零知识证明，用于支持消息-签名对的部分披露。在BLS12-381曲线上，我们的证明比Camenisch、Drijvers和Lehmann（TRUST '16）先前提出的方案短了896位，该方案也被RFC草案采用。
> 
> 最后，我们在代数群模型中展示了BBS在凭证环境中满足了更多一次不可伪造性，其中签名者可以被要求对任意群元素进行签名，而无需查看它们的开放性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_24](https://doi.org/10.1007/978-3-031-30589-4_24)
## A New Algebraic Approach to the Regular Syndrome Decoding Problem and Implications for PCG Constructions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#a-new-algebraic-approach-to-the-regular-syndrome-decoding-problem-and-implications-for-pcg-constructions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#a-new-algebraic-approach-to-the-regular-syndrome-decoding-problem-and-implications-for-pcg-constructions)**
### 作者
* Pierre Briaud, Sorbonne Universités, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Morten Øygarden, Simula UiB, Bergen, Norway
### 摘要
> 近20年前，Augot等人引入了正则综合译码（RSD）问题，这是综合译码问题的一个变种，具有特定的错误分布。在这个问题中，错误向量被分为大小相同的块，每个块包含一个带噪声的坐标。最近五年来，由于它在MPC和ZK应用中的使用，人们对这一假设的兴趣日益增加。在这个背景下，我们通常称之为“带有规则噪声的LPN”，这个假设允许在比较普通的LPN时实现更好的效率。在以前的所有破译工作中，还没有人展示如何利用这个问题的特殊特征进行攻击。
> 
> 我们提出了对RSD的第一个代数攻击。基于对潜在多项式系统的仔细理论分析，我们提出了能够利用规则噪声分布的具体攻击。特别是，我们可以确定几个具体参数的例子，其中我们的技术胜过其他算法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_14](https://doi.org/10.1007/978-3-031-30589-4_14)
## New Algorithms for the Deuring Correspondence - Towards Practical and Secure SQISign Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#new-algorithms-for-the-deuring-correspondence-towards-practical-and-secure-sqisign-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#new-algorithms-for-the-deuring-correspondence-towards-practical-and-secure-sqisign-signatures)**
### 作者
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Antonin Leroux, DGA-MI, Bruz, France
* Antonin Leroux, IRMAR, Université de Rennes, Rennes, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Palaiseau, France
* Antonin Leroux, INRIA, Saclay, France
* Patrick Longa, Microsoft Research, Redmond, USA
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> Deuring对应关系定义了超奇异椭圆曲线同构与四元数代数最大秩的理想之间的双射。我们提出了一种新算法，将正规幂级数范数理想翻译成相应的同构——这是有效的Deuring对应方法的一个核心任务。新方法改进了2021年De Feo、Kohel、Leroux、Petit和Wesolowski引入的算法，作为SQISign签名方案的构建块。SQISign是目前已知最紧凑的后量子签名方案，但比竞争对手慢几个数量级，计算的主要瓶颈是理想到同构的转换。我们实现了新算法，并将其应用于SQISign，在选择新参数的情况下在密钥生成和签名中实现了两倍以上的加速。此外，在将Longa的最先进的$\mathbb{F}$复数乘法算法适应到SQISsign的基本扩展域算术上并添加各种改进后，我们将总体加速提高到签名三倍以上以及验证四倍以上。在论文的第二部分中，我们通过展示一种非常简单的区分器来推进密码分析，该区分器针对SQISign中使用的某些假设之一。我们提供了通过对通用KLPT算法进行几次更改来阻止区分器的方法。我们制定了一个涵盖这些变化的新假设，并提供了有关其有效性的分析以及实验证据。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_23](https://doi.org/10.1007/978-3-031-30589-4_23)
## The Return of the SDitH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-5].md#the-return-of-the-sdith) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-5].md#the-return-of-the-sdith)**
### 作者
* Carlos Aguilar-Melchor, SandboxAQ, Palo Alto, USA
* Nicolas Gama, SandboxAQ, Palo Alto, USA
* James Howe, SandboxAQ, Palo Alto, USA
* David Joseph, SandboxAQ, Palo Alto, USA
* Dongze Yue, SandboxAQ, Palo Alto, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
### 摘要
> 本文介绍了一种基于著名的综合译码（SD）问题的基于代码的签名方案。该方案依赖于最近的一系列研究，该研究利用头部多方计算（MPCitH）方法构建高效的零知识证明，例如头部综合译码（SDitH），并利用菲亚特-沙米尔变换从中构建签名方案。
> 
> 我们提案的核心是一种新方法，即Hypercube-MPCitH，用于放大使用加法秘密共享的任何MPC协议的真实性。一个具有N个参与方的MPCitH协议可以使用并行组合D次来达到与使用\(N^D\)个参与方运行的协议相同的真实性。然而，前者的通信成本要高D倍，通常主要是由D次“辅助”状态的使用所贡献的（在一般情况下，这些状态对大小的影响要比随机状态大得多）。我们首先通过生成\(N^D\)份股份，将其排列成包含一个“辅助”状态的N边长的D维超立方体。我们从这个超立方体中导出大小为N的D个共享，用于运行N方MPC协议的D个实例。Hypercube-MPCitH导致一个具有\(1/N^D\)真实性错误的协议，需要\(N^D\)离线计算，但只需要\(N\cdot D\)在线计算，并且只有一个“辅助”状态。由于（潜在的离线）股份生成阶段通常廉价，这导致了比仅使用并行组合更好的权衡。
> 
> 我们的新颖方法不仅改进了一般MPCitH协议，还在签名方案的具体改进中得到体现。具体来说，我们将其应用于Feneuil、Joux和Rivain（CRYPTO’22）关于基于代码的签名的研究，并获得了一个新的签名方案，其全局运行时间提高了8.1倍，最短签名大小（8,481字节）的在线运行时间提高了30倍。还可以利用大部分计算是离线的事实来定义导致较小签名的参数集：对于26毫秒离线和5,689字节的320毫秒离线，签名大小为6,784字节。对于NIST安全级别1，在线签名成本约为300万个周期（在普通处理器上<1毫秒），无论签名大小如何。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30589-4_20](https://doi.org/10.1007/978-3-031-30589-4_20)
