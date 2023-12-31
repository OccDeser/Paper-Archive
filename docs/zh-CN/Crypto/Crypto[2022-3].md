# Crypto[2022-3]
## PI-Cut-Choo and Friends: Compact Blind Signatures via Parallel Instance Cut-and-Choose and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#pi-cut-choo-and-friends-compact-blind-signatures-via-parallel-instance-cut-and-choose-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#pi-cut-choo-and-friends-compact-blind-signatures-via-parallel-instance-cut-and-choose-and-more)**
### 作者
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Benedikt Wagner, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Rutchathon Chairattana-Apirom, Brown University, Providence, RI, 02906, USA
* Anna Lysyanskaya, Brown University, Providence, RI, 02906, USA
### 摘要
> 盲签名方案是保护隐私的认证工具中研究最深入的之一。然而，已知的可证明安全性的盲签名结构要么依赖于非标准的困难假设，要么需要随着同时签发签名数量的增加而线性增长的参数，要么涉及到效率极低的通用技术，比如通用安全双方计算。
> 
> 最近，Katz、Loss和Rosenberg（ASIACRYPT'21）提出了一种技术，将对\(O(\log n)\)个并发执行的盲签名协议具有安全性的盲签名方案转化为对任何\(\textsf{poly}(n)\)个并发执行的盲签名方案具有安全性。
> 
> 我们在本文中消除了这种转换的两个缺点：1）所得盲签名协议的通信复杂度与签名互动次数呈线性增长；2）所得到的方案从基础方案继承了一个非常宽松的安全界限，结果是需要不切实际的参数尺寸。
> 
> 在这项工作中，我们提供了一个改进的转换，用于从对\(O(\log n)\)个并发执行具有安全保证的盲签名协议中获得容忍任何\(\textsf{poly}(n)\)个并发执行的安全盲签名协议。在保留原始转换优势的同时，我们新的转换的通信复杂度只以对数方式增长。在CDH和RSA假设下，我们在具体效率方面改进了这个通用转换，并且给出了（1）基于BLS的盲签名方案，使用标准尺寸的群，签名大小大约为3 KB，每个签名的通信量大约为120 KB；以及（2）基于Okamoto-Guillou-Quisquater的盲签名方案，签名和通信量分别大约为9 KB和8 KB。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_1](https://doi.org/10.1007/978-3-031-15982-4_1)
## Augmented Random Oracles.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#augmented-random-oracles) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#augmented-random-oracles)**
### 作者
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 我们提出了一种新的范式，用于证明基于随机预言机协议的安全性，我们称之为增强随机预言机模型（AROM）。我们展示了AROM捕捉到了许多重要的随机预言机不可实现性结果。因此，在AROM中的证明意味着对这些不可能性的某种韧性。然后，我们考虑了三种受到不可能性限制的ROM转换：Fiat-Shamir（FS）、Fujisaki-Okamoto（FO）和Encrypt-with-Hash（EwH）。我们在每种情况下展示了如何通过加强构建块或修改转换来在AROM中获得安全性。
> 
> 在过程中，我们还给出了一些其他结果。我们改进了FO和EwH不可能性所需的假设，从区分不可能性混淆变为循环安全LWE；我们认为我们的AROM仍然捕捉到了这种改进后的不可能性。我们还证明了不存在"最佳的"哈希函数，通过给出一对安全性属性，两者都可以单独在标准模型中进行实例化，但无法同时由一个单一的哈希函数满足。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_2](https://doi.org/10.1007/978-3-031-15982-4_2)
## To Label, or Not To Label (in Generic Groups).
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#to-label-or-not-to-label-in-generic-groups) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#to-label-or-not-to-label-in-generic-groups)**
### 作者
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 通用群是分析基于群的加密系统的可行性和不可行性的重要工具。通常有两种广泛传播的通用群版本，分别是Shoup和Maurer的版本，主要区别在于是否为群元素提供明确的标签。这两个模型通常被视为等价。然而，在本研究中，我们证明这两个模型实际上是有很大区别的，在陈述通用群结果时需要谨慎：
> 
> 我们展示了许多教科书中的构造方法并没有被Maurer捕捉到，但是被Shoup捕捉到了。反过来，任何被Maurer捕捉到的构造都被Shoup捕捉到。
> 
> 对于存在于两个模型中的构造，我们展示了对于“单阶段”游戏，安全性是等价的，但是对于一些“多阶段”游戏来说，Shoup安全性明显强于Maurer安全性。
> 
> 目前已有的通用群无法实例化的结果不适用于Maurer。我们填补了这个空白，得到了一种新的无法实例化的结果。
> 
> 我们解释了已知的通用群和基于身份的加密之间的黑盒分离在Shoup上没有完全适用，并通过提供这样的分离来解决这个问题。
> 
> 我们为代数群模型提供了一个新的无法实例化结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_3](https://doi.org/10.1007/978-3-031-15982-4_3)
## Lower Bound on SNARGs in the Random Oracle Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#lower-bound-on-snargs-in-the-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#lower-bound-on-snargs-in-the-random-oracle-model)**
### 作者
* Iftach Haitner, Tel-Aviv University, Tel Aviv, Israel
* Daniel Nukrai, Tel-Aviv University, Tel Aviv, Israel
* Eylon Yogev, Bar-Ilan University, Ramat Gan, Israel
### 摘要
> 简明非交互证明（SNARGs）已成为密码学界的基本原语。本文的重点是在随机预言机模型（ROM）中构建SNARGs。这些SNARGs具有后量子安全性，并且可以使用轻量级密码学部署，以启发式地实例化随机预言机。ROM-SNARG是\((t,\varepsilon )\)-sound的，如果没有\(t\)-查询恶意证明者能够以大于\(\varepsilon \)的概率说服验证者接受错误的陈述。最近，Chiesa-Yogev（CRYPTO’21）提出了一个长度为\({\varTheta }(\log (t/\varepsilon ) \cdot \log t)\)的ROM-SNARG（忽略\(\log n\)因子，其中n为实例大小）。然而，这种改进距离（民间传说的）下限\(\varOmega (\log (t/\varepsilon ))\)仍然很远。
> 
> 在假设随机化指数时间假设的情况下，我们证明了\((t,\varepsilon )\)-sound ROM-SNARGs长度为\({\varOmega }(\log (t/\varepsilon ) \cdot \log t)\)的紧密下界。我们的下界适用于具有非自适应验证者和称为盐声明的强声明概念的构造，这些限制适用于所有已知构造（忽略人为反例）。通过将任何短ROM-SNARG（属于考虑的族群）转化为只询问少数预言机查询的相同长度的ROM-SNARG，然后应用Chiesa-Yogev（TCC’20）关于此类SNARGs的最新下界，我们证明了我们的下界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_4](https://doi.org/10.1007/978-3-031-15982-4_4)
## Time-Space Tradeoffs for Sponge Hashing: Attacks and Limitations for Short Collisions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#time-space-tradeoffs-for-sponge-hashing-attacks-and-limitations-for-short-collisions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#time-space-tradeoffs-for-sponge-hashing-attacks-and-limitations-for-short-collisions)**
### 作者
* Cody Freitag, Cornell Tech, New York, USA
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, Washington, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### 摘要
> 海绵哈希是一种新颖的替代Merkle-Damgård哈希设计的方法。海绵结构在各种应用中越来越受欢迎，尤其是在SHA-3哈希标准中被广泛使用。海绵哈希由两个参数r和c（分别是比特率和容量）以及一个固定大小的\(r+c\)比特的排列来参数化。在这项工作中，我们研究了用随机排列实例化的海绵哈希对于关于随机排列的具有任意S比特辅助输入的对手进行碰撞抗性的问题，在此过程中对随机排列发出T个在线查询。 Coretti等人最近的工作（CRYPTO '18）表明，这样的对手可以找到与随机c比特初始化向量相关的碰撞，其优势为\(\varTheta (ST^2/2^c + T^2/ 2^{r})\)。
> 
> 尽管以上攻击在某些参数范围内形式上破坏了碰撞抗性，但其实际相关性有限，因为所得到的碰撞非常长（大约为T个块的数量级）。针对寻找短碰撞的任务，我们研究了给定参数\(B\ge 1\)的寻找B个块碰撞的复杂性。我们提出了几种新的攻击和限制。值得注意的是，我们提出了一种新的攻击，可以得到单个块碰撞，并具有优势
> 
> 在某些参数范围内（例如，\(ST^2>2^c\)），我们的攻击优于先前已知的最佳攻击。据我们所知，这是第一个证明海绵哈希在安全性上明显不及相应的Merkle-Damgård哈希实例的自然应用。我们的攻击依赖于海绵哈希中单块碰撞寻找和深入研究的函数反演问题之间的新颖联系。我们还提出了一种通用攻击，适用于任何\(B\ge 2\)，优势为\(\varOmega ({STB}/{2^{c}} + {T^2}/{2^{\min \{r,c\}}})\)，这是Akshima等人的一个思路的改进（CRYPTO '20）。
> 
> 我们还通过对最佳可能攻击的界限进行论证，对最佳可能攻击寻找无限长度碰撞和寻找非常短碰撞的优势进行了界定。值得注意的是，我们证明了（通过高度非平凡的压缩论证），在某些参数范围内，对于\(B=2\)，以上攻击是最佳攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_5](https://doi.org/10.1007/978-3-031-15982-4_5)
## On Time-Space Tradeoffs for Bounded-Length Collisions in Merkle-Damgård Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#on-time-space-tradeoffs-for-bounded-length-collisions-in-merkle-damg-rd-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#on-time-space-tradeoffs-for-bounded-length-collisions-in-merkle-damg-rd-hashing)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, USA
### 摘要
> 我们研究了预处理对手在随机预言模型中寻找广泛使用的Merkle-Damgård（MD）哈希函数中有界长度碰撞的能力。具体而言，我们考虑具有任意S位关于随机预言的建议的对手，并且最多可以对其进行T次查询。我们的目标是描述这些对手在使用范围大小为N的随机预言作为压缩函数所构造的MD哈希函数中找到B块碰撞的优势（给定随机盐）。
> 
> 对于非常大的B值（基本上为\(\varOmega (T)\)）以及B等于1、2的情况，对这个问题的答案已经完全理解。对于 \(B\approx T\) 的情况，Coretti等人（EUROCRYPT '18）给出了 \(\tilde{\varTheta }(ST^2/N)\) 的匹配上界和下界。Akshima等人（CRYPTO '20）观察到Coretti等人的攻击可以适用于任何 \(B>1\) 的值，给出了一种优势为 \(\tilde{\varOmega }(STB/N + T^2/N)\) 的攻击方法。不幸的是，他们只能证明该攻击对于 \(B=2\) 时是最优的。他们的证明涉及到详细的压缩分析以及一个试图将界推广到较大B值的朴素尝试（即使对于 \(B=3\)），这将导致所需分析的情况数量急剧增加，使其难以处理。由于缺乏更一般的上界，他们提出了STB猜想，即对于任何 \(B>1\)，最佳可能优势为 \(\tilde{O}(STB/N + T^2/N)\)。
> 
> 在本工作中，我们在许多新的参数设置中验证了STB猜想。例如，在一个结果中，我们证明了对于所有固定的B值，该猜想成立。此外，利用图的组合性质，只要对S施加一些限制，我们就能够验证超越常数B值的猜想。例如，只要 \(S \leqslant T^{1/8}\)，我们就能够证明对于所有 \(B \leqslant T^{1/4}\) 的情况下，该猜想成立。从技术上讲，我们开发了MD哈希中有界长度碰撞的结构特征描述，使我们能够给出一个压缩论证，而无需处理数量急剧增加的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_6](https://doi.org/10.1007/978-3-031-15982-4_6)
## Time-Space Lower Bounds for Finding Collisions in Merkle-Damgård Hash Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#time-space-lower-bounds-for-finding-collisions-in-merkle-damg-rd-hash-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#time-space-lower-bounds-for-finding-collisions-in-merkle-damg-rd-hash-functions)**
### 作者
* Akshima, University of Chicago, Chicago, USA
* Siyao Guo, NYU Shanghai, Shanghai, China
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, USA
### 摘要
> 我们重新审视在辅助输入随机预言模型中找到 Merkle-Damgård 哈希函数中 B 个块长度碰撞的问题，在该模型中，攻击者获取有关随机预言的 S 位建议，并进行 T 次预言查询。
> 
> Akshima、Cash、Drucker 和 Wee（CRYPTO 2020）在 Coretti、Dodis、Guo 和 Steinberger（EUROCRYPT 2018）的工作基础上，针对 \(2\le B\le T\)（对于随机盐）展示了一种简单攻击。该攻击取得了优势 \(\widetilde{\varOmega }(STB/2^n+T^2/2^n)\)，其中 n 是随机预言的输出长度。他们猜测这种攻击是最优的。然而，这个所谓的 STB 猜想只针对 \(B\approx T\) 和 \(B=2\) 被证明。最近，Ghoshal 和 Komargodski（CRYPTO 22）验证了 STB 猜想对于所有常数 B 的值，并为所有 B 的选择提供了一个 \(\widetilde{O}(S^4TB^2/2^n+T^2/2^n)\) 的界限。
> 
> 在这项研究中，我们对于每个 \(2< B < T\)，证明一个 \(\widetilde{O}((STB/2^n)\cdot \max \{1,ST^2/2^n\}+ T^2/2^n)\) 的界限。我们的界限对于 \(ST^2\le 2^n\) 证实了 STB 猜想，并对于 \(ST^2>2^n\) 在 S 的因素上是最优的（注意，因为 \(T^2\) 总是最多为 \(2^n\)，否则通过生日攻击可以轻易找到碰撞）。我们的结果涵盖了所有先前对于所有参数范围的上界，除了 \(B=\widetilde{O}(1)\) 和 \(ST^2>2^n\)。
> 
> 我们通过采用和改善 Chung、Guo、Liu 和 Qian（FOCS 2020）的技术来获得我们的结果。我们的方法提供了更模块化的证明，并揭示了如何绕过先前技术的局限性。在此过程中，我们得到了一个相当简单和启发性的 \(B=2\) 的证明，恢复了 Akshima、Cash、Drucker 和 Wee 的主要结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_7](https://doi.org/10.1007/978-3-031-15982-4_7)
## Sustained Space and Cumulative Complexity Trade-Offs for Data-Dependent Memory-Hard Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#sustained-space-and-cumulative-complexity-trade-offs-for-data-dependent-memory-hard-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#sustained-space-and-cumulative-complexity-trade-offs-for-data-dependent-memory-hard-functions)**
### 作者
* Jeremiah Blocki, Purdue University, West Lafayette, IN, 47906, USA
* Blake Holman, Purdue University, West Lafayette, IN, 47906, USA
### 摘要
> 内存硬函数（MHFs）是一种有用的密码学原语，可用于设计平等证明工作难题，并保护低熵密码等秘密免受暴力破解攻击。直观上，内存硬函数是一种在评估成本上占主导地位的函数，即使攻击者使用专用硬件（FPGAs/ASICs），其评估成本也主要由内存成本构成，并且已经提出了几种成本度量方法来量化这种直觉。例如，空时成本考虑算法在整个执行过程中的运行时间与最大空间使用率的乘积。Alwen和Serbinenko（STOC 2015）观察到，多次评估函数的空时成本可能不会与评估实例数量成线性比例增加，并引入了更严格的要求，即内存硬函数具有高的累积存储器复杂性（CMC），以确保攻击者的平摊空时成本即使在攻击者对多个不同输入并行评估函数时仍然很大。Alwen等人（EUROCRYPT 2018）观察到，CMC的概念仍然使攻击者在选择空时权衡方面具有不可取的灵活性，例如，尽管MHF \（\ texttt {Scrypt}\）的CMC发散（N^2），但攻击者可以在O（1）的常数内存中以O（N ^ 2）的时间评估该函数。Alwen等人引入了更严格的持续空间复杂度的概念，并设计了一种具有持续复杂度\（s = \ varOmega（N / \ log N）\）和\（t = \ varOmega（N）\）的MHF，即以并行随机预言者模型评估函数的任何算法必须至少具有\（t = \ varOmega（N）\）步，其中内存使用至少为\（\ varOmega（N / \ log N）\）。在这项工作中，我们使用动态礁石游戏和动态图来研究数据相关的内存硬函数（如Argon2id和\（\ texttt {Scrypt}\））之间的持续空间复杂性和累积存储器复杂性之间的权衡。我们设计了自己的动态图（dMHF），其具有以下特性：任何动态礁石策略要么（1）具有\（\ varOmega（N）\）轮次的\（\ varOmega（N）\）空间，要么（2）具有CMC \（\ varOmega（N ^ {3- \ epsilon}）\)，比\（N ^ 2\)大得多。对于Argon2id，我们证明了任何动态礁石策略要么（1）具有\（\ varOmega（N）\）轮次的\（\ varOmega（N ^ {1- \ epsilon}）\)空间，要么（2）具有CMC \（\ omega（N ^ 2）\)。我们还提出了DRSample的动态版本（Alwen等人，2017），对于该版本，任何动态礁石策略要么（1）具有\（\ varOmega（N）\）轮次的\（\ varOmega（N / \ log N）\)空间，要么（2）具有CMC \（\ varOmega（N ^ 3 / \ log N）\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_8](https://doi.org/10.1007/978-3-031-15982-4_8)
## Low Communication Complexity Protocols, Collision Resistant Hash Functions and Secret Key-Agreement Protocols.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#low-communication-complexity-protocols-collision-resistant-hash-functions-and-secret-key-agreement-protocols) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#low-communication-complexity-protocols-collision-resistant-hash-functions-and-secret-key-agreement-protocols)**
### 作者
* Shahar P. Cohen, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
* Moni Naor, Department of Computer Science and Applied Mathematics, Weizmann Institute of Science, Rehovot, Israel
### 摘要
> 我们研究了计算环境中的通信复杂性，其中可能存在不良输入，但对于任何计算能力有限的对手来说，这些输入应该难以找到。
> 
> 我们定义了一个模型，在这个模型中，存在一个公共随机源，但输入是由一个计算能力有限的对手根据公共随机源选择的。我们证明，在这种情况下打破私有硬币模型已知的通信下界与已知的加密假设密切相关。我们考虑了同时消息模型和交互式通信模型，并且证明了对于任何非平凡谓词（没有多余行，如相等性）：
> 
> 1. 打破同时消息情况下 \( \varOmega (\sqrt{n}) \) 的下界或交互式通信情况下 \( \varOmega (\log n) \) 的下界，意味着存在分布式抗碰撞哈希函数（dCRH）。这是使用 Babai 和 Kimmel [BK97] 的技术进行证明的。请注意，使用 CRH 可以打破下界。
> 
> 2. 在这种预设随机性的设置中，不存在恒定通信量的协议（与纯粹的公共随机性模型不同）。
> 
> 我们研究的另一个模型是具有状态的“自由对话”，参与者在选择输入之前可以自由通信并可能保持状态，通信复杂性仅在之后进行测量。我们证明，在这个模型中，对相等性的高效协议以一种构造性的方式意味着秘密密钥协商协议。另一方面，秘密密钥协商协议意味着相等性的最优（从错误角度考虑）协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_9](https://doi.org/10.1007/978-3-031-15982-4_9)
## Accelerating the Delfs-Galbraith Algorithm with Fast Subfield Root Detection.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#accelerating-the-delfs-galbraith-algorithm-with-fast-subfield-root-detection) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#accelerating-the-delfs-galbraith-algorithm-with-fast-subfield-root-detection)**
### 作者
* Maria Corte-Real Santos, University College London, London, UK
* Craig Costello, Microsoft Research, Redmond, USA
* Jia Shi, University of Waterloo, Waterloo, Canada
### 摘要
> 我们提出了一种新的算法，用于从给定的超奇异椭圆曲线\(E/\mathbb {F}_{p^2}\)找到一个同构到子域椭圆曲线\(E'/\mathbb {F}_p\)的算法。这个算法是Delfs–Galbraith算法中普通超奇异同构问题的关键步骤。我们的核心方法是一种新颖的方法，可以快速确定一个多项式\(f \in L[X]\)是否有任何根在子域\(K \subset L\)中，同时避免使用昂贵的根查找算法。特殊情况下，当\(f=\Upphi _{\ell ,p}(X,j) \in \mathbb {F}_{p^2}[X]\)，即当f是第\(\ell\)个模态多项式在超奇异j不变量处的取值时，这提供了一种有效确定是否存在一个将相应的椭圆曲线连接到子域曲线的\(\ell\)-同构的方法。结合传统的Delfs–Galbraith算法，以这种方式检查许多\(\ell\)-同构邻居，可以在单位时间内搜索超奇异集合的更大比例。尽管我们改进的算法的渐近复杂度\(\tilde{O}(p^{1/2})\)与原始Delfs–Galbraith算法的复杂度保持不变，但我们的理论分析和实际实现都显示出子域搜索的运行时间显著减少。这为普通超奇异同构问题的具体难度(即基于同构的密码学的基本问题)提供了新的视角，并对如B-SIDH和SQISign等方案的位安全性产生了直接影响，其中Delfs–Galbraith算法是已知最佳的经典攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_10](https://doi.org/10.1007/978-3-031-15982-4_10)
## Secret Can Be Public: Low-Memory AEAD Mode for High-Order Masking.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#secret-can-be-public-low-memory-aead-mode-for-high-order-masking) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#secret-can-be-public-low-memory-aead-mode-for-high-order-masking)**
### 作者
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### 摘要
> 我们提出了一种新的AEAD操作模式，用于有效地对抗侧信道攻击。我们的模式通过最小化掩码中的重复状态，实现了具有高阶掩码的最小内存使用。实现s位安全性需要一个与密钥相关的s位状态，而传统方案总是通过掩码来保护所有s位。我们通过引入一个密钥相关状态中的不受保护状态来减小受保护状态的大小：我们只保护一半状态，并将另一半状态提供给侧信道对手。确保不受保护状态和受保护状态之间的独立性是关键的技术挑战，因为混合这些状态会将受保护状态透露给对手。我们提出了一种新的模式HOMA，它使用具有s/2位块大小的可调整的分组密码实现了s位安全性。我们还提出了一种新的原语，用于将HOMA实例化为s=128，该原语将SKINNY可调整的分组密码扩展到64位明文块、128位密钥和(256+3)位调整参数。我们通过使用高阶掩码实现HOMA进行硬件性能评估，其中d≤5。对于任何d>0，HOMA的性能优于当前最先进的PFB_Plus，可将电路面积减小大于整个S-box的面积。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_11](https://doi.org/10.1007/978-3-031-15982-4_11)
## Partial Key Exposure Attacks on BIKE, Rainbow and NTRU.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#partial-key-exposure-attacks-on-bike-rainbow-and-ntru) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#partial-key-exposure-attacks-on-bike-rainbow-and-ntru)**
### 作者
* Andre Esser, Technology Innovation Institute, Abu Dhabi, UAE
* Javier Verbel, Technology Innovation Institute, Abu Dhabi, UAE
* Alexander May, Ruhr University Bochum, Bochum, Germany
* Weiqiang Wen, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
### 摘要
> 在所谓的部分密钥暴露攻击中，攻击者通过某些边信道泄露等手段获得了有关秘密密钥的一些信息。这些信息可能是秘密密钥位的某个分数（擦除模型），或者是秘密密钥的某个错误版本（错误模型）。攻击的目标是从泄露的信息中恢复出秘密密钥。
> 
> 人们普遍认为，与例如RSA加密系统不同，大多数后量子密码系统通常对部分密钥暴露攻击具有抵抗力。我们通过对基于码、多项式和格局的方案（BIKE、Rainbow和NTRU）构造部分密钥暴露攻击来强烈质疑这种信念。我们的攻击利用现代PQ密码系统由于效率原因而固有使用的冗余。信息集解码技术的应用和发展对于实现我们的结果起到至关重要的作用。
> 
> 在理论上，我们展示了允许进行多项式时间密钥恢复攻击的非平凡信息泄漏界限。例如，对于所有方案来说，了解秘密密钥位的一个常数分数足以在多项式时间内重构完整的密钥。
> 
> 即使我们不再坚持多项式时间攻击，我们的大多数攻击在大擦除和错误率情况下仍然有效且可行。例如，在BIKE的情况下，当一半的秘密密钥位被擦除时，我们获得的攻击复杂性约为60比特，或者是四分之一的秘密密钥位出现故障。
> 
> 我们的研究结果表明，即使现代PQ密码系统具有极高容错性，对密钥的泄漏也可能导致完全恢复秘密密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_12](https://doi.org/10.1007/978-3-031-15982-4_12)
## Improving Support-Minors Rank Attacks: Applications to Gđisplaystyle eMSS and Rainbow.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#improving-support-minors-rank-attacks-applications-to-g-isplaystyle-emss-and-rainbow) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#improving-support-minors-rank-attacks-applications-to-g-isplaystyle-emss-and-rainbow)**
### 作者
* John Baena, Universidad Nacional de Colombia, Bogotá, Colombia
* Daniel Cabarcas, Universidad Nacional de Colombia, Bogotá, Colombia
* Pierre Briaud, Sorbonne Universités, UPMC Univ Paris 06, Paris, France
* Pierre Briaud, Inria, Team COSMIQ, Paris, France
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, University of Louisville, Louisville, USA
* Javier Verbel, Technology Innovation Institute, Abu Dhabi, UAE
### 摘要
> 支持子集(Support-Minors，简称SM)方法已经打开了对具有排名属性的多变量方案的新攻击途径，而这些属性之前是无法利用的，正如最近对NIST第3轮候选方案G\(\displaystyle e\)MSS和Rainbow的攻击[9, 40]所示。本文深入研究了这种SM方法，并基于此提出了对G\(\displaystyle e\)MSS的大幅改进的攻击。虽然G\(\displaystyle e\)MSS已经受到了[40]的影响，但我们的攻击效果更加严重，使其无法通过简单增加参数大小或甚至应用[36]中最近的投影技术来修复G\(\displaystyle e\)MSS，该技术的目的是使其免受[40]的攻击。例如，我们对G\(\displaystyle e\)MSS128参数集的攻击估计时间复杂度为\(\displaystyle 2^{72}\)，而通过应用[36]进行方案修复将导致签名时间大幅延长，不实用性因子为\(\displaystyle 2^{14}\)。另一个贡献是提出了优化建议，以降低在XL策略上使用Block-Wiedemann算法作为子程序时的内存访问成本，尤其当这些成本是一个问题时。在基于[7]的内存成本模型下，我们展示了来自[9]的矩形MinRank攻击确实可能降低所有第3轮Rainbow参数集的安全性，与[41]使用相同内存成本模型声称的下界相矛盾。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_13](https://doi.org/10.1007/978-3-031-15982-4_13)
## log *-Round Game-Theoretically-Fair Leader Election.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#log-round-game-theoretically-fair-leader-election) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#log-round-game-theoretically-fair-leader-election)**
### 作者
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem, 91904, Jerusalem, Israel
* Ilan Komargodski, NTT Research, Sunnyvale, 94085, USA
* Shin’ichiro Matsuo, NTT Research, Sunnyvale, 94085, USA
* Shin’ichiro Matsuo, Department of Computer Science, Georgetown University, Washington D.C., 20057, USA
* Elaine Shi, Computer Science Department, Carnegie Mellon University, Pittsburgh, 15213, USA
* Ke Wu, Computer Science Department, Carnegie Mellon University, Pittsburgh, 15213, USA
### 摘要
> 众所周知，在存在多数联盟的情况下，强公平硬币抛掷是不可能的。最近的一系列研究表明，通过将公平概念放松到博弈论水平，我们可以克服这一经典下界。具体而言，Chung等人（CRYPTO'21）展示了如何在多数联盟存在的情况下，以小至\(O(\log \log n)\)轮的回合复杂度实现近似（博弈论水平）公平的领导选举。
> 
> 在本文中，我们重新审视了博弈论公平领导选举的回合复杂度。我们构建了\(O(\log ^* n)\)轮的领导选举协议，可以在\((1-o(1)) n\)-sized联盟存在时实现\((1-o(1))\)-近似公平。我们的协议实现了与Chung等人相同的回合-公平权衡，并具有概念上更简单的优势。最后，我们还获得了可能具有独立兴趣的博弈论公平委员会选举协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_14](https://doi.org/10.1007/978-3-031-15982-4_14)
## Gossiping for Communication-Efficient Broadcast.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#gossiping-for-communication-efficient-broadcast) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#gossiping-for-communication-efficient-broadcast)**
### 作者
* Georgios Tsimos, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Charalampos Papamanthou, Yale University, New Haven, USA
### 摘要
> 拜占庭广播（Byzantine Broadcast）对于许多密码协议（如秘密分享、多方计算和区块链共识）至关重要。在本文中，我们应用“八卦”（通过将消息发送给几个随机方，然后这些方再做同样的操作，直到消息交付完成）并提出了新的通信有效的协议，用于不诚实多数情况下的单发广播（BC）和并行广播（PBC），在多个方面改进了现有技术的水平。
> 
> 作为我们的预热成果，我们提出了一个基于随机化的BC协议，通过普通的公钥设置假设实现了\(O(n^2\kappa^2)\)的通信复杂度。这是该设置下第一个具有次立方通信的协议，但仅针对静态对手起作用。
> 
> 借鉴我们的BC协议的思想，我们转向我们的核心贡献，并提出了两个针对自适应对手安全的PBC协议。据我们所知，我们是首个研究特定的PBC的团队：之前的所有方法在并行广播上天真地运行n个单发广播实例，将通信复杂度增加了一个不希望的因子n。我们避免使用BC的黑盒调用的洞察力对于实现我们的渐近改进尤为关键。具体来说：
> 
> 1. 我们的第一个PBC协议实现了\(\tilde{O}(n^3\kappa^2)\)的通信复杂度，并仅依赖于普通的公钥设置假设。
> 
> 2. 我们的第二个PBC协议使用可信设置并实现了几乎最优的通信复杂度\(\tilde{O}（n^2\kappa^4）\)。
> 
> 两个PBC协议相对于已知的涉及n个并行调用各自BC协议的最佳解决方案（如Dolev和Strong（SIAM Journal on Computing，1983）和Chan等人（Public Key Cryptography，2020））均实现了几乎线性的改进。我们的PBC协议的核心问题是我们定义和解决的新问题，我们将其命名为“Converge”。在Converge中，参与方必须运行一个自适应安全且高效的协议，以使在协议结束时，所有剩余的诚实方都拥有初始诚实方输入的并集的超集。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_15](https://doi.org/10.1007/978-3-031-15982-4_15)
## Nearly Optimal Property Preserving Hashing.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#nearly-optimal-property-preserving-hashing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#nearly-optimal-property-preserving-hashing)**
### 作者
* Justin Holmgren, NTT Research, Sunnyvale, CA, 94085, USA
* Daniel Wichs, NTT Research, Sunnyvale, CA, 94085, USA
* Minghao Liu, Northeastern University, Boston, MA, 02115, USA
* LaKyah Tyner, Northeastern University, Boston, MA, 02115, USA
* Daniel Wichs, Northeastern University, Boston, MA, 02115, USA
### 摘要
> **属性保持散列（PPH）**由一组压缩散列函数h组成，对于任意的两个输入x、y，我们可以仅使用摘要h(x)和h(y)正确地确定一些属性P(x, y)是否成立。在基本的PPH中，当x和y是先前选择并且与h独立无关的最坏情况值时，只要我们随机选择h，正确性就应以极高的概率被满足。而在对抗鲁棒PPH（RPPH）中，即使x和y是经过对抗性选择和自适应选择的，取决于h，正确性也必须被保持。在这里，我们研究了关于x和y之间的汉明距离不超过t的属性的(R)PPH。
> 
> Boyle、LaVigne和Vaikuntanathan（ITCS’19）首次提出了（R）PPH的概念，并由Fleischhacker、Simkin（Eurocrypt’21）和Fleischhacker、Larsen、Simkin（Eurocrypt’22）进一步研究。在本文中，我们得到了更好的构造方法，这些方法在概念上更简单，参数几乎是最优的，并且依赖于比先前方法更一般的假设。我们的结果如下：
> 
> 1. 我们通过线性纠错码的编码表解码构造了关于汉明距离的信息论上的非鲁棒PPH。我们提供了一个下界，证明这种构造基本上是最优的。
> 
> 2. 我们通过依赖同态碰撞抗性散列函数将上述构造做到鲁棒性增加很少的开销。这些散列函数可以基于离散对数或短整数解决假设进行构造。在与先前的构造相比，得到的RPPH在压缩方面有所改进，并且几乎是最优的。
> 
> 3. 我们还展示了另一种RPPH关于汉明距离的构造方法，其仅使用标准碰撞抗性散列函数的最小假设。这种压缩稍微差于利用同态碰撞抗性的优化构造，但基本上与先前的特定代数假设的最先进构造相匹配。
> 
> 4. 最后，我们研究了一种新的随机鲁棒PPH（R2P2H）关于汉明距离的概念，它通过允许散列算法本身是随机的来放松RPPH的约束。我们给出了一个具有最优参数的信息论构造方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_16](https://doi.org/10.1007/978-3-031-15982-4_16)
## Collision-Resistance from Multi-Collision-Resistance.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#collision-resistance-from-multi-collision-resistance) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#collision-resistance-from-multi-collision-resistance)**
### 作者
* Ron D. Rothblum, Technion, Haifa, Israel
* Prashant Nalini Vasudevan, National University of Singapore, Singapore, Singapore
### 摘要
> 碰撞抗性哈希函数（\(\textsf{CRH}\)）是一种基本且普遍的密码学原语。最近的一些研究探讨了对\(\textsf{CRH}\)的一种松弛称为t-way多碰撞抗性哈希函数（\(t\text{-}\textsf{MCRH}\)）。这些函数族计算上很难找到t-way碰撞，尽管这样的碰撞很多（甚至可能很容易找到\((t-1)\)way碰撞）。当\(t=2\)时，对应于标准的\(\textsf{CRH}\)，但是研究更大的t值的t-\(\textsf{MCRH}\)是合理的。
> 
> 多碰撞抗性似乎是一种比标准碰撞抗性更弱的性质。然而，在本文中，我们展示了对任何适度缩小的\(t\)-\(\textsf{MCRH}\)（其中\(t \in \{3,4\}\)），存在一种非黑箱变换转换成一个（无限次安全）\(\textsf{CRH}\)。这个转换是非构造性的——我们可以证明存在一个\(\textsf{CRH}\)，但不能明确指出一个构造。
> 
> 我们的结果在更大的t值上部分延伸。特别地，我们展示了对于适当的\(t>t'\)值，我们可以将一个t-\(\textsf{MCRH}\)转换成一个\(t'\)-\(\textsf{MCRH}\)，以减少结果哈希函数族的缩小并且仅达到无限次安全。这个结果利用了Reed-Solomon码的列表译码性质。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_17](https://doi.org/10.1007/978-3-031-15982-4_17)
## Post-quantum Simulatable Extraction with Minimal Assumptions: Black-Box and Constant-Round.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#post-quantum-simulatable-extraction-with-minimal-assumptions-black-box-and-constant-round) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#post-quantum-simulatable-extraction-with-minimal-assumptions-black-box-and-constant-round)**
### 作者
* Nai-Hui Chia, Rice University, Houston, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Xiao Liang, Stony Brook University, Stony Brook, USA
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 从半诚实的后量子模态无视传输的最小假设出发，我们构建了第一个对抗量子多项式时间（QPT）攻击者具有\(\varepsilon\)-可模拟性的双方计算（2PC），该计算具有常数轮次和黑盒特性（对于构建和安全性减弱都是如此）。《Chia, Chung, Liu and Yamakawa（FOCS'21）》的最新研究表明，在恒定轮次下，带有标准基于仿真的安全性的后量子2PC是不可能的，除非 \({\textbf{NP}}\subseteq \textbf{BQP}\)，或依赖非黑盒仿真。我们所针对的\(\varepsilon\)-可模拟性是标准基于仿真的安全性的一种松弛条件，允许具有任意小的可察觉仿真误差\(\varepsilon\)。此外，当允许量子通信时，我们可以进一步削弱假设到后量子安全单向函数（PQ-OWFs），同时保持常数轮次和黑盒属性。
> 
> 我们的技术还提供了以下一系列针对QPT攻击者的常数轮次和黑盒双方协议，仅假设有关后量子安全单向函数（PQ-OWFs）的黑盒访问权限：
> 
> 提取承诺，其中提取者也是一个\(\varepsilon\)-模拟器；
> 
> \(\varepsilon\)-零知识承诺证明（commit-and-prove），其承诺阶段可通过\(\varepsilon\)-仿真进行提取；
> 
> \(\varepsilon\)-可模拟的抛硬币协议；
> 
> 对于知识型\({\textbf{NP}}\)问题，具有\(\varepsilon\)-零知识证明，其知识提取者也是一个\(\varepsilon\)-模拟器；
> 
> 对于\(\textbf{QMA}\)，具有\(\varepsilon\)-零知识证明。
> 
> 上述结果的核心在于一种黑盒提取引理，展示了如何以一种可控的方式有效地从QPT攻击者那里提取秘密，同时干扰他们的量子状态，即实现了对敌方在提取后状态的\(\varepsilon\)-可模拟性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_18](https://doi.org/10.1007/978-3-031-15982-4_18)
## The Gap Is Sensitive to Size of Preimages: Collapsing Property Doesn't Go Beyond Quantum Collision-Resistance for Preimages Bounded Hash Functions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#the-gap-is-sensitive-to-size-of-preimages-collapsing-property-doesnt-go-beyond-quantum-collision-resistance-for-preimages-bounded-hash-functions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#the-gap-is-sensitive-to-size-of-preimages-collapsing-property-doesnt-go-beyond-quantum-collision-resistance-for-preimages-bounded-hash-functions)**
### 作者
* Shujiao Cao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Rui Xue, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Shujiao Cao, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Rui Xue, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### 摘要
> 作为量子抗碰撞增强的一部分，Unruh（EUROCRYPT 2016）提出的哈希函数的崩溃特性强调了区分哈希值超级位置态和坍塌态的困难性。崩溃特性可以明显推导出量子抗碰撞性。然而，目前尚不清楚崩溃哈希函数是否存在从崩溃哈希函数到量子抗碰撞哈希函数的归约关系。在本文中，我们进一步研究了这两个特性之间的关系，并得到了以下两个有趣的结果：
> 
> 首先，当每个哈希值的原像大小由多项式界限制时，我们证明了崩溃特性和碰撞抵抗性必须同时成立。通过利用酉量子电路的可逆性，我们以半黑盒的方式证明了该结果。
> 
> 接下来，我们进一步考虑了指数大小的原像情况下这两个特性之间的关系。通过构建一个保持量子抗碰撞性的多项式界限哈希函数，我们展示了当原像大小不超过预期值时，崩溃哈希函数的存在可以由量子抗碰撞哈希函数推导出来。
> 
> 我们的结果表明，这两个特性之间的差距对原像大小非常敏感。作为推论，我们的结果还揭示了多项式界限的不明碰撞抗错误哈希函数的不存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_19](https://doi.org/10.1007/978-3-031-15982-4_19)
## New Constructions of Collapsing Hashes.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#new-constructions-of-collapsing-hashes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#new-constructions-of-collapsing-hashes)**
### 作者
* Mark Zhandry, NTT Research, Sunnyvale, USA
* Mark Zhandry, Princeton University, Princeton, USA
### 摘要
> 折叠是一种后量子强化的碰撞抵抗技术，需要将许多经典结果转移到量子环境。不幸的是，现有的关于折叠哈希的标准模型证明需要LWE。我们构建了第一批基于以下问题的量子难题的折叠哈希：
> 
> 在各种低噪声或高难度范围内的LPN问题，基本上与LPN的碰撞抵抗技术相匹配。
> 
> 在指数级扩展图上找到循环，例如椭圆曲线上的同构产生的图。
> 
> 在任何哈希函数中找到碰撞的“最佳”难度。
> 
> 在哈希函数上找到碰撞的多项式难度，假设哈希满足一定的合理条件。
> 
> 作为直接推论，我们在相同的假设下获得了第一个统计隐藏的后量子承诺和后量子简洁论证（知识）。我们的结果通过一个一般定理得出，该定理展示了如何从后量子抗碰撞性哈希函数H构造一个折叠哈希H'，无论H本身是否是折叠的，前提是H满足一个我们称之为“半正则”的特定合理条件。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_20](https://doi.org/10.1007/978-3-031-15982-4_20)
## Statistically Sender-Private OT from LPN and Derandomization.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#statistically-sender-private-ot-from-lpn-and-derandomization) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#statistically-sender-private-ot-from-lpn-and-derandomization)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Sapir Freizeit, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 我们基于学习差异方程假设（LPN）和标准的Nisan-Wigderson风格去随机化的假设构建了一个具有统计发送者隐私（SSP OT）的双消息遗忘传输协议。除了本身的研究价值之外，SSP OT协议已经证明是在密码学应用领域中最小化轮次复杂性的强大工具，包括证明系统、安全计算协议以及统计零知识中的困难问题等。
> 
> 该协议具有可能后量子安全性。唯一另一种具有可能后量子安全性的结构基于学习与错误（LWE）假设。由于缺乏LWE的几何结构，我们的构建和分析依赖于一组不同的技术。
> 
> 在技术上，我们首先基于仅依赖LPN的公共随机字符串模型构建SSP OT协议，然后去随机化公共随机字符串。大部分技术难点在于第一步。在这里，我们证明了内积随机提取器对于某种类型的线性分裂攻击具有鲁棒性属性。我们的构建存在一个注意事项，即它依赖于所谓的LPN低噪声区间。这与我们目前对LPN的复杂理论理解相一致，只有在低噪声区间内才被认为在统计零知识中能够产生困难。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_21](https://doi.org/10.1007/978-3-031-15982-4_21)
## Constructive Post-Quantum Reductions.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#constructive-post-quantum-reductions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#constructive-post-quantum-reductions)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Zvika Brakerski, Weizmann Institute of Science, Rechovot, Israel
* Yael Tauman Kalai, Microsoft Research, Cambridge, MA, USA
* Yael Tauman Kalai, Massachusetts Institute of Technology, Cambridge, MA, USA
### 摘要
> 能否将经典约简转换为后量子约简呢？通常认为，在交互设置中存在问题，但非交互式约简是成立的。然而，考虑到量子辅助输入时，这种转换会导致一个非构造性的后量子约简，需要复制量子辅助输入，这通常是低效甚至不可能的。这违反了可证明的密码学互惠前提：攻击一个密码学基元应该导致算法优势。
> 
> 我们发起构造性量子约简的研究，并以构造性方式展示了将大类经典约简转换为后量子设置的积极和否定的结果。我们证明了任何非交互路径非自适应约简（比如决策假设）都可以变为后量子构建。相比之下，超多项式解空间的假设（比如一般搜索假设）通常无法转换。
> 
> 在此过程中，我们作出了几点额外的贡献：
> 
> 1.我们提出了一个关于计算问题的具有有状态求解器（stateful solvers）的约简（或一般交互）框架，该求解器可能在连续调用之间改变其内部状态。我们证明了仍然可以利用这种求解器。这个框架和我们的结果在经典设置中也是有意义的。
> 
> 2.我们否定的结果的一个结果是，对于一个超多项式解空间问题有用的量子辅助输入在测量后通常不能通用地“恢复”。这表明了Chiesa等人（FOCS 2021）的新反转技术在多项式测量空间范围之外无法扩展。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_22](https://doi.org/10.1007/978-3-031-15982-4_22)
## Differential Cryptanalysis in the Fixed-Key Model.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#differential-cryptanalysis-in-the-fixed-key-model) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#differential-cryptanalysis-in-the-fixed-key-model)**
### 作者
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, University of Bergen, Bergen, Norway
### 摘要
> 提出了一种固定密钥差分概率分析的系统方法。它基于"准差分轨迹"的传播，以理论上可靠的方式跟踪满足差分特征的值的概率线性关系。研究表明，差分的固定密钥概率可以表示为其准差分轨迹的相关性之和。
> 
> 该方法的理论基础是基于差分分布表的扩展，我们称之为准差分过渡矩阵。这些矩阵的作用类似于线性密码分析中的相关矩阵。这使得差分和线性密码分析的理论处于同等地位。
> 
> 通过对RECTANGLE、KNOT、Speck和Simon的若干差分进行分析，证明了所提方法的实际适用性。分析是自动化的，并适用于其他SPN和ARX设计。多个攻击被证明是无效的，其他大部分攻击只适用于某些密钥，但可以改进为弱密钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_23](https://doi.org/10.1007/978-3-031-15982-4_23)
## Simplified MITM Modeling for Permutations: New (Quantum) Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#simplified-mitm-modeling-for-permutations-new-quantum-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#simplified-mitm-modeling-for-permutations-new-quantum-attacks)**
### 作者
* André Schrottenloher, Cryptology Group, CWI, Amsterdam, The Netherlands
* Marc Stevens, Cryptology Group, CWI, Amsterdam, The Netherlands
### 摘要
> Meet-in-the-middle（MITM）是一种常见的范式，其中内部状态沿两条独立路径（'forwards'和'backwards'）进行计算，然后进行匹配。随着时间的推移，MITM攻击通过使用更精细的技术和利用额外自由度和结构的方法得到改进，这使得查找和优化此类攻击变得更加复杂。因此，人们开始使用详细的攻击模型来为通用求解器自动搜索改进的攻击，其中一个最明显的是Bao等人在EUROCRYPT 2021上开发的MILP模型。
> 
> 在本文中，我们研究了一个简化的MILP建模方法，将大大减少的攻击表示作为通用求解器的输入，结合理论分析，证明了任何解决方案存在和复杂性的详细攻击。该模型可用于找到广泛类别的密码置换的经典和量子攻击。首先，我们研究了类似于Present的结构，使用了Spongent哈希函数的置换：我们在区分器的MITM步骤中改进了多达3轮。其次，我们研究了类似于AES的设计：尽管比Bao等人的模型简单得多，但我们的模型可以恢复出最佳的先前结果。唯一的限制是我们没有使用密钥计划的自由度。第三，我们展示了该模型可以扩展到更多的置换，如Feistel网络。在这个背景下，我们对简化的Simpira v2和Sparkle上的Guess-and-determine攻击进行了新研究。
> 
> 最后，利用我们的模型，我们发现了几种新的量子预像和伪预像攻击（例如Haraka v2，Simpira v2...），并针对与经典攻击相同轮数进行攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_24](https://doi.org/10.1007/978-3-031-15982-4_24)
## Constructing and Deconstructing Intentional Weaknesses in Symmetric Ciphers.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#constructing-and-deconstructing-intentional-weaknesses-in-symmetric-ciphers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#constructing-and-deconstructing-intentional-weaknesses-in-symmetric-ciphers)**
### 作者
* Christof Beierle, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Tim Beyne, imec-COSIC, KU Leuven, Leuven, Belgium
* Patrick Felke, University of Applied Sciences Emden/Leer, Emden, Germany
### 摘要
> 精心削弱的密码在政治讨论中引起了极大的兴趣，如在不断出现的加密战争中，近期的进展已经引起了学术界的关注。 Eurocrypt 2021年的一篇论文显示了强烈的迹象，表明广泛部署的流密码GEA-1的安全性被故意并秘密地削弱到40位，以满足1990年代末施行的欧洲出口限制。然而，并未说明如何构造这种密码。另一方面，我们看到了发布在CRYPTO 2020年的恶意设计框架，它允许构建带后门的可调整块密码，其中恢复后门的难度依赖于已知的密码学假设。然而，构建的可调整块密码与通用密码（如AES）非常不同。
> 
> 在本文中，我们详细解释了GEA-1的弱点是如何构造的，解决了上述工作的主要问题。通过推广MALICIOUS，我们首次构建了符合通用

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_25](https://doi.org/10.1007/978-3-031-15982-4_25)
## Simon's Algorithm and Symmetric Crypto: Generalizations and Automatized Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2022-3].md#simons-algorithm-and-symmetric-crypto-generalizations-and-automatized-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-3].md#simons-algorithm-and-symmetric-crypto-generalizations-and-automatized-applications)**
### 作者
* Federico Canale, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Ruhr University Bochum, Bochum, Germany
* Lukas Stennes, Ruhr University Bochum, Bochum, Germany
### 摘要
> 在这篇论文中，我们进一步深入理解如何应用Simon算法来破解对称密码原语。
> 
> 一方面，我们自动化搜索新的攻击方法。使用这种方法，我们自动发现了针对构造如5轮MISTY L-FK或带有内部置换的5轮Feistel-FK的高效密钥恢复攻击，通过使用Simon算法。
> 
> 另一方面，我们研究了Simon算法的推广，使用非标准的Hadamard矩阵，旨在通过具有周期以外属性的方式扩展量子对称密码分析工具包。我们的主要结论是，这些推广中没有一个能够实现这一点，并且我们得出结论，利用非标准Hadamard矩阵和量子计算机来破解对称原语将需要根本性的新攻击方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-15982-4_26](https://doi.org/10.1007/978-3-031-15982-4_26)
