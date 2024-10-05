# Eurocrypt[2022-1]
## EpiGRAM: Practical Garbled RAM.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#epigram-practical-garbled-ram) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#epigram-practical-garbled-ram)**
### 作者
* David Heath, Georgia Tech, Atlanta, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> 笔者将为您翻译一篇研究论文的摘要。
> 
> Garbled RAM（GRAM）是由Lu和Ostrovsky提出的一种强大技术，可以使加密电路（GC）配备一个亚线性成本的RAM，并且无需增加交互轮数。尽管已知有多个GRAM构建方法，但由于具有较高常数和差劲的扩展性，它们都不适用于实践应用。
> 
> 我们提出了第一个适用于实践应用的GRAM。对于计算安全参数\(\kappa\)，以及存储大小为\(w = \varOmega (\log ^2n)\)位的一个n大小的RAM，我们的GRAM每次访问会产生摊销\(O(w \cdot \log ^2 n \cdot \kappa )\)的通信和计算成本。我们评估了GRAM的具体成本；与仅包含512个128位元素的琐碎线性扫描RAM相比，我们的方法表现更好。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_1](https://doi.org/10.1007/978-3-031-06944-4_1)
## Garbled Circuits with Sublinear Evaluator.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#garbled-circuits-with-sublinear-evaluator) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#garbled-circuits-with-sublinear-evaluator)**
### 作者
* Abida Haque, NC State, Raleigh, USA
* David Heath, Georgia Tech, Atlanta, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
* Akash Shah, UCLA, Los Angeles, USA
### 摘要
> 最近的一项研究工作，Stacked Garbled Circuit（SGC）表明了Garbled Circuit（GC）可以在包含条件行为的函数中得到改进。 SGC通过仅向总共b个分支之一发送足够的混淆材料来缓解2PC的通信瓶颈。因此，通信在电路规模上是亚线性的。然而，与标准GC相比，评估者和生成者都要在计算方面付出代价，并额外进行至少因子\(\log b\)的工作。
> 
> 我们将SGC的亚线性特性扩展到GC评估者\(E\)所执行的工作; 因此我们实现了完全亚线性的\(E\)，这在优化在线阶段时是必要的。我们将我们的方法正式地形式化为一种称为\(\mathsf {GCWise}\)的哈密方案：具有亚线性评估器的GC。
> 
> 我们展示了一个吸引人且立即可行的应用，即Garbled PIR，它将GC与私有信息检索结合起来。Garbled PIR允许GC以非交互和亚线性的方式从公开已知的数据库中访问私下索引的元素，并将此元素用于继续的GC评估。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_2](https://doi.org/10.1007/978-3-031-06944-4_2)
## Round-Optimal and Communication-Efficient Multiparty Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-and-communication-efficient-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-and-communication-efficient-multiparty-computation)**
### 作者
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Hendrik Waldner, The University of Edinburgh, Edinburgh, UK
* Rafail Ostrovsky, University of California, Los Angeles, CA, USA
* Vassilis Zikas, Purdue University, West Lafayette, IN, USA
### 摘要
> 典型的协议用于最小化多方计算 (MPC) 的交互轮次通常会增加通信复杂度 (CC) 或依赖设置假设。Ananth等人最近的工作[TCC 2019]是一个显著的例外，他们利用功能加密（FE）合并器在纯模型中获得了一种轮次最优（两轮）的半诚实MPC协议，其通信复杂度与计算的电路深度和输入-输出长度成正比——我们称这类协议为电路可扩展协议。这开启了在纯模型中获得对恶意对手安全的通信高效协议的问题，我们在本文中提出了这个问题。具体来说，我们的两个主要贡献是：
> 
> 1) 我们提供了一个保留轮次的黑盒编译器，可以将一类广泛的MPC协议编译成在纯模型中电路可扩展的恶意安全MPC协议，假设（简洁的）FE合并器存在。
> 
> 2) 我们提供了一个保留轮次的黑盒编译器，可以将一类广泛的MPC协议编译成独立于电路的恶意安全MPC协议，即其通信复杂度只取决于电路的输入-输出长度，假设多密钥全同态加密（MFHE）存在。我们的构造基于一个新的编译器，它将一类MPC协议转换成k-延迟输入函数MPC协议（我们引入的概念），其中进行计算的函数仅在协议的第k轮中指定。
> 
> 作为我们两个编译器的直接推论，我们得到了（1）第一个具有轮次最优和电路可扩展的恶意安全MPC，以及（2）第一个轮次最优和与电路无关的恶意安全MPC在纯模型中。后者的MPC实现了迄今为止轮次最优恶意MPC协议的最佳通信复杂度。事实上，当所评估的函数的输出大小小于输入大小时（例如，对于布尔函数），甚至通信是最优的。我们所有的结果都基于标准的多项式时间假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_3](https://doi.org/10.1007/978-3-031-06944-4_3)
## Round-Optimal Byzantine Agreement.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-byzantine-agreement) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-byzantine-agreement)**
### 作者
* Diana Ghinea, ETH Zurich, Zürich, Switzerland
* Vipul Goyal, Carnegie Mellon University and NTT Research, Pittsburgh, USA
* Chen-Da Liu-Zhang, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 拜占庭一致性是密码学和分布式计算中的基本原语，最小化其轮数复杂性至关重要。我们早已知晓，在线随机议定书的r轮协议必须以至少\((c \cdot r)^{-r}\)的概率失败，其中c为某个常量，当破坏者数量与参与方数量成线性关系，即\(t = \theta (n)\)。另一方面，当前的协议在至少\(2^{-r}\)的概率上会失败。目前我们尚不清楚是否能够达到下限一致性概率。
> 
> 在这项工作中，我们解决了这个悬而未决的问题。我们提出了一个协议，它与下限相匹配，只有常数因子的差距。我们的结果适用于具备（严格）紧迫性的自适应敌手，该敌手可以感染高达\(t = (1-\epsilon )n/2\)个参与方，并且我们的协议使用了公钥基础设施和一个用于唯一阈值签名的可信设置。这是第一个每轮降低失效概率（整体来说）超线性的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_4](https://doi.org/10.1007/978-3-031-06944-4_4)
## A Complete Characterization of Game-Theoretically Fair, Multi-Party Coin Toss.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#a-complete-characterization-of-game-theoretically-fair-multi-party-coin-toss) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#a-complete-characterization-of-game-theoretically-fair-multi-party-coin-toss)**
### 作者
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Computer Science Department, Carnegie Mellon University, Pittsburgh, USA
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 克利夫的著名的下界（STOC'86）表明，在2方硬币投掷中事实上强公平概念是不可能的，即腐败的一方总是有一定程度的偏向诚实方结果的策略。然而，布卢姆著名的抛硬币协议（CRYPTO'81）实现了一个严格较弱的“博弈论”公平概念——特别是，这是一个2方硬币投掷协议，其中任何一方都无法偏向自己的偏好结果；因此诚实的协议形成了纳什均衡，任何一方都不愿意偏离。令人惊讶的是，布卢姆的著名硬币投掷协议的n方模拟直到最近才开始研究。Chung等人的工作（TCC'18）是第一个探索在多数腐败存在的情况下，协议公平的n方硬币投掷的可行性。我们可以假设每个方都公开声明对bit 0或1的偏好，如果结果符合方的偏好，它获得1的效用；否则它什么也得不到。
> 
> 一个自然的博弈论形式是要求诚实的协议形成一个联盟抵抗的纳什均衡，也就是说，没有任何联盟有动机偏离诚实的行为。Chung等人把这个博弈论概念称为“合作-策略-确性”或“CSP-公平”简称。不幸的是，Chung等人表明，在\((n-1)\)大小的联盟下，设计这样的CSP-公平硬币投掷协议是不可能的，除非所有方除了一个偏好相同的位。
> 
> 在本文中，我们表明Chung等人的不可能性实际上不像看起来那么广泛。当联盟是多数但不是\(n-1\)大小时，在某些有意义的参数范围内，我们确实可以得到可行性的结果。我们通过提供上下界的匹配来完整刻画了CSP-公平硬币投掷可能的范围。我们完整的特征化定理还表明，博弈论公平的数学结构与多方计算文献中的事实上的强公平概念截然不同。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_5](https://doi.org/10.1007/978-3-031-06944-4_5)
## Lightweight, Maliciously Secure Verifiable Function Secret Sharing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#lightweight-maliciously-secure-verifiable-function-secret-sharing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#lightweight-maliciously-secure-verifiable-function-secret-sharing)**
### 作者
* Leo de Castro, MIT, Cambridge, USA
* Anitgoni Polychroniadou, J.P. Morgan AI Research, New York, USA
### 摘要
> 在这项工作中，我们提出了一个轻量级的验证两方功能秘密共享（FSS）的构造，用于点函数和多点函数。我们的验证方法从两个方面来说是轻量级的。首先，它在具体效率上是高效的，只使用对称密钥操作，不涉及公钥或MPC技术。我们的性能与最先进的不可验证DPF构造相当，并且在计算和通信复杂性方面都超过了以前的所有DPF验证技术，我们通过我们方案的实施来证明这一点。其次，我们的验证程序基本上是无约束的。它将验证分布式点函数（DPF）的份额是否对应于一些点函数，而不管输出组的大小，DPF输出的结构或者DPF必须评估的点集。这与以前的作品形成了鲜明的对比，这些作品依赖于至少一个甚至所有三个约束条件。此外，我们的构造是第一个可以验证一般DPF的DPF验证协议，即使一个服务器是恶意的。之前关于DPF恶意安全验证的工作只能验证输出非零二进制且输出空间为大场的DPF。
> 
> 作为一个额外的特性，我们的验证程序可以批处理，这样验证多项式数量的DPF份额需要与验证一对DPF份额相同数量的通信。我们将这个打包的DPF验证与一种新颖的方法结合起来，将DPF打包成多点函数的份额，其中评估时间、验证时间和验证通信与函数中非零点的数量无关。
> 
> 我们结果的一个直接推论是两服务器的PIR和PSI协议，当三方中的任何一方是恶意的时候（客户端或其中一个服务器），它们仍然是安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_6](https://doi.org/10.1007/978-3-031-06944-4_6)
## Highly Efficient OT-Based Multiplication Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#highly-efficient-ot-based-multiplication-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#highly-efficient-ot-based-multiplication-protocols)**
### 作者
* Iftach Haitner, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eliad Tsfadia, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Iftach Haitner, Check Point Institute for Information Security, Tel Aviv, Israel
* Nikolaos Makriyannis, Fireblocks, New York, USA
* Samuel Ranellucci, Coinbase, San Francisco, USA
* Eliad Tsfadia, Google Research, Tel Aviv, Israel
### 摘要
> 我们提出了一种新的基于OT的两方乘法协议，几乎与Gilboa的诚实协议（Crypto’99）一样高效，但对恶意对手具有高水平的安全性，而无需进一步编译。实现的安全性足以满足许多应用程序的需求，并且在假设DDH的情况下，可以便宜地编译为完全安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_7](https://doi.org/10.1007/978-3-031-06944-4_7)
## Round-Optimal Black-Box Protocol Compilers.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-black-box-protocol-compilers) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-black-box-protocol-compilers)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 我们在随机预言模型（Random Oracle Model，ROM）和1-out-of-2 OT协议模型中，提供了从半诚实安全到恶意安全的黑盒、回合最优的协议编译器。我们使用这些编译器得到了以下结果：
> 
> 在随机预言模型中，通过黑盒使用两轮半诚实安全协议，获得了针对恶意对手安全的两轮、两方协议。我们的工作证明了，即使考虑到特殊功能（如两轮的无忧传输），之前并没有类似的发现。该结果还意味着，在随机预言模型中首次构建了基于黑盒使用两轮半诚实（批量）OT/OLE的两轮恶意（批量）OT/OLE。
> 
> 在随机预言模型中，基于黑盒使用两轮半诚实OT，我们提出了一种抵御恶意对手的三轮多方安全计算协议。该协议与Applebaum等人（ITCS'20）的已知回合复杂性下界相匹配，并且基于一个最小的密码学困难假设。
> 
> 在1-out-of-2 OT协议模型中，通过使用密码学技术，我们提出了一种安全且黑盒使用的两轮多方安全计算协议，可以抵御恶意对手。该协议为计算数据分支程序提供了新的回合最优协议，确保了统计上的安全，并可黑盒使用底层领域知识。
> 
> 作为独立有意义的贡献，我们在两轮设置中提供了IPS编译器（Ishai, Prabhakaran and Sahai, Crypto 2008）的一种新变体，通过加强“外部协议”，放宽了对IPS“内部协议”的要求。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_8](https://doi.org/10.1007/978-3-031-06944-4_8)
## Guaranteed Output in $O(\sqrt{n})$ Rounds for Round-Robin Sampling Protocols.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#guaranteed-output-in-o-sqrt-n-rounds-for-round-robin-sampling-protocols) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#guaranteed-output-in-o-sqrt-n-rounds-for-round-robin-sampling-protocols)**
### 作者
* Ran Cohen, Reichman University, Herzliya, Israel
* Jack Doerner, Northeastern University, Boston, UK
* Yashvanth Kondi, Northeastern University, Boston, UK
* Abhi Shelat, Northeastern University, Boston, UK
### 摘要
> 我们引入了一种循环安全取样的概念，该概念涵盖文献中的几个协议，如基于配对的多项式承诺和 zk-SNARKs 的“powers-of-tau”设置协议，以及某些可验证混合网络。
> 
> 由于它们的循环结构，这一类协议本质上需要 n 个顺序广播轮次，其中 n 是参与者的数量。
> 
> 我们描述了如何将它们通用地编译成仅需要 \(O(\sqrt{n})\) 广播轮次的协议。我们的编译协议确保针对任何不诚实的多数体交付输出。这与先前的技术形成鲜明对比，在大多数情况下需要 \(\varOmega (n)\) 顺序广播（有时更多）。我们的编译协议允许输出中存在一定量的敌对偏见，因为由于 Cleve 的不可能结果（STOC’86），所有具有保证输出的取样协议都必须如此。我们展示了在前述应用的背景下，这种偏见是无害的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_9](https://doi.org/10.1007/978-3-031-06944-4_9)
## Universally Composable Subversion-Resilient Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#universally-composable-subversion-resilient-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#universally-composable-subversion-resilient-cryptography)**
### 作者
* Suvradip Chakraborty, ETH Zurich, Zürich, Switzerland
* Bernardo Magri, The University of Manchester, Manchester, UK
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
### 摘要
> 子版本攻击通过用一个泄漏信息的实施方法替换合法诚实方的实施方案，破坏了密码协议的安全性。目前已知的用于设计具有对抗子版本攻击安全性的密码协议的所有技术的一个重要局限性是，它们并不能自动地保证在实际环境中，一个协议会话可能与其他协议并行运行时的安全性。
> 
> 我们通过在通用可合成性 (UC) 框架 (Canetti, FOCS’01 and J. ACM’20) 中提供 reverse firewalls (Mironov 和 Stephens-Davidowitz, EUROCRYPT’15) 的基础来解决这一情况。具体来说，我们的贡献有三个方面：
> 
> 我们将 UC 框架推广到每个参与方都由核心（具有秘密输入并负责生成协议消息）和防火墙（没有秘密并清理来自核心的外发/入互通通信）组成的情况。核心和防火墙都可能遭受不同类型的腐败，模拟不同类型的子版本攻击。例如，我们捕捉了一个被颠覆的核心看起来对于任何有效测试都像正派核心的情况，但它可能通过隐蔽通道泄露秘密信息（我们称之为虚假子版本）。
> 
> 我们展示了如何根据 DDH 假设来清理 UC 承诺和 UC 抛硬币，对抗虚假子版本。
> 
> 我们展示了如何清理经典的 GMW 编译器 (Goldreich, Micali and Wigderson, STOC 1987) ，将在存在半诚实对手的情况下具有安全性的 MPC 转化为在存在恶意对手的情况下具有安全性的 MPC。这产生了对于在存在虚假子版本情况下的恶意安全 MPC 的一个完整性定理。
> 
> 另外，我们所有清理后的协议都是透明的，即与清理后的核心通信在视觉上无法与与诚实核心通信区分。由于组合定理，我们的方法论首次允许通过模块化的方法清理不同的子组件来设计对抗子版本的协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_10](https://doi.org/10.1007/978-3-031-06944-4_10)
## Asymptotically Quasi-Optimal Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#asymptotically-quasi-optimal-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#asymptotically-quasi-optimal-cryptography)**
### 作者
* Leo de Castro, MIT, Cambridge, UK
* Vinod Vaikuntanathan, MIT, Cambridge, UK
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Muthu Venkitasubramaniam, Georgetown University, Washington, USA
### 摘要
> 密码学的计算开销最小化问题是通过Ishai、Kushilevitz、Ostrovsky和Sahai（2008年STOC）的研究提出的。主要结论是，在合理的假设下，大多数密码学原语可以以恒定的计算开销实现。然而，这忽略了一个可能会多项式地依赖于（具体的）计算安全参数\(\lambda\)的附加项。在这项工作中，我们研究了在所有选择n和\(\lambda\)的情况下，通过多对数因子获得最佳效率的问题，其中n是给定任务的大小。特别是当\(n=\lambda\)时，我们希望计算成本只有\(\tilde{O}(\lambda)\)。我们将这个目标称为渐近准最优（AQO）密码学。
> 
> 我们首先实现了第一个AQO半诚实批量无知线性评估（BOLE）协议。我们的协议适用于在小域上进行OLE，并依赖于环学习与错误（RLWE）假设的接近指数级的安全性。在上述基础上，并结合已知的AQO PCP（可证明性证明）构造，我们设计了第一个AQO零知识（ZK）布尔电路可满足性的论证系统。我们的构造将新的AQO ZK-PCP构造与通过OLE逆转将统计机密性转化为声明性的技术相结合。最后，结合以上结果，我们获得了针对RLWE下恶意方的AQO安全计算协议，用于布尔电路的安全计算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_11](https://doi.org/10.1007/978-3-031-06944-4_11)
## Round-Optimal Multi-party Computation with Identifiable Abort.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-multi-party-computation-with-identifiable-abort) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#round-optimal-multi-party-computation-with-identifiable-abort)**
### 作者
* Michele Ciampi, The University of Edinburgh, Edinburgh, UK
* Hendrik Waldner, The University of Edinburgh, Edinburgh, UK
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Concordium Blockchain Research Center, Aarhus, Denmark
### 摘要
> 安全的多方计算（MPC）协议能够抵御不诚实的多数，使对手能够在计算结果的同时，迫使诚实方放弃。Aumann和Lindell提出了具有可识别中止的增强安全性概念，允许对手触发中止，同时使诚实方能就导致中止的一方达成一致。更近期在Eurocrypt 2016中，Garg等人表明，假设所有方均可进行同时消息交换通道，至少需要四轮通信才能在普通模型中安全实现非平凡功能。
> 
> 根据Garg等人的研究，一系列工作已经达到了这个下限，但都没有达到具有可识别中止的安全性。在本文中，我们填补了这一空白，并且证明了使用标准和通用的多项式时间假设，四轮通信也足以安全实现具有可识别中止的任何功能。为了达到这一结果，我们引入了有界重播安全MPC的新概念，保证了即使在对手进行轻微形式的重置攻击时也能保证安全。我们展示了如何从任何MPC协议开始实现这一基本概念，并假设陷阱门置换。
> 
> 有界重播安全MPC的概念使得MPC协议可以更轻松地与其他（互动式）加密基元进行并行组合。因此，我们相信这一基本概念在其他环境中也可以发挥作用，这些环境中结合MPC协议与多个基元的重要性，同时保持最终协议的通信轮数较低。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_12](https://doi.org/10.1007/978-3-031-06944-4_12)
## On the Security of ECDSA with Additive Key Derivation and Presignatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#on-the-security-of-ecdsa-with-additive-key-derivation-and-presignatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#on-the-security-of-ecdsa-with-additive-key-derivation-and-presignatures)**
### 作者
* Jens Groth, DFINITY, Zurich, Switzerland
* Victor Shoup, DFINITY, Zurich, Switzerland
### 摘要
> ECDSA签名的两种常见变体是加法密钥派生和预签名。加法密钥派生是从单个主密钥派生许多子密钥的简单机制，并且已经在加密货币应用中广泛使用，特别是在比特币改进提案32（BIP32）中标准化的分层确定性钱包机制中。由于其线性特性，加法密钥派生也适用于阈值设置下的高效实现。预签名是在ECDSA签名算法中预计算使用的秘密和公共nonce。在阈值设置下，使用预签名和其他预计算数据可实现协议的极其高效的“在线阶段”。近期的研究支持这两种变体，有时将它们结合在一起使用。然而，令人惊讶的是，我们意识到还没有关于加法密钥派生的先前安全证明，更不用说加法密钥派生与预签名结合的安全性证明了。
> 
> 在本文中，我们对这些变体进行了全面分析，既独立分析又组合分析。我们的分析基于通用群模型（GGM）。重要的是，我们不修改ECDSA，也不以任何方式削弱标准的安全概念。出于独立的兴趣，我们还提出了一种特定于椭圆曲线的GGM版本。这个EC-GGM更好地模拟了ECDSA的一些特殊之处（例如转换函数和易变性）。除了这项分析外，我们还报告了这些变体中以前未曾报道的安全弱点。例如，我们展示了当这两种变体结合使用时，对ECDSA存在一个立方根攻击，比对普通ECDSA的最佳已知平方根攻击速度更快。我们还提出了两种缓解这些弱点的方法：重新随机化预签名和齐次密钥派生。每个缓解方法都非常轻量级，当结合使用时，安全性与普通ECDSA（在EC-GGM中）基本相同。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_13](https://doi.org/10.1007/978-3-031-06944-4_13)
## Secure Multiparty Computation with Free Branching.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-free-branching) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-free-branching)**
### 作者
* Aarushi Goel, Johns Hopkins University, Baltimore, USA
* Aditya Hegde, Johns Hopkins University, Baltimore, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
### 摘要
> 我们研究了包含多个子电路（即分支）且电路输出是单个“活动”分支的分支电路的安全多方计算（MPC）协议。重要的是，活动分支的身份必须对协议参与者保密。
> 
> 虽然可以通过评估每个分支并复用输出来安全地计算这样的电路，但这种方法会产生与整个电路尺寸成正比的通信成本。为了缓解这个问题，最近一系列的研究工作探讨了如何减少MPC中分支执行的通信成本（而不依赖完全同态加密）。特别值得注意的是，叠加编码范式【Heath和Kolesnikov，CRYPTO’20】提供了用于分支电路的编码电路，其尺寸仅取决于最大分支的尺寸。然而，目前尚不清楚如何获得类似的通信改进，以进行涉及多于两个参与方的安全计算。
> 
> 在这项工作中，我们提供了一个通用的支持任意数量参与方的分支多方计算框架。我们方案的通信复杂度与最大分支的尺寸成正比，计算复杂度与整个电路的尺寸成线性关系。我们提供了实现和基准测试来证明我们方法的实用性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_14](https://doi.org/10.1007/978-3-031-06944-4_14)
## Secure Multiparty Computation with Sublinear Preprocessing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-sublinear-preprocessing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#secure-multiparty-computation-with-sublinear-preprocessing)**
### 作者
* Elette Boyle, Reichman University (IDC Herzliya), and NTT Research, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Ariel Nof, Technion, Haifa, Israel
### 摘要
> 通过预处理提高安全多方计算(MPC)效率的常见技术，具有不诚实多数特点：在离线阶段，各方参与一个与输入无关的协议，以安全地生成相关的随机性。一旦知道了输入，相关的随机性就消耗在一个“非加密”且高效的在线协议上。
> 
> 这种协议中的相关随机性传统上有两种类型：乘法三元组（Beaver，Crypto '91）,这种足以对半诚实的参与者提供安全保障；以及经过认证的乘法三元组（Bendlin等人，Eurocrypt '11，Damgård等人，Crypto '12）,针对恶意参与者的协议是高效的。
> 
> 最近的伪随机关联生成器构造（Boyle等人，Crypto'19，'20）允许以亚线性通信复杂性安全地生成乘法三元组。然而，这些技术并不能有效地应用于经过认证的三元组，除非是在对大字段上的算术电路进行安全的两方计算的情况下。
> 
> 在这项工作中，我们提出了第一个具体有效的方法，对带预处理的（恶意的）MPC进行处理，其中离线通信是和电路规模的平方根进行比例缩小。更具体地说，离线通信随电路规模的平方根进行扩展。
> 
> 从可行性的角度看，我们的协议可以利用任何为生成(未经认证的)乘法三元组的安全协议，同时利用任何附加同态加密。我们提出了基于强但可信的“仅线性”的假设的具体有效实例，这些实例来自现有的同态加密方案和伪随机关联生成器。
> 
> 我们的技术基于Boyle等人(Crypto '21)最近发布的一种带预处理的MPC协议的变体。结果，我们的协议遗传了后者协议的精简相关随机性特性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_15](https://doi.org/10.1007/978-3-031-06944-4_15)
## Practical Non-interactive Publicly Verifiable Secret Sharing with Thousands of Parties.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#practical-non-interactive-publicly-verifiable-secret-sharing-with-thousands-of-parties) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#practical-non-interactive-publicly-verifiable-secret-sharing-with-thousands-of-parties)**
### 作者
* Craig Gentry, Algorand Foundation, New York, NY, USA
* Shai Halevi, Algorand Foundation, New York, NY, USA
* Vadim Lyubashevsky, IBM Research, Ruschlikon, Switzerland
### 摘要
> 非交互式公开可验证秘密共享(PVSS)方案可以在存在恶意方的分散环境中实现（重新）分享秘密。最近提出了一种将PVSS方案应用于无需许可的权益证明区块链以“保守秘密”的方法，通过一系列共享该秘密的委员会来实现。这些委员会可以使用该秘密代表区块链生成签名，或者在达成共识某事件发生后披露隐藏数据。由于该应用需要非常庞大的数千个参与方组成的委员会，所以所使用的PVSS方案必须足够高效地支持这样大规模的委员会，无论是计算还是通信方面。但是之前的PVSS方案具有庞大的证明和/或需要在大型群组中执行多次指数运算。
> 
> 我们提出了一种非交互式的PVSS方案，其中基础加密方案是基于学习误差(LWE)问题的。虽然基于格的加密方案速度很快，但它们通常具有较长的密文和公钥。我们使用以下两种技术来节约带宽：首先，我们将Peikert-Vaikuntanathan-Waters(PVW)加密方案调整为多接收方设置，从而使大部分参与方的密钥成为一个公共随机字符串。得到的方案能够产生\(\varOmega (1)\)的摊销明文/密文比率，确切地说对于100个参与方，比率约为\(\approx 1/60\)，对于1000个参与方，比率约为\(\approx 1/8\)，并且随着参与方数量的增加，该比率趋近于1/2。其次，我们使用具有大约256位阶数的DL(DL-group)组上的bulletproofs来获得正确加密/解密份额的紧凑证明。
> 
> 在格和DL设置之间进行交替相对来说是不太困难的，因为我们将LWE模数等同于群的阶。我们还展示了如何通过应用类似Johnson-Lindenstrauss压缩的方法来减少bulletproofs中的指数次数，以减小需要验证属性的向量的维度。
> 
> 我们的PVSS方案在1,000个参与方的实现表明，即使在这样的规模下也是可行的，并且即使委员会规模增加一个或两个量级，仍然能够保持可行性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_16](https://doi.org/10.1007/978-3-031-06944-4_16)
## Sine Series Approximation of the Mod Function for Bootstrapping of Approximate HE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#sine-series-approximation-of-the-mod-function-for-bootstrapping-of-approximate-he) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#sine-series-approximation-of-the-mod-function-for-bootstrapping-of-approximate-he)**
### 作者
* Charanjit S. Jutla, IBM T. J. Watson Research Center, Yorktown Heights, NY, USA
* Nathan Manohar, IBM T. J. Watson Research Center, Yorktown Heights, NY, USA
### 摘要
> 虽然众所周知锯齿函数具有逐点收敛的傅里叶级数，但收敛速度对于在模数倍数附近的小间隔内近似模函数的应用而言并不是最佳的。我们展示了一种不同的正弦级数，使得n阶正弦级数在近似模函数中的误差为\(O(\epsilon ^{2n+1})\)，其中\(\epsilon\)为模数倍数附近\(\epsilon\)大小的间隔。此外，在对正弦函数进行泰勒级数近似后，所得的多项式具有较小的系数，并且可以以仅比所寻求的近似精度\(-(2n+1)\log \epsilon\)稍大的精度计算整个多项式。然后，此多项式可用于以几乎任意精度近似模函数，从而允许使用任意精度进行实际CKKS-HE启动。我们通过实现进行验证，并获得100位精度的启动，甚至在较低精度下改进了先前的工作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_17](https://doi.org/10.1007/978-3-031-06944-4_17)
## Limits of Polynomial Packings for $\mathbb {Z}_{p^k}$ and $\mathbb {F}_{p^k}$.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#limits-of-polynomial-packings-for-mathbb-z-p-k-and-mathbb-f-p-k) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#limits-of-polynomial-packings-for-mathbb-z-p-k-and-mathbb-f-p-k)**
### 作者
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Keewoo Lee, Seoul National University, Seoul, Republic of Korea
* Jung Hee Cheon, Crypto Lab Inc., Seoul, Republic of Korea
### 摘要
> 我们正式定义多项式打包方法，并在各个密码学上下文中开展与其相关概念的统一研究。这包括同态加密（HE）中的打包和逆乘法友好嵌入（RMFE），以及信息理论安全的多方计算（MPC）。我们对\(\mathbb {Z}_{p^k}\)或\(\mathbb {F}_{p^k}\)消息打包到\(\mathbb {Z}_{p^t}[x]/f(x)\)中的打包方法，针对以下几个方面给出了若干上界和不可能性结果：(i) 打包密度，(ii) 层次一致性，和 (iii) 映射满性。这些结果对于最近基于\(\mathbb {Z}_{2^k}\)的HE-MPC能够抵御主动篡改多数攻击的发展具有影响，并且为RMFE的上界提供新证明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_18](https://doi.org/10.1007/978-3-031-06944-4_18)
## High-Precision Bootstrapping for Approximate Homomorphic Encryption by Error Variance Minimization.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#high-precision-bootstrapping-for-approximate-homomorphic-encryption-by-error-variance-minimization) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#high-precision-bootstrapping-for-approximate-homomorphic-encryption-by-error-variance-minimization)**
### 作者
* Yongwoo Lee, Samsung Advanced Institute of Technology, Suwon-si, Gyeonggi-do, Korea
* HyungChul Kang, Samsung Advanced Institute of Technology, Suwon-si, Gyeonggi-do, Korea
* Yongwoo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Joon-Woo Lee, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Jong-Seon No, Department of Electrical and Computer Engineering, INMC, Seoul National University, Seoul, Korea
* Young-Sik Kim, Department of Information and Communication Engineering, Chosun University, Gwangju, Korea
* Yongjune Kim, Department of Electrical Engineering and Computer Science, DGIST, Daegu, Korea
### 摘要
> Cheon-Kim-Kim-Song（CKKS）方案（Asiacrypt’17）是最有前途的同态加密（HE）方案之一，因为它使得可以在实数（或复数）上进行隐私保护计算成为可能。众所周知，CKKS方案中最具挑战性的部分是bootstrapping。此外，模约简的同态评估是CKKS bootstrapping的核心。由于模约简不是由复数的加法和乘法表示的，因此应该使用模约简的近似多项式。最好知晓的技术（Eurocrypt’21）使用三角函数及其组合的多项式逼近来进行模约简。然而，所有先前的方法都基于间接逼近，因此需要大量的乘法深度才能达到高精度。本文提出了一种直接的CKKS bootstrapping模约简的多项式逼近，该方法在误差方差和深度方面是最优的。此外，我们提出了一种高效的算法，即惰性baby-step giant-step（BSGS）算法，用于同态评估近似多项式，利用惰性重线性化/重缩放技术。惰性-BSGS相对于普通的BSGS算法将计算复杂性减半。通过使用HE库进行实现，验证了所提算法对CKKS方案的性能改进。实现结果显示，所提方法在模约简的乘法深度方面达到了10，以实现最先进的精度，而先前的方法则具有11到12的深度。此外，我们在较小的乘法深度内实现了更高的精度，例如，在乘法深度为11的情况下实现了93位的精度。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_19](https://doi.org/10.1007/978-3-031-06944-4_19)
## Rubato: Noisy Ciphers for Approximate Homomorphic Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#rubato-noisy-ciphers-for-approximate-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#rubato-noisy-ciphers-for-approximate-homomorphic-encryption)**
### 作者
* Jincheol Ha, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Mincheol Son, KAIST, Daejeon, Korea
* Seongkwang Kim, Samsung SDS, Seoul, Korea
### 摘要
> 一个转换框架将对称密文转换为服务器端的同态密文，减少客户端的计算和通信负担。在Asiacrypt 2021年，Cho等人提出了支持近似计算的\(\mathsf {RtF}\)框架。
> 
> 在本文中，我们提出了一族嘈杂密码，称为\(\mathsf {Rubato}\)，采用一种引入低代数度的对称密码的新设计策略。通过这种策略，与现有的支持同态加密的密码相比，密码的乘法复杂性显著降低，而整体安全性不降低。更具体地说，对于适度的块大小（16到64），\(\mathsf {Rubato}\)在较低的乘法深度（2到5）和每个加密字的小乘法次数（2.1到6.25）方面具有优势，代价是略大的密文扩展（1.26到1.31）。对\(\mathsf {Rubato}\)的安全性进行了全面分析，包括对称和LWE密码分析。与\(\mathsf {RtF}\)框架中的\(\mathsf {HERA}\)相比，客户端和服务器端的吞吐量分别提高了22.9%和32.2%，只增加了1.6%的密文扩展。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_20](https://doi.org/10.1007/978-3-031-06944-4_20)
## Field Instruction Multiple Data.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#field-instruction-multiple-data) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#field-instruction-multiple-data)**
### 作者
* Khin Mi Mi Aung, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Enhui Lim, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Benjamin Hong Meng Tan, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Sze Ling Yeo, Institute for Infocomm Research, Agency for Science, Technology and Research (A*STAR), Singapore, Singapore
* Jun Jie Sim, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Huaxiong Wang, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### 摘要
> 完全同态加密（FHE）自Gentry（STOC 2009）首次构建以来就蓬勃发展。单指令多数据（SIMD）引起了对素数下的向量上高效同态操作的关注，形式为\((\mathbb {F}_{t^d})^\ell\) 。RLWE实例化为具有形式\(X^{2^N}+1\)的圆环多项式，由于高效的快速傅立叶变换，主导了FHE的实现。然而，该选择导致了非常短的SIMD明文向量和高次扩展域，例如对于小质数（\(t = 3, 5, \dots \)），\(\ell < 100, d > 100\)。
> 
> 在这项工作中，我们描述了一种在SIMD之上编码更多数据的方法，即字段指令多数据（Field Instruction Multiple Data），应用了逆乘法友好嵌入（RMFE）到FHE。通过RMFE，长度为\(k\)的\(\mathbb {F}_{t}\)向量可以编码成\(\mathbb {F}_{t^d}\)并进行一次乘法。在进行进一步的乘法之前，结果必须进行重新编码（解码然后重新编码）。我们引入了一种针对FHE的技术，可以在FHE重新编码操作期间免费额外评估编码向量上的任意线性变换。除此之外，我们提出了两种优化方法，以解锁小\(t\)下具有高次扩展域的同态计算：\(r\)-fold RMFE，它允许在重新编码之前对最多\(2^r\)个编码向量进行乘积，以及通过组合两个较小的RMFE获得的RMFE的三阶重新编码过程。我们进行了实验，以评估来自各种RMFE的FIMD与标准SIMD操作相比的有效性。总体而言，我们发现，与相同数量的数据相比，FIMD通常具有\(>2{\times }\)更好（平摊）的乘法时间，同时所需的密文几乎少了\(k/2{\times }\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_21](https://doi.org/10.1007/978-3-031-06944-4_21)
## Cryptanalysis of Candidate Obfuscators for Affine Determinant Programs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#cryptanalysis-of-candidate-obfuscators-for-affine-determinant-programs) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#cryptanalysis-of-candidate-obfuscators-for-affine-determinant-programs)**
### 作者
* Li Yao, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yilei Chen, Tsinghua University, Beijing, 100084, China
* Yilei Chen, Shanghai Qi Zhi Institute, Shanghai, 200232, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, 200232, China
### 摘要
> 在ITCS 2020年，Bartusek等人提出了一个用于仿射行列式程序（ADPs）的候选不可区分混淆器（\(i\mathcal {O}\)）。这个候选方案特殊之处在于，它直接对底层ADP应用特定的随机化技术，而不依赖于传统密码学假设如离散对数或学习与错误的困难程度。相对于其他\(i\mathcal {O}\)候选方案，它的效率较高。然而，该混淆方案需要进一步的密码分析，因为它不是基于任何良好构建的数学假设的。
> 
> 在本文中，我们展示了对Bartusek等人提供的\(i\mathcal {O}\)候选方案的密码分析攻击。我们的攻击利用了候选方案中一个随机化步骤的弱点。该攻击适用于一个相当普遍的程序类。在论文的最后，我们讨论了可能的对抗我们攻击的对策。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_22](https://doi.org/10.1007/978-3-031-06944-4_22)
## Indistinguishability Obfuscation from LPN over $\mathbb {F}_p$, DLIN, and PRGs in NC0.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#indistinguishability-obfuscation-from-lpn-over-mathbb-f-p-dlin-and-prgs-in-nc0) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#indistinguishability-obfuscation-from-lpn-over-mathbb-f-p-dlin-and-prgs-in-nc0)**
### 作者
* Aayush Jain, NTT Research and Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 在这项工作中，我们研究了构建不可区分混淆（\(i\mathcal {O}\)）所需的最小假设集是什么。我们证明：
> 
> 定理（非正式）：假设以下假设的次指数安全性足够：
> 
> - 学习带噪声的假设（\(\mathsf {LPN}\)）在一般素域\(\mathbb {F}_p\)上，有多项式多个\(\mathsf {LPN}\)样本和错误率\(1/k^\delta\)，其中k是\(\mathsf {LPN}\)秘密的维度，\(\delta >0\)是任意常数；
> 
> - 在\(\mathsf {NC}^0\)中具有拉伸\(n^{1+\tau}\)的布尔伪随机生成器（\(\mathsf {PRG}\)）存在，其中n是\(\mathsf {PRG}\)种子的长度，\(\tau >0\)是任意常数；
> 
> - 对称双线性群的决策线性（\(\mathsf {DLIN}\)）假设。
> 
> 那么，（次指数安全的）所有多项式大小电路的不可区分混淆存在。此外，只假设上述假设的多项式安全性，存在针对所有多项式大小电路的防勾结公钥功能加密。
> 
> 这消除了最近[Jain，Lin，Sahai STOC’21]的工作对学习带错误（LWE）假设的依赖。因此，我们获得了第一个不依赖于任何基于格的困难假设的全同态加密方案。
> 
> 我们的技术包括一种称为预处理随机编码（PRE）的新随机编码概念，可以在配对群的指数中计算。与其他新技术结合使用时，PRE提供了一种更简化的\(i\mathcal {O}\)构造，同时仅依赖于深入研究的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_23](https://doi.org/10.1007/978-3-031-06944-4_23)
## Incompressible Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#incompressible-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#incompressible-cryptography)**
### 作者
* Jiaxin Guan, Princeton University, Princeton, NJ, 08544, USA
* Mark Zhandry, Princeton University, Princeton, NJ, 08544, USA
* Daniel Wichs, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, NTT Research, Inc., Sunnyvale, CA, 94085, USA
* Mark Zhandry, NTT Research, Inc., Sunnyvale, CA, 94085, USA
### 摘要
> 不可压缩加密允许我们将密文大小灵活地变大，并确保即使解密密钥泄露，对手也无法获取有关加密数据的任何信息，除非她基本上存储整个密文。不可压缩签名可以任意扩展，并确保对手无法对任何消息生成签名，即使她之前见过该消息的签名，除非她基本上完整地存储其中一个签名。
> 
> 在这项工作中，我们提供了简单构造的不可压缩公钥加密和签名方案，并且基于最小的假设。此外，大型的不可压缩密文（或签名）可以以低存储成本以流式方式进行解密（或验证）。特别是，这些概念加强了消失加密和签名的相关概念，由Guan和Zhandry（TCC 2021）最近引入，其之前的构造依赖于复杂的技术和强大的、非标准的假设。我们将我们的构造扩展到实现最佳“速率”，即大型密文（或签名）可以包含几乎相同大小的消息，但需要更强的假设作为代价。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_24](https://doi.org/10.1007/978-3-031-06944-4_24)
## COA-Secure Obfuscation and Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#coa-secure-obfuscation-and-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#coa-secure-obfuscation-and-applications)**
### 作者
* Ran Canetti, Boston University, Boston, USA
* Suvradip Chakraborty, ETH Zürich, Zürich, Switzerland
* Dakshita Khurana, UIUC, Champaign, USA
* Nishant Kumar, UIUC, Champaign, USA
* Oxana Poburinnaya, Boston, USA
* Manoj Prabhakaran, IIT Bombay, Mumbai, India
### 摘要
> 我们提出了一个程序混淆的新范 paradigm，其中混淆的程序被赋予“良好形式”的证明。除了断言存在具有经过证实的结构的底层明文程序外，这些证明还防止了破坏攻击，即对手秘密创建基于嵌入在其他混淆程序中的秘密的混淆程序。我们将这个新的保证称为选择性混淆攻击（COA）安全。
> 
> 我们展示了如何将大类混淆机制增强为COA安全，假设电路的次指数安全IO和次指数安全的单向函数。为了展示新概念的威力，我们还将其用于实现：
> 
> 一种新形式的软件水印，相对于目前方案在无钥匙、公共验证过程中提供更广泛的防护，以防止通过的伪造品。
> 
> 完全CCA加密，这是完全非可塑加密的一种强化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_25](https://doi.org/10.1007/978-3-031-06944-4_25)
## Unclonable Polymers and Their Cryptographic Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#unclonable-polymers-and-their-cryptographic-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#unclonable-polymers-and-their-cryptographic-applications)**
### 作者
* Ghada Almashaqbeh, University of Connecticut, Storrs, USA
* Ran Canetti, Boston University, Boston, USA
* Yaniv Erlich, Eleven Therapeutics and IDC Herzliya, Herzliya, Israel
* Jonathan Gershoni, Tel Aviv University, Tel Aviv, Israel
* Anna Roitburd-Berman, Tel Aviv University, Tel Aviv, Israel
* Eran Tromer, Tel Aviv University, Tel Aviv, Israel
* Tal Malkin, Columbia University, New York, USA
* Itsik Pe’er, Columbia University, New York, USA
* Eran Tromer, Columbia University, New York, USA
### 摘要
> 我们提出了一种生成和操作蛋白质聚合物的机制，以获得一种新型的可消耗存储，其具有迷人的加密“自毁”特性，假设某些聚合物测序问题的难度。
> 
> 为了展示这项技术的加密潜力，我们首先制定了一个形式化框架，以最简化的方式捕捉到这项技术提供的功能和安全特性。接下来，利用这项技术，我们构建并证明了两个目前只能通过实现逻辑电路的受信任硬件（经典或量子）获得的加密应用的安全性。第一个应用是一个由密码控制的安全保险库，存储的数据一旦达到无法成功访问的临界点就会被无法恢复地删除。第二个应用是（一种略微放松的版本），即一次性程序，即一种设备，只允许在自毁之前有限次数地评估一个秘密函数，其中每次评估都是在一个新鲜的用户选择的输入上进行的。
> 
> 最后，虽然我们的构造、建模和分析旨在捕捉提出的基于聚合物的技术，但它们足够通用，具有潜在的独立兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_26](https://doi.org/10.1007/978-3-031-06944-4_26)
## Distributed (Correlation) Samplers: How to Remove a Trusted Dealer in One Round.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2022-1].md#distributed-correlation-samplers-how-to-remove-a-trusted-dealer-in-one-round) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2022-1].md#distributed-correlation-samplers-how-to-remove-a-trusted-dealer-in-one-round)**
### 作者
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
### 摘要
> 结构化的随机字符串（SRSs）和相关的随机性对许多密码协议非常重要。在互动昂贵的情况下，希望以尽可能少的通信轮次获得这种随机性；理想情况下，只需交换一轮可重复使用的信息即可，这些信息可被视为公钥。在本文中，我们描述了如何通过单一沟通轮次，使用不可区分性混淆等方法生成任何SRS或相关的随机性。我们引入了分布式抽样器的概念，它使得n个参与者可以从任何分布中抽样一个单一的公共值（SRS）。我们在普通模型中构建了一个半恶意的分布式抽样器，并用它来构建一个半恶意的公钥PCF（Boyle等人，FOCS 2020）。公钥PCF可以被视为分布式相关抽样器；它不是产生公共SRS，而是为每个参与方提供一个私有的随机值（其中这些值满足某种相关性）。我们引入了一种称为反冲器的通用技术，它将任何具有半恶意安全性而且没有输入的单一轮协议编译成一个具有主动安全性的类似单一轮协议，并利用可编程随机预言。这使我们在随机预言模型中获得了主动安全的分布式抽样器和公钥PCFs。最后，我们探讨了一些权衡。我们的第一个PCF构造仅限于可逆抽样相关性（诚实参与者的随机输出必须可以模拟出来，鉴于腐败方的随机输出）；此外，我们还展示了另一种不受此限制的构造，但不允许参与方持有相关性的秘密参数。我们还描述了如何避免使用随机预言，只是依赖于亚指数安全的不可区分性混淆。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-06944-4_27](https://doi.org/10.1007/978-3-031-06944-4_27)
