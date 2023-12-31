# Crypto[2023-2]
## Revisiting Cycles of Pairing-Friendly Elliptic Curves.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#revisiting-cycles-of-pairing-friendly-elliptic-curves) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#revisiting-cycles-of-pairing-friendly-elliptic-curves)**
### 作者
* Marta Bellés-Muñoz, Dusk Network, Amsterdam, The Netherlands
* Javier Silva, Dusk Network, Amsterdam, The Netherlands
* Marta Bellés-Muñoz, Pompeu Fabra University, Barcelona, Spain
* Jorge Jiménez Urroz, Polytechnic University of Catalonia, Barcelona, Spain
* Jorge Jiménez Urroz, Technical University of Madrid, Madrid, Spain
### 摘要
> 密码学中一个近期的研究兴趣点是证明系统的递归组合。其中一种使递归组合高效的方法是使用循环的配对友好椭圆曲线。然而，已知的构造具有非常低的嵌入度。这导致参数大小很大，整个系统变得低效。在本文中，我们研究了由多项式参数化的曲线组成的2-循环，并且证明了除非满足一个强条件，否则这样的循环是不存在的。因此，我们证明已知的曲线家族中除了已知的循环外，不会出现其他2-循环。此外，我们还展示了一些关于循环的一般性质，并对配对友好循环在所有循环中的密度进行了详细计算。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_1](https://doi.org/10.1007/978-3-031-38545-2_1)
## Non-interactive Zero-Knowledge from Non-interactive Batch Arguments.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#non-interactive-zero-knowledge-from-non-interactive-batch-arguments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#non-interactive-zero-knowledge-from-non-interactive-batch-arguments)**
### 作者
* Jeffrey Champion, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### 摘要
> 零知識和簡潔性是非互動證明研究中重要的兩個屬性。先前，Kitagawa等人(TCC 2020)展示了如何從簡潔的非互動證明（SNARG）中獲得一個非互動零知識（NIZK）證明對於 \(\textsf{NP}\) 這一問題。具體來說，他們的工作展示了如何利用證明系統的簡潔性質轉換為零知識性質。
> 
> 在這項研究中，我們研究了如何利用簡潔性實現零知識的相似問題。我們的起點是一個批量證明對於 \(\textsf{NP}\)，這是一個允許證明者通過證據使驗證者信服 T 個 \(\textsf{NP}\) 語句 \(x_1, \ldots , x_T\) 的原語。該證明的大小按比例地隨著 T 線性增長。與 \(\textsf{NP}\) 的 SNARG 不同，\(\textsf{NP}\) 的批量證明可以建立在配對組和無配對組的群假設以及格假設上。批量證明的挑戰在於證明大小只對實例數進行攤銷，但仍可以對少量實例的證據編碼完整的見證訊息。
> 
> 我們展示了如何將 \(\textsf{NP}\) 的批量證明與局部偽隨機生成器（即每個輸出比特只取決於少量輸入比特的偽隨機生成器）和雙模態承諾方案相結合，從而獲得 \(\textsf{NP}\) 的 NIZK。我們的工作提供了一種實現零知識從簡潔性的新的通用方法，並凸顯了簡潔性和零知識之間的新聯繫。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_2](https://doi.org/10.1007/978-3-031-38545-2_2)
## Lattice-Based Succinct Arguments from Vanishing Polynomials - (Extended Abstract).
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#lattice-based-succinct-arguments-from-vanishing-polynomials-extended-abstract) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#lattice-based-succinct-arguments-from-vanishing-polynomials-extended-abstract)**
### 作者
* Valerio Cini, AIT Austrian Institute of Technology, Vienna, Austria
* Russell W. F. Lai, Aalto University, Espoo, Finland
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 简洁的论证使得证明者能够以最小的沟通和验证者工作量来说服验证者对语言中的任何陈述的有效性。在其他方法中，基于格的协议提供了坚实的理论基础、后量子安全性和丰富的代数结构。在这项工作中，我们提出了一些构建高效基于格的简洁论证的新方法。我们的主要技术要素是基于消失多项式的新承诺方案，这是从代数几何学中借鉴的概念。我们分析了这种承诺方案的安全性，并展示了如何利用额外的代数结构来构建新的基于格的简洁论证。我们的一些研究结果中的亮点包括：
> 
> （一）第一个对于具有多项式对数验证时间的线性关系的递归折叠（类似于Bulletproofs）协议。传统上，验证时间一直是这些协议的效率瓶颈（无论基本假设是什么）。
> 
> （二）第一个基于格的可验证延迟函数（VDF），基于最近引入的顺序关系。
> 
> （三）第一个基于格的线性时间证明者简洁论证方法，适用于NP预处理模型。该方案的可靠性基于（知识）k-R-ISIS假设[Albrecht等人，CRYPTO'22]。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_3](https://doi.org/10.1007/978-3-031-38545-2_3)
## Orbweaver: Succinct Linear Functional Commitments from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#orbweaver-succinct-linear-functional-commitments-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#orbweaver-succinct-linear-functional-commitments-from-lattices)**
### 作者
* Ben Fisch, Yale University, New Haven, USA
* Zeyu Liu, Yale University, New Haven, USA
* Psi Vesely, Yale University, New Haven, USA
### 摘要
> 我们提出了Orbweaver，第一个能够实现准线性证明时间、证明大小为\(O(\log n)\)，验证时间为\(O(\log n \log \log n)\)的似乎是后量子功能承诺。Orbweaver可以在循环群环或整数上对承诺向量上的线性映射进行评估。它是可提取的，预处理的，非交互式的，结构保留的，适合于递归组合，并支持对数级的公共证明聚合。我们方案的安全性基于k-R-ISIS假设（及其知识对应物），我们需要一个可信

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_4](https://doi.org/10.1007/978-3-031-38545-2_4)
## Non-interactive Universal Arguments.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#non-interactive-universal-arguments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#non-interactive-universal-arguments)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Dana Shamir, Tel Aviv University, Tel Aviv, Israel
* Tomer Solomon, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 2002年，Barak和Goldreich首次引入了通用论证的概念，并基于多项式难度的抗碰撞哈希函数构建了一种互动式的非确定性计算的通用论证。从那时起，尤其是近年来，在标准难度假设下，对确定性计算的非互动式简洁论证的构建有了巨大的发展。然而，构建的简洁论证只能在次指数假设下被证明为通用的。
> 
> 假设多项式难度的完全同态加密和广泛认可的最坏情况复杂性假设，我们证明了一个普遍的提升定理，证明了所有现有的非互动式简洁论证都可以被证明为通用的。所需的复杂性假设是非一致性不允许任意多项式加速。在统一对手的情况下，不需要这个额外的假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_5](https://doi.org/10.1007/978-3-031-38545-2_5)
## Succinct Arguments for RAM Programs via Projection Codes.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#succinct-arguments-for-ram-programs-via-projection-codes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#succinct-arguments-for-ram-programs-via-projection-codes)**
### 作者
* Yuval Ishai, Technion - Israel Institute of Technology, Haifa, Israel
* Rafail Ostrovsky, University of California Los Angeles, Los Angeles, USA
* Akash Shah, University of California Los Angeles, Los Angeles, USA
### 摘要
> 受到证明涉及大型数据库中小子集的目标的驱动，我们引入并研究了投影码的概念。一个标准的纠错码可以将消息 **x** 编码成一个编码字 **X**，即使有恒定比例的 **X** 被损坏，消息 **x** 仍然可以被恢复。投影码将此保证扩展到 **x** 的任何子位集。具体而言，对于将 **x** 投影到其坐标子集 **s** 上的每个投影，存在一个大小相当的子集 **S**，使得投影编码 **X|_S** 形成投影消息 **x|_s** 的强大编码。
> 
> 我们的第一个主要结果是构建了具有接近最优增长长度的投影码和子集大小的结构。然后，我们将其应用于获得第二个主要结果：针对（大型）已提交数据库上的RAM程序计算的简洁论证，其中证明者和验证者的通信和运行时间在RAM程序运行时间远小于数据库大小时也接近最优。我们的解决方案只使用了黑盒碰撞抗性哈希函数，提供了首个具有类似渐进效率的黑盒替代方案，而非黑盒构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_6](https://doi.org/10.1007/978-3-031-38545-2_6)
## Brakedown: Linear-Time and Field-Agnostic SNARKs for R1CS.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#brakedown-linear-time-and-field-agnostic-snarks-for-r1cs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#brakedown-linear-time-and-field-agnostic-snarks-for-r1cs)**
### 作者
* Alexander Golovnev, Georgetown University, Washington, D.C., USA
* Justin Thaler, Georgetown University, Washington, D.C., USA
* Jonathan Lee, Nanotronics, New York, USA
* Srinath Setty, Microsoft Research, Cambridge, USA
* Riad S. Wahby, Stanford University, Stanford, USA
### 摘要
> 该论文介绍了一种名为Brakedown的SNARK。Brakedown针对R1CS，这是一个广义电路可满足性的流行NP完备问题。它是第一个提供线性时间证明者的系统，这意味着证明者在证明一个N大小的R1CS实例可满足性时需要O(N)有限域操作。与之前的SNARK实现相比，Brakedown的证明者更快，无论是在具体情况下还是在渐进情况下。它不需要可信设置，并且可能具有后量子安全性。此外，它与足够大的任意有限域兼容；在具有次线性证明大小的现有证明系统中，这一特性是新的。为了设计Brakedown，我们观察到Bootle、Chiesa和Groth (BCG, TCC 2020)的最新工作提供了一个多项式承诺方案，当与Spartan (CRYPTO 2020)的线性时间交互证明系统结合时，可以实现R1CS的线性时间IOPs和SNARKs（类似的理论结果以前由BCG建立过，但我们的方法在概念上更简单，对于实现高速SNARKs至关重要）。从BCG中我们提取的多项式承诺方案的核心组成部分是一个线性时间可编码的码。现有的此类码的构造被认为是不实际的。尽管如此，我们设计和构建了一种在我们的情况下实用的新型码。
> 
> 我们还实现了一种Brakedown的变体，它使用Reed-Solomon码而不是我们的线性时间可编码码；我们将这种变体称为Shockwave。Shockwave虽然不是一种线性时效的SNARK，但它提供了更短的证明和更低的验证时间，同时也提供了比之前可能的后量子SNARKs更快的证明者。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_7](https://doi.org/10.1007/978-3-031-38545-2_7)
## Lattice-Based Succinct Arguments for NP with Polylogarithmic-Time Verification.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#lattice-based-succinct-arguments-for-np-with-polylogarithmic-time-verification) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#lattice-based-succinct-arguments-for-np-with-polylogarithmic-time-verification)**
### 作者
* Jonathan Bootle, IBM Research Europe, Zurich, Switzerland
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Katerina Sotiraki, UC Berkeley, Berkeley, USA
### 摘要
> 基于Kilian（STOC 92）引入的Merkle树范式的简洁论证在实践中由于使用通用的密码原语而导致更大的证明大小。相比之下，在实践中具有最小证明大小的简洁论证是利用同态承诺。然而，这些后者是量子不安全的，不像基于Merkle树范式的简洁论证。
> 
> 最近的一系列工作旨在解决这一限制，通过构建利用基于点阵的承诺的量子安全的简洁论证。最终目标是实现比通过Merkle树范式实现的更小的证明大小。然而，已知的构造缺乏简洁的验证。
> 
> 在本文中，我们构建了第一个用于NP的具有简洁验证的交互式论证系统，它利用了基于点阵的承诺的同态特性，而不是Merkle树范式。对于具有N个门的算术电路，我们的构造根据环短整数解决（RSIS）问题的困难程度实现了\(\textsf{polylog}(N)\)的验证时间。
> 
> 我们构造中的核心技术是建立在基于级别双线性模块的承诺方案的委托协议，这是一个我们认为独立感兴趣的新概念。我们表明，级别双线性模块可以基于预量子和后量子密码假设来实现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_8](https://doi.org/10.1007/978-3-031-38545-2_8)
## SNARGs for Monotone Policy Batch NP.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#snargs-for-monotone-policy-batch-np) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#snargs-for-monotone-policy-batch-np)**
### 作者
* Zvika Brakerski, Weizmann Institute of Science, Rehovot, Israel
* Maya Farber Brodsky, Tel Aviv University, Tel Aviv, Israel
* Omer Paneth, Tel Aviv University, Tel Aviv, Israel
* Yael Tauman Kalai, Microsoft Research and MIT, Cambridge, USA
* Alex Lombardi, Simons Institute and UC Berkeley, Berkeley, USA
### 摘要
> 我们基于学习陷门（Learning with Errors，简称LWE）假设，为单调策略批处理NP语言构建了一个简明非交互证明（SNARG）。该类是与单调函数f：{0,1}^k -> {0,1}和NP语言L相关联的NP子类，并包含实例(x_1,...,x_k)，使得当且仅当b_j=1时，f(b_1,...,b_k)=1且x_j∈L。我们的SNARG是对非自适应情形的知识论证，并满足对自适应对手的一种新的可在某处提取性质。
> 
> 这是首个基于标准困难假设的SNARG，针对NP的一个子类，目前尚不清楚该子类是否具有与构建SNARG的标准框架兼容的（计算）非信号PCP（Probabilistically Checkable Proof）参数。事实上，我们的方法必然偏离了这个框架。
> 
> 我们的构造将现有关于NP的准证和一种新型密码编码与从局部到全局的完备性分析相结合。我们编码中的主要新颖成分是谓词可提取哈希（Predicate-Extractable Hash，简称PEHash）族，它是一种推广了某处可提取哈希的概念的基础工具。某处可提取哈希允许提取单个输入坐标，而我们的PEHash则提取输入的全局性质。我们认为这个原语具有独立的研究价值，并相信它将发现其他应用领域。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_9](https://doi.org/10.1007/978-3-031-38545-2_9)
## TreePIR: Sublinear-Time and Polylog-Bandwidth Private Information Retrieval from DDH.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#treepir-sublinear-time-and-polylog-bandwidth-private-information-retrieval-from-ddh) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#treepir-sublinear-time-and-polylog-bandwidth-private-information-retrieval-from-ddh)**
### 作者
* Arthur Lazzaretti, Yale University, New Haven, USA
* Charalampos Papamanthou, Yale University, New Haven, USA
### 摘要
> 在私有信息检索（PIR）中，客户端希望从包含N个值的公共数据库中检索索引为i的值，而不泄露关于i的任何信息。在最近的开创性工作中，Corrigan-Gibbs和Kogan（EUROCRYPT 2020）引入了第一个具有亚线性摊销服务器时间和亚线性\(O(\sqrt{N} \log N)\)带宽的双服务器PIR协议。在后续的工作中，Shi等人（CRYPTO 2021）通过提出一个基于私有可穿孔伪随机函数的构造，将带宽降低到多对数级别，而该原语的唯一已知构造是基于LWE等重型密码原语的。部分原因是因为这个原因，他们的PIR协议没有实现具体的效率。在本文中，我们提出TreePIR，这是一个具有亚线性摊销服务器时间和多对数级带宽的双服务器PIR协议，其安全性只基于DDH假设。TreePIR可以划分为两个都是亚线性的阶段：第一阶段非常简单，只需要伪随机生成器。第二阶段是一个只有\(\sqrt{N}\)个索引的单服务器PIR协议，我们可以使用基于DDH的Döttling等人（CRYPTO 2019）的协议，或者为了实际目的，使用最具体有效的单服务器PIR协议。TreePIR不仅在弱密码学假设下实现了比先前方法更好的渐近性能，而且在实践中胜过了现有的双服务器PIR协议。我们协议的关键是一个称之为弱私有可穿孔伪随机函数的新密码原语，我们相信它可以有进一步的应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_10](https://doi.org/10.1007/978-3-031-38545-2_10)
## Multi-party Homomorphic Secret Sharing and Sublinear MPC from Sparse LPN.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#multi-party-homomorphic-secret-sharing-and-sublinear-mpc-from-sparse-lpn) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#multi-party-homomorphic-secret-sharing-and-sublinear-mpc-from-sparse-lpn)**
### 作者
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Yuval Ishai, Technion, Haifa, Israel
* Huijia Lin, University of Washington, Seattle, USA
### 摘要
> 在过去的几年中，同态秘密分享（HSS）作为全同态加密（FHE）的一个引人注目的替代方案出现，由于它从一系列标准假设出发的可行性以及潜在的效率优势。然而，除了基于FHE或不可区分混淆（iO）构建的方案之外，所有已知的HSS方案都只支持两方。
> 
> 在这项工作中，我们首次构建了一个多方HSS方案，用于非平凡函数类，且假设不知道蕴含FHE。特别地，我们构建了一个针对任意方数量和任意破坏阈值的HSS方案，支持在任意有限域上计算多变量多项式的评估，其次数为\(\log / \log \log \)。作为结果，当评估大小为S的分层布尔电路时，我们获得了一个安全的多方计算（MPC）协议，每个方的通信量近似为\(O(S/\log \log S)\)比特（略微低于线性）。
> 
> 我们的HSS方案依赖于稀疏带噪声的学习奇偶校验（LPN）假设，这是一种具有稀疏公共矩阵的标准LPN变体，在之前的工作中已经进行了研究和使用。由于这一假设，我们的构建方案拥有几个独特的优点。特别地，它可以基于任何线性秘密分享方案构建，产生可以通过解码器进行纠错的噪声输出分享。这使得我们的方案可以实现最佳的低次数多项式下载速率。与之前的工作不同，我们的方案还具有较低的计算开销，即每个方对于恒定次数多项式的计算需要O(M)的工作量，其中M是单项式的数量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_11](https://doi.org/10.1007/978-3-031-38545-2_11)
## Lattice Signature with Efficient Protocols, Application to Anonymous Credentials.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#lattice-signature-with-efficient-protocols-application-to-anonymous-credentials) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#lattice-signature-with-efficient-protocols-application-to-anonymous-credentials)**
### 作者
* Corentin Jeudy, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
* Corentin Jeudy, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Normandie Univ, UNICAEN, ENSICAEN, CNRS, GREYC, 14000, Caen, France
### 摘要
> 数字签名是密码学中的一个基本原语，可以作为手写签名的数字模拟，同时也可以作为更复杂系统的构建模块。在后一种情况下，需要具有特定特征的签名，以便与系统的其他组件（如零知识证明）平稳地交互。这导致了所谓的高效协议签名的出现，这是一个多功能工具，已经在无数应用中使用。然而，设计这样的签名确实相当困难，尤其是如果希望抵抗量子计算。事实上，我们只知道一种后量子构造方法，由Libert等人在Asiacrypt'16提出，生成非常大的签名和证明。
> 
> 在本文中，我们提出了一种新的构造方法，可以在标准格和结构化格中实例化，从而在每种情况下都实现了显著的性能改进。特别地，消息-签名持有的证明大小被减小至不到650 KB，这是此类方案的主要指标之一。由于我们的构造保留了所有高效协议签名所期望的特征，它可以作为所有使用这些签名的系统中的替代部件，从而自动提高其性能，并对许多应用产生直接影响。它还可以用于轻松设计新的保护隐私的机制。作为示例，我们提供了第一个基于格的匿名凭证系统。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_12](https://doi.org/10.1007/978-3-031-38545-2_12)
## A Framework for Practical Anonymous Credentials from Lattices.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#a-framework-for-practical-anonymous-credentials-from-lattices) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#a-framework-for-practical-anonymous-credentials-from-lattices)**
### 作者
* Jonathan Bootle, IBM Research Europe, Zurich, Switzerland
* Vadim Lyubashevsky, IBM Research Europe, Zurich, Switzerland
* Alessandro Sorniotti, IBM Research Europe, Zurich, Switzerland
* Ngoc Khanh Nguyen, EPFL, Lausanne, Switzerland
### 摘要
> 我们提出了一种基于格问题困难度的实用匿名凭证方案的框架。证明者和验证者的运行时间与用户数量无关，并且与属性数量呈线性关系。该方案在实践中也非常紧凑，对于任意大（比如说\(2^{128}\)）数量的用户，每个用户拥有若干属性，证明的大小可以小到几十千字节。我们的方案的安全性基于一种新的格假设族，大致说明在某个集合S中，给定随机元素的短预图，很难为该集合中的一个新元素创建一个预图。我们证明，如果该集合接受有效的零知识知识证明，证明了针对集合元素及其预图的承诺，则可以产生实际高效的保护隐私的原语，如盲签名、匿名凭证和群签名。我们提出了一个候选实例化函数，来自这个函数族，它允许进行这样的证明，并从而产生实际的基于格的原语。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_13](https://doi.org/10.1007/978-3-031-38545-2_13)
## Anonymous Tokens with Stronger Metadata Bit Hiding from Algebraic MACs.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#anonymous-tokens-with-stronger-metadata-bit-hiding-from-algebraic-macs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#anonymous-tokens-with-stronger-metadata-bit-hiding-from-algebraic-macs)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, WA, USA
* F. Betül Durak, Microsoft Research, Redmond, WA, USA
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### 摘要
> 一方面，网络需要保护免受恶意行为，如机器人或DoS攻击的影响；另一方面，这些需求理想情况下不应该为服务追踪用户在网上的活动提供理由。匿名令牌提供了在允许发行者确保用户经过审核并保护用户隐私之间的良好平衡。然而，在某些情况下，无论是否发行一个令牌，都会向对手揭示关于区分诚实用户和机器人或攻击者的策略的大量信息。
> 
> 在这项工作中，我们专注于设计一个在客户端和发行者（也是验证者）之间的匿名令牌协议，使发行者能够支持其欺诈检测机制同时保护用户的隐私。这是通过允许发行者将一个隐藏的（对客户端来说是隐藏的）元数据位嵌入到令牌中来实现的。我们首先研究了来自CRYPTO 2020的现有协议，该协议是PoPETs 2018中Privacy Pass的一个扩展；该协议旨在提供对隐藏的元数据位的支持，但提供了一种有些受限的安全概念。我们展示了一种新的攻击，表明这是协议的一个弱点，而不仅仅是定义的问题。特别是，在攻击者可以兑换一些令牌并根据是否成功提取了位来获得反馈的情况下，元数据的隐藏性是薄弱的。
> 
> 然后，我们重新审视了具有私有元数据位的匿名令牌的形式化，考虑了更自然的概念，并设计了一个实现了这个概念的方案。为了设计这个新的安全协议，我们基于代数MACs而不是PRFs进行构建。我们的安全定义捕捉了一个现实的威胁模型，即攻击者可以通过直接反馈或侧信道，在兑换令牌时学习到嵌入的位。最后，我们将我们的协议与CRYPTO 2020协议之一进行了比较，我们获得了20%更高的效率表现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_14](https://doi.org/10.1007/978-3-031-38545-2_14)
## Revisiting Time-Space Tradeoffs for Function Inversion.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#revisiting-time-space-tradeoffs-for-function-inversion) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#revisiting-time-space-tradeoffs-for-function-inversion)**
### 作者
* Alexander Golovnev, Georgetown University, Georgetown, USA
* Siyao Guo, NYU Shanghai, Shanghai, China
* Spencer Peters, Cornell University, Ithaca, USA
* Noah Stephens-Davidowitz, Cornell University, Ithaca, USA
### 摘要
> 我们研究了黑盒函数反演问题，即找到 \(x \in [N]\) 使得 \(f(x) = y\)，其中给定函数 \(f : [N] \rightarrow [N]\) 的某个挑战点 y 作为输入，使用 T 次针对 f 的查询和依赖于 f 的预处理建议 \(\sigma \in \{0,1\}^S\)。我们就这个问题证明了一些新的结果，如下所示：
> 
> 1. 我们展示了一个适用于任意 T 和 S 的算法：
> 
> 在重要的设置中，当 \(S < T\) 时，这改进了 Fiat 和 Naor 的著名算法[STOC, 1991]，该算法要求 \(T S^3 \gtrsim N^3\)。例如，Fiat 和 Naor 的算法仅在 \(S \gg N^{2/3}\) 时才成立，而我们的算法在任何 \(S \gg N^{1/2}\) 时都有一个非平凡的权衡。 （我们的算法和分析都很简单。作为此问题的结果，我们还提供了一个简化版本的自洽且简单的 Fiat 和 Naor 的原始结果证明，省略了某些优化。）
> 
> 2. 我们观察到存在一个非常简单的非自适应算法（即，其第 i 次查询 \(x_i\) 完全基于 \(\sigma \) 和 y，而不基于 \(f(x_1),\ldots , f(x_{i-1})\)），它在一些平凡算法上有轻微改进。它适用于任意 T 和 S，满足\( S = \varTheta (N \log (N/T))\)，例如，\(T = N /\mathrm {poly\,log}(N)\)，\(S = \varTheta (N/\log \log N)\)。这回答了 Corrigan-Gibbs 和 Kogan [TCC, 2019] 的一个问题，即是否存在非平凡的非自适应算法，即使用满足 \(T + S/\log N < o(N)\) 的参数 T 和 S 的算法。我们还观察到我们的非自适应算法是我们称之为猜测和验证算法，即它是非自适应的，并且其最终输出始终是 oracle 查询 \(x_1,\ldots , x_T\) 中的一个。
> 
> 对于猜测和验证算法，我们证明了一个匹配的下界，从而完全刻画了这个自然类别算法的可实现参数 (S, T)。 (Corrigan-Gibbs 和 Kogan 表明，任何针对任意非自适应算法的此类下界将导致新的电路下界。）
> 
> 3. 我们展示了函数反演问题与该问题的自然决策版本在最坏情况和平均情况下的等价性，同样适用于不同范围的函数 \(f : [N] \rightarrow [M]\)。其中一些等价结果被推迟到完整版本 [ECCC, 2022]。
> 
> 所有上述结果在一个具有共享随机性（即，在预处理算法和在线算法之间共享的随机硬币）的模型中最自然地描述出来。然而，作为额外的贡献，我们展示了如何使用 Newman 的通信复杂性技术 [IPL, 1991] 将任何使用共享随机性的算法通用转换为不使用共享随机性的算法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_15](https://doi.org/10.1007/978-3-031-38545-2_15)
## The Query-Complexity of Preprocessing Attacks.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#the-query-complexity-of-preprocessing-attacks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#the-query-complexity-of-preprocessing-attacks)**
### 作者
* Ashrujit Ghoshal, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, WA, USA
### 摘要
> 大量的研究论文证明了在预处理攻击中的空间-时间平衡的下限，即建议大小和破解方案所需时间之间的平衡。我们认为，产生这些建议所需时间的问题同样重要，而且通常非常复杂。然而，这个问题受到的关注明显较少。在本文中，我们提出了依赖于离线和在线时间的预处理攻击复杂性的下限。与空间-时间平衡的情况类似，我们特别关注具有理想原语的设置，其中离线和在线时间复杂度由给定原语的查询次数近似。我们给出了几个通用结果，突出了盐值在通常增加预处理攻击的离线成本方面的优势。我们的大部分论文重点介绍了几个关于带盐散列函数的结果。特别是，我们在我们的模型中对（两个块的）Merkle-Damgård结构的原像和碰撞安全性进行了相当复杂的分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_16](https://doi.org/10.1007/978-3-031-38545-2_16)
## Random Oracle Combiners: Breaking the Concatenation Barrier for Collision-Resistance.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#random-oracle-combiners-breaking-the-concatenation-barrier-for-collision-resistance) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#random-oracle-combiners-breaking-the-concatenation-barrier-for-collision-resistance)**
### 作者
* Yevgeniy Dodis, New York University, New York, USA
* Eli Goldin, New York University, New York, USA
* Peter Hall, New York University, New York, USA
* Niels Ferguson, Microsoft, Redmond, USA
* Krzysztof Pietrzak, IST, Klosterneuburg, Austria
### 摘要
> 假设我们有两个哈希函数 \(h_1\) 和 \(h_2\)，但我们只信任其中一个的安全性。为了缓解这个担忧，我们希望构建一个哈希组合器 \(C^{h_1, h_2}\)，只要其中一个底层哈希函数是安全的，它就是安全的。这个问题在抗碰撞的范式中已经有很好的研究。在这种情况下，明显地将两个哈希函数的输出连接起来是有效的。不幸的是，一系列研究（Boneh and Boyen, CRYPTO’06; Pietrzak, Eurocrypt’07; Pietrzak, CRYPTO’08）表明没有（明显地）更短的抗碰撞组合器是可能的。
> 
> 在这项工作中，我们重新审视了这个悲观的情况，我们的动机是观察到对于密码哈希函数的许多有趣应用来说，抗碰撞性是不足够的。我们认为“哈希组合器”的正确构造方式是构建我们称之为随机预言机（RO）组合器，利用更强的假设来构建更强的结构。
> 
> 事实上，我们通过构建一个简单的长度保持的RO组合器来绕过以前的抗碰撞下界，其中 \(\mathcal {Z}_1, \mathcal {Z}_2\) 是适当长度的随机盐。我们证明了这种额外的随机性对于RO组合器是必要的，实际上我们的构造与这个下界是相当紧密的。
> 
> 在负面方面，我们证明不能将组合定理泛化地应用于进一步用一些更简单的不可区分构造（比如Merkle-Damgård变换）将“单体”哈希函数 \(h_1\) 和 \(h_2\) 替换为更小的组件（比如固定长度的压缩函数）。最后，尽管存在这个问题，我们直接证明了我们组合器的Merkle-Damgård变种的碰撞抗性，其中 \(h_1\) 和 \(h_2\) 被迭代的Merkle-Damgård哈希应用于一个固定长度的压缩函数。因此，我们仍然可以利用在底层使用实际上较小的固定长度组件的方式来突破抗碰撞组合器的连接障碍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_17](https://doi.org/10.1007/978-3-031-38545-2_17)
## Individual Cryptography.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#individual-cryptography) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#individual-cryptography)**
### 作者
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Tomasz Lizurej, University of Warsaw, Warsaw, Poland
* Stefan Dziembowski, IDEAS NCBR, Warsaw, Poland
* Tomasz Lizurej, IDEAS NCBR, Warsaw, Poland
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
### 摘要
> 我们开始对个体密码学进行形式化研究。非正式地说，如果一个算法Alg的每个实现中都存在一个个人用户，该用户完全了解Alg使用的加密数据S，那么这个算法就是个体算法。特别是，设计该算法的实现应当难以通过将S在一组使用多方计算协议共享或外包给可信执行环境来隐藏S。
> 
> 在此模型中，我们定义并构建了两种基本原语。第一种称为个体知识证明，用于证明某个给定的信息被互联网上的一台单独机器（“个体”）充分了解，即无法在一组方之间共享。第二种称为个体密钥分享，是一种在一组方之间共享秘密S的方案，只要这些方不进行重建操作，它们就无法获得S的知识。重建保证了如果股东尝试合谋，其中一个人将完全了解该秘密。个体密钥分享在防止秘密分享中的勾结行为方面具有应用。构建个体密码学基本元素的一个核心技术是多方计算困难性。多方计算困难性阻止敌方在特定时间范围内以分布式的方式完成密码任务。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_18](https://doi.org/10.1007/978-3-031-38545-2_18)
## Extractors: Low Entropy Requirements Colliding with Non-malleability.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#extractors-low-entropy-requirements-colliding-with-non-malleability) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#extractors-low-entropy-requirements-colliding-with-non-malleability)**
### 作者
* Divesh Aggarwal, National University of Singapore, Singapore, Singapore
* Maciej Obremski, National University of Singapore, Singapore, Singapore
* Eldon Chung, Centre for Quantum Technologies, Singapore, Singapore
### 摘要
> 两源提取器是确定性函数，它接收两个独立的弱随机源，并输出一个（接近）均匀随机的比特串。Cheraghchi和Guruswami（TCC 2015）引入了两源非可格式化提取器，将随机提取的特性与防篡改的韧性结合起来。自那时以来，两源非可格式化提取器引起了广泛关注，并迅速成为涉及无法完全信任的通信渠道的基本对象。两源非可格式化提取器的各种应用包括非可格式化码、非可格式化承诺、非可格式化秘密共享、网络提取和可篡改记忆的隐私放大。
> 
> 目前已知的两源非可格式化提取器的最佳构造是由Chattopadhyay、Goyal和Li（STOC 2016）、Li（STOC 2017）和Li（CCC 2019）提出的。所有这些构造都要求两个源的最小熵至少为0.99n，其中n是每个源的比特长度。
> 
> 在这项工作中，我们引入了抗碰撞随机提取器。这使我们能够设计一个编译器，给定一个两源非可格式化提取器和一个抗碰撞提取器，输出一个继承非可格式化提取器的非可格式化性质和抗碰撞提取器的熵要求的两源非可格式化提取器。嵌套应用该编译器可以极大改善上述现有技术水平。我们得到了一个两源非可格式化提取器的构造，其中一个源要求具有大于0.8n的最小熵，而另一个源仅需要polylog(n)的最小熵。此外，我们构造的其他参数，即输出长度和误差，与先前的构造相当。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_19](https://doi.org/10.1007/978-3-031-38545-2_19)
## PAC Privacy: Automatic Privacy Measurement and Control of Data Processing.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#pac-privacy-automatic-privacy-measurement-and-control-of-data-processing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#pac-privacy-automatic-privacy-measurement-and-control-of-data-processing)**
### 作者
* Hanshen Xiao, MIT, Cambridge, USA
* Srinivas Devadas, MIT, Cambridge, USA
### 摘要
> 我们提出并研究一种新的隐私定义，称为可能近似正确（PAC）隐私。PAC隐私表征了在任意信息披露/泄漏期间/之后，恢复敏感数据的信息理论难度。与经典的密码学定义和差分隐私（DP）不同，后者考虑了敌对（与输入无关）最坏情况，PAC隐私是一个模拟度量，量化了基于实例的推断的不可能性。我们提出了一个完全自动化的分析和证明生成框架：通过蒙特卡洛模拟，可以对任何黑盒数据处理Oracle生成具有任意高置信度的安全参数。这种吸引人的自动化特性使得可以分析复杂的数据处理，而在经典隐私规则中最坏情况的证明可能松散甚至难以处理。此外，我们展示了所生成的PAC隐私保证可享受简单的组合界限，且自动分析框架可在在线方式下实施，以分析相关随机性下的复合PAC隐私损失。在实用方面，PAC隐私所需的（必要）扰动的幅度对于d维释放而言，不受\({\varTheta }(\sqrt{d})\)的下界限制，但对于许多实际数据处理任务可能为O(1)，这与输入独立的最坏情况下的信息理论下界相对应。文中包含了PAC隐私的示例应用，并与现有研究进行了比较。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_20](https://doi.org/10.1007/978-3-031-38545-2_20)
## One-Way Functions and the Hardness of (Probabilistic) Time-Bounded Kolmogorov Complexity w.r.t. Samplable Distributions.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#one-way-functions-and-the-hardness-of-probabilistic-time-bounded-kolmogorov-complexity-w-r-t-samplable-distributions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#one-way-functions-and-the-hardness-of-probabilistic-time-bounded-kolmogorov-complexity-w-r-t-samplable-distributions)**
### 作者
* Yanyi Liu, Cornell Tech, New York, USA
* Rafael Pass, Tel-Aviv University & Cornell Tech, Tel Aviv, Israel
### 摘要
> 考虑最近引入的概率有界时间科尔莫戈洛夫复杂性概念 \(pK^t\)（Goldberg等人，CCC'22），并让 \(\textsf{MpK}^t\textsf{P}\) 表示对偶（x, k）的语言，使得 \(pK^t(x) \le k\)。我们展示了以下等价关系：
> 
> \(\textsf{MpK}^\textsf{poly}\textsf{P}\) 相对于任何可抽样分布 \(\mathcal{D}\) 在平均意义上是（轻微）困难的；
> 
> \(\textsf{MpK}^\textsf{poly}\textsf{P}\) 相对于均匀分布在平均意义上是（轻微）困难的；
> 
> 存在单向函数。
> 
> 据我们所知，这提供了第一个在任何可抽样分布的困难性与均匀分布的困难性等价的自然问题类别。
> 
> 在标准去随机化假设下，我们还可以证明相同的结果，相对于有界时间科尔莫戈洛夫复杂性的标准概念 \(K^t\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_21](https://doi.org/10.1007/978-3-031-38545-2_21)
## Universal Amplification of KDM Security: From 1-Key Circular to Multi-Key KDM.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#universal-amplification-of-kdm-security-from-1-key-circular-to-multi-key-kdm) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#universal-amplification-of-kdm-security-from-1-key-circular-to-multi-key-kdm)**
### 作者
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
* Daniel Wichs, NTT Research, Sunnyvale, CA, USA
* Daniel Wichs, Northeastern University, Boston, MA, USA
### 摘要
> 一个加密方案如果安全，则为密钥相关消息(KDM)安全，如果可以任意依赖于秘密密钥进行加密。在这项工作中，我们展示了如何将基本上最弱形式的KDM安全升级为最强形式的KDM安全。特别地，我们假设存在一种对称密钥位加密算法，在1密钥环境下是环形安全的，也就是说，即使可以在它自己下加密单个秘密密钥的单独位，它仍能保持安全性。我们还依赖于标准且安全的公钥加密。我们构建了一种公钥加密方案，针对多密钥环境下的通用函数（先验绑定电路规模）进行KDM安全保护，也就是说，即使可以在每个公钥下加密任意数量的秘密密钥的任意函数，它仍然能保持安全​​。特殊情况下，后者保证密钥环的任意长度也是安全的。以往的工作已经展示了如何将n密钥环升级到n个KDM安全，适用于通用函数。因此，我们工作的主要创新之处是在任意n的情况下，从1密钥环升级到n个密钥的安全。
> 
> 作为结果独立有趣的特点，我们的构建不需要知道基础1密钥循环安全方案的实际规范，我们只依赖于此类方案的存在来证明安全性。特别地，我们提供了一种通用构造多密钥KDM安全加密的方法，只要存在某些具有1密钥环形安全性的方案就是安全的。虽然这个特点在思想上类似于Levin的单向功能的通用构造，但我们实现它的方法在技术上完全不同，并且不具备相同的“银河低效率”。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_22](https://doi.org/10.1007/978-3-031-38545-2_22)
## Improved Multi-user Security Using the Squared-Ratio Method.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#improved-multi-user-security-using-the-squared-ratio-method) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#improved-multi-user-security-using-the-squared-ratio-method)**
### 作者
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
* Wonseok Choi, Purdue University, West Lafayette, IN, USA
* Changmin Lee, KIAS, Seoul, Korea
### 摘要
> 在具有大量用户的情境下证明安全界限是对称密钥密码学中的一个核心问题。本文介绍了一种新的信息理论多用户安全证明方法，称为“平方比方法”。该方法的核心要求是在真实世界和理想世界中观察所谓的好转录（基于Patarin的H系数技术），并计算观察比率的平方的期望。该方法的核心观察是对于信息理论对手，多用户安全界限的KL散度可以写成每个单个用户的KL散度的总和。
> 
> 我们在三个例子上展示了平方比方法的应用：Bellare等人的两个置换的异或（EUROCRYPT’98）和Hall等人（CRYPTO’98）的加密Davies-Mayer（CRYPTO’16）以及Dutta等人的nEHtM MAC算法的两个置换变体（EUROCRYPT’19）。通过这个新工具，我们为这些建设提供了改进的多用户安全界限。我们的方法是模块化的，可以直接从单个用户的结果中获得多用户安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_23](https://doi.org/10.1007/978-3-031-38545-2_23)
## The Power of Undirected Rewindings for Adaptive Security.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#the-power-of-undirected-rewindings-for-adaptive-security) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#the-power-of-undirected-rewindings-for-adaptive-security)**
### 作者
* Dennis Hofheinz, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Julia Kastner, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Karen Klein, Department of Computer Science, ETH Zurich, Zürich, Switzerland
### 摘要
> 现有的自适应安全性证明（例如，在解密密钥被自适应地揭示的情况下）通常依赖于猜测论证。这种猜测论证可以很简单（例如，只涉及猜测哪些密钥被揭示），也可以更复杂的“分区”论证。由于猜测直接而负面地影响相应安全性缩减，这导致了涉及自适应安全性的加密场景存在黑盒下限。
> 
> 在这项工作中，我们提供了一种替代这种猜测论证的方法：我们不在安全性缩减中猜测敌手\(\mathcal {A} \)所做的自适应选择，而是将\(\mathcal {A} \)重置多次，直到成功嵌入给定的计算挑战。使用重置的主要好处是这些重置可以按顺序进行，并且相应的缩减损失只累积加法（而不是乘法，如猜测情况）。主要的技术挑战是证明在（可能很多次的）重置后，\(\mathcal {A} \)的成功不受负面影响。为此，我们开发了一种用于“无方向”重置的机制，这种重置可以在（可能很多次的）重置中保持\(\mathcal {A} \)的成功。
> 
> 我们使用这种策略来展示：
> 
> 流行的TreeKEM密钥管理协议基础“逻辑密钥层次结构”的安全性，以及
> 
> Goldreich-Goldwasser-Micali（GGM）伪随机函数（PRF）作为前缀受限PRF的安全性。
> 
> 在这两种情况下，我们提供了对标准假设（即IND-CPA和PRG安全性）的第一个多项式缩减，并且在GGM PRF的情况下，我们还规避了现有的下限。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_24](https://doi.org/10.1007/978-3-031-38545-2_24)
## Anamorphic Signatures: Secrecy from a Dictator Who Only Permits Authentication!
🌍 [English](../../../docs/en/Crypto/Crypto[2023-2].md#anamorphic-signatures-secrecy-from-a-dictator-who-only-permits-authentication) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-2].md#anamorphic-signatures-secrecy-from-a-dictator-who-only-permits-authentication)**
### 作者
* Mirosław Kutyłowski, Wrocław University of Science and Technology, Wrocław, Poland
* Marcin Zawada, Wrocław University of Science and Technology, Wrocław, Poland
* Giuseppe Persiano, Università di Salerno, Fisciano, Italy
* Giuseppe Persiano, Google LLC, New York City, USA
* Moti Yung, Google LLC, New York City, USA
* Duong Hieu Phan, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Moti Yung, Columbia University, New York, USA
* Mirosław Kutyłowski, NASK -National Research Institute, Warsaw, Poland
### 摘要
> 这项研究的目标是对政府一再试图遏制加密技术（即“密码战争”）的有用性提出技术上的质疑，并辩称这些努力实际上比起增加有效的控制而造成了更多破坏。类似目的的“变形加密”概念在Eurocrypt'22会议上提出。在那里，尽管存在一个拥有所有密钥并且知道所有信息的独裁者，各方仍然可以在一些与独裁者相似的密文中安排隐藏的“变形”信息，而这些密文在其他方面与普通密文几乎无法区分（相对于独裁者来说）。
> 
> 在这项工作中，我们假设了一个更强的加密控制模式，在这个模式中加密不存在（或被中和），因为所有的通信都通过了独裁者，基本上是以明文形式传递的（或者说只有与独裁者的安全通道才是唯一的保密机制）。消息仅通过身份认证来确保收件人知道发件人的身份。我们询问的是，在仅允许通过身份验证（即经过认证/签名的消息）进行端到端传递，并且接收到的消息由独裁者决定/知晓，并且独裁者最终也获得所有密钥来验证过去签名的合规性的严格制度下，是否仍然存在对抗独裁者的安全性。为了让独裁者感到挫败，这种经过身份验证的消息设置引出了在签名和认证方案中可能存在的变形通道概念，各方试图使用与普通标签无法区分的签名标签发送无法被检测到的安全消息（或其他值）。我们定义并提出了变形签名和认证方案的实现，这些方案适用于独立于变形消息概念的现有和标准化的签名和认证方案。此外，一些关键构造签名基础的方法实际上引入了变形。
> 
> 本文的扩展版本，包括附加的结果和证明，可以在[17]处获取。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38545-2_25](https://doi.org/10.1007/978-3-031-38545-2_25)
