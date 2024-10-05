# Crypto[2024-9]
## Malicious Security for SCALES - Outsourced Computation with Ephemeral Servers.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#malicious-security-for-scales-outsourced-computation-with-ephemeral-servers) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#malicious-security-for-scales-outsourced-computation-with-ephemeral-servers)**
### 作者
* Anasuya Acharaya, Bar-Ilan University, Ramat Gan, Israel
* Carmit Hazay, Bar-Ilan University, Ramat Gan, Israel
* Vladimir Kolesnikov, Georgia Institute of Technology, Atlanta, Georgia
* Manoj Prabhakaran, Indian Institute of Technology Bombay, Mumbai, India
### 摘要
> SCALES（Small Clients And Larger Ephemeral Servers）模型是最近为MPC（Acharya等人，TCC 2022）提出的模型。虽然SCALES模型为实际大规模MPC提供了一些吸引人的特性，但Acharya等人的结果只在该模型中提供了半诚实安全协议。
> 
> 我们提出了一种新的高效的SCALES协议，针对恶意对手，适用于一般的布尔电路。我们从Acharya等人的基础构建开始，设计并使用一套精心定义的构建快，这些构建块可能是独立感兴趣的。得到的协议是UC-安全的，没有诚实多数，使用CRS和布告板作为设置，并允许公开识别正确执行的偏差。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_1](https://doi.org/10.1007/978-3-031-68400-5_1)
## 10-Party Sublinear Secure Computation from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#10-party-sublinear-secure-computation-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#10-party-sublinear-secure-computation-from-standard-assumptions)**
### 作者
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Naman Kumar, Oregon State University, Corvallis, USA
### 摘要
> 安全计算使彼此不信任的各方能够在保密输入的基础上共同计算一个函数，同时不泄露任何超出函数输出的信息。长期以来，人们一直在探索这种协议所需的通信复杂度，特别是当通信可以在所需函数的电路表示大小的次线性情况下。虽然有几种技术已经证明了在双方设置中次线性安全计算的可行性，但已知的相关多方设置的方法要么依赖于完全同态加密，要么依赖于非标准的困难假设，要么仅限于少数几个参与方。在这项工作中，我们通过展示从标准困难假设的各种组合中实现了次线性通信10方计算，对多方次线性安全计算进行了拓展研究。具体而言，我们的贡献表明：
> 
> 在（DDH或DCR）的困难假设下，超多项式困难的LPN，和存在常数深度伪随机生成器的情况下，实现了8方同态秘密共享；
> 
> 提出了一个通用框架，利用M方同态秘密共享来实现（N+M）方次线性安全计算，适用于\(\ensuremath {\textsf{NC}} ^1\)和相关对称PIR。
> 
> 综合而言，我们的构想意味着存在一个具有次线性计算的10方MPC协议。我们的技术的核心在于一系列基于同态秘密共享的新型计算方法。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_2](https://doi.org/10.1007/978-3-031-68400-5_2)
## Privacy-Preserving Dijkstra.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#privacy-preserving-dijkstra) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#privacy-preserving-dijkstra)**
### 作者
* Benjamin Ostrovsky, California Institute of Technology, Pasadena, CA, USA
### 摘要
> 本文给定一个表示为邻接列表的秘密共享的图 G(V，E)，我们展示了如何将其隐私地转换为替代的、MPC友好的秘密共享表示，称为d-normalized复制的邻接列表（缩写为d-normalized）。我们的新数据结构的大小仅比原始（秘密共享邻接列表）表示G大4倍，但是这种新数据结构使我们能够执行隐私保护的图算法，同时提高底层图算法的轮数、计算和通信复杂度。我们的d-normalization分为两步：
> 
> 首先，我们展示了对于任何图G，给定一个秘密共享邻接列表，其中顶点是任意的字母数字字符串，可以放入单个RAM内存字中，我们可以有效地并安全地将顶点重命名为从1到V的整数，在结果的秘密共享邻接列表中按递增顺序显示。安全的重命名需要\(O(\log V)\)轮和\(O((V+E)\log V)\)个安全操作。我们的算法还以秘密共享形式输出两个数组：从整数到字母数字名称的映射以及其排序的逆。当然，如果邻接列表已经是这种整数格式，此步骤可以跳过。其次，对于任何顶点从1到V进行排序的秘密共享邻接列表，存在一个d-normalization算法，该算法需要O(1)轮和\(O(V+E)\)安全操作。
> 
> 我们认为这两种转换都具有独立的兴趣。我们通过设计一个隐私保护的Dijkstra单源最短路径算法来展示我们数据结构的优势，该算法的安全操作数为\(O\left( (V +E) \log V \right)\)，轮数为\(O(V \cdot \log V \cdot \log \log \log V)\)。 只要所有的顶点标签和权重都可以单独放入RAM内存字中，我们的安全Dijkstra算法就可以适用于任何邻接列表表示。在诚实但好奇的设置中，我们的算法适用于两个或恒定数量的服务器。我们结果的限制（仅适用于恒定数量的服务器）是由于我们依赖于线性工作和常数轮安全洗牌。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_3](https://doi.org/10.1007/978-3-031-68400-5_3)
## Fully Malicious Authenticated PIR.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#fully-malicious-authenticated-pir) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#fully-malicious-authenticated-pir)**
### 作者
* Marian Dietz, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 认证 PIR（私有信息检索）使得服务器可以最初承诺一个包含N个项目的数据库，并且客户端稍后可以以亚线性的复杂度获取单个项目，从而确保检索到的项目与已承诺的数据库一致，同时保证隐私和放弃，即服务器即使了解客户端是否放弃查询，也不会获得任何有关查询的信息。此问题近期由 Colombo 等人（USENIX ’23）考虑，他们提出了一些基于 DDH 的方案，可以保证在数据库诚实承诺的假设下安全。在本文中，我们为他们的 DDH 方案提供了一个解决方案，可以容忍提供可能存在格式错误承诺的完全恶意服务器。我们的方案具有计算和客户端计算复杂度为 Oλ(√N) ，不需要任何额外的假设，并且不引入重型机器（例如通用的简明证明）。我们通过引入验证查询来实现这一点，在服务器的视角下，验证查询和常规的 PIR 查询在计算上是不可区分的。只要服务器成功地回答了κ个此类验证查询，客户端就可以确信服务器不能通过隐私放弃来破坏，并且概率为1-1/2kappa。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_4](https://doi.org/10.1007/978-3-031-68400-5_4)
## PIR with Client-Side Preprocessing: Information-Theoretic Constructions and Lower Bounds.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#pir-with-client-side-preprocessing-information-theoretic-constructions-and-lower-bounds) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#pir-with-client-side-preprocessing-information-theoretic-constructions-and-lower-bounds)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Elaine Shi, CMU, Pittsburgh, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> 众所周知，经典的无预处理私人信息检索（PIR）方案必须遭受每次查询的线性服务器计算的困扰。此外，任何具有次线性带宽的单服务器PIR必须依赖公钥加密。几项最近的研究表明，有关经典PIR的这些障碍可以通过引入预处理阶段来克服，其中每个客户端下载一个小提示，以帮助其随后进行查询。值得注意的是，钢琴PIR方案（以及随后的改进）表明，借助这种客户端预处理，我们不仅可以获得具有次线性计算和查询带宽的PIR，而且令人惊讶的是，我们还可以仅使用对称密钥加密（即单向函数）来实现它。
> 
> 在本文中，我们将最小化密码学假设的问题推向极端。特别地，我们是首批探索信息理论单服务器预处理PIR的研究者。我们在上下限方面做出了贡献。首先，我们展示了各种非平凡性能折衷的新信息理论构造，涉及服务器计算、客户端空间和带宽。其次，我们证明了信息理论构造中客户端空间和带宽之间的折衷的（几乎）紧密下界。最后，我们证明了任何能够克服信息理论下界并满足自然的句法要求（这是所有已知构造所符合的）的计算方案将意味着复杂类SZK中的一个困难问题。特别地，这表明钢琴方案在对一个单向函数进行黑盒使用的前提下实现了（几乎）最优的客户端空间和带宽折衷。我们用于上述结果的一些技巧可能具有独立的兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_5](https://doi.org/10.1007/978-3-031-68400-5_5)
## Hintless Single-Server Private Information Retrieval.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#hintless-single-server-private-information-retrieval) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#hintless-single-server-private-information-retrieval)**
### 作者
* Baiyu Li, Google, Mountain View, USA
* Mariana Raykova, Google, Mountain View, USA
* Daniele Micciancio, UCSD, San Diego, USA
* Mark Schultz-Wu, UCSD, San Diego, USA
### 摘要
> 我们提出了两种用于传统设置中隐私信息检索（PIR）的新构造，其中客户端无需进行任何预处理或存储任何与数据库相关的信息，服务器也无需存储任何与客户端相关的信息。
> 
> 我们的第一个构造（\({\textsf{Hintless}\textsf{PIR}}\)）通过将“提示”相关计算外包给服务器，利用可组合预处理的新概念，消除了最近基于LWE的SimplePIR（Henzinger等人，USENIX Security 2023）中的客户端预处理步骤。我们使用RLWE加密方案实现了这一概念，并通过利用这一技术的可组合性，我们能够预处理几乎所有昂贵的同态计算部分，并在多个协议执行中重复使用它们。作为一个具体应用，我们提出了高效的矩阵向量乘法，使我们能够构建\({\textsf{Hintless}\textsf{PIR}}\)。对于一个大小为8 GB的数据库，\({\textsf{Hintless}\textsf{PIR}}\)的吞吐量达到约6.37 GB/s，而无需传输任何客户端或服务器状态。我们另外将矩阵向量乘法协议正式化为我们称之为\(\textsf{LinPIR}\)的新原语，可能引起独立兴趣。
> 
> 在我们的第二个构造（\(\textsf{Tensor}\textsf{PIR}\)）中，我们将\({\textsf{Hintless}\textsf{PIR}}\)的通信从数据库大小的平方根降低到立方根。我们展示了如何使用带有预处理的RLWE加密来外包由同态乘法生成的密文的LWE解密。这使得服务器可以使用更紧凑的查询在LWE下进行更复杂的处理。
> 
> 我们实施和基准测试了\({\textsf{Hintless}\textsf{PIR}}\)，其实现比对很多感兴趣的大型数据库而言具有更好的具体成本。我们展示了当客户端没有大量查询或数据库频繁更新时，它改进了最近预处理构造的通信。消除提示的计算成本很小，并随着数据库变大而减少，并且始终比其他具有客户端提示的构造更有效率，例如Spiral PIR（Menon和Wu，S＆P 2022）。在匿名查询设置中，我们还改进了Spiral的通信。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_6](https://doi.org/10.1007/978-3-031-68400-5_6)
## On Cycles of Pairing-Friendly Abelian Varieties.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#on-cycles-of-pairing-friendly-abelian-varieties) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#on-cycles-of-pairing-friendly-abelian-varieties)**
### 作者
* Maria Corte-Real Santos, University College London, London, UK
* Craig Costello, Microsoft Research, Redmond, USA
* Michael Naehrig, Microsoft Research, Redmond, USA
### 摘要
> 其中最有前途的一种实现可扩展证明系统的途径取决于配对友好的椭圆曲线的2-循环的存在。这样的循环由两个椭圆曲线 \(\ensuremath {\mathcal {E}}/\ensuremath {\mathbb {F}}_p\) 和 \(\ensuremath {\mathcal {E}}'/\ensuremath {\mathbb {F}}_q\) 构成，两者都具有低嵌入度，并满足 \(q = \#\ensuremath {\mathcal {E}}(\ensuremath {\mathbb {F}}_p)\) 和 \(p = \#\ensuremath {\mathcal {E}}'(\ensuremath {\mathbb {F}}_q)\)。这些约束条件被证明是相当严格的；在2-循环首次被提出用于证明系统的用途的10年里，没有找到新的2-循环结构。
> 
> 在本文中，我们将配对友好的椭圆曲线的循环的概念推广到研究配对友好的阿贝尔多项式的循环，以期实现更高效的基于配对的SNARK。我们表明，考虑维度大于1的阿贝尔多项式可以解锁许多有趣的可能性，用于找到配对友好的循环，并给出了几个可以实例化在任何安全水平的新构造。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_7](https://doi.org/10.1007/978-3-031-68400-5_7)
## Oblivious Issuance of Proofs.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#oblivious-issuance-of-proofs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#oblivious-issuance-of-proofs)**
### 作者
* Michele Orrù, CNRS, Paris, France
* Stefano Tessaro, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Chenzhi Zhu, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Greg Zaverucha, Microsoft Research, Redmond, USA
### 摘要
> 本文研究了如何隐匿地生成零知识证明。在这种情况下，证明者与验证者互动以产生一种证明，该证明仅对验证者可知。所产生的证明无法追溯到生成它的交互，并且可以被任何人非交互地进行验证。这一概念推广了常见的设计盲签名的方法，并可以看作是“知道签名密钥”的证明的特例，并扩展了Camenisch和Stadler（’97）的开创性工作。
> 
> 我们提出了两种可以证明安全性的隐性证明构造，并给出了我们框架的三个应用程序。首先，我们提供了经典的Diffie-Hellman为基础的隐性PRF的公开验证版本。这产生了盲签名和公开验证匿名令牌的新构造。其次，我们展示了如何将具有密钥验证的匿名凭据（Chase等人，CCS’14）“升级”，也能同时保证在同一组属性上的盲签名的安全性。我们的升级保持了凭证在密钥验证设置中的性能和功能，我们仅改变了颁发方式。最后，我们提供了U-Prove凭证系统的一个变体，该系统可证明在并发颁发会话中具有更高的不可伪造性。这构成了修复Benhamouda等人（EUROCRYPT’21）所说明的攻击的方法。
> 
> 除了这些例子应用程序外，由于我们的结果相当通用，我们希望它们可以促进具有并发安全性的新原语的模块化设计，这一目标在历史上一直是具有挑战性的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_8](https://doi.org/10.1007/978-3-031-68400-5_8)
## Resettable Statistical Zero-Knowledge for $\ensuremath {\textsf{NP}}$.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#resettable-statistical-zero-knowledge-for-ensuremath-textsf-np) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#resettable-statistical-zero-knowledge-for-ensuremath-textsf-np)**
### 作者
* Susumu Kiyoshima, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 可重置的统计零知识[Garg–Ostrovsky–Visconti–Wadia, TCC 2012]是一种强隐私概念，它保证了当证明者在多个证明中使用相同的随机性时，仍然具有统计零知识性。
> 
> 在本文中，我们展示了\(\ensuremath {\textsf{NP}}\)的可重置的统计零知识论证与\(\ensuremath {\textsf{NP}}\)的见证加密方案的等价性。
> 
> 积极结果：对于任何\(\ensuremath {\textsf{NP}}\)语言\({\textbf {L}}\)，在存在单向函数的假设下，可以从\({\textbf {L}}\)的见证加密方案构建出\({\textbf {L}}\)的可重置的统计零知识论证。
> 
> 消极结果：甚至对于\(\ensuremath {\textsf{NP}}\)的可重置的统计见证不可区分论证的存在也意味着在存在单向函数的假设下存在着\(\ensuremath {\textsf{NP}}\)的见证加密方案。
> 
> 积极结果是通过自然地扩展现有技术得到的（并且很可能已经为专家所熟知）。否定结果是我们的主要技术贡献。
> 
> 为了探索对于否定结果的变通方法，我们还考虑了在一个模型中的可重置安全性，诚实方的随机性只在固定输入中被重复使用。我们展示了即使在这个模型中，可重置的统计隐藏承诺方案也是不可能的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_9](https://doi.org/10.1007/978-3-031-68400-5_9)
## Non-interactive Zero-Knowledge from LPN and MQ.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#non-interactive-zero-knowledge-from-lpn-and-mq) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#non-interactive-zero-knowledge-from-lpn-and-mq)**
### 作者
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Zhengzhong Jin, MIT, Cambridge, USA
### 摘要
> 我们首次构建了基于非学习与错误（Learning with Errors，LWE）以外的后量子假设的非交互式零知识（Non-Interactive Zero-Knowledge，NIZK）证明。具体而言，我们在解决含噪学习奇偶校验（Learning Parity with Noise，LPN）多项式难度和解决随机欠定多元二次方程组（MQ）指数难度的情况下实现了NIZK。我们还构建了NIZK，假设概率零知识（Statistical Zero-Knowledge，SZK）且基于Dao和Jain在Crypto 2024中提出的新变体LPN（Dense-Sparse LPN），与指数难度MQ一起使用。
> 
> 我们构建的主要技术成分是一种极其自然的（但只有事后才想到！）来自MQ的关联系数不可计算（Correlation-Intractable，CI）哈希函数的构建，用于我们称为拼接常数次多项式的NIZK友好子类。在指数安全性下，该哈希函数还满足拼接常数次多项式的近似CI强版的更强性质。NIZK构造随后遵循了Brakerski-Koppula-Mour在CRYPTO 2020中的先前蓝图。此外，我们展示了如何从解决随机次数d方程（MQ的一种自然推广）的（指数）难度中构建（近似）CI哈希函数以实现次数为d的函数的NIZK。为了实现带有SZK的NIZK，我们设计了一个有损公钥加密方案，其中解密具有近似线性解密和反多项式解密误差，并且基于Dense-Sparse LPN。这些构造可能具有独立的利益。
> 
> 因此，我们提供了一种新的使用均匀随机方程MQ的方法，但迄今为止该假设在加密和签名方案的背景下的应用很少，因为这些方案往往使用结构化变体MQ，其中多项式并非真正随机，而是具有隐藏的种植结构。我们相信MQ假设有望在设计其他先进的证明系统中发挥作用。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_10](https://doi.org/10.1007/978-3-031-68400-5_10)
## Amplification of Non-interactive Zero Knowledge, Revisited.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#amplification-of-non-interactive-zero-knowledge-revisited) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#amplification-of-non-interactive-zero-knowledge-revisited)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv, Israel
* Nathan Geier, Tel Aviv University, Tel Aviv, Israel
* Nir Bitansky, New York University, New York, NY, USA
### 摘要
> 在一个\((\varepsilon _s，\varepsilon _z)\)-弱交互零知识（NIZK）协议中，其正确性误差最多为\(\varepsilon _s\)，零知识误差最多为\(\varepsilon _z\)。Goyal、Jain和Sahai(CRYPTO 2019)认为，如果对于某些常数\(\varepsilon _s，\varepsilon _z\)，\(\varepsilon _s+\varepsilon _z < 1\)，则可以将\((\varepsilon _s，\varepsilon _z)\)-弱NIZK协议转换为完全安全的NIZK协议，假设公钥加密具有亚指数安全性。然而，他们后来发现证明中存在漏洞。我们重新研究了NIZK放大问题：假设仅有多项式安全的公钥加密，对于任何常数\(\varepsilon _s+\varepsilon _z < 1\)，我们可以放大NIZK协议。我们假设仅有单向函数，对于任何常数\(\varepsilon _s+\varepsilon _z < 1\)，我们可以放大NIZK证明。当正确性的误差\(\varepsilon _s\)最初已经是可以忽略的时候，我们还可以在假设仅有单向函数的情况下放大NIZK协议。我们的结果采用了与Goyal、Jain和Sahai不同的方法，基于隐藏位的范例，可以看作是将NIZK放大规约为更好理解的伪随机性放大问题。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_11](https://doi.org/10.1007/978-3-031-68400-5_11)
## CDS Composition of Multi-round Protocols.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#cds-composition-of-multi-round-protocols) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#cds-composition-of-multi-round-protocols)**
### 作者
* Masayuki Abe, NTT Social Informatics Laboratories, Tokyo, Japan
* Mehdi Tibouchi, NTT Social Informatics Laboratories, Tokyo, Japan
* Andrej Bogdanov, School of EECS, University of Ottawa, Ottawa, Canada
* Miyako Ohkubo, Security Fundamentals Laboratory, CSRI, NICT, Tokyo, Japan
* Alon Rosen, Bocconi University and Reichman University, Milan, Italy
* Masayuki Abe, Kyoto University, Kyoto, Japan
* Zehua Shang, Kyoto University, Kyoto, Japan
* Mehdi Tibouchi, Kyoto University, Kyoto, Japan
### 摘要
> 我们重新审视Cramer，Damgård，Schoenmakers（CDS）方法来构成sigma协议，并将其调整为底层协议具有多轮交互的设置。CDS组合的目标是通过结合多个“原子”证明系统来证明复合的NP关系。其关键特点是以一种通用的方式与原子证明相互作用，从而实现更简单，更有效的实现。
> 
> 多轮协议的最新发展要求将CDS组合适应其原始范围以外的范围，不仅仅局限于三步协议，而且事实上在多轮情况下失败，以及在组合所谓的k-特殊有效证明时也失败。
> 
> 我们提出了一种新的多轮组合方法，以平原模型的方式保持完备性，并具有“离线”零知识模拟属性。在\(\textsf{mNC}^1\)中处理任意单调访问结构的需要，它是由某些固定完全基础上的多项式大小公式表示的所有布尔函数族，导致我们对独立兴趣的复杂性理论问题进行了识别。
> 
> 在我们的工作之前，多轮组合要么受限于随机预言模型，要么仅适用于论证系统，并且还需要大量的“在线”零知识模拟。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_12](https://doi.org/10.1007/978-3-031-68400-5_12)
## More Efficient Zero-Knowledge Protocols over $\mathbb {Z}_{2^k}$ via Galois Rings.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#more-efficient-zero-knowledge-protocols-over-mathbb-z-2-k-via-galois-rings) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#more-efficient-zero-knowledge-protocols-over-mathbb-z-2-k-via-galois-rings)**
### 作者
* Fuchun Lin, Shanghai Jiao Tong University, Shanghai, China
* Chaoping Xing, Shanghai Jiao Tong University, Shanghai, China
* Yizhou Yao, Shanghai Jiao Tong University, Shanghai, China
### 摘要
> 最近一批关于基于矢量易忘线性函数评估（VOLE）离线阶段的零知识（ZK）协议系列提供了一个新的可扩展 ZK 协议范式，具有快速证明和小型证明器内存等特点。最近，Baum 等人（Crypto’23）提出了 VOLE-in-the-head 技术，使此类协议变得可公开验证。已实现了许多实际有效的证明任意伽罗瓦域电路可满足的协议，而对于环 \(\mathbb {Z}_{2^k}\) 的协议显著滞后，只有一个概念验证的开创性工作 Appenzeller to Brie（CCS’21）和一个首次提出的名为 Moz\(\mathbb {Z}_{2^k}\)arella（Crypto’22）的方案。然而，环 \(\mathbb {Z}_{2^{32}}\) 或 \(\mathbb {Z}_{2^{64}}\) 却非常重要（它们捕捉了现实编程和计算机体系结构（如 CPU 字）中的计算），因为，例如，与伽罗瓦域 \(\mathbb {F}_{2^{k}}\) 不同，单位在环 \(\mathbb {Z}_{2^{k}}\) 中的分数为 1/2。在本研究中，我们首先构建了高度 Galois 环扩张的 ZK 协议（接近于 1 的单位分数），然后使用摊销技术将它们有效地转换为 \(\mathbb {Z}_{2^k}\)。我们的结果极大地改变了 \(\mathbb {Z}_{2^k}\) 上 ZK 协议的格局。
> 
> （1）我们提出了一种与现有 Moz\(\mathbb {Z}_{2^k}\)arella 协议相比具有许多优点的竞争性 ZK 协议。我们消除了通信复杂度对安全参数的不良依赖，并实现了严格线性于电路大小的通信复杂度。此外，我们的协议具有更好的实际效率。对于 \(\mathbb {Z}_{2^{32}}\) 和 \(\mathbb {Z}_{2^{64}}\) 上的电路的 40, 80 比特音准度，我们在通信方面提供了 \(1.15\times \)–\(2.9\times \) 的改进。
> 
> （2）受最近提出的交互式消息认证码技术的启发（Weng 等人，CCS’22），我们构建了一种常数轮次的 ZK 协议，其通信复杂度亚线性（与电路大小成比例），这在之前只能在域上实现。
> 
> （3）我们展示了伪随机相关生成器方法可以适应于在 Galois 环上高效实现 VOLE，并分析了基于 Galois 环的 LPN 假设的困难程度。
> 
> （4）我们改进了 VOLE-in-the-head 技术，使其适用于 \(\mathbb {Z}_{2^k}\)，从而产生了在 \(\mathbb {Z}_{2^k}\) 上保留 VOLE-based ZK 协议大多数效率指标的公开可验证的非交互式 ZK 协议。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_13](https://doi.org/10.1007/978-3-031-68400-5_13)
## Black-Box (and Fast) Non-malleable Zero Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2024-9].md#black-box-and-fast-non-malleable-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2024-9].md#black-box-and-fast-non-malleable-zero-knowledge)**
### 作者
* Vincenzo Botta, Sapienza University of Rome, Rome, Italy
* Michele Ciampi, University of Edinburgh, Edinburgh, Scotland, UK
* Emmanuela Orsini, Bocconi University, Milan, Italy
* Luisa Siniscalchi, Technical University of Denmark, Copenhagen, Denmark
* Ivan Visconti, University of Salerno, Fisciano, (SA), Italy
### 摘要
> 非可塑零知识（NMZK）最初是由Dolev，Dwork和Naor（STOC 91）的重要工作引入的，它是对抗中间人攻击的证明系统安全性建模的基本概念。
> 
> 最近，Kim，Liang和Pandey（CRYPTO 2022）提出了第一个仅基于对称密钥密码学的高效常轮NMZK证明系统。他们的构造依赖于所涉及的密码原语的非黑盒使用，并且涉及Ligero（CCS 2017）的多次执行，这些都影响协议的轮复杂性和计算效率。他们的工作留下了实现NMZK的自然重要挑战，即仅以黑盒方式使用底层原语（无论轮数和实际效率）的问题。
> 
> 在本文中，我们通过提出基于密码原语的黑盒使用的第一个NMZK证明系统来解决前述的开放问题。我们的工作在原语使用上是最优的，因为我们只需要单向函数，并且在轮数上是渐近最优的，因为我们只需要常数轮。我们的论证系统在强“模拟可提取性”风格的不可塑性方面是非可塑的。
> 
> 此外，我们还展示了我们的构造可以在Minicrypt中得到有效实例化，显着改进了Kim等人的工作，无论是在轮复杂性还是计算效率方面。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-68400-5_14](https://doi.org/10.1007/978-3-031-68400-5_14)
