# Eurocrypt[2019-2]
## Computationally Volume-Hiding Structured Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#computationally-volume-hiding-structured-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#computationally-volume-hiding-structured-encryption)**
### 作者
* Seny Kamara, Brown University, Providence, USA
* Tarik Moataz, Brown University, Providence, USA
### 摘要
> 我们开始研究具有计算安全泄漏的结构化加密方案。具体而言，我们关注隐藏响应长度于计算受限对手的加密多映射的设计；也就是说，针对加密多映射，我们希望隐藏其响应长度。我们描述了第一种不依赖天真填充（即所有元组填充到相同长度）的隐藏容量STE方案。我们的第一个构造具有高效的查询复杂度和存储，但可能会有信息损失。然而，我们证明了对于大类别的多映射（即根据Zipf分布进行长度分布），这种信息损失可以被压倒性的概率界定。我们的第二个构造则没有信息损失，并且可以在Zipf分布的多映射中实现渐近优于天真填充的存储开销。当多映射高度集中，即具有大量元组并且它们之间有较大交集时，我们还展示了如何进一步提高存储效率。我们通过利用计算假设来实现这些结果，不仅仅是为了加密，更有趣的是为了隐藏数据本身的容量。我们的第一个构造使用伪随机函数来实现这一点，而我们的第二个构造依赖于被猜测为固定最密子图问题的难度，该问题是一个众所周知的最密子图问题的变种。此前，这个假设已被用于设计公钥加密方案（Applebaum等人，STOC '10）和研究金融产品的计算复杂性（Arora等人，ICS '10）。

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
> 忘记性随机存取内存（Oblivious RAMs），由Goldreich和Ostrovsky [JACM'96]引入，将任何RAM程序编译为“内存无感知”的程序，即内存访问模式与输入无关。然而，之前的ORAM方案完全破坏了数据访问的局部性（例如，通过将数据洗牌到内存中的伪随机位置）。
> 
> 在本研究中，我们首次研究了保留局部性的ORAMs——即在访问的内存区域中保留局部性，同时只泄漏连续内存区域的长度。我们的主要结果证明了存在具有多对数级开销的保留局部性的ORAM，无论是带宽还是局部性。我们还研究了局部性、带宽和信息泄漏之间的权衡，并且证明了任何既保留局部性又不泄漏连续内存区域长度的方案将受到限制性的带宽影响。
> 
> 据我们所知，在我们的研究之前，仅有结合局部性和无知性的工作是针对对称可搜索加密（例如，Cash和Tessaro（EUROCRYPT'14），Asharov等人（STOC'16））。对称可搜索加密只有在每个关键词仅搜索一次时才能保证无知性，而ORAM则对任何输入程序提供无知性。因此，我们的工作将那一领域的研究推广到了在ORAMs中保留局部性这一更具挑战性的任务上。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_8](https://doi.org/10.1007/978-3-030-17656-3_8)
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
> 代数结构是我们所知的加密疯狂的核心。一个有趣的问题是：是否可以通过为一些具有一定代数结构的简单Minicrypt原语添加代数结构来构建（加密疯狂）原语，而不是从具体假设中构建它们？在这项工作中，我们肯定地回答了这个问题，并向以下Minicrypt原语添加了代数结构：
> 
> 单向函数（OWF）
> 
> 弱不可预测函数（wUF）
> 
> 弱伪随机函数（wPRF）
> 
> 我们考虑的代数结构是这些原语的输入/输出空间上的群同态。我们还考虑了“有界”同态的概念，其中原语仅支持有限数量的同态操作，以便捕捉基于格基和其他“有噪声”假设。我们证明了这些结构化原语可以用于构建许多密码协议。特别地，我们证明：
> 
> （有界）同态OWFs（HOWFs）蕴含抗碰撞哈希函数，Schnorr风格签名和变身哈希函数。
> 
> （有界）输入同态弱UFs（IHwUFs）蕴含CPA安全的PKE、非交互式密钥交换、陷门函数、盲批量加密（从而蕴含匿名IBE、KDM安全和泄露鲁棒PKE）、CCA2确定性PKE和提示PRG（进而蕴含CPA到CCA安全的ABE / 1侧PE的转化）。
> 
> （有界）输入同态弱PRFs（IHwPRFs）蕴含PIR、可损失陷门函数、OT和MPC（在纯模型中）。
> 
> 此外，我们展示了如何使用IHwUFs / IHwPRFs以通用方式实现具有特定属性的任何CDH / DDH协议，并如何从许多具体假设实例化这样的协议。
> 
> 我们还考虑具有更丰富结构的原语，即环IHwPRFs和L可组合IHwPRFs。特别地，我们证明了以下结果：
> 
> 具有某些属性的Ring IHwPRFs蕴含FHE。
> 
> 2可组合IHwPRFs蕴含（黑盒）IBE，L可组合IHwPRFs蕴含非交互式\((L+1)\)方密钥交换。
> 
> 我们的框架使我们能够根据哪个结构化Minicrypt原语蕴含它们来对许多密码协议进行分类。此外，它可能使将许多密码系统存在归因于新颖假设的过程在未来变得更加容易。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_3](https://doi.org/10.1007/978-3-030-17656-3_3)
## Improved Bootstrapping for Approximate Homomorphic Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#improved-bootstrapping-for-approximate-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#improved-bootstrapping-for-approximate-homomorphic-encryption)**
### 作者
* Hao Chen, Microsoft Research, Redmond, USA
* Yongsoo Song, Microsoft Research, Redmond, USA
* Ilaria Chillotti, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 自从 Cheon 等人在 Asiacrypt '17 中提出了用于近似算术的同态加密方案之后，人们认识到它适用于同态加密的重要实际应用场景，包括对加密数据进行机器学习模型的训练。Cheon 等人在 Eurocrypt '18 中的后续工作描述了该方案的近似引导过程。在本研究中，我们改进了之前的引导结果。我们将每个明文槽的分摊引导时间从约1秒提高到约0.01秒，提高了两个数量级。为了实现这个结果，我们采用了一种智能级联技术来评估密文上的类 DFT 线性变换。此外，我们将正弦函数的 Taylor 近似替换为更准确和数值稳定的 Chebyshev 近似，并设计了一种修改过的 Paterson-Stockmeyer 算法来快速评估加密数据上的 Chebyshev 多项式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_2](https://doi.org/10.1007/978-3-030-17656-3_2)
## Attacks only Get Better: How to Break FF3 on Large Domains.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#attacks-only-get-better-how-to-break-ff3-on-large-domains) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#attacks-only-get-better-how-to-break-ff3-on-large-domains)**
### 作者
* Viet Tung Hoang, Department of Computer Science, Florida State University, Tallahassee, USA
* David Miller, Department of Computer Science, Florida State University, Tallahassee, USA
* Ni Trieu, Department of Computer Science, Oregon State University, Corvallis, USA
### 摘要
> 我们改进了对NIST Format-Preserving Encryption标准FF3的Durak和Vaudenay（CRYPTO'17）的攻击，将运行时间从\(O(N^5)\)降低到\(O(N^{17/6})\)，适用于域\(\mathbb {Z}_N \times \mathbb {Z}_N\)。具体来说，DV的攻击需要大约\(2^{50}\)次操作来恢复加密的六位PIN码，而我们只需大约\(2^{30}\)次操作。为了实现这个目标，我们提供了一个教学示例，展示如何使用区分攻击来加速滑动攻击。此外，我们将DV对域\(\mathbb {Z}_N \times \mathbb {Z}_N\)的4轮费斯特尔已知明文攻击的运行时间从\(O(N^3)\)降低到\(O(N^{5/3})\)。我们还将我们的攻击推广到一般的域\(\mathbb {Z}_M \times \mathbb {Z}_N\)，使得可以在大约\(2^{50}\)次操作中恢复加密的社会安全号码。最后，我们提供了一些概念验证实现，以经验性地验证我们的结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_4](https://doi.org/10.1007/978-3-030-17656-3_4)
## Uncovering Algebraic Structures in the MPC Landscape.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#uncovering-algebraic-structures-in-the-mpc-landscape) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#uncovering-algebraic-structures-in-the-mpc-landscape)**
### 作者
* Navneet Agarwal, Indian Institute of Technology Bombay, Mumbai, India
* Sanat Anand, Indian Institute of Technology Bombay, Mumbai, India
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
### 摘要
> 多方安全计算（MPC）中的一个基本问题是，如何确定具有超过2个参与方的函数，使这些函数可以通过信息理论安全的MPC协议进行计算。自Chor和Ishai（1996）的研究以来，这个问题一直没有得到很大的进展。 在此项研究中，我们在聚合功能的重要情况下取得了重大进展，在此情况下，m个参与者$P_1,\dots, P_m$持有输入$x_1,\dots,x_m$，并且聚合方$P_0$必须学习$f(x_1,\dots,x_m )$。
> 
> 我们发现一种与保护计算相关的丰富的代数结构，即“可交换置换系统”（CPS）及其变体。 我们提出了一系列广泛的结果，将这些代数结构相互关联，并与 MPC 相关联，包括新协议、不可能性结果和区分结果。我们的结果包括函数需要满足的代数条件和稍强的充分代数条件，才能使该函数适合于具有信息理论安全性的MPC协议。
> 
> 我们还引入和研究了新的最小交互 MPC 模型（称为 UNIMPC 和 $k$-UNIMPC），这不仅有助于更好地理解我们的正面和反面结果，而且还开辟了研究多方功能的加密复杂度的新途径。我们的积极结果包括这些模型中的新型协议，这可能是独立实用的。
> 
> 最后，我们将我们的结果推广到需要 UC 安全和半诚实安全（我们称之为强安全）的定义。在这个模型中，我们能够对所有可计算函数进行表征，但在聚合功能的情况下存在差距。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_14](https://doi.org/10.1007/978-3-030-17656-3_14)
## Tight Proofs of Space and Replication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#tight-proofs-of-space-and-replication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#tight-proofs-of-space-and-replication)**
### 作者
* Ben Fisch, Stanford University, Stanford, USA
### 摘要
> 我们基于层叠深度鲁棒图和常度扩张图构建了一个具有任意高安全性的实用化空间证明（PoS）。空间证明（PoS）是一种交互式证明系统，其中证明者证明它持久地使用空间来存储信息。如果诚实的证明者恰好使用 N 大小的空间，并且对于任意 \(\epsilon > 0\) 可以调整构建，以便没有攻击者能够使用少于 \((1-\epsilon ) N\) 空间通过验证，那么 PoS 就是任意高安全的。值得注意的是，图在我们的构建中的度与 \(\epsilon\) 无关，而层数只有 \(O(\log (1/\epsilon ))\)。证明的大小为 \(O(d/\epsilon )\)。度数 d 取决于深度鲁棒图，在子图上至少维系 \(\varOmega (N)\) 深度的要求仅适用于 80% 的节点。我们的紧密 PoS 对抗并行攻击也是安全的。
> 
> 对于复制证明（PoRep）来说，紧密的空间证明是必需的，它是一种公开可验证的证明，证明者正在专门将唯一资源用于存储一个或多个可检索到的指定文件的副本。我们的主要 PoS 构建可以用作 PoRep，但数据提取效率与副本生成一样低。我们提出了我们构建的第二个变体，称为 ZigZag PoRep，相比于副本生成具有更快/可并行化的数据提取，并且在只增加大约两倍的层级数量的同时保持相同的空间紧密性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_12](https://doi.org/10.1007/978-3-030-17656-3_12)
## Quantum Circuits for the CSIDH: Optimizing Quantum Evaluation of Isogenies.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#quantum-circuits-for-the-csidh-optimizing-quantum-evaluation-of-isogenies) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#quantum-circuits-for-the-csidh-optimizing-quantum-evaluation-of-isogenies)**
### 作者
* Daniel J. Bernstein, Department of Computer Science, University of Illinois at Chicago, Chicago, IL, 60607-7045, USA
* Tanja Lange, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
* Chloe Martindale, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
* Lorenz Panny, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
### 摘要
> 选择安全的后量子参数用于新的CSIDH同态密码交换系统需要对量子攻击成本进行具体分析。攻击成本的两个主要贡献因素是隐藏位移算法中的查询次数和每次查询的成本。本文分析了每个查询的算法，引入了几种新的加速技术，同时表明先前的某些声明对攻击者来说过于乐观。本文包含了该主算法的完整计算机验证模拟，直到每个位操作的层面。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_15](https://doi.org/10.1007/978-3-030-17656-3_15)
## An Analysis of NIST SP 800-90A.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#an-analysis-of-nist-sp-800-90a) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#an-analysis-of-nist-sp-800-90a)**
### 作者
* Joanne Woodage, Royal Holloway, University of London, Egham, UK
* Dan Shumow, Microsoft Research, Redmond, USA
### 摘要
> 我们调查了NIST SP 800-90A中三个确定性随机比特生成器（DRBG）机制的安全性质[2]。由于与先前版本中的已撤销的\(\mathsf{{DualEC\text {-}DRBG}}\)相关的争议，该标准受到了相当大的负面关注。也许是因为受到DualEC的关注，该标准中的其他算法迄今为止接受了令人惊讶的不连贯分析，尽管已广泛部署。本文解决了许多分析中的差距问题，特别关注了\(\mathsf{{HASH\text {-}DRBG}}\) 和 \(\mathsf{{HMAC\text {-}DRBG}}\)。我们发现了一些积极和不太积极的结果。从积极的一面看，我们在随机预言模型（ROM）中（带着警告）证明了\(\mathsf{{HASH\text {-}DRBG}}\) 和 \(\mathsf{{HMAC\text {-}DRBG}}\) 的鲁棒性[13]。关于警告，我们表明如果省略了可选输入，那么与标准中的声明相反，\(\mathsf{{HMAC\text {-}DRBG}}\) 甚至无法实现（较弱的）前向安全性属性。然后，我们对标准中的灵活性进行了更为不正式和实践性的探讨。具体而言，我们认为这些DRBG具有部分状态泄露可能会导致安全性以意想不到的方式崩溃的属性。我们强调了过于灵活的标准允许的实现选择，这加剧了此类攻击的可能性和影响。虽然我们的攻击是理论上的，但对\(\mathsf{{CTR\text {-}DRBG}}\)的两个开源实现的分析显示，在现实世界中确实存在这些可能存在问题的实现选择。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_6](https://doi.org/10.1007/978-3-030-17656-3_6)
## Incremental Proofs of Sequential Work.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#incremental-proofs-of-sequential-work) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#incremental-proofs-of-sequential-work)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 证明性工作的证明允许证明者说服验证者已经计算了一定数量的顺序步骤。在这项工作中，我们引入了增量证明顺序工作的概念，其中证明者可以增量地继续前一个证明者的计算，而不影响各个证明者的资源或证明的大小。
> 
> 到目前为止，N步的证明性工作的最高效实例[Cohen and Pietrzak, Eurocrypt 2018]要求证明者拥有\(\sqrt{N}\)的内存，并运行\(N + \sqrt{N}\)步。使用增量证明顺序工作，我们可以将证明者的存储复杂度降低到\(\log N\)，运行时间降低到N。
> 
> 我们提出了两种不同的增量证明顺序工作的构建方法：我们的第一种方案只需要一个处理器，并且与Cohen和Pietrzak的提议相比，在证明大小方面引入了对数多项式因子。我们的第二种方案假设有\(\log N\)个并行处理器，但将证明大小的开销降低到了9倍。这两种方案都很容易实现，只依赖于散列函数（建模为随机预言机）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_11](https://doi.org/10.1007/978-3-030-17656-3_11)
## Reusable Designated-Verifier NIZKs for all NP from CDH.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#reusable-designated-verifier-nizks-for-all-np-from-cdh) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#reusable-designated-verifier-nizks-for-all-np-from-cdh)**
### 作者
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### 摘要
> 非交互式零知识证明是一种基础密码学原语。尽管有着漫长的研究历史，但我们只知道如何在少数几种选择的假设下构建NIZK，例如因子分解的困难性或使用双线性映射。值得注意的是，在不依赖于双线性图的情况下，没有基于计算或决策Diffie-Hellman（CDH / DDH）假设的已知结构。
> 
> 在本文中，我们研究了指定验证者环境下（DV-NIZK）对NIZK的放宽，并生成与秘密密钥一起生成公共参考字符串，该密钥由验证者提供以验证证明。 在此设置中，我们区分一次性和可重用方案，具体取决于它们是否可以用于证明单个陈述或任意多个陈述。 对于可重用计划，主要的困难在于确保即使恶意证明将证明接受或由验证器拒绝也仍然保持声音。据公钥加密证明，已知一次性DV-NIZK适用于一般NP语句。但是，在这项工作之前，我们没有任何来自已有标准NIZK的任何假设的一般NP语句的可重用DV-NIZK结构。
> 
> 在本工作中，我们在不需要双线性映射的情况下，基于CDH假设构建了一次性和可重用DV-NIZK方案，用于一般NP语句。我们的构造基于先前用于构造标准NIZK的hidden-bits范例。我们定义了一种称为hidden-bits生成器（HBG）的密码学原语，以及一个指定验证者变体（DV-HBG），该变体模块化地抽象出如何使用此范例来获得标准NIZK和可重用DV-NIZK。我们通过依赖Cramer-Shoup哈希证明系统技术来构造CDH假设下的DV-HBG方案，并获得了我们的可重用DV-NIZK的一般NP语句的方案。
> 
> 我们还考虑将DV-NIZK加强为恶意指定验证者设置（MDV-NIZK），其中设置包括一个诚实生成的公共随机字符串，然后验证器可以选择自己的（可能是恶意的）公共/密钥对来生成/验证证明。我们在“one-more CDH”假设下构造了MDV-NIZK，而不依赖于双线性图。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_21](https://doi.org/10.1007/978-3-030-17656-3_21)
## Two Round Information-Theoretic MPC with Malicious Security.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#two-round-information-theoretic-mpc-with-malicious-security) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#two-round-information-theoretic-mpc-with-malicious-security)**
### 作者
* Prabhanjan Ananth, Massachusetts Institute of Technology, Cambridge, USA
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
### 摘要
> 我们在明文模型中提出了两个回合的信息理论安全多方计算协议，可以容忍任何\(t<n/2\)个恶意损坏。我们的协议满足不同通信模型下两个回合中最强可实现的安全标准概念。
> 
> 以前，在明文模型中的信息理论安全多方计算协议要么需要更多回合，要么只能容忍较小的少数损坏。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_19](https://doi.org/10.1007/978-3-030-17656-3_19)
## A Note on the Communication Complexity of Multiparty Computation in the Correlated Randomness Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#a-note-on-the-communication-complexity-of-multiparty-computation-in-the-correlated-randomness-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#a-note-on-the-communication-complexity-of-multiparty-computation-in-the-correlated-randomness-model)**
### 作者
* Geoffroy Couteau, KIT, Karlsruhe, Germany
### 摘要
> 安全多方计算（\(\mathsf {MPC}\)）解决了在不损害隐私的情况下对秘密输入进行函数求值的挑战。多方计算中的一个核心问题是了解安全地评估大小为s的电路所需的通信量。在本文中，我们在相关随机性模型的信息理论安全\(\mathsf {MPC}\)设置中重新审视了这个基本问题，在该模型中，一个可信的代理在协议开始之前将相关的随机硬币（与输入无关）分发给所有参与方。这个设置具有很强的理论兴趣，并且已经导致迄今为止最实际高效的\(\mathsf {MPC}\)协议。
> 
> 尽管已知可以利用LWE假设获得具有最佳通信量（与输入加输出大小成比例）的协议，以及可以利用DDH假设获得具有次线性通信量o(s)的协议，但对于相关随机性模型中的信息理论\(\mathsf {MPC}\)的构建通信量o(s)的协议的问题仍然悬而未决；在这个模型中，所有已知的协议在在线阶段都需要O(s)的通信量。
> 
> 在本文中，我们展示了在相关随机性模型中具有线路规模次线性通信的第一个通用多方计算协议，适用于大类电路。更具体地说，我们表明以下内容：任何大小为s的层次电路（其节点可以被分成层，使得任何边连接相邻层）可以使用\(O(s/\log \log s)\)的通信量进行评估。我们的结果适用于布尔电路和算术电路，在诚实但好奇的设置下，并且不假设诚实多数。对于布尔电路，我们将我们的结果扩展到处理恶意破坏。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_17](https://doi.org/10.1007/978-3-030-17656-3_17)
## Founding Secure Computation on Blockchains.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#founding-secure-computation-on-blockchains) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#founding-secure-computation-on-blockchains)**
### 作者
* Arka Rai Choudhuri, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们在区块链混合模型中研究安全计算的基础，其中区块链被建模为全局功能，并作为密码协议中所有参与者的Oracle可用。我们展示了区块链的破坏性和建设性应用：
> 
> 我们展示了在很多安全证明中使用的基于重置的模拟技术不能对抗具有读取和发布访问全局区块链的区块链活动对手。具体而言，我们展示了零知识（ZK）证明在黑盒模拟下对区块链活动对手是不可能的。
> 
> 然而，我们展示了如果诚实方也是区块链活动的话，实现对抗区块链活动对手的安全是可能的。我们构建了一种具有黑盒模拟的ω(1)轮ZK协议。我们通过证明无法实现具有常数轮次和黑盒模拟的ZK来表明这个结果是紧密的。
> 
> 最后，我们展示了区块链对克服明文模型中并发安全计算已知不可能性结果的一种新型应用。我们基于标准密码学假设构建了一个基于区块链混合模型的并发自可组合通用功能安全计算协议。
> 
> 我们开发了一套用于在区块链混合模型中构建安全协议的技术套件，希望能将其应用于未来的研究领域。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_13](https://doi.org/10.1007/978-3-030-17656-3_13)
## Homomorphic Secret Sharing from Lattices Without FHE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#homomorphic-secret-sharing-from-lattices-without-fhe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#homomorphic-secret-sharing-from-lattices-without-fhe)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 同态秘密共享（HSS）是对于秘密共享场景而言的有些或完全同态加密（S / FHE）的类比，应用包括简洁安全计算、远程数据库的私密操作等。虽然HSS可以被看作是S / FHE的一个放宽，但是到目前为止，从基于格的假设出发的唯一构造都是基于特定形式的阈值或多密钥S / FHE。 在这项工作中，我们提出了新的技术，直接从一系列基于格的加密方案中产生高效的二方HSS，并且不需要S / FHE。更具体地说，我们避免了S / FHE密文乘法中使用的昂贵的密钥切换和模数减法步骤，用一种新的分布式解密过程替代它们，以执行输入与部分计算值的“限制”乘法。这样做需要在分布式环境中处理密文中“噪音”的膨胀的新方法，并且利用基于格的加密方案的几个属性以及分享转换中的新技巧。生成的方案支持超多项式大小的明文空间和可忽略的正确性错误，与SHE密文相当的分享大小，但同态乘法的成本大约快一个数量级。在某些环上，我们的HSS还可以支持一定级别的紧凑SIMD同态操作。我们在两个应用场景中展示了我们方案的实际效率，与当前最佳方法进行了比较：两台服务器的私密数据库模式匹配查询和安全的两方低次多项式计算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_1](https://doi.org/10.1007/978-3-030-17656-3_1)
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
> 我们提出了通用筛选核（G6K，发音为/e.si.ka/），这是一种支持基于筛选算法的各种格约简策略的抽象有状态机。利用这个抽象有状态机的基本指令集，我们首先对以前文献中的筛选策略进行了简洁的表述，然后提出了新的策略。接着，我们还提出了利用我们抽象有状态机的特性的BKZ的轻量级变体。这包含了最近的一些建议（Ducas在Eurocrypt 2018上; Laarhoven和Mariano在PQCrypto 2018上）超越将筛选视为黑盒SVP预言机并利用强格约简作为筛选预处理的方法。此外，我们提出了一些新的技巧，以最小化在给定约简质量下所需的筛选计算，包括在筛选之间重复使用向量、实时提升和灵活插入的机制，类似于Deep LLL和最近的随机抽样约简变体。
> 
> 此外，我们提供了高度优化、多线程和可调整的这个机器的实现，我们将其开源。然后，我们通过将G6K应用于各种格挑战来演示我们筛选策略的性能。特别是，我们的方法使我们能够解决以前无法解决的Darmstadt SVP（151、153、155）和LWE（例如（75、0.005））挑战的实例。我们解决SVP-151挑战的方案比先前记录SVP-150挑战的报告时间快了400倍。对于exact-SVP，我们观察到在维度70上，G6K和FPLLL最先进的枚举实现之间存在性

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_25](https://doi.org/10.1007/978-3-030-17656-3_25)
## Designated-Verifier Pseudorandom Generators, and Their Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-pseudorandom-generators-and-their-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-pseudorandom-generators-and-their-applications)**
### 作者
* Geoffroy Couteau, KIT, Karlsruhe, Germany
* Dennis Hofheinz, KIT, Karlsruhe, Germany
### 摘要
> 我们提供了一个非交互式零知识（NIZK）方案的通用构建方法。我们的构建是Dwork和Naor（FOCS 2000）使用可验证伪随机生成器（VPRG）实现隐藏位模型的改进。我们的改进简化了他们的构建并显著放宽了所需的假设。
> 
> 由于这种概念上的改进，我们获得了有趣的新实例：
> 
> 基于计算Diffie-Hellman（CDH）问题的指定验证者NIZK（声度无界）。如果配对可用，则此NIZK变得可公开验证。这构成了第一个完全安全的基于CDH的指定验证者NIZK（更一般地说，第一个完全安全的基于非通用假设的指定验证者NIZK，该假设并未暗示可公开验证的NIZK），并回答了Kim和Wu（CRYPTO 2018）最近提出的一个开放问题。
> 
> 基于学习与错误（LWE）假设的NIZK，并假设非交互式见证不可区分（NIWI）证明系统用于有界距离译码（BDD）。这简化并改进了最近从LWE假设中基于BDD的NIZK（Rothblum等人，PKC 2019）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_20](https://doi.org/10.1007/978-3-030-17656-3_20)
## Private Anonymous Data Access.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#private-anonymous-data-access) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#private-anonymous-data-access)**
### 作者
* Ariel Hamlin, Department of Computer Science, Northeastern University, Boston, MA, USA
* Mor Weiss, Department of Computer Science, Northeastern University, Boston, MA, USA
* Daniel Wichs, Department of Computer Science, Northeastern University, Boston, MA, USA
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
* Mor Weiss, Department of Computer Science, IDC Herzliya, Herzliya, Israel
### 摘要
> 我们考虑的情景是，服务器持有一个巨大的数据库，希望让一大群客户能够访问。在初始化设置阶段之后，客户应该能够读取数据库中的任意位置，同时保护隐私（服务器不知道哪些位置正在被读取）和匿名性（服务器不知道哪个客户正在执行每次读取操作）。即使服务器与一部分客户串通，这些要求也应该得到满足。此外，在每次读取操作期间，服务器和客户端的运行时间都应该很低，最好只与数据库的大小和客户数量的对数成比例。我们将这个概念称为私密匿名数据访问（Private Anonymous Data Access，PANDA）。PANDA同时结合了私密信息检索（Private Information Retrieval，PIR）和遗忘性随机访问存储（Oblivious RAM，ORAM）的特点。PIR没有初始化设置，并允许任何人私密匿名地访问公共数据库，但服务器的运行时间与数据大小成线性关系。另一方面，ORAM实现了多对数级别的服务器运行时间，但需要初始化设置，并且之后只有拥有秘密密钥的单个客户端才能访问数据库。PANDA的目标是兼具PIR的多客户私密匿名访问数据库的特点和ORAM的高效服务器。在这项工作中，我们构建了边界协作PANDA方案，其中效率与可以与服务器串通的损坏客户数量的边界成线性关系，但在数据大小和客户总数方面都是多对数级别的。我们的解决方案依赖于标准假设，即完全同态加密的存在，并结合了PIR和ORAM的技术。我们还将PANDA扩展到客户可以写入数据库的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_9](https://doi.org/10.1007/978-3-030-17656-3_9)
## Building an Efficient Lattice Gadget Toolkit: Subgaussian Sampling and More.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#building-an-efficient-lattice-gadget-toolkit-subgaussian-sampling-and-more) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#building-an-efficient-lattice-gadget-toolkit-subgaussian-sampling-and-more)**
### 作者
* Nicholas Genise, University of California, San Diego, La Jolla, USA
* Daniele Micciancio, University of California, San Diego, La Jolla, USA
* Yuriy Polyakov, New Jersey Institute of Technology, Newark, USA
### 摘要
> 许多先进的格密码学应用需要高效的反转“小工具”矩阵的算法，这些矩阵用于形式化描述一个将输入数字分解成具有特定（统计）属性的输出问题。常见的小工具反转问题包括经典（通常是二进制）数字分解、次高斯分解、学习与错误（LWE）译码和离散高斯采样。在这项工作中，我们构建并实现了一个高效的格小工具工具包，提供了小工具矩阵的一般处理和反转/采样算法。我们的工作的主要贡献是一组新的小工具矩阵和用于高效次高斯采样的算法，相对于以前已知的算法具有多个重要的理论和实际优势。另一个贡献涉及在余数编号系统（RNS）表示中进行LWE译码和离散高斯采样的高效算法。我们在PALISADE中实现了小工具工具包，并评估了算法在运行时间和噪声增长方面的性能。我们通过实现一个具体的复杂应用——基于密钥策略的属性加密（KP-ABE）来说明我们算法的改进，此前该应用在CPU系统上被认为是不切实际的（除了非常少量的属性）。我们对基于次高斯采样的主要瓶颈操作的运行时间改进范围从18倍（对于2个属性）到289倍（对于16个属性；之前的实现支持的最大数量）。我们的结果适用于格密码学中许多其他先进应用，如基于GSW的同态加密方案，层次化全同态签名，其他形式的ABE，某些程序混淆构造等。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_23](https://doi.org/10.1007/978-3-030-17656-3_23)
## Misuse Attacks on Post-quantum Cryptosystems.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#misuse-attacks-on-post-quantum-cryptosystems) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#misuse-attacks-on-post-quantum-cryptosystems)**
### 作者
* Ciprian Băetu, EPFL, 1015, Lausanne, Switzerland
* F. Betül Durak, EPFL, 1015, Lausanne, Switzerland
* Loïs Huguenin-Dumittan, EPFL, 1015, Lausanne, Switzerland
* Abdullah Talayhan, EPFL, 1015, Lausanne, Switzerland
* Serge Vaudenay, EPFL, 1015, Lausanne, Switzerland
### 摘要
> 许多后量子密码系统的提案都遵循国家标准与技术研究所（NIST）的标准化过程，使用相同的元算法，但在不同的代数结构或编码方法上有所差异。它们通常提出两种构建方式，一种较弱而另一种需要随机神谕。我们关注九个提交给NIST的弱版本。提交者声称当秘密密钥被多次使用时，安全性无法保证。本文分析了在多次密钥重用下进行密钥恢复的难度。我们进行了经典密钥恢复实验，采用明文检查攻击（即通过一个明文检查神谕判断给定密文是否正确解密为给定明文），以及量子密钥恢复实验，采用选择密文攻击。在后者情况下，我们假设可以量子访问解密神谕。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_26](https://doi.org/10.1007/978-3-030-17656-3_26)
## Designated Verifier/Prover and Preprocessing NIZKs from Diffie-Hellman Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-prover-and-preprocessing-nizks-from-diffie-hellman-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#designated-verifier-prover-and-preprocessing-nizks-from-diffie-hellman-assumptions)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Shuichi Katsumata, The University of Tokyo, Tokyo, Japan
### 摘要
> 在非交互式零知识（NIZK）证明中，证明者可以在不透露任何额外信息的情况下，以非交互方式使验证者信服于某个陈述的真实性。迄今为止，已经提供了许多基于常见参考字符串（CRS）模型（CRS-NIZK）的NIZK构造，这些构造基于各种假设，然而，从无配对自由群或格的工具中构造仍然是一个长期存在的开放问题。最近，Kim和Wu（CRYPTO'18）在这个问题上取得了巨大进展，并在一个松弛模型称为预处理模型（PP-NIZKs）中构造了第一个基于格的NIZK。在这个模型中，存在一个可信的与陈述无关的预处理阶段，用于生成证明者和验证者的秘密信息。根据这些秘密信息是否可以公开，PP-NIZK涵盖了CRS-NIZK、指定验证者NIZK（DV-NIZK）和指定证明者NIZK（DP-NIZK）作为特例。Kim和Wu留下了一个开放问题，即我们是否可以从弱配对自由群假设（如DDH）中构造这样的NIZK。此外，所有基于Diffie-Hellman（DH）类型假设的NIZK构造（无论是在配对自由群还是配对群上）都需要证明大小具有乘法开销\( |C| \cdot \mathsf {poly}(\kappa )\)，其中|C|是计算\(\mathbf {NP}\)关系的电路的大小。
> 
> 在这项工作中，我们在不同情境下从DH类型假设中构建了（DV，DP，PP）-NIZK。我们的结果总结如下：
> 
> 从配对自由群的CDH假设中构建了\(\mathbf {NP}\)的DV-NIZK。这是首次在配对自由群上构建此类NIZK，解决了Kim和Wu（CRYPTO'18）提出的开放问题。
> 
> 从配对群的DH类型假设中构建了\(\mathbf {NP}\)的DP-NIZK，证明大小具有加法开销\( |C|+\mathsf {poly}(\kappa )\)，而不是乘法开销\( |C| \cdot \mathsf {poly}(\kappa )\)。这是首次构建这种NIZK（包括CRS-NIZK），不依赖于LWE假设、完全同态加密、不可区分混淆或不可证伪假设。
> 
> 从配对自由群的DDH假设中构建了\(\mathbf {NP}\)的PP-NIZK，证明大小很短，并且基于弱静态的DH类型假设，如DDH。与上述DP-NIZK类似，证明大小为\( |C|+\mathsf {poly}(\kappa )\)。这也解决了Kim和Wu（CRYPTO'18）提出的开放问题。
> 
> 在此过程中，我们构建了两个新的同态认证（HomAuth）方案，可能具有独立的研究兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_22](https://doi.org/10.1007/978-3-030-17656-3_22)
## Reversible Proofs of Sequential Work.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#reversible-proofs-of-sequential-work) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#reversible-proofs-of-sequential-work)**
### 作者
* Hamza Abusalah, SBA Research, Vienna, Austria
* Chethan Kamath, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Karen Klein, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Krzysztof Pietrzak, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
* Michael Walter, IST Austria, Am Campus 1, 3400, Klosterneuburg, Austria
### 摘要
> 证明序贯工作（PoSW）是一种证明系统，其中证明者在收到一个语句\(\chi\) 和一个时间参数T后，计算一个证明\(\phi(\chi,T)\)，该证明可在高效和公开可验证。证明可以在T个连续步骤中计算，但即使是拥有大规模并行性的恶意方也无法更少。因此，PoSW作为一个证明，证明自从\(\chi\) 被接收以来已经过去了T个单位的时间。
> 
> PoSW由Mahmoody，Moran和Vadhan [MMV11]引入，Cohen和Pietrzak [CP18]最近提出了一个简单实用的构造。
> 
> 在这项工作中，我们在随机排列模型中构建了一个新的简单PoSW，几乎和[CP18]一样简单高效，但在概念上却大不相同。而[CP18]的基础结构是哈希树，我们的构造基于跳表，并具有有趣的性质，即计算PoSW是可逆的计算。
> 
> 这种构造是可逆的事实可能被用于构建复制证明等新应用。我们还展示了如何“嵌入”Lenstra和Weselowski [LW17]的懒惰函数到我们的PoSW中，以获得一个PoSW，其中人们还可以更高效地验证输出的正确性，而无需重新计算它（尽管最近的“可验证延迟函数”的构造包含了这个构造旨在达到的大部分应用）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_10](https://doi.org/10.1007/978-3-030-17656-3_10)
## Degree 2 is Complete for the Round-Complexity of Malicious MPC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#degree-2-is-complete-for-the-round-complexity-of-malicious-mpc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#degree-2-is-complete-for-the-round-complexity-of-malicious-mpc)**
### 作者
* Benny Applebaum, Tel-Aviv University, Tel Aviv, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Rotem Tsabary, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 通过非交互式简化，我们展示了一个安全多方计算（MPC）协议对于二次函数的存在意味着具有相同轮复杂度的协议对于一般函数也存在。因此，我们表明在考虑MPC的轮复杂度时，只需要考虑非常简单的函数就足够了。
> 
> 我们的完备性定理适用于各种设置：信息理论和计算理论，全恶意和包含各种终止类型的恶意。实际上，我们给出了一条主定理，从中可以得出所有的单个设置作为直接推论。我们的基本转换不需要任何额外的假设，并且引发了与玩家数量、函数的电路大小S和深度D多项式相关的通信和计算开销。使用单向函数作为额外假设，深度的指数依赖性可以被消除。
> 
> 因此，我们能够推动MPC在各种设置下的最新技术进展，包括以下情况：
> 
> 对于激活型对手妨碍不到1/4的方，具有3轮完全安全协议（保证输出交付）。
> 
> 对于激活型对手妨碍不到一半的方，实现带有“选择终止”安全的2轮统计安全协议。
> 
> 在假设单向函数的情况下，对于激活型对手妨碍不到一半的方，实现具有（标准）终止安全的2轮计算安全协议。这为Ananth等人（Crypto 2018）的最新结果提供了一个新的且概念上更简单的证明。
> 
> 从技术上讲，我们的非交互式简化方法借鉴了Applebaum、Brakerski和Tsabary（TCC 2018）的编码方法。我们将这些方法扩展到可以在恶意对手存在的情况下被有意义地分析的方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_18](https://doi.org/10.1007/978-3-030-17656-3_18)
## A Quantum-Proof Non-malleable Extractor - With Application to Privacy Amplification Against Active Quantum Adversaries.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#a-quantum-proof-non-malleable-extractor-with-application-to-privacy-amplification-against-active-quantum-adversaries) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#a-quantum-proof-non-malleable-extractor-with-application-to-privacy-amplification-against-active-quantum-adversaries)**
### 作者
* Divesh Aggarwal, Center of Quantum Technologies, and Department of Computer Science, NUS, Singapore, Singapore
* Kai-Min Chung, Institute of Information Science, Academia Sinica, Taipei, 11529, Taiwan
* Han-Hsuan Lin, Department of Computer Science, The University of Texas at Austin, Austin, USA
* Thomas Vidick, Department of Computing and Mathematical Sciences, California Institute of Technology, Pasadena, USA
### 摘要
> 在隐私扩张中，两个相互信任的方在不安全的通信信道上交换消息，旨在通过扩大初始共享秘密X的保密性来建立共享私钥K。如果通道经过身份验证，则可以通过一轮通信使用强随机提取器解决问题；选择一个抗量子攻击的提取器可以建立对抗量子对手的安全性。
> 
> 如果通道没有经过身份验证，这个简单的解决方案就不再安全。然而，Dodis和Wichs（STOC’09）证明了这个问题可以通过两轮通信使用非可塑提取器解决，这是比强提取器更强的伪随机构造方法。
> 
> 我们给出了一个对抗量子对手安全的非可塑提取器的首次构造。该提取器基于Li（FOCS’12）的构造，并能够从最小熵率大于1/2的源中提取。将这个构造与Dodis和Wichs的简化的抗量子对手版本相结合，由Cohen和Vidick（未发表）获得了第一个安全防御主动量子对手的隐私扩张协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_16](https://doi.org/10.1007/978-3-030-17656-3_16)
## Session Resumption Protocols and Efficient Forward Security for TLS 1.3 0-RTT.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#session-resumption-protocols-and-efficient-forward-security-for-tls-1-3-0-rtt) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#session-resumption-protocols-and-efficient-forward-security-for-tls-1-3-0-rtt)**
### 作者
* Nimrod Aviram, Tel Aviv University, Tel Aviv, Israel
* Kai Gellert, Paderborn University, Paderborn, Germany
* Tibor Jager, Paderborn University, Paderborn, Germany
### 摘要
> TLS 1.3的0-RTT模式使得客户端重新连接到服务器时可以在“零往返时间”内发送加密的应用层数据，而不需要先前的交互式握手。这基本上需要服务器在接收到客户端的第一条消息时重新构建前一个会话的加密密钥。实现这一点的标准技术有会话缓存或会话票据。前者提供前向安全和抵御重放攻击的能力，但需要大量的服务器存储空间。后者需要可忽略的存储空间，但不提供前向安全，并且已知易受重放攻击。
> 
> 在本文中，我们首先从抽象的角度形式化定义会话恢复协议，类似于会话缓存和会话票据的机制。我们提供了一种新的通用构造，可以在基于可穿孔伪随机函数（PPRFs）的证明性基础上提供前向安全和重放弹性。该构造可以立即用于TLS 1.3的0-RTT，并可由服务器单方面部署，无需对客户端或协议进行任何更改。
> 
> 然后，我们描述了两种新的PPRF构造，特别适用于TLS 1.3中前向安全和重放弹性的会话恢复。第一种构造基于强RSA假设。与标准会话缓存相比，对于“128位安全性”，当以一种使密钥派生和穿孔的平均成本小于RSA群中一次完全指数运算的方式实例化时，它将所需的服务器存储减少了近20倍。因此，1GB的会话缓存可以替换成仅约51MB的存储空间，大大减少了所需的安全内存量。对于更大的安全参数或以换取更昂贵的计算，可以实现更大的存储减少。第二种构造将标准的二叉树PPRF与新的“域扩展”技术相结合。对于合理选择的参数，与标准会话缓存相比，可以将所需存储减少了5倍。它只使用对称加密，适用于高流量场景，并且可以每秒提供数千个票据的服务。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_5](https://doi.org/10.1007/978-3-030-17656-3_5)
## Approx-SVP in Ideal Lattices with Pre-processing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2019-2].md#approx-svp-in-ideal-lattices-with-pre-processing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2019-2].md#approx-svp-in-ideal-lattices-with-pre-processing)**
### 作者
* Alice Pellet-Mary, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Guillaume Hanrot, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
* Damien Stehlé, Univ. Lyon, EnsL, UCBL, CNRS, Inria, LIP, 69342, Lyon Cedex 07, France
### 摘要
> 我们描述一种算法，用于解决任意数域K的整数环的理想所对应格子的近似最短向量问题。该算法有一个预处理阶段，其运行时间在\(\log |\varDelta |\)（其中\(\varDelta \)为K的判别式）上呈指数级增长。重要的是，这个预处理阶段仅依赖于K。预处理阶段输出一个“建议”，其比特大小不超过查询阶段的运行时间。在给定这个建议的情况下，算法的查询阶段将整数环的任意理想I作为输入，并输出一个长度最多为一个非零元素的\(exp (\widetilde{O}((\log |\varDelta |)^{\alpha +1}/n))\)倍的I的元素（相对于其规范嵌入的欧几里得范数）。这个查询阶段在经典环境中的运行时间和空间为\(\exp (\widetilde{O}( (\log |\varDelta |)^{\max (2/3, 1-2\alpha )}))\)，在量子环境中的运行时间为\(\exp (\widetilde{O}((\log |\varDelta |)^{1-2\alpha }))\)。参数\(\alpha \)可以在[0, 1 / 2]范围内任意选择。正确性和成本分析都依赖于启发式假设，其有效性与实验证据一致。
> 
> 该算法建立在Cramer等人的算法[Eurocrypt 2016]和Cramer等人的算法[Eurocrypt 2017]的基础上。它依赖于Buchmann的框架[Séminaire de théorie des nombres 1990]，该框架允许合并它们并将它们的适用性从素数幂周期数域扩展到所有数域。通过允许仅依赖于该域的预计算，我们获得了成本的改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-17656-3_24](https://doi.org/10.1007/978-3-030-17656-3_24)
