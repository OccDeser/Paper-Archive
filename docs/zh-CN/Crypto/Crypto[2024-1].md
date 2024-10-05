# Crypto[2024-1]
## Loquat: A SNARK-Friendly Post-quantum Signature Based on the Legendre PRF with Applications in Ring and Aggregate Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#loquat-a-snark-friendly-post-quantum-signature-based-on-the-legendre-prf-with-applications-in-ring-and-aggregate-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#loquat-a-snark-friendly-post-quantum-signature-based-on-the-legendre-prf-with-applications-in-ring-and-aggregate-signatures)**
### 作者
* Xinyu Zhang, Monash University, Melbourne, Australia
* Ron Steinfeld, Monash University, Melbourne, Australia
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Joseph K. Liu, Monash University, Melbourne, Australia
* Xinyu Zhang, Data61, CSIRO, Sydney, Australia
* Dongxi Liu, Data61, CSIRO, Sydney, Australia
* Sushmita Ruj, University of New South Wales, Sydney, Australia
### 摘要
> 我们设计并实现了一种基于Legendre PRF的新型后量子签名方案，命名为Loquat。在此之前，构建具有可比较安全性假设的后量子签名的高效方法主要使用了MPC-in-the-head范式或哈希树。我们的方法不同于这些范式，并且值得注意的是，它友好于SNARK，在早期设计中并不常见。Loquat对比其他对称密钥后量子签名方案要求的验证计算操作显著减少，支持无状态签名。我们的Python实现的Loquat展示了46KB的签名大小，签名时间为5.04秒，验证时间为0.21秒。将随机预言机实例化为代数哈希函数导致R1CS约束用于签名验证约为148K，比基于MPC-in-the-head的签名所需的约为7至175倍小，比SPHINCS+所需的约为3至9倍小[Bernstein等人CCS'19]。
> 
> 我们探索了Loquat的两个应用。首先，我们将其纳入基于ID的环签名方案[Buser等人ACNS'22]，将签名大小从1.9MB降低到0.9MB，实现了无状态签名和实用的主密钥生成。我们的第二个应用提出了一种基于SNARK的集合签名方案。我们使用Aurora [Ben-Sasson等人EC'19] 和Fractal [Chiesa等人EC'20] 的实现来评估我们集合签名的性能。我们的研究结果显示，使用Aurora聚合32个Loquat签名的证明时间约为7分钟，验证时间为66秒，聚合签名大小为197KB。此外，通过利用Fractal的递归证明组合特性，我们实现了一个常量大小为145KB的聚合签名，展示了Loquat在密码应用中的可伸缩性潜力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_1](https://doi.org/10.1007/978-3-031-68376-3_1)
## MPC in the Head Using the Subfield Bilinear Collision Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#mpc-in-the-head-using-the-subfield-bilinear-collision-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#mpc-in-the-head-using-the-subfield-bilinear-collision-problem)**
### 作者
* Janik Huth, CISPA - Helmholtz Center for Information Security, Saarbrücken, Germany
* Antoine Joux, CISPA - Helmholtz Center for Information Security, Saarbrücken, Germany
* Janik Huth, Saarland University, Saarbrücken, Germany
### 摘要
> 在这篇论文中，我们介绍了子域双线性碰撞问题，并利用它来构建一个识别协议和一个签名方案。这个构造基于头脑中的MPC范式，并使用Fiat-Shamir变换来获得一个签名。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_2](https://doi.org/10.1007/978-3-031-68376-3_2)
## Aggregating Falcon Signatures with LaBRADOR.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#aggregating-falcon-signatures-with-labrador) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#aggregating-falcon-signatures-with-labrador)**
### 作者
* Marius A. Aardal, Aarhus University, Aarhus, Denmark
* Diego F. Aranha, Aarhus University, Aarhus, Denmark
* Sebastian Kolby, Aarhus University, Aarhus, Denmark
* Katharina Boudgoust, CNRS, Univ Montpellier, LIRMM, Montpellier, France
* Akira Takahashi, J.P.Morgan AI Research & AlgoCRYPT CoE, New York, USA
### 摘要
> 过去几项研究表明，使用短证明的非交互式知识证明集成Falcon签名是可行的，而Falcon是NIST标准化确定的第一代后量子签名之一。特别是，基于标准的结构格假设并在CRYPTO'23上发表的LaBRADOR似乎能够实现此任务。然而，之前没有工作以严谨的方式解决了这个想法。在本文中，我们全面证明了如何使用LaBRADOR集成Falcon签名。我们首先提供了LaBRADOR非交互式版本的第一个完整的知识声誉分析。在这里，LaBRADOR的多轮递归性质需要进行复杂和全面的分析。为此，我们引入了谓词特殊合法性（PSS）的概念。这是一种评估复杂的Fiat-Shamir知识证明协议的知识错误的通用框架，我们认为这是独立感兴趣的。然后，我们解释了采取的确切步骤，以适应非交互式LaBRADOR证明系统以集成Falcon签名，并提供了具体的证明大小估计。此外，我们将从哈希-然后-签名签名类中获得集合签名的流行方法形式化为知识证明。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_3](https://doi.org/10.1007/978-3-031-68376-3_3)
## That's Not My Signature! Fail-Stop Signatures for a Post-quantum World.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#thats-not-my-signature-fail-stop-signatures-for-a-post-quantum-world) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#thats-not-my-signature-fail-stop-signatures-for-a-post-quantum-world)**
### 作者
* Cecilia Boschini, ETH Zürich, Zürich, Switzerland
* Hila Dahari, Weizmann Institute, Rehovot, Israel
* Moni Naor, Weizmann Institute, Rehovot, Israel
* Eyal Ronen, Tel-Aviv University, Tel Aviv, Israel
### 摘要
> 斯诺登的揭露开启了社区范围内的努力，以开发针对大规模监控的加密工具。在本工作中，我们提议将另一个基元添加到该工具箱中：故障停止签名（FSS）[49]。FSS是数字签名，具有伪造检测机制，可以保护计算上限的签名者免受更强大攻击者的侵害。尽管概念很迷人，但该领域的研究在90年代后停滞了。然而，由于基础假设的新颖性而出现波动的后量子密码学的不断过渡已成为FSS的完美用例。本文旨在以实际应用为导向重新启动FSS的研究：我们的FSS框架包括“细粒度”安全定义（假设强大但有限制的对手，例如：可以破解128位安全性，但不能破解256位）。作为应用案例，我们展示了新的后量子设置的FSS构造。我们展示了FSS等同于标准，可证明安全的数字签名，不需要倒带或编程随机神谕，并且这意味着基于格的FSS。我们的主要构造是\(\textsf{SPHINCS}^+\)的FSS版本，它需要建立所有构建块的FSS版本：\(\textsf{WOTS}^+\)、\(\textsf{XMSS}\)和\(\textsf{FORS}\)。在此过程中，我们确定并提供了解决从单个种子派生大量私钥和构建基于散列和签名的FSS时出现的两个基本问题的通用解决方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_4](https://doi.org/10.1007/978-3-031-68376-3_4)
## Solving the Tensor Isomorphism Problem for Special Orbits with Low Rank Points: Cryptanalysis and Repair of an Asiacrypt 2023 Commitment Scheme.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#solving-the-tensor-isomorphism-problem-for-special-orbits-with-low-rank-points-cryptanalysis-and-repair-of-an-asiacrypt-2023-commitment-scheme) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#solving-the-tensor-isomorphism-problem-for-special-orbits-with-low-rank-points-cryptanalysis-and-repair-of-an-asiacrypt-2023-commitment-scheme)**
### 作者
* Valerie Gilchrist, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Laurane Marco, EPFL, Lausanne, Switzerland
* Christophe Petit, University of Birmingham, Birmingham, UK
* Gang Tang, University of Birmingham, Birmingham, UK
* Gang Tang, University of Technology Sydney, Ultimo, NSW, Australia
### 摘要
> 张量同构问题（TIP）已被证明与矩阵代码等价性问题相关，因此成为构建后量子密码基础的有趣候选。这些难题已经应用于协议开发。其中之一的MEDS目前正在NIST的附加后量子数字签名的第1轮中。
> 
> 在这项研究中，我们考虑了特定类别张量轨道的TIP受限。这个问题的决策版本的困难是D'Alconzo，Flamini和Gangemi提出的承诺方案（Asiacrypt 2023）提出的基础。我们提供了特定轨道的TIP的决策和计算版本的多项式时间算法，这意味着该承诺方案不安全。这些算法的关键观察是这些特殊的张量包含一些低秩点，它们的稳定器群不是平凡的。
> 
> 考虑到TIP安全性的这些新发展，我们提出了一个基于通用TIP的新承诺方案，它是非交互式的，后量子的，具有统计约束力，不做任何新的假设。目前文献中不存在这样的承诺方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_5](https://doi.org/10.1007/978-3-031-68376-3_5)
## Pairing-Free Blind Signatures from CDH Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-cdh-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-cdh-assumptions)**
### 作者
* Rutchathon Chairattana-Apirom, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 我们提出了第一个同时安全的盲签名方案，它利用了无需配对的群的黑盒使用，其中在随机神谕模型下可以证明不可伪造性，而无需依赖代数群模型（AGM），从而解决了一个长期存在的未解问题。之前无需配对的盲签名方案没有依赖AGM证明，只能证明在有限并发情况下是安全的，依赖于计算昂贵的非黑盒使用的NIZK，或者由于使用了增强技术，其复杂度随签名会话数量增加而增长。
> 
> 我们最有效的构造基于选择目标的CDH假设，并可以看作是Goh和Jarecki（EUROCRYPT '03）和Chevallier-Mames（CRYPTO '05）提出的签名的盲版本。我们还提供了一个基于（普通）CDH的安全性较低的方案。基础签名协议由四个（为了实现常规不可伪造性）或五个（为了强不可伪造性）步骤组成。所有方案在随机神谕模型下均经过统计盲化证明。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_6](https://doi.org/10.1007/978-3-031-68376-3_6)
## Pairing-Free Blind Signatures from Standard Assumptions in the ROM.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-standard-assumptions-in-the-rom) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-standard-assumptions-in-the-rom)**
### 作者
* Julia Kastner, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Julia Kastner, Work done while at ETH Zurich, Zurich, Switzerland
* Michael Reichle, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Ky Nguyen, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Michael Reichle, Work done partially while at ENS and Inria, Paris, France
### 摘要
> 盲签名是隐私保护应用程序的有用基础，如电子付款、电子投票、匿名凭证等。然而，现有的基于标准假设的盲签名方案要么需要配对要么需要格。我们提出了第一个实际构建的轮优化盲签名，该方案基于标准假设，在随机预言模型下，而无需使用配对或格。特别是，我们的方案在强RSA假设和DDH（在无配对群中）下是安全的。对于我们的方案，我们提供了基于强RSA的NIZK友好签名，并且有效地实例化了Fischlin通用框架的变体（CRYPTO'06）。我们的盲签名方案具有4.28KB大小的签名和10.98KB的通信成本。同时，我们开发了一些可能具有独立兴趣的技术。特别是，我们为大范围提供了高效的放松范围证明，并使用了零知识和紧凑的承诺来元素任意群。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_7](https://doi.org/10.1007/978-3-031-68376-3_7)
## On the (In)Security of the BUFF Transform.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#on-the-in-security-of-the-buff-transform) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#on-the-in-security-of-the-buff-transform)**
### 作者
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Yu-Hsuan Huang, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Patrick Struck, University of Konstanz, Konstanz, Germany
### 摘要
> BUFF变换是数字签名方案的通用变换，旨在获得标准不可伪造性以外的其他安全性质，例如独占所有权和非辞职。在要求附加的后量子签名的呼吁中，美国国家标准与技术研究院（NIST）明确提到了这些“额外理想的安全性质”，一些提交的材料确实提到了BUFF变换以实现这些安全性质，而其他一些提交的材料则是遵循BUFF变换的设计，没有明确提及它。
> 
> 在这项工作中，我们展示了以下关于一般的非辞职性质以及BUFF变换的负面结果。在普通模型中，我们通过一种简单的攻击方式观察到，任何签名方案，如果消息在给定签名的情况下具有高熵，则不满足非辞职性质（非辞职性质在消息可以从其签名中高效计算时是微不足道的）。鉴于BUFF变换在给定签名的情况下具有高熵，因此总之，无论使用何种哈希函数实例化随机预言机，BUFF变换都无法实现非辞职性。
> 
> 当考虑随机预言机模型（ROM）时，问题变得稍微复杂，因为先前的研究没有严格定义ROM中的非辞职性质。对于向ROM的自然扩展定义，我们观察到我们的不可能结果仍然成立，尽管此前有关BUFF变换的非辞职性的阳性声明依赖于错误的论证。
> 
> 在积极方面，我们证明了BUFF变换的盐版本在ROM中满足非辞职性的略微弱变体，涵盖经典和量子攻击，如果非辞职性的（削弱）定义中的熵要求是统计学的，对于计算变体，我们显示了另一个负面结果。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_8](https://doi.org/10.1007/978-3-031-68376-3_8)
## Accelerating SLH-DSA by Two Orders of Magnitude with a Single Hash Unit.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#accelerating-slh-dsa-by-two-orders-of-magnitude-with-a-single-hash-unit) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#accelerating-slh-dsa-by-two-orders-of-magnitude-with-a-single-hash-unit)**
### 作者
* Markku-Juhani O. Saarinen, SoC Hub Research Centre, Tampere University, Tampere, Finland
### 摘要
> 我们报告了用于FIPS 205 SLH-DSA基于哈希的签名标准的高效安全硬件实现技术。我们证明，优化特定于SLH-DSA的填充格式和迭代哈希过程的硬件可以获得非常显著的性能增益。一个名为SLotH的原型实现包含Keccak/SHAKE、SHA2-256和SHA2-512核心，支持SLH-DSA的所有12个参数集。SLotH还支持侧信道安全PRF计算和Winternitz链。SLotH驱动程序在一小型RISC-V控制核心上运行，这在当前的Root-of-Trust（RoT）系统中很常见。
> 
> 新功能使得SLotH上的SLH-DSA相对于同等大小的通用哈希加速器快了几倍。相比未加速的微控制器实现，SLotH的SHAKE变体的性能提高了最多\（300\times \);128f参数集的签名生成仅需4,903,978个周期，而128 s参数集的签名验证仅需179,603个周期。SHA2参数集的速度大约是SHAKE参数集的一半。我们观察到，SLH-DSA的“s”参数集的签名验证性能通常比同等大小的RoT目标上加速的ECDSA或Dilithium更好。整个SLotH系统的面积小，从63 kGE（仅SHA2，Cat 1）到155 kGE（所有参数集）。Keccak Threshold Implementation还增加了另外130个kGE。
> 
> 我们提供了SLH-DSA在侧信道泄漏方面的敏感性分析。我们通过实验证明，具有CPU哈希的SLH-DSA实现将快速泄漏\(\mathsf {SK.seed}\)主密钥。我们使用受保护的SLotH单元进行了10万次跟踪泄漏评估。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_9](https://doi.org/10.1007/978-3-031-68376-3_9)
## Ring Signatures for Deniable AKEM: Gandalf's Fellowship.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#ring-signatures-for-deniable-akem-gandalfs-fellowship) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#ring-signatures-for-deniable-akem-gandalfs-fellowship)**
### 作者
* Phillip Gajland, Max Planck Institute for Security and Privacy, Bochum, Germany
* Phillip Gajland, Ruhr-Universität Bochum, Bochum, Germany
* Jonas Janneck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 环签名是由Rivest，Shamir和Tauman在ASIACRYPT2001中介绍的一种密码学原语，可以在动态形成的用户组中提供签名者匿名性。最近的进展集中在基于格的构造上，以提高效率，特别是针对大的签名环。然而，目前的最先进的解决方案存在显着的开销问题，特别是对于较小的环而言。
> 
> 在本文中，我们提出了一种新型的基于NTRU的环签名方案，名为\(\textsc {Gandalf} \)，专为小环量身定制。我们的后量子方案与线性环签名方案\(\textsc {Raptor} \)（ACNS 2019）相比，可以实现签名大小减少50%。与亚线性环签名方案\(\textsc {Smile} \)（CRYPTO 2021）相比，我们的签名对于环大小为26以下更为紧凑。特别地，对于大小为2的环，我们的环签名仅为1236字节。
> 
> 此外，我们还探讨了使用环签名来获得身份否认在认证密钥交换机制（AKEMs）中的应用，这是最近在MLS和TLS中使用的HPKE标准背后的原语。我们采取了细粒度的方法来形式化在AKEM中的发送方身份否认，并寻求定义最强的可能概念。我们的贡献包括通过KEM和环签名方案的黑盒构造来获得可否认的AKEM，并针对大小为2的环。我们的方法同时保持了两个不同设置下最强形式的保密性和真实性。最后，我们提供了我们方案的参数设置，并展示了我们的可否认的AKEM，当实例化为我们的环签名方案时，可以产生2004字节的密文。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_10](https://doi.org/10.1007/978-3-031-68376-3_10)
## Polytopes in the Fiat-Shamir with Aborts Paradigm.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#polytopes-in-the-fiat-shamir-with-aborts-paradigm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#polytopes-in-the-fiat-shamir-with-aborts-paradigm)**
### 作者
* Henry Bambury, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Hugo Beguinet, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Éric Sageloli, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Henry Bambury, DGA, Paris, France
* Hugo Beguinet, Thales, Gennevilliers, France
* Thomas Ricosset, Thales, Gennevilliers, France
* Éric Sageloli, Thales, Gennevilliers, France
* Éric Sageloli, École polytechnique, Institut polytechnique de Paris, Palaiseau, France
### 摘要
> Fiat-Shamir with Aborts范式（FSwA）使用拒绝抽样来消除秘密对给定源分布的依赖。最近的结果表明，与超立方体中的均匀分布不同，连续高斯分布和超球内的均匀分布都可以最小化拒绝率和知识证明的大小。然而，在实践中，这些分布都受到其采样器复杂性的影响。到目前为止，这三种分布是唯一可用的选择，但它们都不能提供所有最优条件：具有竞争性知识证明大小和拒绝率的简单采样器。
> 
> 我们引入了一个新的通用框架用于FSwA，利用基于多面体的拒绝抽样来实现更多种类的构建。事实上，这个框架是第一个将这些结果推广到整数分布的。为了补充缺乏的备选方案，我们还提出了一种新的多面体构建，其均匀采样器在简单性上接近于超立方体。同时，与从高斯分布中获得的证明相比，它提供了有竞争力的知识证明大小。同时，我们分享了一些关于我们构建的实验改进，以进一步减少证明大小。最后，我们提出了一种基于FSwA范式的签名，使用我们的框架和构建。我们证明它在签名大小上与Haetae竞争，并且在采样器简单性上与Dilithium竞争。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_11](https://doi.org/10.1007/978-3-031-68376-3_11)
## On Round Elimination for Special-Sound Multi-round Identification and the Generality of the Hypercube for MPCitH.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#on-round-elimination-for-special-sound-multi-round-identification-and-the-generality-of-the-hypercube-for-mpcith) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#on-round-elimination-for-special-sound-multi-round-identification-and-the-generality-of-the-hypercube-for-mpcith)**
### 作者
### 摘要
> 请给我您要翻译成简体中文的摘要。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_12](https://doi.org/10.1007/978-3-031-68376-3_12)
## Raccoon: A Masking-Friendly Signature Proven in the Probing Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#raccoon-a-masking-friendly-signature-proven-in-the-probing-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#raccoon-a-masking-friendly-signature-proven-in-the-probing-model)**
### 作者
### 摘要
> Sure, please provide me with the abstract that you would like me to translate into Simplified Chinese.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_13](https://doi.org/10.1007/978-3-031-68376-3_13)
## Loquat: A SNARK-Friendly Post-quantum Signature Based on the Legendre PRF with Applications in Ring and Aggregate Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#loquat-a-snark-friendly-post-quantum-signature-based-on-the-legendre-prf-with-applications-in-ring-and-aggregate-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#loquat-a-snark-friendly-post-quantum-signature-based-on-the-legendre-prf-with-applications-in-ring-and-aggregate-signatures)**
### 作者
* Xinyu Zhang, Monash University, Melbourne, Australia
* Ron Steinfeld, Monash University, Melbourne, Australia
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Joseph K. Liu, Monash University, Melbourne, Australia
* Xinyu Zhang, Data61, CSIRO, Sydney, Australia
* Dongxi Liu, Data61, CSIRO, Sydney, Australia
* Sushmita Ruj, University of New South Wales, Sydney, Australia
### 摘要
> 我们设计并实现了一种基于Legendre PRF的新型后量子签名方案，命名为Loquat。在此之前，构建具有可比较安全性假设的后量子签名的高效方法主要使用了MPC-in-the-head范式或哈希树。我们的方法不同于这些范式，并且值得注意的是，它友好于SNARK，在早期设计中并不常见。Loquat对比其他对称密钥后量子签名方案要求的验证计算操作显著减少，支持无状态签名。我们的Python实现的Loquat展示了46KB的签名大小，签名时间为5.04秒，验证时间为0.21秒。将随机预言机实例化为代数哈希函数导致R1CS约束用于签名验证约为148K，比基于MPC-in-the-head的签名所需的约为7至175倍小，比SPHINCS+所需的约为3至9倍小[Bernstein等人CCS'19]。
> 
> 我们探索了Loquat的两个应用。首先，我们将其纳入基于ID的环签名方案[Buser等人ACNS'22]，将签名大小从1.9MB降低到0.9MB，实现了无状态签名和实用的主密钥生成。我们的第二个应用提出了一种基于SNARK的集合签名方案。我们使用Aurora [Ben-Sasson等人EC'19] 和Fractal [Chiesa等人EC'20] 的实现来评估我们集合签名的性能。我们的研究结果显示，使用Aurora聚合32个Loquat签名的证明时间约为7分钟，验证时间为66秒，聚合签名大小为197KB。此外，通过利用Fractal的递归证明组合特性，我们实现了一个常量大小为145KB的聚合签名，展示了Loquat在密码应用中的可伸缩性潜力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_1](https://doi.org/10.1007/978-3-031-68376-3_1)
## MPC in the Head Using the Subfield Bilinear Collision Problem.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#mpc-in-the-head-using-the-subfield-bilinear-collision-problem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#mpc-in-the-head-using-the-subfield-bilinear-collision-problem)**
### 作者
* Janik Huth, CISPA - Helmholtz Center for Information Security, Saarbrücken, Germany
* Antoine Joux, CISPA - Helmholtz Center for Information Security, Saarbrücken, Germany
* Janik Huth, Saarland University, Saarbrücken, Germany
### 摘要
> 在这篇论文中，我们介绍了子域双线性碰撞问题，并利用它来构建一个识别协议和一个签名方案。这个构造基于头脑中的MPC范式，并使用Fiat-Shamir变换来获得一个签名。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_2](https://doi.org/10.1007/978-3-031-68376-3_2)
## Aggregating Falcon Signatures with LaBRADOR.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#aggregating-falcon-signatures-with-labrador) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#aggregating-falcon-signatures-with-labrador)**
### 作者
* Marius A. Aardal, Aarhus University, Aarhus, Denmark
* Diego F. Aranha, Aarhus University, Aarhus, Denmark
* Sebastian Kolby, Aarhus University, Aarhus, Denmark
* Katharina Boudgoust, CNRS, Univ Montpellier, LIRMM, Montpellier, France
* Akira Takahashi, J.P.Morgan AI Research & AlgoCRYPT CoE, New York, USA
### 摘要
> 过去几项研究表明，使用短证明的非交互式知识证明集成Falcon签名是可行的，而Falcon是NIST标准化确定的第一代后量子签名之一。特别是，基于标准的结构格假设并在CRYPTO'23上发表的LaBRADOR似乎能够实现此任务。然而，之前没有工作以严谨的方式解决了这个想法。在本文中，我们全面证明了如何使用LaBRADOR集成Falcon签名。我们首先提供了LaBRADOR非交互式版本的第一个完整的知识声誉分析。在这里，LaBRADOR的多轮递归性质需要进行复杂和全面的分析。为此，我们引入了谓词特殊合法性（PSS）的概念。这是一种评估复杂的Fiat-Shamir知识证明协议的知识错误的通用框架，我们认为这是独立感兴趣的。然后，我们解释了采取的确切步骤，以适应非交互式LaBRADOR证明系统以集成Falcon签名，并提供了具体的证明大小估计。此外，我们将从哈希-然后-签名签名类中获得集合签名的流行方法形式化为知识证明。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_3](https://doi.org/10.1007/978-3-031-68376-3_3)
## That's Not My Signature! Fail-Stop Signatures for a Post-quantum World.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#thats-not-my-signature-fail-stop-signatures-for-a-post-quantum-world) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#thats-not-my-signature-fail-stop-signatures-for-a-post-quantum-world)**
### 作者
* Cecilia Boschini, ETH Zürich, Zürich, Switzerland
* Hila Dahari, Weizmann Institute, Rehovot, Israel
* Moni Naor, Weizmann Institute, Rehovot, Israel
* Eyal Ronen, Tel-Aviv University, Tel Aviv, Israel
### 摘要
> 斯诺登的揭露开启了社区范围内的努力，以开发针对大规模监控的加密工具。在本工作中，我们提议将另一个基元添加到该工具箱中：故障停止签名（FSS）[49]。FSS是数字签名，具有伪造检测机制，可以保护计算上限的签名者免受更强大攻击者的侵害。尽管概念很迷人，但该领域的研究在90年代后停滞了。然而，由于基础假设的新颖性而出现波动的后量子密码学的不断过渡已成为FSS的完美用例。本文旨在以实际应用为导向重新启动FSS的研究：我们的FSS框架包括“细粒度”安全定义（假设强大但有限制的对手，例如：可以破解128位安全性，但不能破解256位）。作为应用案例，我们展示了新的后量子设置的FSS构造。我们展示了FSS等同于标准，可证明安全的数字签名，不需要倒带或编程随机神谕，并且这意味着基于格的FSS。我们的主要构造是\(\textsf{SPHINCS}^+\)的FSS版本，它需要建立所有构建块的FSS版本：\(\textsf{WOTS}^+\)、\(\textsf{XMSS}\)和\(\textsf{FORS}\)。在此过程中，我们确定并提供了解决从单个种子派生大量私钥和构建基于散列和签名的FSS时出现的两个基本问题的通用解决方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_4](https://doi.org/10.1007/978-3-031-68376-3_4)
## Solving the Tensor Isomorphism Problem for Special Orbits with Low Rank Points: Cryptanalysis and Repair of an Asiacrypt 2023 Commitment Scheme.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#solving-the-tensor-isomorphism-problem-for-special-orbits-with-low-rank-points-cryptanalysis-and-repair-of-an-asiacrypt-2023-commitment-scheme) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#solving-the-tensor-isomorphism-problem-for-special-orbits-with-low-rank-points-cryptanalysis-and-repair-of-an-asiacrypt-2023-commitment-scheme)**
### 作者
* Valerie Gilchrist, Université Libre de Bruxelles, Brussels, Belgium
* Christophe Petit, Université Libre de Bruxelles, Brussels, Belgium
* Laurane Marco, EPFL, Lausanne, Switzerland
* Christophe Petit, University of Birmingham, Birmingham, UK
* Gang Tang, University of Birmingham, Birmingham, UK
* Gang Tang, University of Technology Sydney, Ultimo, NSW, Australia
### 摘要
> 张量同构问题（TIP）已被证明与矩阵代码等价性问题相关，因此成为构建后量子密码基础的有趣候选。这些难题已经应用于协议开发。其中之一的MEDS目前正在NIST的附加后量子数字签名的第1轮中。
> 
> 在这项研究中，我们考虑了特定类别张量轨道的TIP受限。这个问题的决策版本的困难是D'Alconzo，Flamini和Gangemi提出的承诺方案（Asiacrypt 2023）提出的基础。我们提供了特定轨道的TIP的决策和计算版本的多项式时间算法，这意味着该承诺方案不安全。这些算法的关键观察是这些特殊的张量包含一些低秩点，它们的稳定器群不是平凡的。
> 
> 考虑到TIP安全性的这些新发展，我们提出了一个基于通用TIP的新承诺方案，它是非交互式的，后量子的，具有统计约束力，不做任何新的假设。目前文献中不存在这样的承诺方案。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_5](https://doi.org/10.1007/978-3-031-68376-3_5)
## Pairing-Free Blind Signatures from CDH Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-cdh-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-cdh-assumptions)**
### 作者
* Rutchathon Chairattana-Apirom, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 我们提出了第一个同时安全的盲签名方案，它利用了无需配对的群的黑盒使用，其中在随机神谕模型下可以证明不可伪造性，而无需依赖代数群模型（AGM），从而解决了一个长期存在的未解问题。之前无需配对的盲签名方案没有依赖AGM证明，只能证明在有限并发情况下是安全的，依赖于计算昂贵的非黑盒使用的NIZK，或者由于使用了增强技术，其复杂度随签名会话数量增加而增长。
> 
> 我们最有效的构造基于选择目标的CDH假设，并可以看作是Goh和Jarecki（EUROCRYPT '03）和Chevallier-Mames（CRYPTO '05）提出的签名的盲版本。我们还提供了一个基于（普通）CDH的安全性较低的方案。基础签名协议由四个（为了实现常规不可伪造性）或五个（为了强不可伪造性）步骤组成。所有方案在随机神谕模型下均经过统计盲化证明。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_6](https://doi.org/10.1007/978-3-031-68376-3_6)
## Pairing-Free Blind Signatures from Standard Assumptions in the ROM.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-standard-assumptions-in-the-rom) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#pairing-free-blind-signatures-from-standard-assumptions-in-the-rom)**
### 作者
* Julia Kastner, Centrum Wiskunde & Informatica, Amsterdam, The Netherlands
* Julia Kastner, Work done while at ETH Zurich, Zurich, Switzerland
* Michael Reichle, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Ky Nguyen, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Michael Reichle, Work done partially while at ENS and Inria, Paris, France
### 摘要
> 盲签名是隐私保护应用程序的有用基础，如电子付款、电子投票、匿名凭证等。然而，现有的基于标准假设的盲签名方案要么需要配对要么需要格。我们提出了第一个实际构建的轮优化盲签名，该方案基于标准假设，在随机预言模型下，而无需使用配对或格。特别是，我们的方案在强RSA假设和DDH（在无配对群中）下是安全的。对于我们的方案，我们提供了基于强RSA的NIZK友好签名，并且有效地实例化了Fischlin通用框架的变体（CRYPTO'06）。我们的盲签名方案具有4.28KB大小的签名和10.98KB的通信成本。同时，我们开发了一些可能具有独立兴趣的技术。特别是，我们为大范围提供了高效的放松范围证明，并使用了零知识和紧凑的承诺来元素任意群。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_7](https://doi.org/10.1007/978-3-031-68376-3_7)
## On the (In)Security of the BUFF Transform.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#on-the-in-security-of-the-buff-transform) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#on-the-in-security-of-the-buff-transform)**
### 作者
* Jelle Don, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Yu-Hsuan Huang, Centrum Wiskunde & Informatica (CWI), Amsterdam, The Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, The Netherlands
* Patrick Struck, University of Konstanz, Konstanz, Germany
### 摘要
> BUFF变换是数字签名方案的通用变换，旨在获得标准不可伪造性以外的其他安全性质，例如独占所有权和非辞职。在要求附加的后量子签名的呼吁中，美国国家标准与技术研究院（NIST）明确提到了这些“额外理想的安全性质”，一些提交的材料确实提到了BUFF变换以实现这些安全性质，而其他一些提交的材料则是遵循BUFF变换的设计，没有明确提及它。
> 
> 在这项工作中，我们展示了以下关于一般的非辞职性质以及BUFF变换的负面结果。在普通模型中，我们通过一种简单的攻击方式观察到，任何签名方案，如果消息在给定签名的情况下具有高熵，则不满足非辞职性质（非辞职性质在消息可以从其签名中高效计算时是微不足道的）。鉴于BUFF变换在给定签名的情况下具有高熵，因此总之，无论使用何种哈希函数实例化随机预言机，BUFF变换都无法实现非辞职性。
> 
> 当考虑随机预言机模型（ROM）时，问题变得稍微复杂，因为先前的研究没有严格定义ROM中的非辞职性质。对于向ROM的自然扩展定义，我们观察到我们的不可能结果仍然成立，尽管此前有关BUFF变换的非辞职性的阳性声明依赖于错误的论证。
> 
> 在积极方面，我们证明了BUFF变换的盐版本在ROM中满足非辞职性的略微弱变体，涵盖经典和量子攻击，如果非辞职性的（削弱）定义中的熵要求是统计学的，对于计算变体，我们显示了另一个负面结果。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_8](https://doi.org/10.1007/978-3-031-68376-3_8)
## Accelerating SLH-DSA by Two Orders of Magnitude with a Single Hash Unit.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#accelerating-slh-dsa-by-two-orders-of-magnitude-with-a-single-hash-unit) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#accelerating-slh-dsa-by-two-orders-of-magnitude-with-a-single-hash-unit)**
### 作者
* Markku-Juhani O. Saarinen, SoC Hub Research Centre, Tampere University, Tampere, Finland
### 摘要
> 我们报告了用于FIPS 205 SLH-DSA基于哈希的签名标准的高效安全硬件实现技术。我们证明，优化特定于SLH-DSA的填充格式和迭代哈希过程的硬件可以获得非常显著的性能增益。一个名为SLotH的原型实现包含Keccak/SHAKE、SHA2-256和SHA2-512核心，支持SLH-DSA的所有12个参数集。SLotH还支持侧信道安全PRF计算和Winternitz链。SLotH驱动程序在一小型RISC-V控制核心上运行，这在当前的Root-of-Trust（RoT）系统中很常见。
> 
> 新功能使得SLotH上的SLH-DSA相对于同等大小的通用哈希加速器快了几倍。相比未加速的微控制器实现，SLotH的SHAKE变体的性能提高了最多\（300\times \);128f参数集的签名生成仅需4,903,978个周期，而128 s参数集的签名验证仅需179,603个周期。SHA2参数集的速度大约是SHAKE参数集的一半。我们观察到，SLH-DSA的“s”参数集的签名验证性能通常比同等大小的RoT目标上加速的ECDSA或Dilithium更好。整个SLotH系统的面积小，从63 kGE（仅SHA2，Cat 1）到155 kGE（所有参数集）。Keccak Threshold Implementation还增加了另外130个kGE。
> 
> 我们提供了SLH-DSA在侧信道泄漏方面的敏感性分析。我们通过实验证明，具有CPU哈希的SLH-DSA实现将快速泄漏\(\mathsf {SK.seed}\)主密钥。我们使用受保护的SLotH单元进行了10万次跟踪泄漏评估。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_9](https://doi.org/10.1007/978-3-031-68376-3_9)
## Ring Signatures for Deniable AKEM: Gandalf's Fellowship.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#ring-signatures-for-deniable-akem-gandalfs-fellowship) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#ring-signatures-for-deniable-akem-gandalfs-fellowship)**
### 作者
* Phillip Gajland, Max Planck Institute for Security and Privacy, Bochum, Germany
* Phillip Gajland, Ruhr-Universität Bochum, Bochum, Germany
* Jonas Janneck, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 环签名是由Rivest，Shamir和Tauman在ASIACRYPT2001中介绍的一种密码学原语，可以在动态形成的用户组中提供签名者匿名性。最近的进展集中在基于格的构造上，以提高效率，特别是针对大的签名环。然而，目前的最先进的解决方案存在显着的开销问题，特别是对于较小的环而言。
> 
> 在本文中，我们提出了一种新型的基于NTRU的环签名方案，名为\(\textsc {Gandalf} \)，专为小环量身定制。我们的后量子方案与线性环签名方案\(\textsc {Raptor} \)（ACNS 2019）相比，可以实现签名大小减少50%。与亚线性环签名方案\(\textsc {Smile} \)（CRYPTO 2021）相比，我们的签名对于环大小为26以下更为紧凑。特别地，对于大小为2的环，我们的环签名仅为1236字节。
> 
> 此外，我们还探讨了使用环签名来获得身份否认在认证密钥交换机制（AKEMs）中的应用，这是最近在MLS和TLS中使用的HPKE标准背后的原语。我们采取了细粒度的方法来形式化在AKEM中的发送方身份否认，并寻求定义最强的可能概念。我们的贡献包括通过KEM和环签名方案的黑盒构造来获得可否认的AKEM，并针对大小为2的环。我们的方法同时保持了两个不同设置下最强形式的保密性和真实性。最后，我们提供了我们方案的参数设置，并展示了我们的可否认的AKEM，当实例化为我们的环签名方案时，可以产生2004字节的密文。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_10](https://doi.org/10.1007/978-3-031-68376-3_10)
## Polytopes in the Fiat-Shamir with Aborts Paradigm.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#polytopes-in-the-fiat-shamir-with-aborts-paradigm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#polytopes-in-the-fiat-shamir-with-aborts-paradigm)**
### 作者
* Henry Bambury, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Hugo Beguinet, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Éric Sageloli, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Henry Bambury, DGA, Paris, France
* Hugo Beguinet, Thales, Gennevilliers, France
* Thomas Ricosset, Thales, Gennevilliers, France
* Éric Sageloli, Thales, Gennevilliers, France
* Éric Sageloli, École polytechnique, Institut polytechnique de Paris, Palaiseau, France
### 摘要
> Fiat-Shamir with Aborts范式（FSwA）使用拒绝抽样来消除秘密对给定源分布的依赖。最近的结果表明，与超立方体中的均匀分布不同，连续高斯分布和超球内的均匀分布都可以最小化拒绝率和知识证明的大小。然而，在实践中，这些分布都受到其采样器复杂性的影响。到目前为止，这三种分布是唯一可用的选择，但它们都不能提供所有最优条件：具有竞争性知识证明大小和拒绝率的简单采样器。
> 
> 我们引入了一个新的通用框架用于FSwA，利用基于多面体的拒绝抽样来实现更多种类的构建。事实上，这个框架是第一个将这些结果推广到整数分布的。为了补充缺乏的备选方案，我们还提出了一种新的多面体构建，其均匀采样器在简单性上接近于超立方体。同时，与从高斯分布中获得的证明相比，它提供了有竞争力的知识证明大小。同时，我们分享了一些关于我们构建的实验改进，以进一步减少证明大小。最后，我们提出了一种基于FSwA范式的签名，使用我们的框架和构建。我们证明它在签名大小上与Haetae竞争，并且在采样器简单性上与Dilithium竞争。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_11](https://doi.org/10.1007/978-3-031-68376-3_11)
## On Round Elimination for Special-Sound Multi-round Identification and the Generality of the Hypercube for MPCitH.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#on-round-elimination-for-special-sound-multi-round-identification-and-the-generality-of-the-hypercube-for-mpcith) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#on-round-elimination-for-special-sound-multi-round-identification-and-the-generality-of-the-hypercube-for-mpcith)**
### 作者
* Andreas Hülsing, SandboxAQ, Palo Alto, USA
* David Joseph, SandboxAQ, Palo Alto, USA
* Anand Kumar Narayanan, SandboxAQ, Palo Alto, USA
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Technical University of Denmark, Kongens Lyngby, Denmark
### 摘要
> 请给我您要翻译成简体中文的摘要。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_12](https://doi.org/10.1007/978-3-031-68376-3_12)
## Raccoon: A Masking-Friendly Signature Proven in the Probing Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-1].md#raccoon-a-masking-friendly-signature-proven-in-the-probing-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-1].md#raccoon-a-masking-friendly-signature-proven-in-the-probing-model)**
### 作者
* Rafaël del Pino, PQShield, Oxford, UK
* Shuichi Katsumata, PQShield, Oxford, UK
* Thomas Prest, PQShield, Oxford, UK
* Shuichi Katsumata, AIST, Warrendale, USA
* Mélissa Rossi, ANSSI, Paris, France
### 摘要
> Sure, please provide me with the abstract that you would like me to translate into Simplified Chinese.

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68376-3_13](https://doi.org/10.1007/978-3-031-68376-3_13)
