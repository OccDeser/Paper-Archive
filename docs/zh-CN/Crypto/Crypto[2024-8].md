# Crypto[2024-8]
## Reusable Online-Efficient Commitments.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#reusable-online-efficient-commitments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#reusable-online-efficient-commitments)**
### 作者
* Nir Bitansky, New York University, New York, USA
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Dana Shamir, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 在线高效承诺是一种简洁的本地可打开的承诺，发送者的大部分工作在离线状态下完成，生成承诺数据x的编码\(\tilde{x}\)。在在线阶段，发送者和接收者都能在对\(\tilde{x}\)的随机访问下以对数多项式时间运行，其中x是长度。最近在标准的RingLWE假设下，Lin、Mook和Wichs构建了在线高效的承诺，但有一个重要的警告：它们是不可重用的。他们的承诺是私密可验证的，如果恶意发送者可以在重复的承诺请求中了解接收者是否接受或拒绝，它们将不再具有约束力。
> 
> 我们构建了第一个可重用的在线高效承诺，在标准假设Ring LWE下。我们分析中的一个主要组成部分是由Chung、Kalai、Liu和Raz（CRYPTO '11）在流式委托方案的背景下引入的泄漏引理。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_1](https://doi.org/10.1007/978-3-031-68397-8_1)
## Secure Multiparty Computation with Identifiable Abort via Vindicating Release.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#secure-multiparty-computation-with-identifiable-abort-via-vindicating-release) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#secure-multiparty-computation-with-identifiable-abort-via-vindicating-release)**
### 作者
* Ran Cohen, Reichman University, Herzliya, Israel
* Jack Doerner, Reichman University, Herzliya, Israel
* Jack Doerner, Brown University, Providence, USA
* Jack Doerner, Technion, Haifa, Israel
* Yashvanth Kondi, Silence Laboratories (Deel), Boston, USA
* Abhi Shelat, Northeastern University, Boston, USA
### 摘要
> 在虚假多数情况下，具有可识别中止（IA）保证的安全多方计算（MPC）能够确保诚实参与方可以识别并就至少一个作弊方达成一致，如果协议没有产生输出。已知具有IA的MPC构造依赖于通用的零知识证明、自适应安全的遗忘传输（OT）协议，或同态原语，因此与在不带可识别性中止的协议相比会产生重大惩罚。
> 
> 我们引入了一种新的更弱的IA概念，称为揭示输入的IA（IRIA），它可以通过选择性揭示承诺的输入值来构建，这是一种我们称之为辩护释放的技术。我们展示了这种更弱形式的IA可以在许多文献中的有趣协议中以小的具体开销实现，包括几种最先进的MPC协议所需的预处理协议。
> 
> 接下来，我们展示如何将这些IRIA组件组装成具有标准IA的任何功能的MPC协议。这样的实现在成本、技术和分析方面与缺乏可识别性的等效实现之间的差异很小，例如，我们的总带宽开销不到2倍，这是对IA先前工作的渐近改进。
> 
> 在实践层面上，我们将我们的技术应用于阈值ECDSA问题，并展示结果协议具有标准IA是具体高效的。在理论层面上，我们提出了一个编译器，它将任何安全协议转换为仅假定静态腐坏理想OT变体的具有标准IA的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_2](https://doi.org/10.1007/978-3-031-68397-8_2)
## MPC for Tech Giants (GMPC): Enabling Gulliver and the Lilliputians to Cooperate Amicably.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#mpc-for-tech-giants-gmpc-enabling-gulliver-and-the-lilliputians-to-cooperate-amicably) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#mpc-for-tech-giants-gmpc-enabling-gulliver-and-the-lilliputians-to-cooperate-amicably)**
### 作者
* Bar Alon, Department of Computer Science, Ben-Gurion University, Beer Sheva, Israel
* Moni Naor, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
* Eran Omri, School of Computer Science, Ariel University, Ariel Cyber Innovation Center (ACIC), Ariel, Israel
* Uri Stemmer, School of Computer Science, Tel Aviv University, Tel-Aviv, Israel
### 摘要
> 在当前数字化世界中，大型组织（有时被称为科技巨头）为大量用户提供服务。服务提供者通常有兴趣在其用户的私人数据上计算各种数据分析，这些用户有合作的动机，但不一定信任服务提供者。
> 
> 在这项工作中，我们介绍吉利弗多方计算模型（GMPC），以实现上述情景。GMPC模型考虑单个非常强大的方，称为服务器或吉利弗，它连接到n个用户的星型拓扑网络（或可用服务器可以阻止任何消息的完整网络进行替代公式）。用户的实力远远低于服务器，特别是计算和通信复杂度应该是polylogarithmic的n。 GMPC模型中的协议应该对可能损坏子集用户和/或服务器的恶意对手是安全的。
> 
> 在GMPC模型中设计协议是一个微妙的任务，因为用户只能持有有关polylogarithmic（n）的其他用户的信息（尤其是只能与polylogarithmic（n）的其他用户通信）。此外，服务器可以阻止任何诚实方之间的任何消息。因此，达成协议成为一项具有挑战性的任务。尽管如此，我们在GMPC模型中设计通用协议，假定最多可以损坏α < {1/8}的用户（除服务器外）。我们的主要贡献是Feige委员会选举协议[FOCS 1999]的变体，在GMPC模型中是安全的。在这个工具给定的情况下，我们显示：
> 
> 1.假设完全同态加密（FHE），任何计算效率的函数与O（n·polylog（n））大小的输出可以在GMPC模型中安全计算。
> 
> 2.任何可以由深度为O（polylogarithmic（n））的电路计算，大小为O（n·polylog（n）），且有限的入度和出度的函数可以在GMPC模型中安全计算，假设向量承诺方案（不假设FHE）。
> 
> 3.特别是，在不假设FHE的情况下，可以安全地在GMPC模型中计算排序，这对于差分隐私的洗牌模型具有重要应用，并解决了Bell等人[CCS 2020]的一个未决问题。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_3](https://doi.org/10.1007/978-3-031-68397-8_3)
## Robust Additive Randomized Encodings from IO and Pseudo-Non-linear Codes.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#robust-additive-randomized-encodings-from-io-and-pseudo-non-linear-codes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#robust-additive-randomized-encodings-from-io-and-pseudo-non-linear-codes)**
### 作者
* Nir Bitansky, New York University, New York, USA
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Sapir Freizeit, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 加法随机编码（ARE），由Halevi、Ishai、Kushilevitz和Rabin（CRYPTO 2023）引入，将k方函数\(f(x_1，\dots，x_k)\)的计算减少到本地计算每个输入\(x_i\)的编码\(\hat{x}_i\)，然后将它们添加在某个阿贝尔群中得到输出编码\(\hat{y} = \sum \hat{x}_i\)，该过程仅透露结果而不暴露其他信息。在鲁棒ARE（RARE）中，任何\(\hat{x}_i\)子集的总和仅揭示通过限制对应输入而获得的剩余函数。 （R）ARE的吸引力在于计算中交互部分的简单性，仅涉及加法，例如，在混洗模型中产生非交互多方计算，其中来自不同方的消息被匿名混洗。Halevi、Ishai、Kushilevitz和Rabin从标准假设构建了ARE，并在理想混淆模型中构建了RARE，但是否能够在普通模型中构建RARE尚未明确。我们从不可区分混淆构建了普通模型中的RARE，这是必要的，并引入了我们称之为伪非线性编码的新原语。我们提供了两种构造该原语的方法，分别基于误差学习或决策Diffie Hellman。我们构造的一个额外特性是其紧凑性。具体来说，编码\(\hat{x}_i\)可以分解为生成时间与输入大小成比例的非交互部分\(\hat{z}_i\)，直接发送给评估者，并添加在一起的群组部分\(\hat{g}_i\)，其大小仅取决于安全参数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_4](https://doi.org/10.1007/978-3-031-68397-8_4)
## Fully Secure MPC and zk-FLIOP over Rings: New Constructions, Improvements and Extensions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#fully-secure-mpc-and-zk-fliop-over-rings-new-constructions-improvements-and-extensions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#fully-secure-mpc-and-zk-fliop-over-rings-new-constructions-improvements-and-extensions)**
### 作者
* Anders Dalskov, Partisia, Aarhus, Denmark
* Daniel Escudero, JP Morgan AI Research and JP Morgan AlgoCRYPT CoE, New York, USA
* Ariel Nof, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 我们重新讨论了在安全多方计算（MPC）中实现全面安全（即保证输出传递）的开销问题。最近的研究已经通过引入协议来关闭全面安全和半诚实安全之间的差距，其中各方首先使用半诚实协议计算电路，然后在电路规模的次线性通信的验证步骤中运行验证步骤。然而，在这些研究中，验证步骤中的交互轮数也是电路规模的次线性的。与通信不同，半诚实执行的轮复杂性通常随着电路深度而不是规模而增长。因此，对于大而浅的电路，这额外的轮数会产生显着的开销。受到这一差距的激励，我们做出了以下贡献：
> 
> 1. 我们提出了一个新的MPC框架，以实现全面安全，与任何环都兼容，只有O（log |C|）的附加通信开销，其中| C |是电路中的乘法门数量，以及在底层半诚实协议之外的常数数量的额外轮数。我们的框架适用于任何线性秘密共享方案，并依赖于一种新的方法来以黑盒方式利用零知识完全线性交互式oracle证明（zk-FLIOP）的机制。我们提供了对我们的编译器的构建模块的多个具体实例化，从中我们在不同设置中推导出了具体有效的协议。
> 
> 2. 我们为zk-FLIOP原语在非常一般的设置中提供了扩展。第一个扩展是用于在潜在的非交换环上证明语句，其中唯一的要求是环具有足够大的集合，其中（1）集合中的每个元素与环中的每个元素都可以交换，并且（2）任何两个不同元素之间的差异是可逆的。我们的第二个zk-FLIOP扩展是用于在Galois环上证明语句。对于这些环，我们利用反乘友好嵌入（RMFEs）提出了常轮证明的当前最先进的具体改进。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_5](https://doi.org/10.1007/978-3-031-68397-8_5)
## Towards Achieving Asynchronous MPC with Linear Communication and Optimal Resilience.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#towards-achieving-asynchronous-mpc-with-linear-communication-and-optimal-resilience) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#towards-achieving-asynchronous-mpc-with-linear-communication-and-optimal-resilience)**
### 作者
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Chen-Da Liu-Zhang, Lucerne University of Applied Sciences and Arts and Web3 Foundation, Luzern, Switzerland
* Yifan Song, Tsinghua University, Beijing, China
* Yifan Song, Shanghai Qi Zhi Institute, Shanghai, China
### 摘要
> 安全的多方计算（MPC）允许n个参与者联合计算他们的私有输入上的函数。 Ben-Or，Canetti和Goldreich [STOC'93]和Ben-Or，Kelmer和Rabin [PODC'94]的开创性工作解决了异步网络上MPC的可行性。尽管有许多工作致力于改进通信复杂度，但当前具有信息理论安全性和最佳弹性t <n / 3的协议通信 \(\varOmega (n^4C)\)个场元素用于具有C个乘法门的电路。相比之下，已知有着 \(\varOmega (nC)\) 通信量的同步MPC协议。
> 
> 在这项工作中，我们朝着缩小这一差距迈出了一步。我们在具有统计安全性的异步设置中提供了一种新颖的MPC协议，它使用异步完整秘密共享（ACSS）协议的黑匣子。每个乘法的成本可以通过ACSS分发常数数量的共享来降低成本，相比于Choudhury和Patra的最新技术水平[IEEE Trans. Inf. Theory'17]提高了一个线性因子。
> 
> 随着最近的并行工作实现了具有线性成本的ACSS共享，我们实现了具有O（nC）通信量的MPC。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_6](https://doi.org/10.1007/978-3-031-68397-8_6)
## Game-Theoretically Fair Distributed Sampling.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#game-theoretically-fair-distributed-sampling) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#game-theoretically-fair-distributed-sampling)**
### 作者
* Sri AravindaKrishnan Thyagarajan, School of Computer Science, University of Sydney, Camperdown, Australia
* Pratik Soni, Kahlert School of Computing, University of Utah, Salt Lake City, USA
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> Cleve的著名结果（STOC'86）表明，与多数派联盟相比，强公平的多方抛硬币是不可能的。然而，最近，一种令人着迷的工作线路研究了一种放宽的公平性概念，称为博弈理论公平，它保证任何联盟都不应被激励从规定的协议中偏离。一系列的作品探索了针对两方抛硬币的博弈论公平的可行性，并在标准密码假设下展示了在不诚实多数派情况下的可行性。然而，这一系列的研究只集中于统一的两方抛硬币或领导者选举。
> 
> 在这项工作中，我们开始全面研究博弈论公平对从一般分布中的多方取样的适用性。特别是，针对m面统一抛硬币的情况，我们几乎完全刻画了博弈论公平可行性的范围。有趣的是，与密码学中的标准公平性概念相反，博弈论公平的两方抛硬币协议的组合不一定会产生博弈论公平的多方硬币。为了解决这个问题，我们引入了与博弈论公平相容的新技术。特别地，我们给出了以下结果：
> 
> 我们提供了一个从标准密码假设中获得博弈论公平的协议，可针对半数或更大的敌对联盟进行m面统一抛硬币。
> 
> 为了补充我们的协议，我们提供了一个普遍的不可能结果，除了加性常数，就参数范围而言我们的协议是最优的。即使在最坏情况下，我们的协议和我们不可能的结果之间的差距仅是一个小常数倍数因子。
> 
> 我们还为不诚实的大多数情况下所有有效采样的m结果分布提供了一个博弈论公平协议。例如，即使对于m=2的情况（即两面硬币），我们的结果也意味着任意伯努利硬币的博弈论公平协议。相比之下，Wu、Asharov和Shi的工作只集中在参数为1/2的伯努利硬币上。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_7](https://doi.org/10.1007/978-3-031-68397-8_7)
## Doubly Efficient Cryptography: Commitments, Arguments and RAM MPC.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#doubly-efficient-cryptography-commitments-arguments-and-ram-mpc) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#doubly-efficient-cryptography-commitments-arguments-and-ram-mpc)**
### 作者
* Wei-Kai Lin, University of Virginia, Charlottesville, USA
* Ethan Mook, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> 发送者能否在不完全阅读所有内容的情况下承诺长时间的输入？证明者能否说服验证者NP语句持有而无需完全阅读整个证明？一组参与方能否在RAM模型中运行多方计算(MPC)协议，而无需完全阅读他们的整个输入？我们展示了如何在参与方可以离线预处理其输入的情况下构建这样的“双效率”方案，随后可以在此输入上进行多种不同的协议执行，且占用子线性的在线时间。我们在没有任何常见设置的情况下使用纯模型进行构建。我们的构建依赖于双效率的私人信息检索（DEPIR）作为一个构建模块，并且可以基于环LWE进行实例化。
> 
> 更详细地说，我们首先构建了双效率的（互动式）承诺，发送者可以在离线情况下预处理输入，并且随后可以在子线性的在线时间内向任意接收方承诺这个输入。此外，发送者可以在子线性时间内打开已承诺输入的单个比特。然后我们使用这些承诺来实现双倍简明的（互动式）论证，证明者可以在离线情况下预处理语句/证人，并且随后可以运行多个证明协议来说服任意验证者在子线性的在线时间内证明语句的有效性。此外，我们增强了这些功能以获得一种双效率的“承诺，证明和本地打开”协议，证明者可以在子线性时间内提交长时间预处理的输入，证明它满足一些全局性质，并且本地打开单个比特。最后，我们利用这些工具来在纯模型中构建具有恶意安全性的RAM-MPC。每个参与方可以在离线情况下预处理其输入，然后与任意其他参与方一起运行对此输入的任意MPC执行。每个MPC执行的在线运行时间仅与基础程序的RAM运行时间成比例，该运行时间可以在输入大小上是子线性的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_8](https://doi.org/10.1007/978-3-031-68397-8_8)
## Improved Alternating-Moduli PRFs and Post-quantum Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#improved-alternating-moduli-prfs-and-post-quantum-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#improved-alternating-moduli-prfs-and-post-quantum-signatures)**
### 作者
* Navid Alamati, VISA Research, Foster City, USA
* Peter Rindal, VISA Research, Foster City, USA
* Guru-Vamsi Policharla, UC Berkeley, Berkeley, USA
* Srinivasan Raghuraman, VISA Research and MIT, Cambridge, UK
### 摘要
> 我们重新审视了交替模数构建对称密钥原语的范例，重点是构建高效的协议以使用安全多方计算（MPC）来评估它们。Boneh等人的交替模数范例（TCC 2018）可以通过两个不同模数上的线性映射相乘来构造各种对称密钥原语，首先是在\(\mathbb {F}_2\)上，然后是在\(\mathbb {F}_3\)上。
> 
> 第一个贡献的重点是交替模数PRF的高效二方评估，有效地构建一个无意识伪随机函数。我们提出了一个广义的PRF，同时提供了降低通信和计算的方法。然后，我们提供了几个协议的变体，计算和通信有不同的权衡，用于评估PRF。大多数协议处于OT/VOLE混合模型中，而有一个基于专门的干扰。我们最有效的协议实际上约快\(3\times \)，需要\(1.3\times \)较少的通信。
> 
> 我们的下一个贡献是有效地评估OWF \(f(x)=\textbf{B}\cdot _3 (\textbf{A}\cdot _2 x)\)，由Dinur等人提出。（CRYPTO 21）其中\(\textbf{A}\in \mathbb {F}^{m\times n}_2, \textbf{B}\in \mathbb {F}^{t\times m}_3\)，\(\cdot _p\)是模p的乘法。通过在\(\mathbb {F}_2\)上进行密钥共享\({\llbracket x \rrbracket }\)，局部计算\({\llbracket v \rrbracket }=\textbf{A}\cdot _2 {\llbracket x \rrbracket }\)，执行到\(\mathbb {F}_3\)共享的模数切换协议，然后在本地计算输出共享\({\llbracket y \rrbracket }=B\cdot _3 {\llbracket v \rrbracket }\)，可以在MPC中评估这个惊人简单的OWF。我们设计了一种特殊的MPC-in-the-Head（MPCitH）签名方案来评估OWF，实现了最先进的性能。结果签名的大小为4.0-5.5 KB，与Dinur等人相比，可以实现2-3倍的减少。据我们所知，这仅比基于对称密钥原语的最小签名略大，包括最新的NIST PQC竞赛提交。我们还展示了我们的核心技术可以扩展到构建非常小的后量子环签名，适用于中小型环，与最先进的基于格的方案相竞争。实际上，我们的技术更普遍适用于MPCitH中的成员关系。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_9](https://doi.org/10.1007/978-3-031-68397-8_9)
## Computation Efficient Structure-Aware PSI from Incremental Function Secret Sharing.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#computation-efficient-structure-aware-psi-from-incremental-function-secret-sharing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#computation-efficient-structure-aware-psi-from-incremental-function-secret-sharing)**
### 作者
* Gayathri Garimella, Brown University, Providence, USA
* Benjamin Goff, Brown University, Providence, USA
* Peihan Miao, Brown University, Providence, USA
### 摘要
> Garimella等人最近在Crypto'22中介绍了一种结构感知的私有集交集（sa-PSI），其中Alice的输入集合S_A具有公开的结构（例如间隔，球或球的并集），而Bob的输入S_B是一个非结构化元素集合。先前的工作实现了sa-PSI，其中通信成本仅随着S_A的描述大小而不是集合基数增长。然而，计算成本仍然与S_A基数成线性关系，这可能是难以承受的大量。
> 
> 在本文中，我们提出了一个新的半诚实sa-PSI框架，其中计算和通信成本仅随着S_A的描述大小增长。我们的主要构建块是一种我们引入的新的原语，称为增量布尔函数秘密共享（ibFSS），这是FSS的一般化，另外允许在输入前缀上进行评估。我们规范化定义并为具有\(\ell _\infty \)范数的d维球体构造了一个弱ibFSS，这可能是独立的兴趣。与此同时，当S_A具有形如\((\{0,1\} ^u)^d\)中d维球体的结构联合体，并且每个球的直径为\(\delta \)时，我们改进了空间散列技术（从先前的工作），从\(\mathcal {O} (u \cdot d \cdot (\log \delta )^d)\)到\(\mathcal {O} (\log \delta \cdot d)\)，无论在计算还是通信方面。最后，我们解决了先前工作中随描述大小缩放的结构集合的以下未解决问题。
> 
> 我们的PSI框架可以处理重叠结构的联合，而先前的工作严格要求是不相交的联合。
> 
> 我们有一种新的构造，使Bob能够学习相交。
> 
> 我们扩展到更丰富的功能类别，如结构感知的PSI基数和相关值的PSI-Sum。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_10](https://doi.org/10.1007/978-3-031-68397-8_10)
## Compressing Unit-Vector Correlations via Sparse Pseudorandom Generators.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#compressing-unit-vector-correlations-via-sparse-pseudorandom-generators) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#compressing-unit-vector-correlations-via-sparse-pseudorandom-generators)**
### 作者
* Amit Agarwal, UIUC, Champaign, USA
* Elette Boyle, Reichman University, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Mahimna Kelkar, Cornell University, Ithaca, USA
* Yiping Ma, University of Pennsylvania, Philadelphia, USA
### 摘要
> 一个单位向量(UV)相关性是一个添加式密钥共享，其包含长度为B的向量，在一个秘密随机位置包含1，其他位置为0。UV相关性是许多密码应用的有用资源，包括低通信安全多方计算和多服务器私人信息检索。然而，目前用于安全生成UV相关性的实际方法每个实例涉及显著的通信成本，并且在需要针对恶意参与者的安全性时变得更加昂贵。
> 
> 在这项工作中，我们提出了一种新方法，用于构建一个伪随机相关性生成器（PCG），用于安全生成任意多项式长度B的n个独立UV相关性实例。这样的PCG将n个UV实例压缩成相关种子，其长度在描述大小\(n\cdot \log B\)的次线性长度内。我们的新PCG适用于诚实大多数和不诚实大多数情况，并基于各种假设。特别是，在诚实大多数情况下，它们仅需要“非结构化”假设。我们的PCG可以产生生成n个UV相关性实例的安全端到端协议，通信量为o(n)比特。甚至适用于一种经过认证的UV相关性变体，对抗恶意参与者很有用。与以前的理论解决方案不同，我们的一些PCG实例提供了良好的具体效率。
> 
> 我们的技术方法基于将低度稀疏伪随机生成器与将稀疏种子映射到伪随机稀疏输出的同态秘密分享相结合，然后将这种稀疏PRG减少到大字母表上的本地PRG，并探索了旧的和新的方法，以最大限度地增加这些PRG的拉伸，同时最小化它们的局部性。
> 
> 最后，为了进一步压缩PCG种子，我们提出了一个基于PRG的多方分布点函数（DPF）的构造，其输出是一个秘密点函数的一次Shamir分享。该结果受到其他DPF应用的独立动机推动。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_11](https://doi.org/10.1007/978-3-031-68397-8_11)
## Scalable Multiparty Computation from Non-linear Secret Sharing.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#scalable-multiparty-computation-from-non-linear-secret-sharing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#scalable-multiparty-computation-from-non-linear-secret-sharing)**
### 作者
* Sanjam Garg, UC Berkeley, Berkeley, USA
* Mingyuan Wang, UC Berkeley, Berkeley, USA
* Abhishek Jain, John Hopkins University, Baltimore, USA
* Abhishek Jain, NTT Research, Sunnyvale, USA
* Pratyay Mukherjee, Supra Research, Kelowna, Canada
### 摘要
> 一系列研究已经探讨了可扩展安全多方计算（MPC）协议的设计，其计算和通信复杂度不依赖于参与方数量（除了对电路大小的依赖之外）。我们提出了第一个针对大型域上算术电路的无条件安全 MPC 协议，其总计算复杂度为 \(\ensuremath {\mathcal {O}\left( {|C|\log |F|}\right) }\)，其中 |C| 和 |F| 分别表示电路和域大小。先前的工作要么只能在通信方面实现类似的复杂性，要么需要高度结构化的电路，或者昂贵的电路转换。为了获得我们的结果，我们摒弃了线性秘密共享方案中的共享打包先前方法；相反，我们采用通过非线性秘密共享的“解包”方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_12](https://doi.org/10.1007/978-3-031-68397-8_12)
## Linear-Communication Asynchronous Complete Secret Sharing with Optimal Resilience.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#linear-communication-asynchronous-complete-secret-sharing-with-optimal-resilience) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#linear-communication-asynchronous-complete-secret-sharing-with-optimal-resilience)**
### 作者
* Xiaoyu Ji, Tsinghua University, Beijing, China
* Yifan Song, Tsinghua University, Beijing, China
* Junru Li, ShanghaiTech University, Shanghai, China
* Yifan Song, Shanghai Qi Zhi Institute, Shanghai, China
### 摘要
> 安全多方计算（MPC）允许一个由n个参与方组成的群体共同对他们的私密输入进行计算。本文关注异步网络设置中的信息论MPC，其拥有最优的弹性（\(t<n/3\)）。在这个设置下，目前最佳的结果是由Choudhury和Patra [J.Cryptol'23]所实现，该结果每个乘法门需要 \(O(n^4\kappa )\)比特，其中 \(\kappa \) 是一个域元素的大小。
> 
> 异步完全秘密共享（ACSS）协议使一个经销商可以共享一个将Shamir共享分成一批的协议，以便所有参与方最终接收到他们的共享。ACSS是AMPC的一个重要构建块。当前ACSS的最佳结果是由Choudhury和Patra [J.Cryptol'23]所实现，该结果每个共享需要 \(O(n^3\kappa )\)比特。另一方面，在同步设置中，已经知道分发Shamir共享可用 \(O(n\kappa )\)比特/每个共享来实现。同步设置和异步设置之间的通信有着\(n^2\)的差距。
> 
> 我们的工作通过提出第一个ACSS协议来填补这个差距，该协议每个共享需要 \(O(n\kappa )\)比特。当与Choudhury和Patra [IEEE Trans. Inf. Theory'17]的ACSS到AMPC编译器结合使用时，我们获得了AMPC，其每个乘法门需要 \(O(n^2\kappa )\)比特，使结果大大优于以往的最佳结果，达到了 \(n^2\) 倍。此外，在一个可以提高Choudhury和Patra编译器的并发工作中，我们获得了第一个每个乘法门只需要 \(O(n\kappa )\)比特的AMPC。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_13](https://doi.org/10.1007/978-3-031-68397-8_13)
## Cheater Identification on a Budget: MPC with Identifiable Abort from Pairwise MACs.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-8].md#cheater-identification-on-a-budget-mpc-with-identifiable-abort-from-pairwise-macs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-8].md#cheater-identification-on-a-budget-mpc-with-identifiable-abort-from-pairwise-macs)**
### 作者
* Carsten Baum, Technical University of Denmark, Lyngby, Denmark
* Nikolas Melissaris, Aarhus University,  Aarhus, Denmark
* Peter Scholl, Aarhus University,  Aarhus, Denmark
* Rahul Rachuri, Visa Research, Foster City, USA
### 摘要
> 在安全多方计算(MPC)中，作弊者识别允许诚实的参与方在协议中止时就作弊方的身份达成一致。在不诚实的多数情况下，这变得尤为关键，因为它有助于防止拒绝服务攻击，并缓解已知的公正性和保证输出交付的不可能性结果。
> 
> 在这项工作中，我们提出了一种新的轻量级方法来实现不诚实多数MPC中的可识别中止。我们避免了先前工作中使用的所有重要机器，而是依靠轻量级检测机制和来自最先进的安全协议的技术的谨慎组合。
> 
> 我们构造的核心是一种支持可识别中止的同态、多接收方承诺方案。该承诺方案可以从基于带有噪音奇偶性学习的便宜向量无知线性评估协议构建而成。为了支持作弊者识别，我们设计了一种通用的编译技术，类似于Ishai等人的编译器(Crypto 2014)，但避免了对基础协议自适应安全性的要求。相反，我们依靠一种不同的(似乎更容易实现的)属性，称为在线可提取性，这可能是独立的利益。我们的MPC协议可以看作是基于成对信息理论MAC的BDOZ MPC方案(Bendlin等人，Eurocrypt 2011)，增强了作弊者识别和高度有效的预处理阶段，基本上与Le Mans的不可识别协议(Rachuri和Scholl，Crypto 2022)一样高效。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68397-8_14](https://doi.org/10.1007/978-3-031-68397-8_14)
