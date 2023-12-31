# Crypto[2019-3]
## Trapdoor Hash Functions and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#trapdoor-hash-functions-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#trapdoor-hash-functions-and-their-applications)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, UC Berkeley, Berkeley, CA, USA
* Yuval Ishai, Technion, Haifa, Israel
* Giulio Malavolta, Carengie Mellon University, Pittsburgh, PA, USA
* Tamer Mour, Weizmann Institute of Science, Rehovot, Israel
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
### 摘要
> 我们介绍了一种新的原语，称为陷门哈希函数（TDH），它是具有陷门函数类似属性的哈希函数 \(\mathsf {H}: \{0,1\}^n \rightarrow \{0,1\}^\lambda \)。具体而言，给定索引 \(i\in [n]\)，TDH允许对应于隐藏i的编码密钥 \(\mathsf {ek}\)（以及相应的陷门）进行抽样。此外，给定\(\mathsf {H}(x)\)，一个提示值 \(\mathsf {E}(\mathsf {ek},x)\)，以及与 \(\mathsf {ek}\) 相对应的陷门，可以高效地恢复x的第 \(i\) 位。在这种情况下，我们的一个主要问题是：提示值 \(\mathsf {E}(\mathsf {ek},x)\) 可以有多小？我们基于DDH、QR、DCR或LWE构造了只有一个比特长的提示。
> 
> 这个原语为低通信安全计算开辟了大门。我们主要关注接收者和发送者之间的两条消息的协议，其中接收者的私有输入分别为x和y，接收者应该学习f(x, y)。我们希望优化此类协议的（下载）速率，即输出大小与发送者消息大小之间的渐近比率。使用TDH，我们获得了以下结果：
> 
> 1. 基于DDH、QR或LWE的（两条消息的）速率为1的字符串OT协议的首次构造。这有一些有用的结果，例如：
> 
> (a) 基于DDH或QR，数据库大小的通信成本是多项式对数级的PIR的首次构造。实际上，当考虑块PIR时，这些协议的速率为1。
> 
> (b) 基于DDH或QR，只有程序长度增长的半紧凑分支程序同态加密方案的首次构造。
> 
> (c) 基于DDH、QR或LWE，首次构造出输入输出比接近1的有损陷门函数。
> 
> (d) 在纯模型中，基于LWE的2条消息“统计发送者隐私”的恒定速率OT协议的首次构造。
> 
> 2. 基于DDH、QR或LWE，首次构造出n个并行OT和矩阵-向量乘积的速率为1的协议（在任何假设下）。
> 
> 我们进一步考虑f评估在x上运行时间 \(T\ll |x|\) 的RAM程序y的设置。我们基于DDH或对应的pairings（和相关输入安全哈希函数）获得了与x大小亚线性的通信，即 \(T\cdot \sqrt{|x|}\) 或 \(T\cdot \root 3 \of {|x|}\) 的首次协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_1](https://doi.org/10.1007/978-3-030-26954-8_1)
## CCA Security and Trapdoor Functions via Key-Dependent-Message Security.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#cca-security-and-trapdoor-functions-via-key-dependent-message-security) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#cca-security-and-trapdoor-functions-via-key-dependent-message-security)**
### 作者
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Takahiro Matsuda, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> 本文研究了公钥加密（PKE）在抵御已知明文攻击（IND-CPA 安全）、抵御已知密文攻击（IND-CCA 安全）以及陷门函数（TDF）之间的关系。具体而言，我们旨在找到一种统一的方法和一些额外的要求，以实现基于IND-CPA安全PKE的IND-CCA安全PKE和TDF，并展示了以下两个主要结果。
> 
> 作为第一个主要结果，我们展示了如何通过弱形式的密钥相关消息（KDM）安全性来实现IND-CCA安全性。更具体地说，我们构建了一种基于IND-CPA安全PKE方案和满足投影函数（投影-KDM安全）下一次KDM安全性的秘密密钥加密（SKE）方案的IND-CCA安全PKE方案。投影函数是非常简单的函数，对于它们的KDM安全性已经广泛研究。由于具有投影-KDM安全PKE的存在意味着具有上述两个构建块的存在，因此作为这一结果的推论，我们可以看出IND-CCA安全PKE的存在意味着具有投影-KDM安全PKE的存在。
> 
> 作为第二个主要结果，我们将IND-CCA安全PKE的构造扩展为TDF的构造，并针对每个构建块额外要求一个温和的要求。我们的TDF满足自适应单向性。我们可以基于各种计算假设来实例化我们的TDF。特别地，我们获得了第一个基于常噪声学习带有噪声的奇偶校验（LPN）问题的亚指数难度（自适应单向性）的TDF。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_2](https://doi.org/10.1007/978-3-030-26954-8_2)
## Zero-Knowledge Proofs on Secret-Shared Data via Fully Linear PCPs.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#zero-knowledge-proofs-on-secret-shared-data-via-fully-linear-pcps) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#zero-knowledge-proofs-on-secret-shared-data-via-fully-linear-pcps)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Henry Corrigan-Gibbs, Stanford University, Stanford, USA
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Be’er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
### 摘要
> 我们介绍并研究了完全线性概率可检验证明系统的概念。在这种证明系统中，验证者可以进行一小部分线性查询，同时应用于输入和证明向量。
> 
> 我们的新型证明系统是受到某些应用的启发，这些应用中输入语句不完全可访问给任何一个验证者，但仍然可以通过线性查询进行高效访问。这种情况在输入被分割或秘密共享在两个或更多方之间的场景中出现，或者使用加法同态加密或承诺方案进行编码。这种情况出现在安全消息平台、可验证外包计算、PIR写作、聚合统计的私密计算以及安全多方计算(MPC)等情景中。在所有这些应用中，都需要具有简短证明的完全线性证明系统。
> 
> 虽然有关完全线性证明系统的若干有效构造在交互式证明文献中是隐含的，但它们的复杂性问题仍然存在许多疑问。我们提出了几个新型的完全线性零知识证明系统构建方法，这些方法在“简单”或“结构化”语言中具有亚线性的证明大小。例如，在完全线性PCPs的非交互式设置中，我们展示了如何证明有限域\( \mathbb{F} \)上的输入向量\(x\in {\mathbb {F}}^n\)满足一个具有大小\(O(\sqrt{n})\)和\(O(\sqrt{n})\)线性查询的二次方程，我们证明了该证明是最优的。更一般地，对于可以通过常度方程系统识别的语言，我们可以将证明大小减小到\(O(\log n)\)，代价是\(O(\log n)\)轮的交互。
> 
> 我们使用我们的新型证明系统构建了分布式和秘密共享数据上的新型简短零知识证明。这些证明可以用于提高上述例子系统的性能。
> 
> 最后，我们观察到分布式数据上的零知识证明为保护MPC协议免受恶意方的攻击提供了通用工具。将我们的简短完全线性PCPs应用于诚实多数方设置下的“自然”MPC协议，我们可以实现对恶意方的无条件保护，并以亚线性的加性通信代价。我们利用这一点来改进最近诚实多数MPC协议的通信复杂度。例如，使用任何伪随机生成器，我们得到了一个适用于布尔电路的3方协议，其中分摊的通信代价仅为每个AND门每个方1比特（与之前最佳协议的10比特相比），与半诚实方的最佳已知协议匹配。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_3](https://doi.org/10.1007/978-3-030-26954-8_3)
## Non-Uniformly Sound Certificates with Applications to Concurrent Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#non-uniformly-sound-certificates-with-applications-to-concurrent-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#non-uniformly-sound-certificates-with-applications-to-concurrent-zero-knowledge)**
### 作者
* Cody Freitag, Cornell Tech, New York, NY, 10044, USA
* Ilan Komargodski, Cornell Tech, New York, NY, 10044, USA
* Rafael Pass, Cornell Tech, New York, NY, 10044, USA
### 摘要
> 我们介绍了非一致可靠证书的概念：简洁的单消息（单向）论证系统，满足对非一致多项式时间攻击者的“最佳安全性”。特别是，没有具有 s 位非一致建议的多项式时间攻击者能够找到明显多于 s 个接受虚假陈述的证明。我们的第一个结果是在随机预言模型中对所有 NP 的非一致可靠证书的构造，其中攻击者的建议可以任意依赖于随机预言。接下来，我们证明了对于 P（和碰撞抗性哈希函数）存在非一致可靠证书将产生一个公共硬币常数轮次的全并发零知识论证，用于 NP。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_4](https://doi.org/10.1007/978-3-030-26954-8_4)
## On Round Optimal Statistical Zero Knowledge Arguments.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#on-round-optimal-statistical-zero-knowledge-arguments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#on-round-optimal-statistical-zero-knowledge-arguments)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv-Yafo, Israel
* Omer Paneth, MIT and Northeastern University, Cambridge, USA
### 摘要
> 我们构建了第一个对所有NP问题具有统计学零知识证明的三个消息。我们基于无密钥多碰撞抗性哈希函数和Learning with Errors假设进行了构造，这些假设与获得轮数最优的计算零知识证明相同。
> 
> 我们构造中的主要组成部分是一种基于新的统计隐藏承诺与子集打开概念的统计见证不可区分的知识证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_5](https://doi.org/10.1007/978-3-030-26954-8_5)
## It Wasn't Me! - Repudiability and Claimability of Ring Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#it-wasnt-me-repudiability-and-claimability-of-ring-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#it-wasnt-me-repudiability-and-claimability-of-ring-signatures)**
### 作者
* Sunoo Park, MIT and Harvard, Cambridge, USA
* Adam Sealfon, MIT, Cambridge, USA
### 摘要
> 环签名是数字签名的一种变体，由[RST01]引入，它证明特定一组参与者中的其中一个已经认可了一条消息，同时隐藏了集合中的签名者是谁。环签名旨在允许任何人在签名中附上任何其他人的名字，只要签名者自己的名字也被附上即可。但是，如果一个签署者希望否认一条已签署的消息，或者相反，如果签署者希望事后公开声称拥有某个签名，环签名提供了什么样的保证？先前对环签名的安全定义没有给出一个确切的答案：根据大多数已有的定义，在这一问题上保证可以向任何一方倾斜。也就是说，根据某些标准的定义，非签名者可能能够否认他没有生成的签名，或者这种情况可能是不可能的。类似地，签名者可能会后来有说服力地声称由他生成的签名确实是自己的，也可能不是。这些保证中的任何一个都可能是理想的。例如，一个告密者可能有理由希望以后声称匿名发布的签名，或者一个被冠以与环签名相关的犯罪行为的人可能希望否认对他们的诬陷并损害他们的声誉的签名。在其他情况下，即使在受到压力的情况下，环中的成员也不可能产生关于他是否签署了特定签名的证据。无论如何，无论是这方面还是那方面的保证都是非常理想的。
> 
> 在这项工作中，我们正式定义了可否认、不可否认、可以声称和不可声称环签名的概念，并给出了它们的构造方法。我们的可否认构造基于可验证随机函数(VRFs)，这些函数可以通过几个数论假设（包括强RSA或双线性映射）得到；我们的可声称构造是通过任何标准环签名方案的黑盒转换得到的；我们的不可声称构造是基于[BK10]中的基于格的环签名的，它们依赖于SIS的难题。我们的可否认构造还提供了一个标准环签名的新构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_6](https://doi.org/10.1007/978-3-030-26954-8_6)
## Two-Party ECDSA from Hash Proof Systems and Efficient Instantiations.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#two-party-ecdsa-from-hash-proof-systems-and-efficient-instantiations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#two-party-ecdsa-from-hash-proof-systems-and-efficient-instantiations)**
### 作者
* Guilhem Castagnos, Université de Bordeaux, Inria, CNRS, IMB UMR 5251, F-33405, Talence, France
* Dario Catalano, Università di Catania, Catania, Italy
* Federico Savasta, Università di Catania, Catania, Italy
* Fabien Laguillaumie, Univ Lyon, EnsL, UCBL, CNRS, Inria, LIP, F-69342, Lyon Cedex 07, France
* Ida Tucker, Univ Lyon, EnsL, UCBL, CNRS, Inria, LIP, F-69342, Lyon Cedex 07, France
* Federico Savasta, Scuola Superiore di Catania, Catania, Italy
### 摘要
> ECDSA是一种被广泛采用的数字签名标准。不幸的是，这种原语的高效分布式变体很难实现，已知的解决方案通常需要昂贵的零知识证明来对付恶意对手。对于双方案例，Lindell [Lin17]最近成功提出了一种高效的解决方案，为了实现基于模拟的安全性，它依赖于对Paillier密码系统的互动、非标准假设。在本文中，我们使用哈希证明系统对Lindell的解决方案进行了泛化。我们通用方法的主要优势在于，它能够在不借助非标准互动假设的情况下得到基于模拟的安全性证明。
> 
> 对于具体构造，我们展示了如何利用虚二次域的类群来实例化我们的框架。我们的实现表明，放弃此类互动假设对实际影响很小。实际上，对于128位安全性，我们的方案稍微慢于Lindell的方案，但对于256位安全性，在密钥生成和签名时间方面却更加优越。此外，就通信成本而言，我们的实现显著减少了轮数和传输的比特数，且没有例外。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_7](https://doi.org/10.1007/978-3-030-26954-8_7)
## Asymmetric Message Franking: Content Moderation for Metadata-Private End-to-End Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#asymmetric-message-franking-content-moderation-for-metadata-private-end-to-end-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#asymmetric-message-franking-content-moderation-for-metadata-private-end-to-end-encryption)**
### 作者
* Nirvan Tyagi, Cornell Tech, New York City, USA
* Paul Grubbs, Cornell Tech, New York City, USA
* Julia Len, Cornell Tech, New York City, USA
* Ian Miers, Cornell Tech, New York City, USA
* Thomas Ristenpart, Cornell Tech, New York City, USA
* Ian Miers, University of Maryland, College Park, USA
### 摘要
> 内容管理对于在在线平台上阻止滥用和骚扰性消息至关重要。现有的管理机制，如消息加戳，要求平台提供商能够将用户标识符与加密消息关联起来。这些机制在元数据私密的消息系统（如Signal）中失败，用户可以将自己的身份隐藏起来。阻止滥用的关键技术挑战是在保留否认性的同时实现加密追溯性。
> 
> 在这项工作中，我们通过一种新的加密原语解决了这种紧张关系：非对称消息加戳(AMF)方案。我们为AMF方案定义了强安全概念，其中包括对管理设置中否认性的首个形式处理。然后，我们构建、分析和实施了一种足够快速的AMF方案，可用于元数据私密消息的内容管理。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_8](https://doi.org/10.1007/978-3-030-26954-8_8)
## Statistical Zeroizing Attack: Cryptanalysis of Candidates of BP Obfuscation over GGH15 Multilinear Map.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#statistical-zeroizing-attack-cryptanalysis-of-candidates-of-bp-obfuscation-over-ggh15-multilinear-map) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#statistical-zeroizing-attack-cryptanalysis-of-candidates-of-bp-obfuscation-over-ggh15-multilinear-map)**
### 作者
* Jung Hee Cheon, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Wonhee Cho, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Minki Hhan, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Jiseung Kim, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Jung Hee Cheon, Research Institute of Mathematics (RIM), SNU, Seoul, Republic of Korea
* Jung Hee Cheon, Cryptolab, Seoul, Republic of Korea
* Changmin Lee, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
### 摘要
> 我们提出了一种基于GGH15多线性映射的混淆的新的密码分析算法。我们的算法是一种统计置零攻击，直接区分了混淆的两个分布，同时遵循置零攻击范式，即使用混淆程序的零点评估。我们的攻击破解了Chen等人(2018年CRYPTO)针对最佳参数设置的最近可区分混淆候选方案。更准确地说，我们证明存在两个功能等价的分支程序，其CVW混淆可以通过计算样本方差的评估来高效区分。
> 
> 这种统计攻击对于混淆的不可区分性安全性提供了新的视角：我们应该考虑混淆评估的分布形状以确保安全性。
> 
> 换句话说，虽然大多数以前的（弱）安全性证明是针对代数攻击模型或理想模型进行的研究，但我们的攻击显示出这种代数安全性不足以实现混淆的不可区分性。特别地，我们证明Bartusek等人(2018年TCC)提出的混淆方案在某个参数范围内没有实现所需的安全性，而他们的代数安全性证明仍然成立。
> 
> 统计置零攻击的正确性在具有格陷阱的前像采样算法上有一个温和的假设。我们通过Halevi等人(2017年ACM CCS)实现的混淆进行了实验证明了这个假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_9](https://doi.org/10.1007/978-3-030-26954-8_9)
## Indistinguishability Obfuscation Without Multilinear Maps: New Paradigms via Low Degree Weak Pseudorandomness and Security Amplification.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#indistinguishability-obfuscation-without-multilinear-maps-new-paradigms-via-low-degree-weak-pseudorandomness-and-security-amplification) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#indistinguishability-obfuscation-without-multilinear-maps-new-paradigms-via-low-degree-weak-pseudorandomness-and-security-amplification)**
### 作者
* Prabhanjan Ananth, MIT, Cambridge, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Huijia Lin, University of Washington, Seattle, USA
* Christian Matt, Concordium, Zurich, Switzerland
### 摘要
> 安全不可区分性模糊器（\(i\mathcal {O}\)）的存在具有深远影响，极大地扩展了可以进行密码学研究的问题范围。所有已知的构造 \(i\mathcal {O}\) 的方法都依赖于 d-线性映射。虽然安全双线性映射在密码学文献中已经得到了很好的建立，但对于 \(d>2\) 的候选方案的安全性仍不清楚。
> 
> 我们提出了一种新的构造普通电路 \(i\mathcal {O}\) 的方法。与所有已知的 \(i\mathcal {O}\) 实现不同，我们避免使用度数 \(d \ge 3\) 的 d-线性映射。
> 
> 我们方法的核心假设是存在一个新的弱伪随机对象。我们考虑这些对象的两个相关变体，我们称之为摄动抵抗发生器（\(\varDelta \)RG）和伪有缺陷模糊发生器（\(\mathrm {PFG}\)）。从高层次上看，这两个对象都是多项式扩展函数，当与它们相加时，它们的输出部分隐藏（或模糊）小的噪声向量。我们进一步要求它们可以通过一组 3 次多项式在 \(\mathbb {Z}\) 上计算。我们展示了如何利用它们构建具有弱安全性保证的功能加密方案。最后，我们使用新颖的放大技术获得完全安全性。
> 
> 因此，我们在假设下获得了普通电路 \(i\mathcal {O}\)：
> 
> 次指数安全的LWE
> 
> 双线性映射
> 
> \(\mathrm {poly}(\lambda )\)-安全的 3-块局部伪随机生成器（PRG）
> 
> \(\varDelta \)RG或 \(\mathrm {PFG}\)

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_10](https://doi.org/10.1007/978-3-030-26954-8_10)
## Watermarking PRFs from Lattices: Stronger Security via Extractable PRFs.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#watermarking-prfs-from-lattices-stronger-security-via-extractable-prfs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#watermarking-prfs-from-lattices-stronger-security-via-extractable-prfs)**
### 作者
* Sam Kim, Stanford University, Stanford, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 软件水印方案使我们能够在保留程序功能的同时嵌入一个“标记”（即，一条消息）。此外，存在一种提取算法，可以从程序中恢复嵌入的消息。主要的安全目标是，在不破坏程序功能的情况下，很难去除水印。现有的水印构建主要关注水印密码函数，如伪随机函数（PRF）；即使在此设置中，从标准假设实现水印仍然很困难。Kim和Wu（CRYPTO 2017）提出的基于格的秘密密钥水印构建仅确保对没有访问标记提取神谕的敌手无法移除标记。Quach等人（TCC 2018）的构建实现了更强的标记无法被移除的概念，即使敌手可以进行提取查询，但它的缺点是水印授权者（持有水印秘密密钥的人）可以破坏整个PRF密钥族的伪随机性（包括未标记的密钥）。
> 
> 在这项工作中，我们构建了新的基于格的PRF秘密密钥水印方案，既可以提供对具有标记提取神谕访问权限的敌手的无法移除性，又可以对水印授权者提供强大且有意义的伪随机性（即，未标记密钥的输出几乎在任何地方都是伪随机的）。此外，我们几种方案的安全性可以基于计算最坏情况格问题的近似多项式困难性。这是一个定性上较弱的假设，而不是现有基于格的水印构建（支持消息嵌入）所需的准多项式逼近因子。我们的构建依赖于一种称为可提取PRF的新的密码原语，这可能是一个独立感兴趣的内容。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_11](https://doi.org/10.1007/978-3-030-26954-8_11)
## Watermarking Public-Key Cryptographic Primitives.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#watermarking-public-key-cryptographic-primitives) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#watermarking-public-key-cryptographic-primitives)**
### 作者
* Rishab Goyal, UT Austin, Austin, TX, USA
* Brent Waters, UT Austin, Austin, TX, USA
* Sam Kim, Stanford University, Stanford, CA, USA
* Nathan Manohar, UCLA, Los Angeles, CA, USA
* Brent Waters, NTT Research, East Palo Alto, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 一种软件水印方案使用户能够在程序中嵌入消息或标记，同时保持其功能。此外，对手要在已标记的程序中删除水印而不破坏其行为是困难的。现有的软件水印构造从标准假设出发，专注于对伪随机函数（PRF）进行水印标记。
> 
> 在本研究中，我们研究了对公钥基本原语进行水印标记，例如数字签名方案的签名密钥或公钥（谓词）加密方案的解密密钥。虽然对公钥基本原语进行水印标记可能比对PRF进行水印标记更具挑战性，但我们的构造只依赖于简单的假设。我们的可水印签名方案可以建立在单向函数的最小假设基础上，而我们的可水印公钥加密方案可以建立在大多数暗示公钥加密的标准代数假设（例如，因子分解、离散对数或格假设）之上。我们的方案还满足一些有吸引力的属性：公开标记、公开标记提取和勾结抵抗。我们的方案是第一个同时实现所有这些属性的方案。
> 
> 我们新构造的关键所在是放松了功能保持的概念。传统上，我们要求已标记的程序（近似地）保持原始程序的输入/输出行为，但在公钥设置中，保持“功能”不一定要求保持确切的输入/输出行为。例如，如果我们想标记一个签名算法，只需已标记的算法仍然输出有效的签名（即使这些签名可能与未标记算法输出的签名有所不同）。类似地，如果我们想标记一个解密算法，只需已标记的算法正确解密所有有效的密文（但可能在无效或格式错误的密文上与未标记算法的行为不同）。我们放松的功能保持概念捕捉了水印标记的本质，并仍支持传统应用，同时为实现这种强大的加密概念提供了额外的灵活性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_12](https://doi.org/10.1007/978-3-030-26954-8_12)
## SpOT-Light: Lightweight Private Set Intersection from Sparse OT Extension.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#spot-light-lightweight-private-set-intersection-from-sparse-ot-extension) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#spot-light-lightweight-private-set-intersection-from-sparse-ot-extension)**
### 作者
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Avishay Yanai, Bar-Ilan University, Ramat Gan, Israel
* Mike Rosulek, Oregon State University, Corvallis, USA
* Ni Trieu, Oregon State University, Corvallis, USA
### 摘要
> 我们描述了一种新颖的两方私有集交集(PSI)的半诚实安全方法。与现有的PSI协议相比，我们的协议在通信和计算之间取得了更优的平衡。具体来说，我们的协议在运行互联网使用基于云的计算服务时（考虑到当前的CPU + 数据费率），具有所有已知PSI协议中的最低货币成本。在慢速网络（如10 Mbps）上，我们的协议实际上是最快的。
> 
> 我们新颖的基础技术是我们称之为稀疏OT扩展的无意识转移（OT）扩展的变种。从概念上讲，它可以被视为通信效率高的多点无意识PRF评估。我们的稀疏OT技术重度依赖于处理大有限字段上的高阶多项式（即，那些表示需要数百位的元素）。我们引入了广泛的算法和工程改进用于插值和这种多项式的多点评估，我们相信这将具有独立的兴趣。
> 
> 最后，我们在几个应用场景以及几个测量维度上提供了对最先进的PSI协议的广

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_13](https://doi.org/10.1007/978-3-030-26954-8_13)
## Universally Composable Secure Computation with Corrupted Tokens.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#universally-composable-secure-computation-with-corrupted-tokens) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#universally-composable-secure-computation-with-corrupted-tokens)**
### 作者
* Nishanth Chandran, Microsoft Research India, Bengaluru, India
* Wutichai Chongchitmate, Department of Mathematics and Computer Science, Faculty of Science, Chulalongkorn University, Bangkok, Thailand
* Rafail Ostrovsky, Department of Computer Science and Department of Mathematics, University of California, Los Angeles, CA, USA
* Ivan Visconti, DIEM, University of Salerno, Fisciano, Italy
### 摘要
> 我们介绍了一种被损坏的令牌模型。该模型推广了Katz（EUROCRYPT '07）提出的防篡改令牌模型，放宽了对令牌正直行为的信任假设。我们的模型是受到将硬件生产外包给可能被损坏的制造商的现实实践的启发。我们通过允许对手在令牌创建时损坏诚实用户的令牌来捕捉令牌制造商的恶意行为。
> 
> 我们证明，在最小复杂性假设下，即存在单向函数的情况下，假设对手最多损坏 n-1 个令牌（对于任意n>0），我们可以在被损坏的令牌模型中实现（变种的）Katz的防篡改令牌功能，并且能够实现UC安全。我们将这个结果应用到Katz模型中的现有多方协议中，以仅假设存在单向函数的条件下，在被损坏的令牌模型中实现UC安全的多方计算协议。最后，我们展示了如何利用仅需短输入的小尺寸令牌获得上述结果。这个结果的技术也可用于改进Nayak等人（NDSS '17）最近提出的UC安全硬件混淆的假设。他们的构造需要存在抗碰撞哈希函数，而我们可以仅通过存在单向函数来获得相同的结果。此外，使用我们的主要结果，我们还可以改进对令牌的信任假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_14](https://doi.org/10.1007/978-3-030-26954-8_14)
## Reusable Non-Interactive Secure Computation.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#reusable-non-interactive-secure-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#reusable-non-interactive-secure-computation)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, USA
* Yevgeniy Dodis, New York University, New York, USA
* Yuval Ishai, Technion, Haifa, Israel
* Daniel Kraschewski, TNG Technology Consulting GmbH, Unterföhring, Germany
* Tianren Liu, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> 我们考虑非互动的两方安全计算（NISC）问题，其中Rachel希望发布她的输入x的加密，使任何其他持有输入y的一方都可以发送给她一个单一的消息，这个消息只传达给她值f（x，y），而不会更多。我们要求对恶意行为进行安全性保障。虽然使用混淆电路和一般的非互动零知识证明可以很容易地构建这样的协议，但这种方法本质上对基础密码原语进行了非黑盒使用，在实践中是不可行的。
> 
> Ishai等人（Eurocrypt 2011）展示了如何构建只使用并行调用理想的遗忘传输（OT）oracle的NISC协议，并且仅对任何伪随机生成器进行黑盒使用。结合Peikert等人（Crypto 2008）高效的两消息OT协议，这导致了对NISC的一种实际方法，而这种方法已经在后续的工作中被实现。然而，所有已知的基于OT的NISC协议的一个主要限制是它们容易受到选择性失败攻击，这使得恶意发送者可以在接收者的第一个消息被重用时完全破坏协议的安全性。
> 
> 受OT的失败的启发，我们考虑了在标准算术遗忘传输的并行调用上进行可重复使用NISC的问题，即遗忘线性函数评估(OLE)。我们获得了以下结果：
> 
> 我们在OLE-hybrid模型中为算术分支程序和一般零知识功能构建了一个信息理论上安全的可重复使用的NISC协议。我们的零知识协议在正在证明的算术电路中，每个门只做了绝对常数次OLE调用。使用任意单向函数，我们还在OLE-hybrid模型中获得了对一般布尔电路的可重复使用NISC。
> 
> 我们通过一个负结果来补充此结果，表明在OT-hybrid模型中不可能实现可重用的NISC。这为使用OLE替代OT提供了正式的证明。
> 
> 我们在CRS模型中构建了一个可基于Paillier加密的安全性的、只需要恒定数量的模幂次的通用可组合的两消息可重复使用的OLE协议。这提供了Peikert等人（Crypto 2008）的两消息OT协议的第一个算术类比。
> 
> 通过将我们的OLE-hybrid模型中的NISC协议和两消息OLE协议相结合，我们得到了具有新的吸引人的渐近和具体效率特征的协议。特别是，在经过独立于陈述的预处理后，我们得到了第一个（指定验证者）NP的NIZK协议,在这个协议中证明和验证完全是“非密码学的”，并且只涉及恒定的计算开销。此外，我们还得到了第一个关于NP的统计指定验证器NIZK参数，根据与因子分解相关的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_15](https://doi.org/10.1007/978-3-030-26954-8_15)
## Efficient Pseudorandom Correlation Generators: Silent OT Extension and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#efficient-pseudorandom-correlation-generators-silent-ot-extension-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#efficient-pseudorandom-correlation-generators-silent-ot-extension-and-more)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 安全多方计算（MPC）通常依赖于相关随机性以提高效率和简化过程。对于没有诚实多数的MPC来说，这特别有用，其中与输入无关的相关随机性使得一旦已知输入，可以进行轻量级的“非加密”在线阶段。然而，由于随机性的数量通常随着正在计算的函数的电路规模而增加，安全生成相关随机性形成了一个效率瓶颈，涉及大量的通信和存储。
> 
> 解决上述限制的一种自然工具是伪随机相关生成器（PCG）。通过对相关短种子进行本地扩展而无需交互，PCG可以让两个或多个参与方安全地生成长源的有用相关随机性。PCG使得具有沉默预处理的MPC成为可能，其中用于安全采样种子的少量交互后，可以在本地生成相关伪随机性。
> 
> 最近，Boyle等人（CCS 2018）基于大型域上的学习偶数校验与噪声（LPN）变种假设，获得了一种适用于矢量功能OLE相关性的具体高效PCG。在本研究中，我们展开了对PCG的系统研究，并针对几种常用MPC相关性提出了具体高效的构造方法。我们得到以下主要贡献：
> 
> PCG基础。我们给出了PCG的一般安全定义。我们的定义适用于任何满足较强安全要求的MPC协议。我们证明了较强安全要求的必要性，并通过排除一种较强且较自然的定义来证明我们PCG定义的合理性。
> 
> 沉默OT扩展。我们提出了第一个针对遗忘传输相关性的具体高效PCG。其安全性基于二元LPN假设的一个变体和任何具有相关性鲁棒性的哈希函数。我们预计在通信成为瓶颈时，它将提供一种比IKNP OT扩展协议（Crypto 2003）更快的选择。我们提出了几种应用，包括基于二元LPN的非交互零知识协议和具体高效的相关密钥遗忘伪随机函数。
> 
> 简单的2方相关性的PCG。我们获得了用于几种其他常用2方相关性的PCG。这包括（认证的）一次性真值表和Beaver三元组。尽管后者的PCG比我们的OT的PCG更慢，但它们仍然是实际可行的。这些PCG基于一系列假设和技术，包括专门的同态秘密共享方案和针对其结构量身定制的伪随机生成器。
> 
> 多方相关性。我们获得了用于多方相关性的PCG，可以使MPC协议的（输入相关的）在线通信与参与方数量呈线性缩放而不是二次缩放。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_16](https://doi.org/10.1007/978-3-030-26954-8_16)
## Adaptively Secure and Succinct Functional Encryption: Improving Security and Efficiency, Simultaneously.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#adaptively-secure-and-succinct-functional-encryption-improving-security-and-efficiency-simultaneously) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#adaptively-secure-and-succinct-functional-encryption-improving-security-and-efficiency-simultaneously)**
### 作者
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> 函数加密（FE）是一种先进的加密技术，它使我们能够发出硬连功能的功能解密密钥。当我们通过一个硬连功能f的功能解密密钥来解密一条消息m的密文时，我们只能获得f（m），而无法获取其他内容。当目标消息在开始时被选择或在发送功能查询后被选择时，我们称FE是选择性或适应性安全的。在弱选择性设置中，功能查询也在开始时被选择。当它对于只有一个/多项式数量的功能解密密钥的对手是安全的时，我们称FE是单密钥/合谋抵抗的。当一个加密算法的运行时间在函数描述大小为亚线性/多对数级时，我们称FE是次线性简明/简明的。
> 
> 在这项研究中，我们提出了一种从弱选择性安全，单密钥和次线性简明（我们称之为“构建块”）电路PKFE到适应性安全，合谋抵抗和简明（我们称之为“完全装备”）电路PKFE的通用转换。我们的转换既不依赖于具体的假设，如学习误差，也不依赖于不可区分混淆（IO）。这是第一个不依赖于IO的完全装备PKFE的通用构造。
> 
> 作为我们结果的副业，我们从电路的构建块PKFE中获得了以下原语：（1）简明的遗忘传输（2）用于图灵机的简洁加密方案（3）选择性安全，合谋抵抗和简明的图灵机PKFE（4）开销较低的适应性安全叛徒跟踪（5）密钥依赖消息安全和泄漏鲁棒性公钥加密。我们还获得了从基于模拟的适应性安全的混淆方案到在线复杂性不依赖于输出长度的适应性不可区分的混淆方案的通用转换。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_17](https://doi.org/10.1007/978-3-030-26954-8_17)
## Non-interactive Non-malleability from Quantum Supremacy.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#non-interactive-non-malleability-from-quantum-supremacy) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#non-interactive-non-malleability-from-quantum-supremacy)**
### 作者
* Yael Tauman Kalai, Microsoft Research and MIT, Cambridge, USA
* Dakshita Khurana, Microsoft Research, Cambridge, USA
* Dakshita Khurana, UIUC, Urbana-Champaign, USA
### 摘要
> 我们在普通模型下，在广泛研究的假设下，构建了无需设置的非交互式非可塑承诺。首先，我们根据以下假设，针对 \(\epsilon \log\log n\) 个标签构建了非交互式的非可塑承诺：
> 
> 1. 分解或离散对数的亚指数难度。
> 
> 2. 理解误差（LWE）的量子亚指数难度。
> 
> 其次，作为我们的关键技术贡献，我们引入了一种新的标记放大技术。 我们展示了如何将任何关于\(\epsilon \log \log n\) 标签（对于任何常数 \(\epsilon > 0\)）的非交互式非可塑承诺转换为关于 \(2^n\) 标签的非交互式非可塑承诺。这部分仅假定存在亚指数安全的非交互式见证不可区分（NIWI）证明，而这可以基于决策线性假设的亚指数安全性。
> 
> 有趣的是，在标记放大技术中，我们关键地依赖于 Gentry 和 Wichs（STOC 2011）的泄漏引理。对于 \(\epsilon \log \log n\) 标签的不可塑承诺构造，我们依赖于量子霸权。这种在经典密码学中使用量子霸权是新颖的，我们认为它将有未来的应用。我们提供了一种基于（量子）多项式硬度假设的双消息见证不可区

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_18](https://doi.org/10.1007/978-3-030-26954-8_18)
## Cryptographic Sensing.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#cryptographic-sensing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#cryptographic-sensing)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Eyal Kushilevitz, Technion, Haifa, Israel
* Rafail Ostrovsky, University of California, Los Angeles, USA
* Amit Sahai, University of California, Los Angeles, USA
### 摘要
> 作为一位研究员，你将收到研究论文的摘要。请将其翻译成简体中文。
> 
> 有可能以某种方式测量物理对象，使得测量信号无法被外部观察者理解吗？或者，可以通过使用一组虚构的训练样本来学习自然概念，而这些标记示例在没有导致其选择的思路的情况下毫无用处吗？我们开始对这类“加密感知”问题进行研究，提出定义、正面和负面结果，并为进一步研究指明方向。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_19](https://doi.org/10.1007/978-3-030-26954-8_19)
## Public-Key Cryptography in the Fine-Grained Setting.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#public-key-cryptography-in-the-fine-grained-setting) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#public-key-cryptography-in-the-fine-grained-setting)**
### 作者
* Rio LaVigne, MIT CSAIL and EECS, Cambridge, USA
* Andrea Lincoln, MIT CSAIL and EECS, Cambridge, USA
* Virginia Vassilevska Williams, MIT CSAIL and EECS, Cambridge, USA
### 摘要
> 密码学在很大程度上基于未经证实的假设，尽管这些假设在可信度上是可以接受的，但仍可能失败。特别是如果 \(P = NP\) ，或者我们生活在Pessiland（一种虚构的理论环境），那么所有当前的密码学假设都将被破解。一个重要的问题是，在Pessiland中是否存在任何有趣的密码学。
> 
> 解决这个问题的一种自然方法是基于精细复杂性的假设构建密码学系统。Ball, Rosen, Sabin 和 Vasudevan [BRSV'17] 尝试了这种方法，从流行的困难性假设出发，如正交向量（OV）猜想。他们获得了平均情况下困难的问题，假设OV和其他问题在最坏情况下是困难的。他们得到了工作证明，并希望利用其平均情况下困难的问题构建精细复杂性的单向函数。不幸的是，他们证明使用他们的方法构建这样一个函数将违反一个流行的困难性假设。这激励了对其他精细复杂性平均情况下困难问题的寻找。
> 
> 本文的主要目标是确定精细复杂性平均情况假设的充分属性，以确保密码学原语如精细复杂性公钥密码学（PKC）。我们的主要贡献是一种新颖的构建密码交换的方法，同时定义了一小部分相对较弱的结构属性。如果计算问题满足这些属性，我们的密钥交换将具有可证明的精细复杂性安全性保证，该安全性基于该问题的困难性。然后，我们证明了精细复杂性中的关键问题 Zero-k-Clique 对应的自然和合理的平均情况假设满足我们的属性。即使在这些较弱的假设下，我们还开发了精细复杂性的单向函数和核心位。
> 
> 在以前的工作中，为了获得一个在 O(n) 时间内可计算且对抗 \((O(n^2))\) 攻击方安全的密钥交换，需要假设随机预言机或强单向函数的存在（参见[Merkle'78]和[BGI'08]）。与之前的假设相比，我们的假设似乎要弱得多。我们的密钥交换在诚实方和对手之间具有与先前工作类似的计算差距，而且是非交互式的，从而暗示了精细复杂性的公钥密码学。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_20](https://doi.org/10.1007/978-3-030-26954-8_20)
## Exploring Constructions of Compact NIZKs from Various Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#exploring-constructions-of-compact-nizks-from-various-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#exploring-constructions-of-compact-nizks-from-various-assumptions)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Shuichi Katsumata, The University of Tokyo, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 非交互的零知识（NIZK）协议允许证明者以非交互的方式说服验证者某个陈述的真实性，而不泄露任何其他信息。在本研究中，我们探讨了所有 NP 语言的更短的 NIZK 证明。我们主要关注基于可证伪配对/无配对群基假设的 NIZK 证明。到目前为止，基于可证伪配对假设的 NP 的通用参考字符串模型（CRS-NIZKs）所需的证明大小至少为 O（|C|κ），其中 C 是计算 NP 关系的电路，κ 是安全参数。即使对于较弱的指定验证者 NIZK（DV-NIZKs），这个结论也成立。值得注意的是，基于任何可证伪的配对假设构建具有添加开销 O（|C|）+ poly（κ）而不是乘法开销|C| poly（κ）的（CRS，DV）-NIZK 是一个开放问题。
> 
> 在这项工作中，我们提出了各种构建紧凑证明的 NIZK 的技术，并在上述情况方面取得了进展。我们的研究结果总结如下。
> 
> 我们基于配对群上的（非静态）可证伪 Diffie-Hellman（DH）类型假设构建了所有 NP 的 CRS-NIZK，其证明大小为|C| + poly（κ）。这是第一个在不依赖基于格或不可证伪的假设的情况下实现紧凑证明的 CRS-NIZK。此外，我们的 CRS-NIZK 的一个变种在删除自适应环境中满足了普适可组合性（UC）。尽管它仅限于 NC^1 中的 NP 关系，但证明大小为 |w| poly（κ），其中 w 是证人，特别地，它与基于格的 Cohen、Shelat 和 Wichs（CRYPTO’19）提出的最先进的 UC-NIZK 相匹配。
> 
> 我们基于不依赖配对的群上的计算 DH 假设构建了（多定理）DV-NIZKs，其证明大小为 |C| + poly（κ）。这是第一个基于标准 DH 类型假设实现紧凑证明的 DV-NIZK。此外，如果我们进一步假设 NP 关系可在 NC^1 中计算，并假设在配对自由群上存在（非静态）可证伪的 DH 类型假设的困难性，证明大小可以缩小为 |w| + poly（κ）。
> 
> 另一个相关但独立的问题是所有（CRS，DV）-NIZKs 要求证明者的运行时间至少为 |C| poly（κ）。考虑到存在具有高效验证者的 NIZKs，其运行时间严格小于 |C|，是否可以构建具有高效证明者的 NIZKs 是一个有趣的问题。为此，我们通过使用简洁功能评估方案（Quach、Wee 和 Wichs（FOCS’18））的通用构造法构建了对于所有 NP 的高效证明的 CRS-NIZK。这是任何模型中首个运行时间严格小于计算 NP 关系的电路 C 所花费的时间的 NIZK。
> 
> 最后，或许是独立的问题，我们形式化了同态模糊承诺的概念，这是我们获得第一个结果所使用的构建模块，并展示了如何基于配对假设构建它们。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_21](https://doi.org/10.1007/978-3-030-26954-8_21)
## New Constructions of Reusable Designated-Verifier NIZKs.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#new-constructions-of-reusable-designated-verifier-nizks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#new-constructions-of-reusable-designated-verifier-nizks)**
### 作者
* Alex Lombardi, MIT, Cambridge, MA, USA
* Willy Quach, Northeastern University, Boston, MA, USA
* Daniel Wichs, Northeastern University, Boston, MA, USA
* Ron D. Rothblum, Technion, Haifa, Israel
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 非交互零知识证明（NIZK）对于NP是一个重要的密码学原语，但目前我们只有在一些特定假设下的具体实例。值得注意的是，我们缺乏从学习与错误（LWE）假设，Diffie-Hellman（CDH/DDH）假设和带噪音学习奇偶校验（LPN）假设的构建。
> 
> 在本文中，我们研究了对指定验证者设置（DV-NIZK）的NIZK的放松，其中一个可信的设置生成一个通用参考字符串以及验证者的秘密密钥。我们希望有可重复使用的方案，允许验证者重复使用秘密密钥来验证许多不同的证明，并且即使恶意证明者了解各种证明是被接受还是被拒绝，正确性也应该得到保证。最近在CDH假设下构建了可重复使用的DV-NIZK，但尚不清楚它们是否也可以在LWE或LPN下构建。
> 
> 我们还考虑了将可重用的DV-NIZK扩展到恶意指定验证者设置（MDV-NIZK）。在此设置中，唯一的受信任设置是一个共同的随机字符串。然而，还有一个额外的不受信任的设置，验证者选择生成/验证证明所需的公共/秘密密钥。我们要求即使公钥是由验证者恶意选择，零知识也应该得到保证。最近在“一次性CDH”假设下构建了可重用的MDV-NIZK，但在CDH/LWE/LPN下的构建仍然是开放的。
> 
> 在这项工作中，我们使用可以在CDH、LWE或LPN下具体实例化的通用原语，给出了可重复使用的DV-NIZK和MDV-NIZK的新构建。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_22](https://doi.org/10.1007/978-3-030-26954-8_22)
## Scalable Zero Knowledge with No Trusted Setup.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#scalable-zero-knowledge-with-no-trusted-setup) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#scalable-zero-knowledge-with-no-trusted-setup)**
### 作者
* Eli Ben-Sasson, Technion, Haifa, Israel
* Yinon Horesh, Technion, Haifa, Israel
* Michael Riabzev, Technion, Haifa, Israel
* Eli Ben-Sasson, StarkWare Industries Ltd., Netanya, Israel
* Michael Riabzev, StarkWare Industries Ltd., Netanya, Israel
* Iddo Bentov, Cornell Tech, New York, NY, USA
### 摘要
> 一种构建零知识证明（ZK）的方法依赖于“PCP技术”，这些技术可以追溯到20世纪90年代初的重要作品[Babai et al.，Arora et al. 1991-2]。这些技术仅需要最少的加密假设，即具有冲突防止哈希函数家族的存在[Kilian，STOC 1992]，并且实现了两个显着的属性：(i) 验证者生成的所有消息都是公共随机硬币，以及(ii)总验证时间仅在验证正在被验证的计算所需的时间的对数多项式级别上[Babai et al.，STOC 1991]。
> 
> 这些早期的构造从未在代码中实现，主要是因为证明时间太长。为了解决这个问题，最近提出了互动式Oracle证明（IOP）模型，该模型泛化了PCP模型。ZK-IOP的证明时间被降低到准线性，即使对于需要非确定性指数时间来决策的问题[Ben-Sasson et al.，TCC 2016，ICALP 2017]。
> 
> 尽管取得了这些最近的进展，仍然不清楚ZK-IOP系统是否能导致具体有效的简洁论证系统。我们的主张是确实如此。我们提出了一个新的知识IOP的构造（我们称之为zk-STIK），在渐近意义下改善了最新技术的状况：对于长度为T的log空间计算，它是首个\ (O(T \log T)\)算术证明复杂度和\ (O(\log T))验算算术复杂度。先前的IOP在证明者和验证者两者都有额外的\ (\mathsf{poly} \log T)因素。此外，我们报告了这个系统的C++实现（我们称之为libSTARK）。与普遍的ZK实现相比，它具有足够大的顺序计算的最快证明和（总）验证时间。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_23](https://doi.org/10.1007/978-3-030-26954-8_23)
## Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#libra-succinct-zero-knowledge-proofs-with-optimal-prover-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#libra-succinct-zero-knowledge-proofs-with-optimal-prover-computation)**
### 作者
* Tiacheng Xie, University of California, Berkeley, USA
* Jiaheng Zhang, University of California, Berkeley, USA
* Yupeng Zhang, University of California, Berkeley, USA
* Dawn Song, University of California, Berkeley, USA
* Yupeng Zhang, Texas A&M University, College Station, USA
* Charalampos Papamanthou, University of Maryland, College Park, USA
### 摘要
> 我们提出了 Libra，这是第一个既具有最优证明时间，又具有简洁的证明大小/验证时间的零知识证明系统。特别地，如果 C 是被证明电路的大小，则：（i）证明者的时间是 O(C)，不论电路类型是什么；（ii）对于 d 深度对数空间均匀电路（例如 RAM 程序），证明大小和验证时间都是 \(O(d\log C)\)。此外，Libra 还具有一次性信任设置，仅取决于电路输入的大小，而不取决于电路逻辑。Libra 的基础是 Goldwasser，Kalai 和 Rothblum 的交互式证明协议的证明器的新线性时间算法（也称为 GKR 协议），以及一种将 GKR 协议转换为零知识的高效方法，使用小遮蔽多项式。Libra 不仅具有优异的渐近性能，而且在实践中也很高效。例如，我们的实现表明，对于在 256 个叶子上构建基于 SHA2 的 Merkle 树根的证明，仅需要 200 秒，超过所有现有的零知识证明系统。Libra 的证明大小和验证时间也具有竞

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_24](https://doi.org/10.1007/978-3-030-26954-8_24)
## Highly Efficient Key Exchange Protocols with Optimal Tightness.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#highly-efficient-key-exchange-protocols-with-optimal-tightness) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#highly-efficient-key-exchange-protocols-with-optimal-tightness)**
### 作者
* Katriel Cohn-Gordon, Oxford, UK
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Kristian Gjøsteen, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Håkon Jacobsen, McMaster University, Hamilton, Canada
* Tibor Jager, Paderborn University, Paderborn, Germany
### 摘要
> 在本文中，我们在Signal和Noise协议的风格中，对现代隐式认证Diffie-Hellman协议进行了近乎紧凑的降低。这些协议非常简单和高效。与以前的方法不同的是，近乎紧凑的证明和高效的协议的组合使得首次可以选择在理论上可靠的参数进行实际应用。
> 
> 我们的降低只有线性损失，意味着当使用理论上可靠的参数进行实例化时，我们的协议比现有技术更高效。我们还证明我们的安全性证明是最优的：对于大和自然的降低类别，我们的协议不可避免地会有线性损失。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_25](https://doi.org/10.1007/978-3-030-26954-8_25)
## Strong Asymmetric PAKE Based on Trapdoor CKEM.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#strong-asymmetric-pake-based-on-trapdoor-ckem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#strong-asymmetric-pake-based-on-trapdoor-ckem)**
### 作者
* Tatiana Bradley, University of California, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, USA
* Jiayu Xu, University of California, Irvine, USA
### 摘要
> 密码验证密钥交换（PAKE）协议允许共享密码的两个参与方以免受离线攻击的方式建立共享密钥。非对称PAKE（aPAKE）[20]将这一概念应用于常见的客户端-服务器设置，其中服务器存储密码的单向哈希而不是密码本身，服务器被入侵仅通过（不可避免的）离线字典攻击才能恢复密码。然而，大多数aPAKE协议允许攻击者预先计算出已哈希密码的字典，从而在服务器被入侵后立即获取密码。最近，Jarecki，Krawczyk和Xu构建了一个形式化的通用组合强aPAKE（saPAKE）[23]，其中要求密码哈希需要加盐，以便字典攻击只能在服务器泄漏盐和加盐哈希后开始。UC saPAKE协议在[23]中展示，称为OPAQUE，使用3个协议流，每个参与方3-4个求幂，并依赖于ROM中的一次Diffie-Hellman假设。
> 
> 我们提出了一种基于加密+SPHF范例的UC saPAKE构造的替代方法，用于UC PAKE设计[19, 26]。与OPAQUE相比，我们的协议只使用2个流程，具有可比较的成本，避免在一个群上进行哈希运算，并依赖于不同的假设，即决策性Diffie-Hellman（DDH），强Diffie-Hellman（SDH）和Boneh-Boyen函数\(f_s (x)=g^{1/(s+x)}\) [9]是一种加盐紧密单向函数（STOWF）的假设。我们正式化了STOWF的UC模型，并在通用群模型和ROM中分析Boneh-Boyen函数作为UC STOWF。
> 
> 我们的saPAKE协议采用了一种新形式的条件密钥封装机制（CKEM），即SPHF的一种推广，我们称之为隐式语句CKEM。这种SPHF的加强允许UC（sa）PAKE设计，仅客户端承诺其密码，并且只有服务器执行SPHF，与标准的UC PAKE设计范式不同，后者使用加密+SPHF子例程由双方对称使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_26](https://doi.org/10.1007/978-3-030-26954-8_26)
## Broadcast and Trace with N^ε Ciphertext Size from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#broadcast-and-trace-with-n-ciphertext-size-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#broadcast-and-trace-with-n-ciphertext-size-from-standard-assumptions)**
### 作者
* Rishab Goyal, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Brent Waters, NTT Research, Tokyo, Japan
### 摘要
> 我们构建了一个广播和追踪方案（也称为追踪和撤销或广播、追踪和撤销），其中包括N个用户，密文的大小可以达到\(O(N^\varepsilon )\)，其中\(\varepsilon >0\) 是任意小的常数。这改进了Boneh和Waters（CCS‘06）基于标准假设的广播和追踪方案的最佳构建方式，其密文大小为\(O(N^{1/2})\)。虽然该构建方案依赖于双线性映射，但我们的方案结合了学习与错误（LWE）假设和双线性映射。
> 
> 回顾一下，无论是广播加密还是叛徒追踪方案，都有一组N个用户，每个用户都有一个不同的密钥\({\mathsf {sk}}_i\)。在广播加密中，可以创建针对用户子集\(S \subseteq [N]\)的密文，只有这些用户能够正确解密它。在叛徒追踪方案中，如果一组用户聚集在一起并创建了一个能够解密密文的解码器盒D，那么就可以追踪到至少一个负责创建D的用户。广播和追踪方案交织了这两个属性，以一种超出它们的并集的方式。特别是，它确保如果一个解码器D能够解密针对用户集合S的密文，那么至少可以追踪到一个负责创建D的用户，即使S外的其他用户也参与其中。最近，我们在双线性映射下基本实现了最优广播加密（Boneh，Gentry，Waters CRYPTO‘05）和在LWE下的叛徒追踪（Goyal，Koppula，Waters STOC‘18），其中密文大小最多为N的多项式对数。我们论文的主要贡献是仔细组合LWE和基于双线性映射的组件，并使它们相互交互，以实现广播和追踪。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_27](https://doi.org/10.1007/978-3-030-26954-8_27)
