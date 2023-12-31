# Crypto[2022-4]
## Sharing Transformation and Dishonest Majority MPC with Packed Secret Sharing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#sharing-transformation-and-dishonest-majority-mpc-with-packed-secret-sharing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#sharing-transformation-and-dishonest-majority-mpc-with-packed-secret-sharing)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, PA, USA
* Vipul Goyal, NTT Research, Sunnyvale, CA, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, NY, USA
### 摘要
> 近年来，在诚实多数情况下，安全多方计算（MPC）的效率已经提高了数个数量级，从SPDZ协议系列开始，该协议提供了一个迅速的信息理论在线阶段，并采用了预处理模型。然而，目前在诚实多数情况下的n方MPC协议在线通信复杂度在每个乘法门上是与参与方数量n成线性增长的，即O(n)，对于所有参与方来说。在本研究中，我们构建了第一个在预处理模型中针对诚实多数情况下，具有次线性通信复杂度的MPC协议。为了实现我们的结果，我们将打包秘密共享的使用扩展到了诚实多数情况下。对于某一固定比例的被破坏的参与方（例如，如果99%的参与方是不诚实的），我们可以实现所有参与方之间每个乘法门的通信复杂度为O(1)个域元素。
> 
> 在我们技术的核心是一种称为共享转换的新技巧。共享转换技术使我们能够将一种类型的线性秘密共享方案下的份额转换为另一种类型，并且甚至可以在（打包的）秘密共享方案的秘密上执行任意线性映射，同时保持最优的通信复杂度。这种技术在MPC中具有独立的重要性，因为转移份额从一种方案到另一种方案（例如用于降低次数）是普遍存在的。此外，我们引入了我们所称之为稀疏打包Shamir共享，它可以高效地解决网络路由问题，并且引入了打包Beaver三元组，这是对打包秘密共享（适用于诚实多数）中广泛使用的Beaver三元组技术的扩展。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_1](https://doi.org/10.1007/978-3-031-15985-5_1)
## Verifiable Relation Sharing and Multi-verifier Zero-Knowledge in Two Rounds: Trading NIZKs with Honest Majority - (Extended Abstract).
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#verifiable-relation-sharing-and-multi-verifier-zero-knowledge-in-two-rounds-trading-nizks-with-honest-majority-extended-abstract) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#verifiable-relation-sharing-and-multi-verifier-zero-knowledge-in-two-rounds-trading-nizks-with-honest-majority-extended-abstract)**
### 作者
* Benny Applebaum, Tel-Aviv University, Tel-Aviv, Israel
* Eliran Kachlon, Tel-Aviv University, Tel-Aviv, Israel
* Arpita Patra, Indian Institute of Science, Bangalore, India
### 摘要
> 我们介绍了可验证关系共享（VRS）问题，其中客户端（证明者）希望在 k 个服务器（验证方）之间共享一个包含秘密数据项目的向量，同时以零知识的方式证明共享数据满足某些属性。这种共享和证明的组合任务推广了可验证秘密共享和基于秘密共享数据的零知识证明等概念。我们从理论角度研究了 VRS，并重点关注其轮次复杂性。
> 
> 作为我们的主要贡献，我们证明了每个高效计算的关系都可以通过一个轮次复杂性为两轮（其中第一轮是输入独立的离线轮次）的 VRS 实现。该协议对抗允许破坏任意 t 个方的主动攻击者实现了完全 UC-安全性，可能包括客户端和一些验证方。对于少数（对数级别）方的情况下，我们实现了最佳弹性阈值 \(t<0.5(k+1)\)，对于大量（多项式级别）方的情况下，我们实现了几乎最优的弹性阈值 \(t<0.5(k+1)(1-\epsilon )\)，其中 \(\epsilon >0\) 是任意小的常数。这些协议都可以基于亚指数难度的单射单向函数构建。如果各方可访问冲突抗性哈希函数，则我们可以得到统计上永久安全的协议，即在协议执行期间对计算能力有限的敌手进行了保护，而在协议执行后对计算能力不受限的敌手进行了保护。
> 
> 先前的两轮解决方案无论基础假设如何，都实现了较小的弹性阈值和较弱的安全概念。作为一个特例，我们的协议可以生成离线/在线的多验证方零知识证明（MVZK）的两轮构造。此前，在需要 NIZK 的同类型假设下（即公钥假设或随机预言机类型假设），已经获得了这样的构造（Abe 等人，Asiacrypt 2002；Groth 和 Ostrovsky，Crypto 2007；Boneh 等人，Crypto 2019；Yang 和 Wang，Eprint 2022）。我们的工作首次展示了在诚实多数存在的情况下，这些假设可以用更加保守的“Minicrypt”类型假设（如单射单向函数和冲突抵抗哈希函数）取代。实际上，我们的 MVZK 协议为具有诚实多数的场景中的 NIZK 提供了一个轮次有效的替代方案。还介绍了其他应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_2](https://doi.org/10.1007/978-3-031-15985-5_2)
## Authenticated Garbling from Simple Correlations.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#authenticated-garbling-from-simple-correlations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#authenticated-garbling-from-simple-correlations)**
### 作者
* Samuel Dittmer, Stealth Software Technologies, Inc., Los Angeles, USA
* Steve Lu, Stealth Software Technologies, Inc., Los Angeles, USA
* Rafail Ostrovsky, Stealth Software Technologies, Inc., Los Angeles, USA
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, USA
### 摘要
> 我们通过考虑使用简单相关性来重新审视常数轮恶意安全的双方计算问题，即安全生成的与次线性通信复杂度和良好的具体效率相关的随机性源。Katz等人（Crypto 2018）的当前最先进的协议通过实现Wang等人（CCS 2017）的认证混淆功能的变体实现了恶意安全性。给定遗忘传输相关性，该协议的通信成本（具有40位统计安全性）与大约10个混淆电路（GCs）相当。该协议固有地需要超过2轮的互动。
> 
> 在这项工作中，我们使用其他类型的简单相关性来实现具有更好效率的认证混淆功能。具体而言，在随机预言模型中，我们得到以下减少的成本：
> 
> 使用向量遗忘线性评估（VOLE）和乘法三元组（MT）的变体，我们将成本减少为1.31个GCs。
> 
> 仅使用VOLE的变体，我们将成本减少为2.25个GCs。
> 
> 仅使用MT的变体，我们获得了一种非交互式（即2消息）协议，其成本与8个GCs相当。
> 
> 最后，我们证明，通过使用伪随机相关性生成器的最新构造（Boyle等人，CCS 2018，Crypto 2019，2020），我们协议中使用的简单相关性可以在不形成效率瓶颈的情况下安全实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_3](https://doi.org/10.1007/978-3-031-15985-5_3)
## Dynamic Local Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#dynamic-local-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#dynamic-local-searchable-symmetric-encryption)**
### 作者
* Brice Minaud, DIENS, École normale supérieure, PSL University, CNRS, INRIA, 75005, Paris, France
* Michael Reichle, DIENS, École normale supérieure, PSL University, CNRS, INRIA, 75005, Paris, France
### 摘要
> 本文首次解决了动态内存高效可搜索对称加密（SSE）的问题。在“内存高效”SSE中，我们包括本地SSE和页面高效SSE的目标。我们的方法的核心是这两个目标之间的一种新颖的连接。我们引入了一个名为通用本地转换的映射，它以具有特定特性的页面高效SSE方案作为输入，输出具有强大局部性质的SSE方案。我们得到了几个结果。 （1）首先，对于页面大小为p的页面高效SSE，我们构建了一个存储效率为\(\mathcal {O}({1})\)和页面效率为\(\widetilde{\mathcal {O}}\left( {\textrm{log}\, \textrm{log}\, (N/p)}\right) \)的动态方案，称为\(\textsf{LayeredSSE}\)。 \(\textsf{LayeredSSE}\)背后的主要技术创新是独立利益的一种新颖的加权二选分配过程的扩展。（2）其次，我们引入了通用本地转换，并将其与\(\textsf{LayeredSSE}\)结合起来，构建了一种动态SSE方案，其存储效率为\(\mathcal {O}({1})\)，局部性为\(\mathcal {O}({1})\)，读效率为\(\widetilde{\mathcal {O}}\left( {\textrm{log}\,\textrm{log}\, N}\right) \)，在最长列表大小为\(\mathcal {O}({N^{1-1/\textrm{log}\, \textrm{log}\, \lambda }})\)的条件下。在各个方面，这与Asharov等人在STOC 2016上展示的纯静态构造完全相匹配：动态性不增加额外成本。（3）最后，通过将通用本地转换应用于Bossuat等人在Crypto 2021中的Tethys方案的变体，我们构建了一个无条件的静态SSE，其存储效率为\(\mathcal {O}({1})\)，局部性为\(\mathcal {O}({1})\)，读效率为\(\mathcal {O}({\textrm{log}^\varepsilon N})\)，其中\(\varepsilon > 0\)是任意小的常数。据我们所知，这是目前最接近Cash和Tessaro在Eurocrypt 2014中提出的下界的构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_4](https://doi.org/10.1007/978-3-031-15985-5_4)
## Programmable Distributed Point Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#programmable-distributed-point-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#programmable-distributed-point-functions)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Niv Gilboa, Ben-Gurion University, Be’er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Victor I. Kolobov, Technion, Haifa, Israel
### 摘要
> 分布式点函数（DPF）是一种加密基元，可以在两个或多个参与方之间压缩秘密单位矢量的加法共享。尽管在应用程序中变得越来越常见并引起了显著的研究工作，但迄今为止最好的两方DPF构造仍然是来自（Boyle等人，CCS’16）的基于树的构造，并且没有显著的新方法。
> 
> 我们提出了一个适用于可行（多项式大小）域的新的两方DPF构造框架。具体来说，这包括所有DPF应用，其中密钥被扩展到完整域。我们的方法受到我们提出的加强概念的启发，即可编程DPF（PDPF）：其中一个短的、与输入无关的“离线”密钥可以被重用来共享多个点函数。
> 
> 从OWF开始的PDPF。我们从单向函数存在的最小假设构造了可行域的PDPF，其中第二个“在线”密钥大小是域大小N的对数多项式。
> 
> 我们的方法提供了多种新的高效功能和应用：
> 
> 私密可穿透PRF。我们的PDPF为可行域提供了基于OWF的第一个私密可穿透PRF，其密钥大小是亚线性的。
> 
> O(1)轮分布式DPF生成。我们获得了一个（标准的）DPF，其密钥大小是对数多项式，并且允许使用类似于Doerner-shelat（CCS’17）的分布式密钥生成，仅需要O(1)轮（而不是\(\log N\)）。
> 
> 带有1个短密钥的PCG。压缩用于安全计算的有用关联，其中一个密钥的大小最小。这在一些应用场景中提供了指数级的通信节省。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_5](https://doi.org/10.1007/978-3-031-15985-5_5)
## Snapshot-Oblivious RAMs: Sub-logarithmic Efficiency for Short Transcripts.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#snapshot-oblivious-rams-sub-logarithmic-efficiency-for-short-transcripts) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#snapshot-oblivious-rams-sub-logarithmic-efficiency-for-short-transcripts)**
### 作者
* Yang Du, University of Michigan, Ann Arbor, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
* Daniel Genkin, Georgia Tech, Atlanta, USA
### 摘要
> 忘却随机存取存储器（ORAM）是一种防止有害数据泄露的强大技术。尽管在改善ORAM的具体性能方面取得了巨大进展，但在许多实际环境中，它仍然过慢；最近有关下界的突破表明，ORAM的低效性是固有的，甚至对于一些自然松弛也是如此。
> 
> 本文引入了快照随机存取存储器（snapshot-oblivious RAMs），这是一种新的安全内存访问原语。快照随机存取存储器通过仅对已知和事先固定长度的传输提供安全性来绕过下界。直观地说，快照随机存取存储器对于短时间攻击（如许多加密数据库针对的快照攻击）提供了强大的安全性。
> 
> 我们给出了这个新原语的ORAM风格定义，并提出了几种构建方法。我们构建的底层设计原则是将最近操作的历史存储在一个可以随机访问的数据结构中。我们将这个范式实例化为客户端上的数据结构，从而使得快照随机存取存储器能够以恒定的带宽开销运行。我们还展示了如何将这些数据结构存储在服务器上，并使用忘却内存原语进行访问。我们最高效的实例化方法的带宽开销为\(\mathcal{O}(\log c)\)。通过扩展最近的ORAM下界，我们表明这种性能在渐近上是最优的。顺便说一下，我们定义了一个新的哈希队列数据结构——本质上是一个可以以先入先出方式修改元素的字典，这可能会引起独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_6](https://doi.org/10.1007/978-3-031-15985-5_6)
## Tight Preimage Resistance of the Sponge Construction.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#tight-preimage-resistance-of-the-sponge-construction) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#tight-preimage-resistance-of-the-sponge-construction)**
### 作者
* Charlotte Lefevre, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 密码海绵是一种常用的哈希函数设计方法。在海绵容量范围内，该构造在理想置换模型中已被证明与随机预言机在生日边界上不可区分。此结果表明，只要攻击复杂度不超过该边界，海绵构造可以实现与随机预言机类似水平的碰撞、预像和第二预像抵抗。我们详细研究这些最新边界，并观察到碰撞和第二预像安全边界是紧密的，而预像边界不是紧密的。我们推导出密码海绵构造的改进和紧密的预像安全边界。
> 
> 这一结果对各种轻量级加密哈希函数有直接影响。例如，NIST轻量级密码学竞赛的候选方案Ascon-Hash并不能像宣称的那样达到\(2^{128}\)预像安全性，而只能达到\(2^{192}\)预像安全性。对于Spongent、PHOTON、ACE、Subterranean 2.0和QUARK等模式，也获得了类似的改进。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_7](https://doi.org/10.1007/978-3-031-15985-5_7)
## Block-Cipher-Based Tree Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#block-cipher-based-tree-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#block-cipher-based-tree-hashing)**
### 作者
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 首先，我们仔细研究了Daemen等人的一篇论文中的一个错误（ToSC 2018），该论文研究了基于多个基元（包括分组密码）的树哈希的最小要求。这揭示了这个错误比Gunsing等人（ToSC 2020）之前展示的更为基本，Gunsing等人主要关注它对安全界限的影响。事实证明，错误的原因是在不可区分性证明中使用的不同预言机之间的交互中存在重大疏忽。实质上，它将该主张从正常的不可区分性设置减弱为更弱的顺序不可区分性。事实上，这个错误在早期的不可区分性论文中出现过，包括置换和的最优不可区分性（EUROCRYPT 2018）和最近的ABR+构造（EUROCRYPT 2021）。我们详细讨论了这个疏忽是如何引起的以及如何避免它。
> 
> 接下来，我们展示了如何解决Daemen等人构造的安全界限的负面影响。我们不仅允许截断输出，而且将构造泛化为允许任何最终化函数，并研究了这五种不同类型最终化函数的安全性。我们的研究结果等等表明，如果去除前馈反馈，SHA-2模式的安全性不会降低，并且现代的BLAKE3构造原则上是安全的，但其对可扩展输出的使用要求用于随机访问的计数器是公开的。最后，我们介绍了树海绵，这是顺序海绵构造的一种推广，具有并行吸收和挤压的特点。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_8](https://doi.org/10.1007/978-3-031-15985-5_8)
## Provably Secure Reflection Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#provably-secure-reflection-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#provably-secure-reflection-ciphers)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 本文从可证明安全的角度，首次对诸如Prince之类的反射密码进行了分析。
> 
> 作为首次贡献，我们在理想置换模型中开始了密钥交替反射密码的研究。具体而言，我们证明了两轮情况的安全性并给出了匹配攻击。结果的安全界形式为\(\mathcal{O}(qp^2/2^{2n}+q^2/2^n)\)，其中\(q\)是构造评估次数，\(p\)是对底层置换的直接敌对查询次数。由于两轮构造已经达到了一个有趣的安全下界，所以这个结果对基于单一公共置换的反射密码的构造也具有兴趣。
> 
> 我们的第二个贡献是反射密码的通用密钥长度扩展方法。它为FX构造提供了一个有吸引力的替代方案，FX构造被Prince和其他具体的密钥交替反射密码所使用。我们展示了我们的构造在对现有设计进行最小改变的情况下提供了更好的安全性。安全性证明基于理想密码模型，并依赖于将其归约为具有单轮密钥的两轮Even-Mansour密码。为了获得所期望的结果，我们对差错记录分析进行了改进，并因此改进了已知的具有两轮的单密钥Even-Mansour密码的最佳界限。这个改进得益于一个独立感兴趣的新的和捕获定理。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_9](https://doi.org/10.1007/978-3-031-15985-5_9)
## Overloading the Nonce: Rugged PRPs, Nonce-Set AEAD, and Order-Resilient Channels.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#overloading-the-nonce-rugged-prps-nonce-set-aead-and-order-resilient-channels) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#overloading-the-nonce-rugged-prps-nonce-set-aead-and-order-resilient-channels)**
### 作者
* Jean Paul Degabriele, Technology Innovation Institute, Abu Dhabi, UAE
* Jean Paul Degabriele, Technische Universität Darmstadt, Darmstadt, Germany
* Vukašin Karadžić, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 我们引入了一个新的安全概念，位于伪随机排列（PRP）和强伪随机排列（SPRP）之间。我们称之为这个新安全概念以及满足它的（可调整的）密码为坚固伪随机排列（RPRP）。坚固伪随机排列适用于一些有趣的应用，具有实际的优势，并引导了新的密码构造。我们的重点是可变长度的可调整RPRP，类似于Bellare和Rogaway的编码-加密范式，我们可以将任何这样的密码通用地变换为具有不同安全特性的AEAD方案。然而，RPRP的好处在于它们可以更高效地构造，因为它们比SPRP（编码-加密范式传统上所需的概念）更弱。我们可以只使用两个层次的处理来构造RPRP，而SPRP通常需要对输入数据进行三个层次的处理。我们还确定了一种新的转换，可以生成比先前已知方案更紧凑的RUP安全的AEAD方案的密文。通过进一步扩展这种方法，我们得到了一种新的广义认证加密概念和相应的构造，我们将其称为乱序允许的AEAD。乱序允许的AEAD特别适用于像QUIC和DTLS这样在不可靠的传输上运行并在接收端使用窗口机制的安全通道环境。最后，我们提出了一种将乱序允许的AEAD方案转换为具有抗延迟特性的安全通道的通用构造。我们的通道构造为抗延迟通道提供了新的视角，并且当从RPRP实例化时，还导致更紧凑的密文。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_10](https://doi.org/10.1007/978-3-031-15985-5_10)
## Orion: Zero Knowledge Proof with Linear Prover Time.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#orion-zero-knowledge-proof-with-linear-prover-time) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#orion-zero-knowledge-proof-with-linear-prover-time)**
### 作者
* Tiancheng Xie, University of California, Berkeley, Berkeley, USA
* Dawn Song, University of California, Berkeley, Berkeley, USA
* Yupeng Zhang, Texas A &M University, College Station, USA
### 摘要
> 零知识证明是一种强大的密码学原语，在现实世界中有着各种应用。然而，现有的具有简洁证据大小的方案在证明生成时间上存在高开销，该时间与表示为算术电路的陈述的大小呈超线性增长，从而限制了其在实践中的效率和可扩展性。在本文中，我们介绍了Orion，一种新的零知识论证系统，它在域操作和哈希函数的证明者时间上实现了O(N)的复杂度，证明大小为O(log^2 N)。Orion具有明确的高效性，我们的实现显示，对于一个具有2^20个乘法门的电路，证明者时间为3.09秒，证明大小为1.5 MB。证明者时间是所有现有简洁证明系统中最快的，而证明大小比Golovnev等人在2021年提出的最新方案小一个数量级。
> 
> 具体而言，我们开发了两种新的技术来提高效率。 (1) 我们提出了一种基于最密子图算法的新算法，用于测试一个随机的二分图是否是无损扩展图。这使我们能够以压倒性的概率采样无损扩展图。该技术提高了所有现有具有线性证明者时间的零知识论证方案的效率和/或安全性。基于最密子图的测试算法可能对扩展图的其他应用具有独立的兴趣。 (2) 我们开发了一种高效的证明组合方案，即编码切换，将证明大小从平方根降低到多对数级别的计算大小。该方案基于线性码的编码电路，并且显示了第二个零知识论证的见证与线性码中的消息相同。证明组合只对证明者时间引入了很小的开销。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_11](https://doi.org/10.1007/978-3-031-15985-5_11)
## Moz$\mathbb {Z}_{2^k}$arella: Efficient Vector-OLE and Zero-Knowledge Proofs over $\mathbb {Z}_{2^k}$.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#moz-mathbb-z-2-k-arella-efficient-vector-ole-and-zero-knowledge-proofs-over-mathbb-z-2-k) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#moz-mathbb-z-2-k-arella-efficient-vector-ole-and-zero-knowledge-proofs-over-mathbb-z-2-k)**
### 作者
* Carsten Baum, Aarhus University, Aarhus, Denmark
* Lennart Braun, Aarhus University, Aarhus, Denmark
* Alexander Munch-Hansen, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 零知识证明系统通常是为支持在\(\mathbb {F}_2\)或\(\mathbb {F}_p\)上的电路计算而设计的，其中p是一个大素数，但不适用于在\(\mathbb {Z}_{2^k}\)上进行计算，而现代CPU则使用这个环。尽管可以使用质数模拟\(\mathbb {Z}_{2^k}\)算术运算，但会带来不可避免的开销。最近，Baum等人(来自CCS 2021年的论文)提出了候选构造一种专门验证者的本地运行在\(\mathbb {Z}_{2^k}\)上的零知识证明系统。不幸的是，他们的构造要求使用\(\mathbb {Z}_{2^k}\)实例化预处理随机向量混淆线性评估（VOLE）。目前还不知道如何高效地生成大量这样的随机VOLE。
> 
> 在这项工作中，我们提出了一种恶意安全的VOLE扩展协议，可以将\(\mathbb {Z}_{2^k}\)上的短种子-VOLE转换为相同环上更长的伪随机VOLE。我们的构建借鉴了最近在有限域上的协议中的思想，并非平凡地调整为适用于\(\mathbb {Z}_{2^k}\)。此外，我们还表明，QuickSilver零知识证明系统(Yang et al. CCS 2021)采取的方法可以推广以支持在\(\mathbb {Z}_{2^k}\)上的计算。这种新的基于VOLE的证明系统被我们称为QuarkSilver，比Baum等人之前建议的零知识协议效率更高。此外，我们实现了VOLE扩展和零知识证明系统，并展示它们能够为\(64\)位到\(256\)位的环每秒生成13-50百万个VOLE，并在零知识下每秒执行\(1.3\)百万次\(64\)位乘法运算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_12](https://doi.org/10.1007/978-3-031-15985-5_12)
## Nova: Recursive Zero-Knowledge Arguments from Folding Schemes.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#nova-recursive-zero-knowledge-arguments-from-folding-schemes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#nova-recursive-zero-knowledge-arguments-from-folding-schemes)**
### 作者
* Abhiram Kothapalli, Carnegie Mellon University, Pittsburgh, USA
* Srinath Setty, Microsoft Research, Redmond, USA
* Ioanna Tzialla, New York University, New York, USA
### 摘要
> 介绍了一种实现递增可验证计算（IVC）的新方法，其中证明者递归地证明了形式为\(y=F^{(\ell )}(x)\)的递增计算的正确执行，其中F是一个（可能是非确定性的）计算，x是输入，y是输出，且\(\ell > 0\)。与以前实现IVC的方法不同，我们的方法完全避免了简洁非交互知识证明（SNARKs）和一般的知识证明。相反，我们引入并使用了折叠方案，这是一种较弱、较简单和更易实现的原语，它将检查某个关系中的两个实例的任务简化为检查单个实例的任务。我们构建了一个针对NP的折叠方案，并展示它可以导出一个效率更高的IVC方案：（1）“递归开销”（即证明者在证明F执行过程中额外证明的步骤数量）是一个常数，且由两个组标量乘法电路占主导（这是现有文献中最小的递归开销），（2）证明者在每个步骤中的工作由两个大小为O(|F|)的多指数计算占主导，提供了最快的证明者。证明的大小为O(|F|)个群元素，但我们展示了使用现有zkSNARK的一种变体，证明者可以用\(O(\log {|F|})\)个群元素简洁且零知识地证明一个有效证明的知识。最后，我们的方法既不需要可信设置也不需要FFT，因此可以在具有困难DLOG的任何椭圆曲线循环上高效地实例化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_13](https://doi.org/10.1007/978-3-031-15985-5_13)
## A New Approach to Efficient Non-Malleable Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#a-new-approach-to-efficient-non-malleable-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#a-new-approach-to-efficient-non-malleable-zero-knowledge)**
### 作者
* Allen Kim, Stony Brook University, Stony Brook, USA
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Omkant Pandey, Stony Brook University, Stony Brook, USA
### 摘要
> 非可塑的零知识证明最初是在中间人攻击的背景下引入的，它作为一个重要的构建模块，用于防止不同协议可能共存和交织的并发攻击。尽管该原语可以在纯模型中实现几乎最优的构造，但它们在实践中比独立的零知识证明慢几个数量级。这与非可塑的承诺形成了鲜明对比，在DDH假设下，已经有一段时间以来出现了实用的构造。
> 
> 我们提出了一个新的方法来构建所有语言的有效的非可塑零知识证明，基于一个称为基于实例的非可塑承诺（IB-NMC）的新原语。我们展示了如何通过利用子线性零知识证明的模拟器可以比诚实证明算法快得多的事实来构建实际的IB-NMC。通过有效实现IB-NMC，我们的方法产生了第一个在纯模型中实现实用效率的通用非可塑零知识协议。
> 
> 我们所有的协议都可以从对称原语（例如分块密码和碰撞抗性哈希函数）实例化，实践中效率合理，且是通用的。我们的技术还可以提供第一个没有公钥假设的高效不可塑承诺方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_14](https://doi.org/10.1007/978-3-031-15985-5_14)
## An Algebraic Framework for Silent Preprocessing with Trustless Setup and Active Security.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#an-algebraic-framework-for-silent-preprocessing-with-trustless-setup-and-active-security) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#an-algebraic-framework-for-silent-preprocessing-with-trustless-setup-and-active-security)**
### 作者
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 最近，包括DDH、DCR和QR在内的数论假设被用于构建安全计算的强大工具，形式上为同态秘密分享（HSS），从而实现了具有简洁通信的安全两方计算协议，以及伪随机相关函数（PCFs），允许非交互式生成大量相关随机数。在这项工作中，我们提出了一种群论框架，适用于这些构造类别，统一了它们在各种群中计算分布式离散对数的方法。我们将现有的构造置于我们的框架中，并提出了一些新的构造，包括一个基于虚二次域的类群的构造。这导致了第一个基于类群假设的支路程序的两方同态秘密分享的构造。
> 
> 利用我们的框架，我们还从数论假设中获得了用于生成遗忘传递和向量OLE相关性的伪随机相关函数。当使用类群实例化我们的框架时，这些函数具有无信任、公钥设置。以前，这样的构造要么需要一个可信设置，形式上是一个具有未知分解的RSA模数，要么依赖于学习误差假设下的多密钥完全同态加密。
> 
> 我们还展示了如何通过适当的零知识证明将我们的构造升级为具有主动安全性。在随机预言机模型中，这导致了一个一轮主动安全的协议，用于设置PCF，以及一个三轮主动安全的基于HSS的协议，用于具有简洁通信的安全两方计算的支路程序。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_15](https://doi.org/10.1007/978-3-031-15985-5_15)
## Quadratic Multiparty Randomized Encodings Beyond Honest Majority and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#quadratic-multiparty-randomized-encodings-beyond-honest-majority-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#quadratic-multiparty-randomized-encodings-beyond-honest-majority-and-their-applications)**
### 作者
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Or Karni, Tel Aviv University, Tel Aviv, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Arpita Patra, Indian Institute of Science, Bangalore, India
### 摘要
> 多方随机编码（Applebaum, Brakerski和Tsabary，SICOMP 2021）将安全计算复杂的多方功能f的任务减少为安全计算更简单功能g的任务。该约简是非交互式的，并且对抗被动（半诚实）对手保持信息论安全性，也称为隐私。特例度为2的编码g（2MPRE）最近在具有信息论安全性或进行黑盒访问到密码学原语的安全多方计算（MPC）中找到了几种应用。不幸的是，由于所有已知的构造都是基于纯模型中的信息论MPC协议，它们只能在有诚实多数的情况下保持私密性。
> 
> 在本文中，我们突破了诚实多数限制，并提出了第一个在存在不诚实多数情况下仍然安全的一般2MPRE构造。我们的构造通过2MPRE将每个n方功能f编码为至多容忍 \( t=\lfloor 2n/3\rfloor \) 个被动损坏的情况。
> 
> 我们推导了几个应用，包括：（1）第一个非交互式客户-服务器MPC协议，在该协议下任何少数服务器联盟和最多n个客户中的t个客户之间具有完美隐私性；（2）在非交互式t-私密约简下的三方功能完备性；以及（3）从一般MPC到理想遗忘传输（OT）的单轮t-私密约简。这些积极结果部分解答了几个先前作品中提出的未解问题。我们还展示了解决（2）和（3）所需的t-私密2MPRE，从而建立了这三个概念之间的新等价定理。
> 
> 最后，我们提出了一种基于OT混合模型中的多轮协议构造全私密的2MPRE的新方法，该方法在面对主动攻击时实现了完美隐私。此外，通过略微限制主动对手的能力，我们得到了这些概念之间的等价关系。这形成了一个令人惊讶且独特的联系，将非交互式被动私有原语与交互式主动私有原语联系起来。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_16](https://doi.org/10.1007/978-3-031-15985-5_16)
## Tight Bounds on the Randomness Complexity of Secure Multiparty Computation.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#tight-bounds-on-the-randomness-complexity-of-secure-multiparty-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#tight-bounds-on-the-randomness-complexity-of-secure-multiparty-computation)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, USA
* Vipul Goyal, NTT Research, Sunnyvale, USA
* Yuval Ishai, Technion, Haifa, Israel
### 摘要
> 我们重新考虑了安全多方计算（MPC）协议的随机复杂度最小化问题，采用了完全信息论安全设置。Kushilevitz和Mansour（1997年SIAM J. Discret. Math.）研究了具有安全阈值\(t<n\)的n方半诚实MPC的XOR函数情况，证明了\(O(t^2\log (n/t))\)随机比特足够且\(\varOmega (t)\)随机比特是必要的。他们的正面结果是通过一个非显式协议得到的，其存在性是通过概率方法证明的。
> 
> 我们通过证明XOR随机复杂度的\(\varOmega (t^2)\)下界来基本解决了这个问题，并与之前的上界相匹配，只差一个对数因子（或者当\(t=\varOmega (n)\)时只差一个常数因子）。我们还得到了一个显式协议，该协议使用\(O(t^2\cdot \log ^2n)\)随机比特，与我们的下界相匹配，只差一个多对数因子。我们将这些结果从XOR扩展到了一般对称布尔函数和有限Abelian群上的加法，展示了如何将随机复杂度分摊到多次加法上。
> 
> 最后，将我们的技术与最近的随机效率高的私有电路构建相结合，我们通过利用额外的“帮助方”（不贡献任何输入）获得了一个评估一般电路C的显式协议，只使用了\(O(t^2\cdot \log |C|)\)随机比特。这个上界与我们的下界相匹配，只差一个对数因子。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_17](https://doi.org/10.1007/978-3-031-15985-5_17)
## Better than Advertised Security for Non-interactive Threshold Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#better-than-advertised-security-for-non-interactive-threshold-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#better-than-advertised-security-for-non-interactive-threshold-signatures)**
### 作者
* Mihir Bellare, Department of Computer Science and Engineering, University of California San Diego, La Jolla, USA
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Chelsea Komlo, University of Waterloo, Zcash Foundation, Waterloo, Canada
* Mary Maller, Ethereum Foundation, London, UK
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 我们提供了一种统一的句法和一系列逐渐增强的安全性定义，用于非交互式阈值签名方案。这些方案具有一个单轮签名协议，可能还包括一轮独立于消息的预处理。我们将FROST1和BLS这两个领先的实用方案纳入我们的层次结构中，并特别展示它们符合比已经证明的安全性定义更强的安全性定义。我们还将我们给出的更高效版本FROST1的FROST2也纳入我们的层次结构中。为了简化起见，这些定义和结果都假定了可信任的密钥生成。最后，我们证明了FROST2的安全性，其中密钥生成由一种高效的分布式密钥生成协议执行。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_18](https://doi.org/10.1007/978-3-031-15985-5_18)
## Threshold Signatures with Private Accountability.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#threshold-signatures-with-private-accountability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#threshold-signatures-with-private-accountability)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Chelsea Komlo, University of Waterloo, Waterloo, Canada
### 摘要
> 现有的门限签名方案可以分为两种类型：（一）完全私密，即签名不透露生成签名的签署者集合的任何信息；（二）可追溯，即签名完全确定了生成签名的签署者集合。本文中，我们提出了一种新型的门限签名，称为TAPS，它是隐私和可追溯性的混合形式。从公众的角度来看，TAPS签名是完全私密的。然而，拥有秘密追踪密钥的实体可以将签名追溯到生成签名的签署者阈值。TAPS使得组织能够保持其内部运作的私密性，同时确保签署者对其行为负责。我们构建了多个TAPS方案。首先，我们提出了一个通用构造，可以从任何可追溯的门限签名构建出TAPS。这个通用构造并不高效，因此我们接下来专注于基于标准假设的高效方案。我们基于Schnorr签名方案构建了两个高效的TAPS方案（在随机预言模型中）。最后，我们给出了一些与高效TAPS相关的开放问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_19](https://doi.org/10.1007/978-3-031-15985-5_19)
