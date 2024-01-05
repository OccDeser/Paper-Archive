# Crypto[2022-4]
## Sharing Transformation and Dishonest Majority MPC with Packed Secret Sharing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#sharing-transformation-and-dishonest-majority-mpc-with-packed-secret-sharing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#sharing-transformation-and-dishonest-majority-mpc-with-packed-secret-sharing)**
### 作者
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Yifan Song, Carnegie Mellon University, Pittsburgh, PA, USA
* Vipul Goyal, NTT Research, Sunnyvale, CA, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research, New York, NY, USA
### 摘要
> 在过去几年中，安全多方计算（MPC）在不诚实多数情况下的效率有了显著提升，从SPDZ协议家族开始，它提供了一个高速的信息论在线阶段。然而，目前最先进的不诚实多数情况下的n方MPC协议在每个乘法门的在线通信复杂度方面与参与方的数量呈线性关系，即O(n)，而且所有参与方都需承担这个代价。在这项工作中，我们构建了第一个在预处理模型下用于不诚实多数情况的MPC协议，其每个乘法门的通信复杂度在参与方数量n中是亚线性的。为了实现我们的结果，我们将打包密钥分享的使用扩展到不诚实多数情况。对于一定比例的被破坏的参与方（例如，如果99%的参与方是不诚实的），我们可以实现每个乘法门的通信复杂度为O(1)个域元素，涵盖了所有参与方。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_1](https://doi.org/10.1007/978-3-031-15985-5_1)
## Verifiable Relation Sharing and Multi-verifier Zero-Knowledge in Two Rounds: Trading NIZKs with Honest Majority - (Extended Abstract).
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#verifiable-relation-sharing-and-multi-verifier-zero-knowledge-in-two-rounds-trading-nizks-with-honest-majority-extended-abstract) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#verifiable-relation-sharing-and-multi-verifier-zero-knowledge-in-two-rounds-trading-nizks-with-honest-majority-extended-abstract)**
### 作者
* Benny Applebaum, Tel-Aviv University, Tel-Aviv, Israel
* Eliran Kachlon, Tel-Aviv University, Tel-Aviv, Israel
* Arpita Patra, Indian Institute of Science, Bangalore, India
### 摘要
> 我们介绍了可验证关系共享（VRS）问题，其中客户端（证明者）希望在k个服务器（验证者）之间共享一个包含秘密数据项的向量，同时以零知识的方式证明共享数据满足某些属性。这种共享和证明的综合任务推广了可验证秘密共享和基于秘密共享数据的零知识证明等概念。我们从理论角度对VRS进行研究，并着重关注其往返复杂性。

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
> 我们重新审视了恶意安全双方计算的常数轮问题，考虑使用简单相关性，即以次线性通信复杂度和良好具体效率安全生成的相关性源。Katz等人（Crypto 2018）目前的最先进的协议通过实现Wang等人（CCS 2017）的认证混淆功能的变体来实现恶意安全。给定遗忘传输相关性，该协议（具有40位统计安全性）的通信成本与大约10个混淆电路（GCs）相当。此协议本质上需要超过2轮的交互。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_3](https://doi.org/10.1007/978-3-031-15985-5_3)
## Dynamic Local Searchable Symmetric Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#dynamic-local-searchable-symmetric-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#dynamic-local-searchable-symmetric-encryption)**
### 作者
* Brice Minaud, DIENS, École normale supérieure, PSL University, CNRS, INRIA, 75005, Paris, France
* Michael Reichle, DIENS, École normale supérieure, PSL University, CNRS, INRIA, 75005, Paris, France
### 摘要
> 在这篇文章中，我们首次解决了动态内存高效的可搜索对称加密（SSE）问题。在“内存高效”的SSE中，我们包括本地SSE和页面高效SSE的目标。我们方法的核心是这两个目标之间的新颖联系。我们引入了一种称为通用本地转换的映射，它以一种具有特定特征的页面高效SSE方案作为输入，并输出具有强定位性质的SSE方案。我们获得了几个结果：（1）首先，对于页面大小为p的页面高效SSE，我们构建了一个动态方案，其中存储效率为\(\mathcal {O}({1})\)，页面效率为\(\widetilde{\mathcal {O}}\left( {\textrm{log}\, \textrm{log}\, (N/p)}\right) \)，称为\(\textsf{LayeredSSE}\)。\(\textsf{LayeredSSE}\)背后的主要技术创新是一个具有独立兴趣的新型加权扩展的双选择分配过程。（2）其次，我们引入了通用本地转换，并将其与\(\textsf{LayeredSSE}\)结合，构建了一个动态SSE方案，其中存储效率为\(\mathcal {O}({1})\)，定位性为\(\mathcal {O}({1})\)，读取效率为\(\widetilde{\mathcal {O}}\left( {\textrm{log}\,\textrm{log}\, N}\right) \)，条件是最长列表的大小为\(\mathcal {O}({N^{1-1/\textrm{log}\, \textrm{log}\, \lambda }})\)。在各个方面，这与Asharov等人在STOC 2016上呈现的纯静态构造完全匹配：动态性不增加额外成本。（3）最后，通过将通用本地转换应用于Bossuat等人在Crypto 2021中提出的Tethys方案的一个变体，我们构建了一个无条件的静态SSE，其中存储效率为\(\mathcal {O}({1})\)，定位性为\(\mathcal {O}({1})\)，读取效率为\(\mathcal {O}({\textrm{log}^\varepsilon N})\)，其中\(\varepsilon\)是任意小的正常数。据我们所知，这是最接近Cash和Tessaro在Eurocrypt 2014上提出的下界的构造方法。

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
> 分布式点函数（DPF）是一种密码学原语，可以实现秘密单元向量在两个或更多方之间的压缩加法共享。尽管在应用中越来越常见并且受到重要的研究努力的支持，但迄今为止最好的两方DPF构造仍然是来自（Boyle等人，CCS'16）的基于树的构造，没有明显新的方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_5](https://doi.org/10.1007/978-3-031-15985-5_5)
## Snapshot-Oblivious RAMs: Sub-logarithmic Efficiency for Short Transcripts.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#snapshot-oblivious-rams-sub-logarithmic-efficiency-for-short-transcripts) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#snapshot-oblivious-rams-sub-logarithmic-efficiency-for-short-transcripts)**
### 作者
* Yang Du, University of Michigan, Ann Arbor, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
* Daniel Genkin, Georgia Tech, Atlanta, USA
### 摘要
> 忽略式随机访问存储（ORAM）是一种防止有害数据泄漏的强大技术。尽管在提高ORAM的具体性能方面取得了巨大进展，但对于许多实际应用场景来说，它仍然过慢。近期的突破性进展在下界方面表明这种低效性是ORAM甚至某些自然放松版本中固有的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_6](https://doi.org/10.1007/978-3-031-15985-5_6)
## Tight Preimage Resistance of the Sponge Construction.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#tight-preimage-resistance-of-the-sponge-construction) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#tight-preimage-resistance-of-the-sponge-construction)**
### 作者
* Charlotte Lefevre, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 密码海绵是一种常用的散列函数设计方法。该构造在理想排列模型下被证明在容量上与随机预言机在生日界限内是无法区分的。这个结果特别意味着，只要攻击复杂度不超过该界限，海绵构造实现了与随机预言机相当的碰撞、原像和第二原像抗性水平。我们详细研究了这些最新的界限，并观察到尽管碰撞和第二原像的安全界限是紧密的，但原像界限并不紧密。我们为密码海绵构造推导出了一个改进且紧密的原像安全界限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_7](https://doi.org/10.1007/978-3-031-15985-5_7)
## Block-Cipher-Based Tree Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#block-cipher-based-tree-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#block-cipher-based-tree-hashing)**
### 作者
* Aldo Gunsing, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 首先，我们详细研究了Daemen等人（ToSC 2018）在一篇论文中的一个错误，该论文探讨了基于多个原语（包括分块密码）的树哈希的最低要求。这揭示了这个错误比Gunsing等人（ToSC 2020）之前展示的更为基本，Gunsing等人主要关注其对安全界限的影响。事实证明，此错误的原因是由于对不可区分性证明中使用的不同预言机之间交互的一个重要疏忽。实质上，它将从正常的不可区分性设置减少到更弱的顺序不可区分性设置。事实上，这个错误出现在多个早期的不可区分性论文中，包括置换和的最优不可区分性（EUROCRYPT 2018）以及最近的\(\textrm{ABR}^+\)构造（EUROCRYPT 2021）。我们详细讨论了导致这种疏忽的原因以及如何避免它。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_8](https://doi.org/10.1007/978-3-031-15985-5_8)
## Provably Secure Reflection Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#provably-secure-reflection-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#provably-secure-reflection-ciphers)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 这篇论文首次从可证安全的角度对像Prince这样的反射密码进行了分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_9](https://doi.org/10.1007/978-3-031-15985-5_9)
## Overloading the Nonce: Rugged PRPs, Nonce-Set AEAD, and Order-Resilient Channels.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#overloading-the-nonce-rugged-prps-nonce-set-aead-and-order-resilient-channels) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#overloading-the-nonce-rugged-prps-nonce-set-aead-and-order-resilient-channels)**
### 作者
* Jean Paul Degabriele, Technology Innovation Institute, Abu Dhabi, UAE
* Jean Paul Degabriele, Technische Universität Darmstadt, Darmstadt, Germany
* Vukašin Karadžić, Technische Universität Darmstadt, Darmstadt, Germany
### 摘要
> 我们引入了一个位于伪随机置换（PRPs）和强伪随机置换（SPRPs）之间的新安全概念。我们将这个新的安全概念和任何满足它的（可调整的）密码称为坚固伪随机置换（RPRP）。坚固伪随机置换适用于一些有趣的应用，具有实际的好处，并且可以导致新的密码构造。我们的重点是可变长度的可调整RPRP，并且类似于Bellare和Rogaway的编码-加密范式，我们可以通用地将任何这样的密码转换为具有不同安全属性的不同AEAD方案。然而，RPRP的好处在于它们可以更高效地构建，因为它们是比SPRP（传统上由编码-加密范式所需的概念）更弱的基元。我们可以只使用两层处理来构建RPRP，而SPRP通常需要对输入数据进行三层处理。我们还发现了一种新的转换，可以生成比之前更紧凑的RUP安全AEAD方案的密文。进一步扩展这种方法，我们得到了一种新的广义的认证加密概念和相应的构造，我们称之为Nonce集合AEAD。Nonce集合AEAD特别适用于安全通道的背景，例如QUIC和DTLS，在这些通道上使用不可靠的传输，并在接收方的通道末端采用窗口机制。最后，我们提出了一种通用构造方法，将Nonce集合AEAD方案转换为具有顺序弹性的安全通道。我们的通道构造方法为顺序弹性通道带来了新的启示，并且当从RPRP实例化时还可以导致更紧凑的密文。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_10](https://doi.org/10.1007/978-3-031-15985-5_10)
## Orion: Zero Knowledge Proof with Linear Prover Time.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#orion-zero-knowledge-proof-with-linear-prover-time) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#orion-zero-knowledge-proof-with-linear-prover-time)**
### 作者
* Tiancheng Xie, University of California, Berkeley, Berkeley, USA
* Dawn Song, University of California, Berkeley, Berkeley, USA
* Yupeng Zhang, Texas A &M University, College Station, USA
### 摘要
> 零知识证明是一种强大的加密原语，在现实世界中发现了各种应用。然而，具有简明证明大小的现有方案在证明生成时间方面存在高超出算术电路表示的语句大小的负载，从而限制了它们的效率和可扩展性。在本文中，我们介绍了Orion，这是一种新的零知识论证系统，它实现了O(N)场操作和哈希函数的证明者时间和\(O(\log ^2 N)\)证明大小。Orion在具体效率方面是有效的，我们的实现显示了在具备\(2^{20}\)个乘法门的电路中，证明生成时间为3.09秒，证明大小为1.5 MB。证明生成时间是所有现有简明证明系统中最快的，而证明大小比Golovnev等人在2021年提出的

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
> 零知识证明系统通常被设计用于支持在 \(\mathbb {F}_2\) 或 \(\mathbb {F}_p\) 上进行电路计算，其中 \(p\) 是一个大素数，但不适用于在 \(\mathbb {Z}_{2^k}\) 上进行计算，而现代的 CPU 就是在这种环域上操作的。尽管可以使用质数模拟 \(\mathbb {Z}_{2^k}\)-算术，但这会带来无法避免的额外开销。最近，Baum 等人（CCS 2021）提出了一个候选构造，用于原生地在 \(\mathbb {Z}_{2^k}\) 上运行指定验证者的零知识证明系统。不幸的是，他们的构造需要在 \(\mathbb {Z}_{2^k}\) 上实例化预处理的随机向量无意识线性评估（VOLE）。目前还不知道如何高效生成大量的这种随机 VOLE。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_12](https://doi.org/10.1007/978-3-031-15985-5_12)
## Nova: Recursive Zero-Knowledge Arguments from Folding Schemes.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#nova-recursive-zero-knowledge-arguments-from-folding-schemes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#nova-recursive-zero-knowledge-arguments-from-folding-schemes)**
### 作者
* Abhiram Kothapalli, Carnegie Mellon University, Pittsburgh, USA
* Srinath Setty, Microsoft Research, Redmond, USA
* Ioanna Tzialla, New York University, New York, USA
### 摘要
> 我们介绍了一种新的方法来实现可递增验证计算（IVC）。在这种方法中，证明者递归地证明了形式为\(y=F^{(\ell )}(x)\)的递增计算的正确执行，其中F是一个（可能是非确定性的）计算，x是输入，y是输出，而\(\ell > 0\)。与以前的实现IVC的方法不同，我们的方法完全避免了精简非交互知识论证（SNARKs），以及常规知识论证。相反，我们引入并使用折叠方案（folding schemes），这是一个更弱、更简单、更易实现的原语，它将检查某个关系中的两个实例的任务简化为检查一个单一实例的任务。我们构建了一个用于NP特征的折叠方案，并证明它意味着具有改进的效率特征的IVC方案：（1）“递归开销”（即，证明者除了证明F的执行之外需要额外证明的步骤数）是一个常数，并且由表达为电路的两个群数量乘法控制（这是文献中递归开销最小的情况），（2）每个步骤中证明者的工作由两个大小为O(|F|)的多指数运算控制，提供了文献中最快的证明者。证据的大小为O(|F|)个群元素，但我们将展示使用现有zkSNARK的变种可以用\(O(\log {|F|})\)个群元素简洁地且零知识地证明有效证据的知识。最后，我们的方法既不需要可信的设置也不需要FFT（快速傅里叶变换），因此可以在DLOG难题下，通过任何椭圆曲线循环高效地进行实例化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_13](https://doi.org/10.1007/978-3-031-15985-5_13)
## A New Approach to Efficient Non-Malleable Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#a-new-approach-to-efficient-non-malleable-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#a-new-approach-to-efficient-non-malleable-zero-knowledge)**
### 作者
* Allen Kim, Stony Brook University, Stony Brook, USA
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Omkant Pandey, Stony Brook University, Stony Brook, USA
### 摘要
> 非可塑的零知识证明最初在中间人攻击的背景下引入，作为一种重要的构建模块，用于防止不同协议同时存在和交替进行的并发攻击。虽然这种原语在纯模型中几乎可以实现最优构建，但在实践中，它们比独立的零知识证明慢几个数量级。这与非可塑承诺形成了鲜明对比，非可塑承诺已有一段时间以来已经存在实用的构建（在DDH假设下）。

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
> 最近，包括DDH、DCR和QR在内的数论假设已经被用于构建安全计算的强大工具，形式上是同态秘密共享（HSS），它导致了具有简洁通信的安全双方计算协议，并且伪随机相关函数（PCFs）允许非交互生成大量相关的随机性。在这项研究中，我们提出了一个群论框架来描述这些类型构造，该框架统一了它们在各个群中计算分布离散对数的方法。我们将现有的构造转化为我们的框架，并且还提出了新的构造，其中包括基于虚二次域的类群。这导致了首个基于类群假设的支干程序的双方同态秘密共享的构造。

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
> 多方随机编码（Applebaum，Brakerski和Tsabary，SICOMP 2021）将安全计算一个复杂的多方功能f的任务减少到安全计算一个更简单的功能g的任务。该减少是非交互式的，并且保持对被动（半诚实）对手的信息理论安全性，也被称为隐私。度-2编码g（2MPRE）的特殊情况最近在具有信息理论安全性或对密码学原语进行黑盒访问的安全多方计算（MPC）中发现了几个应用。不幸的是，由于所有已知的构造都基于明文模型中的信息论MPC协议，它们只能在诚实多数的情况下保持私密。

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
> 我们重新审视如何在完美的信息理论安全设置下最小化安全多方计算（Secure Multiparty Computation，MPC ）协议的随机复杂性。Kushilevitz和Mansour（1997年SIAM J. Discret. Math.）研究了安全阈值\(t<n\)的n方半诚实多方计算的XOR函数情形，表明\(O(t^2\log (n/t))\)个随机比特足够，而需要\(\varOmega (t)\)个随机比特是必要的。他们得到了一个非显式的协议的正面结果，其存在性是通过概率方法证明的。

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
> 我们为非交互式阈值签名方案提供了统一的语法和一系列逐渐增强的安全性定义。这些方案具有单轮签名协议，可能还包括一轮与消息无关的预处理。我们将实践中领先的方案FROST1和BLS纳入了我们的层次结构，特别是展示了它们满足比目前已知的更强的安全性定义。我们还将我们提出的更高效版本FROST1的FROST2纳入到我们的层次结构中。为了简化，这些定义和结果都假定存在可信任的密钥生成。最后，我们通过一个高效的分布式密钥生成协议证明了FROST2的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_18](https://doi.org/10.1007/978-3-031-15985-5_18)
## Threshold Signatures with Private Accountability.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-4].md#threshold-signatures-with-private-accountability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-4].md#threshold-signatures-with-private-accountability)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Chelsea Komlo, University of Waterloo, Waterloo, Canada
### 摘要
> 现有的门限签名方案有两种类型：（i）完全私密，签名不透露生成签名的签署者集合的任何信息；（ii）可追究性，签名完全能够确定签署者集合的身份。本文提出了一种新型的门限签名，称为TAPS（Threshold Anonymous and Private Signature），它是隐私和可追溯性的混合体。从公众角度看，TAPS签名具备完全的隐私保护。然而，拥有秘密追踪密钥的实体可以将签名追踪到生成它的签署者集合的阈值。TAPS使得组织在保持内部运作私密的同时，确保签署者对其行为负责。我们构建了多个TAPS方案。首先，我们提出了一个通用构造方法，可以从任何具有追究性的门限签名构造出TAPS。该通用构造方法效率较低，因此我们进一步关注基于标准假设的高效方案。我们基于Schnorr签名方案构建了两个高效的TAPS方案（在随机预言机模型下）。最后，我们提出了与高效TAPS相关的若干开放问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15985-5_19](https://doi.org/10.1007/978-3-031-15985-5_19)
