# Eurocrypt[2019-2]
## Homomorphic Secret Sharing from Lattices Without FHE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#homomorphic-secret-sharing-from-lattices-without-fhe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#homomorphic-secret-sharing-from-lattices-without-fhe)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 同态秘密共享（HSS）是对秘密共享环境进行的某种或完全同态加密（S/FHE）的类比，其应用包括简洁的安全计算，远程数据库的私密操作等。虽然HSS可以视为S/FHE的一种放宽，但是到目前为止，基于格的假设的唯一构建是建立在特定形式的阈值或多键S/FHE之上。在这项工作中，我们提出了新的技术，直接由一系列基于格的加密方案产生高效的2方HSS，用于多项式大小的分支程序，无需S/FHE。更具体地说，我们避免了在S/FHE密文乘法中使用的昂贵的密钥切换和模数减小步骤，并用新的分布式解密程序替换它们，用于执行输入与部分计算值的“限制性”乘法。这样做需要新的方法来处理分布式设置中“噪声”在密文中的增大，并利用基于格的加密方案的几个属性和在共享转换中的新策略。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_1](https://doi.org/10.1007/978-3-030-17656-3_1)
## Improved Bootstrapping for Approximate Homomorphic Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#improved-bootstrapping-for-approximate-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#improved-bootstrapping-for-approximate-homomorphic-encryption)**
### 作者
* Hao Chen, Microsoft Research, Redmond, USA
* Yongsoo Song, Microsoft Research, Redmond, USA
* Ilaria Chillotti, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 自从Cheon等人在Asiacrypt’17中介绍了一种适用于近似算术的同态加密方案以来，它已被认为适用于同态加密的重要实际用例，包括在加密数据上训练机器学习模型。Cheon等人在Eurocrypt’18中的后续工作描述了该方案的近似引导程序。在这项工作中，我们改进了先前的引导结果。我们将每个明文插槽的摊销引导时间提高了两个数量级，从大约1秒到大约0.01秒。为了实现这一结果，我们采用了一种智能级折叠技术来评估密文上的类似DFT的线性变换。此外，我们将正弦函数的泰勒逼近替换为更准确和数值稳定的切比雪夫逼近，并设计了Paterson-Stockmeyer算法的修改版本，以便快速评估加密数据上的切比雪夫多项式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_2](https://doi.org/10.1007/978-3-030-17656-3_2)
## Minicrypt Primitives with Algebraic Structure and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#minicrypt-primitives-with-algebraic-structure-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#minicrypt-primitives-with-algebraic-structure-and-applications)**
### 作者
* Navid Alamati, University of Michigan, Ann Arbor, USA
* Navid Alamati, Fujitsu Laboratories of America, Sunnyvale, USA
* Hart Montgomery, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, Fujitsu Laboratories of America, Sunnyvale, USA
* Arnab Roy, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, IIT Kharagpur, Kharagpur, India
### 摘要
> 代数结构是我们所了解的 Cryptomania 的核心。一个有趣的问题是：我们是否可以通过向简单的Minicrypt基元赋予一些额外的代数结构来构建（Cryptomania）基元，而不是基于具体假设构建它们？在这项工作中，我们通过为以下Minicrypt基元添加代数结构来肯定地回答了这个问题：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_3](https://doi.org/10.1007/978-3-030-17656-3_3)
## Attacks only Get Better: How to Break FF3 on Large Domains.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#attacks-only-get-better-how-to-break-ff3-on-large-domains) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#attacks-only-get-better-how-to-break-ff3-on-large-domains)**
### 作者
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
* David Miller, Department of Computer Science, Florida State University, Tallahassee, USA
* Ni Trieu, Department of Computer Science, Oregon State University, Corvallis, USA
### 摘要
> 我们改进了Durak和Vaudenay（CRYPTO'17）对NIST Format-Preserving Encryption标准FF3的攻击方法，将运行时间从\(O(N^5)\)降低到\(O(N^{17/6})\)，适用于\(\mathbb {Z}_N \times \mathbb {Z}_N\)域。具体地说，DV的攻击需要约\(2^{50}\)次操作才能恢复加密的6位数字PIN码，而我们只需要约\(2^{30}\)次操作。为了实现这个目标，我们提供了一个教学示例，演示如何使用区分攻击来加速滑动攻击。此外，我们将DV对\(\mathbb {Z}_N \times \mathbb {Z}_N\)域中4轮Feistel的已知明文攻击的运行时间从\(O(N^3)\)降低到\(O(N^{5/3})\)。我们还将我们的攻击推广到一般的\(\mathbb {Z}_M \times \mathbb {Z}_N\)域，只需约\(2^{50}\)次操作即可恢复加密的社保号码。最后，我们提供了一些概念验证实现，以经验验证我们的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_4](https://doi.org/10.1007/978-3-030-17656-3_4)
## Session Resumption Protocols and Efficient Forward Security for TLS 1.3 0-RTT.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#session-resumption-protocols-and-efficient-forward-security-for-tls-1-3-0-rtt) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#session-resumption-protocols-and-efficient-forward-security-for-tls-1-3-0-rtt)**
### 作者
* Nimrod Aviram, Tel Aviv University, Tel Aviv, Israel
* Kai Gellert, Paderborn University, Paderborn, Germany
* Tibor Jager, Paderborn University, Paderborn, Germany
### 摘要
> TLS 1.3 的 0-RTT 模式允许客户端重新连接到服务器，在没有先前交互式握手的情况下发送加密的应用层数据。这基本上要求服务器在收到客户端的第一条消息后重建上一个会话的加密密钥。实现这一点的标准技术有会话缓存或会话票据。前者提供前向安全性和抵抗重放攻击的能力，但需要大量服务器存储空间。后者需要极少的存储空间，但不提供前向安全性，并已被认为容易受到重放攻击的威胁。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_5](https://doi.org/10.1007/978-3-030-17656-3_5)
## An Analysis of NIST SP 800-90A.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#an-analysis-of-nist-sp-800-90a) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#an-analysis-of-nist-sp-800-90a)**
### 作者
* Joanne Woodage, Royal Holloway, University of London, Egham, UK
* Dan Shumow, Microsoft Research, Redmond, USA
### 摘要
> 我们对NIST SP 800-90A中的三种确定性随机比特生成器（DRBG）机制的安全性进行了调查。该标准由于之前版本中的有争议的\(\mathsf{{DualEC\text {-}DRBG}}\)而受到了相当大的负面关注，但这已被撤销。也许因为对DualEC的关注，标准中的其他算法至今未接受过令人惊讶的细致分析，尽管它们已被广泛部署。本文解决了一些分析中存在的问题，特别关注\(\mathsf{{HASH\text {-}DRBG}}\)和\(\mathsf{{HMAC\text {-}DRBG}}\)。我们揭示了积极和不太积极的研究结果。在积极方面，我们在随机神谕模型（ROM）中证明了\(\mathsf{{HASH\text {-}DRBG}}\)和\(\mathsf{{HMAC\text {-}DRBG}}\)的健壮性[13]（带有一个警告）。关于警告，我们显示如果省略了可选输入，则\(\mathsf{{HMAC\text {-}DRBG}}\)甚至无法达到（更弱的）前向安全性，与标准中的声明相反。然后，我们以更非正式和实践导向的方式探索了标准中的灵活性。具体来说，我们认为这些DRBG具有部分状态泄漏可能导致安全性以意外方式被破坏的属性。我们强调了标准中允许的实现选择，这些选择加剧了此类攻击的可能性和影响。虽然我们的攻击是理论上的，但对\(\mathsf{{CTR\text {-}DRBG}}\)的两个开源实现的分析表明，这些潜在问题的实现选择在现实世界中是存在的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_6](https://doi.org/10.1007/978-3-030-17656-3_6)
## Computationally Volume-Hiding Structured Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#computationally-volume-hiding-structured-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#computationally-volume-hiding-structured-encryption)**
### 作者
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Brown University, Providence, USA
### 摘要
> 我们开始研究带有计算安全泄露的结构加密方案。具体而言，我们关注设计隐藏响应长度对于计算受限对手的加密多映射的方法。我们描述了第一批不依赖天真填充的隐藏容量的STE方案；即将所有元组填充到相同长度。我们的第一个构建具有高效的查询复杂度和存储能力，但可能存在信息丢失。然而，我们证明对于一大类多映射（即遵循Zipf分布的长度）可以用极大概率来约束信息丢失。我们的第二个构建不会丢失信息，并且在Zipf分布的多映射中，其存储开销渐进地优于天真填充。我们还展示了在多映射高度集中的情况下如何进一步提高存储效率，即具有大量元组和大交集的情况。我们通过利用计算假设实现了这些结果；不仅仅是用于加密，更有趣的是用于隐藏容量本身。我们的第一个构建使用伪随机函数来实现这一点，而我们的第二个构建则依赖于被插入的最密子图问题（一种已经广泛研究的最密子图问题的插入变种）的假设困难性。这个假设之前被用于设计公钥加密方案（Applebaum等人，STOC'10）和研究金融产品的计算复杂性（Arora等人，ICS'10）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_7](https://doi.org/10.1007/978-3-030-17656-3_7)
## Locality-Preserving Oblivious RAM.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#locality-preserving-oblivious-ram) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#locality-preserving-oblivious-ram)**
### 作者
* Gilad Asharov, Cornell/Cornell Tech, New York, USA
* Rafael Pass, Cornell/Cornell Tech, New York, USA
* Elaine Shi, Cornell/Cornell Tech, New York, USA
* T.-H. Hubert Chan, The University of Hong Kong, Pok Fu Lam, Hong Kong
* Kartik Nayak, University of Maryland, College Park, USA
* Ling Ren, MIT, Cambridge, USA
### 摘要
> 由Goldreich和Ostrovsky [JACM'96]引入的无意识随机存取存储器（Oblivious RAMs）将任何RAM程序编译成“内存无感知”的程序，即内存的访问模式与输入独立。然而，所有先前的ORAM方案都完全破坏了数据访问的局部性（例如，通过将数据洗牌到内存中的伪随机位置）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_8](https://doi.org/10.1007/978-3-030-17656-3_8)
## Private Anonymous Data Access.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#private-anonymous-data-access) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#private-anonymous-data-access)**
### 作者
* Ariel Hamlin, Department of Computer Science, Northeastern University, Boston, MA, USA
* Mor Weiss, Department of Computer Science, Northeastern University, Boston, MA, USA
* Daniel Wichs, Department of Computer Science, Northeastern University, Boston, MA, USA
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
* Mor Weiss, Department of Computer Science, IDC Herzliya, Herzliya, Israel
### 摘要
> 本研究考虑了这样一种情况，即服务器拥有一个大型数据库，希望让大量客户端可以访问该数据库。在初始设置阶段之后，客户应该能够读取数据库中的任意位置，同时保持隐私性（服务器不会知道正在读取哪些位置）和匿名性（服务器不会知道每个读取操作由哪个客户端执行）。即使服务器与客户端的子集勾结，这一点也应该保持不变。此外，服务器和客户端在每个读取操作期间的运行时间应该很低，理想情况下，仅为数据库大小和客户数量的对数次幂。我们称之为私有匿名数据访问（PANDA）。PANDA同时结合了私有信息检索（PIR）和遗忘式随机访问存储器（ORAM）的特点。PIR没有初始设置，并且允许任何人私下地和匿名地访问公共数据库，但服务器的运行时间与数据大小成线性关系。另一方面，ORAM实现了多对数级别的服务器运行时间，但在初始设置之后，只有一个带有秘密密钥的客户端才能访问数据库。PANDA的目标是将两者的优点结合起来：允许多个客户端像PIR一样私下和匿名地访问数据库，同时像ORAM一样拥有高效的服务器。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_9](https://doi.org/10.1007/978-3-030-17656-3_9)
## Reversible Proofs of Sequential Work.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#reversible-proofs-of-sequential-work) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#reversible-proofs-of-sequential-work)**
### 作者
* Hamza Abusalah, SBA Research, Vienna, Austria
* Chethan Kamath, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Karen Klein, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Krzysztof Pietrzak, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Michael Walter, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
### 摘要
> 顺序工作的证明（PoSW）是一种证明系统，其中，一个证明者在接收到一个语句 \(\chi\) 和一个时间参数 T 后计算出一个证明 \(\phi (\chi ,T)\) ，该证明可以被高效地公开验证。这个证明可以通过 T 个连续的步骤来计算，但恶意方即使具有大规模的并行性也无法缩短此过程。因此，PoSW 作为一个证明，表明自从接收到 \(\chi\) 已经经过了 T 个时间单位。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_10](https://doi.org/10.1007/978-3-030-17656-3_10)
## Incremental Proofs of Sequential Work.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#incremental-proofs-of-sequential-work) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#incremental-proofs-of-sequential-work)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 一个顺序工作的证明允许一个证明者说服一个验证者已经计算了特定数量的顺序步骤。在这项工作中，我们引入了递增式顺序工作证明的概念，其中一个证明者可以逐步进行前一个证明者完成的计算，而不影响各个证明者的资源或证明的大小。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_11](https://doi.org/10.1007/978-3-030-17656-3_11)
## Tight Proofs of Space and Replication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#tight-proofs-of-space-and-replication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#tight-proofs-of-space-and-replication)**
### 作者
* Ben Fisch, Stanford University, Stanford, USA
### 摘要
> 我们基于堆叠深度鲁棒图和常度扩展图构建了一个具体实用的空间证明（PoS），其安全性可以任意紧密。空间证明（PoS）是一种交互式证明系统，其中证明者证明其持久地使用空间来存储信息。如果诚实的证明者正好使用N空间，并且对于任何\(\epsilon > 0\)，可以调整构造使得没有对手可以使用少于\((1-\epsilon ) N\)空间通过验证，那么PoS可以任意紧密。值得注意的是，我们构造中的图的度与\(\epsilon\)无关，并且图的层数只有\(O(\log (1/\epsilon ))\)。证明大小为\(O(d/\epsilon )\)。度d取决于深度鲁棒图，这些图仅需要在80％的节点上维护\(\varOmega (N)\)深度子图。我们的紧密PoS也能抵御并行攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_12](https://doi.org/10.1007/978-3-030-17656-3_12)
## Founding Secure Computation on Blockchains.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#founding-secure-computation-on-blockchains) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#founding-secure-computation-on-blockchains)**
### 作者
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们研究了在区块链混合模型中安全计算的基础，其中区块链被建模为全局功能，并作为加密协议所有参与者的Oracle可用。我们展示了区块链的破坏性和建设性应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_13](https://doi.org/10.1007/978-3-030-17656-3_13)
## Uncovering Algebraic Structures in the MPC Landscape.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#uncovering-algebraic-structures-in-the-mpc-landscape) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#uncovering-algebraic-structures-in-the-mpc-landscape)**
### 作者
* Navneet Agarwal, Indian Institute of Technology Bombay, Mumbai, India
* Sanat Anand, Indian Institute of Technology Bombay, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
### 摘要
> 在安全多方计算（MPC）理论中，一个基本问题是对于具有超过两个方面的函数如何产生具有信息理论安全性的MPC协议进行表征。自从Chor和Ishai（1996）的工作以来，这个问题几乎没有取得任何进展，该工作证明了解决该问题的困难性。在本文中，我们在聚合功能的重要情况下取得了解决这个问题的重要进展，在这种情况下，m个方面\(P_1,\dots ,P_m\)持有输入\(x_1,\dots ,x_m\)，并且一个聚合方\(P_0\)必须了解\(f(x_1,\dots ,x_m)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_14](https://doi.org/10.1007/978-3-030-17656-3_14)
## Quantum Circuits for the CSIDH: Optimizing Quantum Evaluation of Isogenies.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#quantum-circuits-for-the-csidh-optimizing-quantum-evaluation-of-isogenies) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#quantum-circuits-for-the-csidh-optimizing-quantum-evaluation-of-isogenies)**
### 作者
* Daniel J. Bernstein, Department of Computer Science, University of Illinois at Chicago, Chicago, IL, 60607-7045, USA
* Tanja Lange, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
* Chloe Martindale, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
* Lorenz Panny, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
### 摘要
> 作为一名研究人员，下面是一篇研究论文的摘要，请将其翻译成简体中文。
> 
> 为了选择新的基于CSIDH同源变换的密钥交换系统的安全后量子参数，需要对量子攻击的成本进行具体分析。攻击成本的两个主要贡献是隐藏位移算法中查询的数量和每次查询的成本。本文对每个查询的算法进行了分析，引入了几种新的加速方法，并表明一些先前的声称对于攻击者来说过于乐观。本文包括对其主要算法的全面计算机验证模拟，涵盖到每个比特操作的级别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_15](https://doi.org/10.1007/978-3-030-17656-3_15)
## A Quantum-Proof Non-malleable Extractor - With Application to Privacy Amplification Against Active Quantum Adversaries.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#a-quantum-proof-non-malleable-extractor-with-application-to-privacy-amplification-against-active-quantum-adversaries) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#a-quantum-proof-non-malleable-extractor-with-application-to-privacy-amplification-against-active-quantum-adversaries)**
### 作者
* Divesh Aggarwal, Center of Quantum Technologies, and Department of Computer Science, NUS, Singapore, Singapore
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taipei, 11529, Taiwan
* Han-Hsuan Lin, Department of Computer Science, The University of Texas at Austin, Austin, USA
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
### 摘要
> 在隐私扩增中，两个相互信任的参与方旨在通过在一个不安全的通信渠道上交换消息来放大初始共享秘密X的机密性，以建立一个共享的私钥K。如果通道经过身份验证，可以使用强随机性提取器在一轮通信中解决该任务；选择一个抗量子攻击者的提取器可以确保与量子对手之间的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_16](https://doi.org/10.1007/978-3-030-17656-3_16)
## A Note on the Communication Complexity of Multiparty Computation in the Correlated Randomness Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#a-note-on-the-communication-complexity-of-multiparty-computation-in-the-correlated-randomness-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#a-note-on-the-communication-complexity-of-multiparty-computation-in-the-correlated-randomness-model)**
### 作者
* Geoffroy Couteau, KIT, Karlsruhe, Germany
### 摘要
> 安全多方计算（Secure multiparty computation，MPC）解决了在不损害隐私的前提下对秘密输入进行函数求值的挑战。多方计算中一个核心问题是了解在安全评估尺寸为 s 的电路时所需的通信量。在本研究中，我们在相关随机性模型（correlated randomness model）中重新审视了这个基本问题，该模型中一位可信的发行商在协议开始前向所有参与方分发与输入独立的相关随机硬币。这种设置具有很强的理论意义，并且导致目前为止已知的最实用高效的 MPC 协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_17](https://doi.org/10.1007/978-3-030-17656-3_17)
## Degree 2 is Complete for the Round-Complexity of Malicious MPC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#degree-2-is-complete-for-the-round-complexity-of-malicious-mpc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#degree-2-is-complete-for-the-round-complexity-of-malicious-mpc)**
### 作者
* Benny Applebaum, Tel-Aviv University, Tel Aviv, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Rotem Tsabary, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 通过非交互式约简，我们展示了对于二阶函数存在一个安全多方计算（MPC）协议，意味着对于一般函数也存在具有相同轮次复杂度的协议。因此，这表明在考虑MPC的轮次复杂度时，只需考虑非常简单的函数即可。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_18](https://doi.org/10.1007/978-3-030-17656-3_18)
## Two Round Information-Theoretic MPC with Malicious Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#two-round-information-theoretic-mpc-with-malicious-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#two-round-information-theoretic-mpc-with-malicious-security)**
### 作者
* Prabhanjan Ananth, Massachusetts Institute of Technology, Cambridge, USA
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### 摘要
> 我们提供了在纯模型中的两个回合信息论（IT）安全多方计算（MPC）协议的构造，这些协议能容忍任意\(t<n/2\)个恶意破坏。我们的协议满足不同通信模型中两个回合中最强可达到的安全标准概念。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_19](https://doi.org/10.1007/978-3-030-17656-3_19)
## Designated-Verifier Pseudorandom Generators, and Their Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-pseudorandom-generators-and-their-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-pseudorandom-generators-and-their-applications)**
### 作者
* Geoffroy Couteau, KIT, Karlsruhe, Germany
* Dennis Hofheinz, KIT, Karlsruhe, Germany
### 摘要
> 我们提供了非交互零知识（NIZK）方案的通用构建方法。我们的构建是Dwork和Naor（FOCS 2000）使用可验证伪随机生成器（VPRGs）实现隐含位模型的改进版。我们的改进简化了他们的构建，并大幅放宽了必要的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_20](https://doi.org/10.1007/978-3-030-17656-3_20)
## Reusable Designated-Verifier NIZKs for all NP from CDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#reusable-designated-verifier-nizks-for-all-np-from-cdh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#reusable-designated-verifier-nizks-for-all-np-from-cdh)**
### 作者
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### 摘要
> 非交互式零知识证明（NIZK）是一种基础的密码学原语。尽管有着漫长的研究历史，我们只知道如何在一些特定的假设下构造NIZK，比如基于因子分解困难性或使用双线性映射。值得注意的是，目前没有已知的构造基于计算或决策性Diffie-Hellman（CDH/DDH）假设的NIZK，而不依赖于双线性映射。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_21](https://doi.org/10.1007/978-3-030-17656-3_21)
## Designated Verifier/Prover and Preprocessing NIZKs from Diffie-Hellman Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-prover-and-preprocessing-nizks-from-diffie-hellman-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-prover-and-preprocessing-nizks-from-diffie-hellman-assumptions)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Shuichi Katsumata, The University of Tokyo, Tokyo, Japan
### 摘要
> 在非交互式零知识（NIZK）证明中，证明者可以在不透露任何其他信息的情况下，以非交互式方式说服验证者某个陈述的真实性。到目前为止，已经根据各种假设在通用参考字符串（CRS）模型（CRS-NIZK）中提供了许多NIZK的构建方法，但是，使用无配对群或格的工具构建NIZK仍然是一个长期存在的问题。最近，Kim和Wu（CRYPTO'18）在这个问题上取得了重大进展，并在一种被称为预处理模型（PP-NIZKs）的放松模型中构建了第一个基于格的NIZK。在这个模型中，有一个可信的与陈述无关的预处理阶段，用于为证明者和验证者生成秘密信息。根据这些秘密信息是否可以公开，PP-NIZK可以捕捉到CRS-NIZK、指定验证者NIZK（DV-NIZK）和指定证明者NIZK（DP-NIZK）作为特殊情况。Kim和Wu留下了一个问题，即我们是否可以使用弱配对无关群假设（如DDH）构建这样的NIZK。此外，所有基于Diffie-Hellman（DH）类型假设的NIZK构造（无论是否在无配对群或配对群上）都要求证明大小具有乘法开销\(|C| \cdot \mathsf {poly}(\kappa )\)，其中|C|是计算\(\mathbf {NP}\)关系的电路的大小。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_22](https://doi.org/10.1007/978-3-030-17656-3_22)
## Building an Efficient Lattice Gadget Toolkit: Subgaussian Sampling and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#building-an-efficient-lattice-gadget-toolkit-subgaussian-sampling-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#building-an-efficient-lattice-gadget-toolkit-subgaussian-sampling-and-more)**
### 作者
* Nicholas Genise, University of California, San Diego, La Jolla, USA
* Daniele Micciancio, University of California, San Diego, La Jolla, USA
* Yuriy Polyakov, New Jersey Institute of Technology, Newark, USA
### 摘要
> 许多先进的格密码应用需要高效的算法来求解所谓的“gadget”矩阵的逆，这些矩阵用于形式化描述一个数字分解问题，从而产生具有特定（统计）属性的输出。常见的gadget逆问题包括经典（通常是二进制的）数字分解、次高斯分解、误差学习（Learning with Errors，简称LWE）解码和离散高斯抽样。在本研究中，我们构建并实现了一个高效的格gadget工具包，它提供了对gadget矩阵及其逆向/抽样算法的通用处理。我们工作的主要贡献是一组新的gadget矩阵和高效次高斯抽样算法，相比之前已知的算法，在理论和实践上都具有重要优势。另一个贡献涉及在剩余数系统（Residue Number System，简称RNS）表示中进行高效的LWE解码和离散高斯抽样的算法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_23](https://doi.org/10.1007/978-3-030-17656-3_23)
## Approx-SVP in Ideal Lattices with Pre-processing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#approx-svp-in-ideal-lattices-with-pre-processing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#approx-svp-in-ideal-lattices-with-pre-processing)**
### 作者
* Alice Pellet-Mary, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Guillaume Hanrot, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
### 摘要
> 我们描述了一个算法来解决与任意数域K的整数环理想对应的格的近似最短向量问题。该算法有一个预处理阶段，其运行时间在\(\log |\varDelta |\)指数级增长，其中\(\varDelta \)是K的判别式。重要的是，这个预处理阶段仅依赖于K。预处理阶段输出一个“建议”，其位数不超过查询阶段的运行时间。在给定这个建议的情况下，算法的查询阶段接收整数环的任何理想I作为输入，并输出一个I中的元素，该元素至多比I的最短非零元素（根据其规范嵌入的欧几里德范数）长\(\exp (\widetilde{O}((\log |\varDelta |)^{\alpha +1}/n))\)倍。这个查询阶段在经典场景下的运行时间和空间为\(\exp (\widetilde{O}( (\log |\varDelta |)^{\max (2/3, 1-2\alpha )}))\)，在量子场景下为\(\exp (\widetilde{O}((\log |\varDelta |)^{1-2\alpha }))\)。参数\(\alpha \)可以在[0, 1 / 2]中任意选择。正确性和成本分析都依赖于启发式假设，其有效性与实验一致。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_24](https://doi.org/10.1007/978-3-030-17656-3_24)
## The General Sieve Kernel and New Records in Lattice Reduction.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#the-general-sieve-kernel-and-new-records-in-lattice-reduction) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#the-general-sieve-kernel-and-new-records-in-lattice-reduction)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Eamonn W. Postlethwaite, Information Security Group, Royal Holloway, University of London, Egham, UK
* Léo Ducas, Cryptology Group, CWI, Amsterdam, The Netherlands
* Marc Stevens, Cryptology Group, CWI, Amsterdam, The Netherlands
* Gottfried Herold, ENS Lyon, Laboratoire LIP, Lyon, France
* Elena Kirshanova, ENS Lyon, Laboratoire LIP, Lyon, France
### 摘要
> 我们提出了通用筛选器内核(G6K，发音/\e.si.ka/)，它是一种抽象的状态机，支持基于筛法的多种格子缩减策略。使用此抽象状态机的基本指令集，我们首先给出以前文献中筛法策略的简明公式，然后提出新的策略。我们还提出了BKZ的轻量级变体，利用了我们的抽象状态机的特性。这个包括了几个最近的建议(Ducas在Eurocrypt 2018; Laarhoven和Mariano在PQCrypto 2018)超越将筛法视为黑盒SVP oracle并利用强格子缩减作为筛法预处理。此外，我们提出了新的技巧来最小化筛法计算所需的干扰质量，如在筛子之间回收向量、即时提升和灵活插入等机制，类似Deep LLL和最近的随机取样缩减变体。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_25](https://doi.org/10.1007/978-3-030-17656-3_25)
## Misuse Attacks on Post-quantum Cryptosystems.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#misuse-attacks-on-post-quantum-cryptosystems) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#misuse-attacks-on-post-quantum-cryptosystems)**
### 作者
* Ciprian Băetu, EPFL, 1015, Lausanne, Switzerland
* F. Betül Durak, EPFL, 1015, Lausanne, Switzerland
* Loïs Huguenin-Dumittan, EPFL, 1015, Lausanne, Switzerland
* Abdullah Talayhan, EPFL, 1015, Lausanne, Switzerland
* Serge Vaudenay, EPFL, 1015, Lausanne, Switzerland
### 摘要
> 在国家标准与技术研究所（NIST）的标准化过程中，提出了许多后量子密码系统，这些系统遵循相同的元算法，但在代数或编码方法上存在差异。它们通常提出两种构建方式，其中一种较弱，另一种需要一个随机甲骨文。我们重点关注了提交给NIST的九个版本中的弱版本。提交者声称当密钥多次使用时没有安全性。在本文中，我们分析了在多次密钥重复使用下运行密钥恢复的难度。我们进行了基于明文检查攻击的经典密钥恢复（即，使用明文检查甲骨文判断给定密文是否正确解密为给定明文），以及基于选择密文攻击的量子密钥恢复。在后一种情况下，我们假设可以量子访问解密甲骨文。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_26](https://doi.org/10.1007/978-3-030-17656-3_26)
