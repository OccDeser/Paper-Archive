# Crypto[2023-4]
## Fast Blind Rotation for Bootstrapping FHEs.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#fast-blind-rotation-for-bootstrapping-fhes) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#fast-blind-rotation-for-bootstrapping-fhes)**
### 作者
* Binwu Xiang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yiran Dai, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Binwu Xiang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Jiang Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yiran Dai, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Dengguo Feng, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Binwu Xiang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yiran Dai, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 盲转向是构建全同态加密的关键技术之一，目前最佳的引导算法可以在不到一秒的时间内运行。目前，实现盲转向的两种主要方法分别由Alperin-Sheriff和Peikert（CRYPTO 2014）以及Gama、Izabachene、Nguyen和Xie（EUROCRYPT 2016）首次提出，分别被称为AP和GINX。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_1](https://doi.org/10.1007/978-3-031-38551-3_1)
## HERMES: Efficient Ring Packing Using MLWE Ciphertexts and Application to Transciphering.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#hermes-efficient-ring-packing-using-mlwe-ciphertexts-and-application-to-transciphering) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#hermes-efficient-ring-packing-using-mlwe-ciphertexts-and-application-to-transciphering)**
### 作者
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jaehyung Kim, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Jai Hyun Park, Seoul National University, Seoul, Republic of Korea
* Damien Stehlé, CryptoLab Inc., Lyon, France
### 摘要
> 目前大多数的完全同态加密（FHE）方案基于学习与误差（LWE）问题或其环变种（RLWE）用于存储明文。在FHE方案的同态计算中，当考虑到多个消息时，RLWE格式提供了高吞吐量，而当只有少量消息时，LWE格式提供了低延迟。高效的转换可以将每种格式的优势融合在一起。然而，将LWE格式转换成称为环装填的RLWE格式一直是一个具有挑战性的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_2](https://doi.org/10.1007/978-3-031-38551-3_2)
## Accelerating HE Operations from Key Decomposition Technique.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#accelerating-he-operations-from-key-decomposition-technique) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#accelerating-he-operations-from-key-decomposition-technique)**
### 作者
* Miran Kim, Department of Mathematics and Research Institute for Convergence of Basic Science and Hanyang Institute of Bioscience and Biotechnology, Hanyang University, Seoul, Republic of Korea
* Dongwon Lee, Seoul National University, Seoul, Republic of Korea
* Jinyeong Seo, Seoul National University, Seoul, Republic of Korea
* Yongsoo Song, Seoul National University, Seoul, Republic of Korea
### 摘要
> 基于格的同态加密（HE）方案基于嘈杂加密技术，在此技术中，为了保证安全，明文与一些随机噪声进行掩盖。最近的先进HE方案依靠分解技术来管理噪声的增长，其中包括将密文条目转换为一个短向量，然后与评估密钥进行乘法运算。在此工作之前，分解过程被证明是最耗时的部分，因为它需要在基本环上进行离散傅里叶变换（DFT）以实现高效的多项式运算。在本文中，我们用具有较小界限的整数环的相对廉价操作替换了大模数上的昂贵分解操作。值得注意的是，DFT的成本从二次降低到线性，而且不会产生额外的噪声增长，这取决于密文的级别。我们通过将其应用于密钥切换过程来展示我们方法的影响。我们的实验表明，当基本环的维度为 \(2^{15}\) 或 \(2^{16}\) 时，新的密钥切换方法相较于先前的方法提速了1.2-2.3倍或者2.1-3.3倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_3](https://doi.org/10.1007/978-3-031-38551-3_3)
## MacORAMa: Optimal Oblivious RAM with Integrity.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#macorama-optimal-oblivious-ram-with-integrity) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#macorama-optimal-oblivious-ram-with-integrity)**
### 作者
* Surya Mathialagan, MIT, Cambridge, MA, 02139, USA
* Neekon Vafa, MIT, Cambridge, MA, 02139, USA
### 摘要
> 由Goldreich和Ostrovsky（J. ACM '96）引入的Oblivious RAM（ORAM）是一种原始方法，允许客户端对外部数据库进行RAM计算，而不通过访问模式泄露任何信息。对于大小为N的数据库，众所周知的下界表明，在假设O（1）客户端存储的情况下，RAM查询数量的倍增开销至少需要\(\varOmega (\log N)\)。一系列的研究工作以Asharov，Komargodski，Lin和Shi（CRYPTO' 21）提出的渐近最优构造为高潮，其最坏情况的开销为\(O(\log N)\)，客户端存储为O（1）。然而，已知该最优ORAM只在诚实但好奇的环境中安全，在此环境中允许对访问模式进行观察，但不能修改数据库内容。在恶意环境中，攻击者除了允许篡改数据库外，该构造和许多其他构造实际上都不安全。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_4](https://doi.org/10.1007/978-3-031-38551-3_4)
## Tri-State Circuits - A Circuit Model that Captures RAM.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#tri-state-circuits-a-circuit-model-that-captures-ram) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#tri-state-circuits-a-circuit-model-that-captures-ram)**
### 作者
* David Heath, UIUC, Champaign, USA
* Vladimir Kolesnikov, Georgia Tech, Atlanta, Georgia
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> 我们介绍了三态电路（TSCs）。TSCs构成了一种自然的计算模型，据我们所知，理论学者尚未考虑过。该模型具有简单和强大的令人惊讶的组合。TSCs的简单之处在于它们只允许三个电线值（0、1和未定义的\(\mathcal{Z}\)）和三种类型的双输入门；它们的强大之处在于它们的静态放置的门会在输入确定时立即触发（执行），这意味着执行顺序取决于输入。这种行为足以高效地评估RAM程序。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_5](https://doi.org/10.1007/978-3-031-38551-3_5)
## Limits of Breach-Resistant and Snapshot-Oblivious RAMs.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#limits-of-breach-resistant-and-snapshot-oblivious-rams) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#limits-of-breach-resistant-and-snapshot-oblivious-rams)**
### 作者
* Giuseppe Persiano, Università di Salerno, Salerno, Italy
* Giuseppe Persiano, Google, New York, USA
* Kevin Yeo, Google and Columbia University, New York, USA
### 摘要
> 混淆RAM（ORAM）是一种重要的密码学原语，它可以使数据外包给一个潜在不受信任的服务器，并隐藏对数据的访问模式。即使面对持久敌人查看所有操作记录和结果内存内容，ORAM也提供强大的保证。不幸的是，针对持久敌人的强大保证代价高昂，因为已知ORAM需要\(\varOmega (\log n)\)的额外开销。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_6](https://doi.org/10.1007/978-3-031-38551-3_6)
## Cuckoo Hashing in Cryptography: Optimal Parameters, Robustness and Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#cuckoo-hashing-in-cryptography-optimal-parameters-robustness-and-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#cuckoo-hashing-in-cryptography-optimal-parameters-robustness-and-applications)**
### 作者
* Kevin Yeo, Google, New York City, USA
* Kevin Yeo, Columbia University, New York City, USA
### 摘要
> 杜鹃哈希是一种强大的基本原语，它使得使用小空间进行有效查询的项的存储变得可能。在高层次上，杜鹃哈希将n个项映射到b个条目中，存储不超过\(\ell\)个项，以便将每个项放置到k个随机选择的条目之一。此外，还有一个溢出堆栈，最多可以存储s个项。许多加密基元依赖于杜鹃哈希来私密地嵌入和查询数据，在构建杜鹃哈希表时确保小故障概率至关重要，因为它直接涉及隐私保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_7](https://doi.org/10.1007/978-3-031-38551-3_7)
## The Pseudorandom Oracle Model and Ideal Obfuscation.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#the-pseudorandom-oracle-model-and-ideal-obfuscation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#the-pseudorandom-oracle-model-and-ideal-obfuscation)**
### 作者
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Huijia Lin, University of Washington, Seattle, USA
* Ji Luo, University of Washington, Seattle, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> 我们介绍了一种新的哈希函数理想化模型，称为伪随机预言（Pr\(\mathcal{O}\)）模型。直观上，它允许我们以非黑盒方式建模使用理想哈希函数的加密系统。从形式上来说，我们通过伪随机函数（PRF）族和理想预言的组合来建模哈希函数。用户可以通过选择一个PRF密钥k并将其映射到公共句柄h来初始化哈希函数。给定句柄h和一些输入x，还可以调用预言来评估具有相应密钥k的x上的PRF。选择PRF密钥k的用户因此对哈希函数有完整的描述，并且可以在非黑盒结构中使用其代码，而仅获得句柄h的对手只能通过预言对哈希函数进行黑盒访问。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_8](https://doi.org/10.1007/978-3-031-38551-3_8)
## Computational Wiretap Coding from Indistinguishability Obfuscation.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#computational-wiretap-coding-from-indistinguishability-obfuscation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#computational-wiretap-coding-from-indistinguishability-obfuscation)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Aayush Jain, Carnegie Mellon University, Pittsburgh, USA
* Paul Lou, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Mark Zhandry, NTT Research, Sunnyvale, USA
### 摘要
> 一种针对一对嘈杂信道（ChB，ChE）的窃听编码方案使得Alice能够通过在ChB上发送其编码来可靠地将消息传递给Bob，同时将消息对抗者Eve隐藏起来，而Eve在ChE上获得相同的编码。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_9](https://doi.org/10.1007/978-3-031-38551-3_9)
## On Optimal Tightness for Key Exchange with Full Forward Secrecy via Key Confirmation.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#on-optimal-tightness-for-key-exchange-with-full-forward-secrecy-via-key-confirmation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-optimal-tightness-for-key-exchange-with-full-forward-secrecy-via-key-confirmation)**
### 作者
* Kai Gellert, University of Wuppertal, Wuppertal, Germany
* Tibor Jager, University of Wuppertal, Wuppertal, Germany
* Kristian Gjøsteen, Norwegian University of Science and Technology, Trondheim, Norway
* Håkon Jacobsen, Thales Norway, Oslo, Norway
* Håkon Jacobsen, University of Oslo, Oslo, Norway
### 摘要
> 建立具有全向前保密性（和显式身份验证）的密钥交换协议的标准范式是将密钥确认消息添加到仅具有弱向前保密性（和隐式身份验证）的底层协议中。令人惊讶的是，我们通过一个不可能性结果表明，对于许多自然协议，这种简单的技巧必然会导致参与方数量的线性紧度损失。其中包括Krawczyk的HMQV协议（CRYPTO 2005）和Cohn-Gordon等人的协议（CRYPTO 2019）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_10](https://doi.org/10.1007/978-3-031-38551-3_10)
## Security Analysis of the WhatsApp End-to-End Encrypted Backup Protocol.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#security-analysis-of-the-whatsapp-end-to-end-encrypted-backup-protocol) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#security-analysis-of-the-whatsapp-end-to-end-encrypted-backup-protocol)**
### 作者
* Gareth T. Davies, Bergische Universität Wuppertal, Wuppertal, Germany
* Kai Gellert, Bergische Universität Wuppertal, Wuppertal, Germany
* Tobias Handirk, Bergische Universität Wuppertal, Wuppertal, Germany
* Máté Horváth, Bergische Universität Wuppertal, Wuppertal, Germany
* Tibor Jager, Bergische Universität Wuppertal, Wuppertal, Germany
* Sebastian Faller, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Julia Hesse, IBM Research Europe – Zurich, Rüschlikon, Switzerland
* Sebastian Faller, ETH Zurich, Zürich, Switzerland
### 摘要
> WhatsApp是一种被数十亿人使用的端到端加密（End-to-End Encrypted，简称E2EE）信息传输服务。2021年底，WhatsApp推出了一种新的备份聊天记录协议。该E2EE WhatsApp备份协议（WBP）允许用户通过密码来恢复他们的聊天记录，同时WhatsApp并不知晓实际的加密密钥。WBP基于OPAQUE框架进行基于密码的密钥交换，目前正在标准化过程中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_11](https://doi.org/10.1007/978-3-031-38551-3_11)
## On Active Attack Detection in Messaging with Immediate Decryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#on-active-attack-detection-in-messaging-with-immediate-decryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-active-attack-detection-in-messaging-with-immediate-decryption)**
### 作者
* Khashayar Barooti, EPFL, Lausanne, Switzerland
* Daniel Collins, EPFL, Lausanne, Switzerland
* Simone Colombo, EPFL, Lausanne, Switzerland
* Loïs Huguenin-Dumittan, EPFL, Lausanne, Switzerland
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### 摘要
> 广泛使用的Signal协议通过前向安全（保护过去的消息）和妥协后安全（用于恢复安全）来防止状态暴露攻击。它支持即时解密，在协议级别上允许消息被重新排序或丢弃而不影响正确性。在这项工作中，我们考虑了具有即时解密的安全消息传递中的强主动攻击检测，其中当满足一定条件时，各方能够立即检测出主动攻击。我们首先考虑了带内主动攻击检测，即已经被主动损坏但仍然能够向合作伙伴发送单个消息的参与者能够检测到损坏。我们提出了两种互补的概念来捕捉安全性，并提出了一个编译器，它对这两种概念提供了安全性。我们的概念推广了现有的工作（RECOVER安全性），后者只支持按顺序传递消息。我们还通过考虑在带外的身份验证通道上进行通信来研究相关的带外攻击检测问题，并提出了类似的安全性概念。我们通过信息理论的论证证明了在每个设置中，我们两种概念中的一种在发送消息数量和安全参数上施加了线性通信开销。这意味着每个消息在信息理论上必须包含所有先前的消息，并且我们的构造方法，实质上是将整个消息历史附加到每条新消息上，是渐近最优的。然后，我们探讨了绕过此下界的方法，并突出了与即时解密兼容的实用主动攻击检测的可行性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_12](https://doi.org/10.1007/978-3-031-38551-3_12)
## Fork-Resilient Continuous Group Key Agreement.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#fork-resilient-continuous-group-key-agreement) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#fork-resilient-continuous-group-key-agreement)**
### 作者
* Joël Alwen, AWS-Wickr, Seattle, USA
* Marta Mularczyk, AWS-Wickr, Seattle, USA
* Yiannis Tselekounis, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 连续组密钥协商（CGKA）允许不断演变的客户组就一系列组密钥达成一致。CGKA的一个重要应用是可扩展的端到端（E2E）加密群组消息传递。阻止在不可靠基础设施上使用CGKA的一个主要问题是所谓的分叉。分叉发生在群组成员对群组历史（以及其当前状态）有不同看法的情况下，例如由于网络或服务器故障。一旦通信渠道恢复，成员通过再次就群组状态达成一致来解决分叉。当前的CGKA协议使分叉解决变得具有挑战性，因为自然的解决策略似乎与协议强制实施的群组状态一致性和前向保密性相冲突。与CGKA相比，支持分叉解决的安全群组消息传递协议无法实现相同的可扩展性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_13](https://doi.org/10.1007/978-3-031-38551-3_13)
## Streaming Functional Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#streaming-functional-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#streaming-functional-encryption)**
### 作者
* Jiaxin Guan, Princeton University, Princeton, USA
* Alexis Korb, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### 摘要
> 我们启动了对流式功能加密（sFE）的研究，该加密方案旨在处理数据以流式到达并且按迭代方式进行计算的场景。与传统的功能加密（FE）方案不同，在sFE方案中，我们不需要在加密时了解整个数据集，并且可以只给出输入的前缀来进行部分解密。具体而言，在sFE方案中，当数据流x逐点到达时，我们可以顺序加密每个数据点xi，而无需等待所有n个值。然后，我们可以生成针对流式函数的函数密钥，这些函数是有状态函数，其输入为消息xi和状态sti，并输出一个值yi和下一个状态st(i+1)。对于任何k ≤ n，拥有流式函数f的函数密钥的用户可以仅通过前k个元素的密文x1...xk来学习到前k个输出值y1...yk，其中(yi,st(i+1)) = f(xi,sti)，并且st1 = ⊥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_14](https://doi.org/10.1007/978-3-031-38551-3_14)
## Attribute-Based Multi-input FE (and More) for Attribute-Weighted Sums.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#attribute-based-multi-input-fe-and-more-for-attribute-weighted-sums) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#attribute-based-multi-input-fe-and-more-for-attribute-weighted-sums)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Anshu Yadav, IIT Madras, Chennai, India
* Junichi Tomida, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 最近，Abdalla、Gong和Wee（2020年加密学会议）提供了第一个适用于属性加权和（AWS）的功能性加密方案。其中，加密接受N个（无限制）属性值对\(\{\textbf{x}_i, \textbf{z}_i\}_{i \in [N]}\)作为输入，其中\(\textbf{x}_i\)是公共的，\(\textbf{z}_i\)是私有的。密钥与算术分支程序f相关联，解密返回加权和\({\sum }_{{i \in [N]}} f(\textbf{x}_i)^\top \textbf{z}_i\)，不泄露关于\(\textbf{z}_i\)的任何额外信息。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_15](https://doi.org/10.1007/978-3-031-38551-3_15)
## How to Use (Plain) Witness Encryption: Registered ABE, Flexible Broadcast, and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#how-to-use-plain-witness-encryption-registered-abe-flexible-broadcast-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#how-to-use-plain-witness-encryption-registered-abe-flexible-broadcast-and-more)**
### 作者
* Cody Freitag, Boston University, Boston, USA
* Brent Waters, UT Austin, Austin, USA
* David J. Wu, UT Austin, Austin, USA
* Brent Waters, NTT Research, Sunnyvale, USA
### 摘要
> 见证加密是公钥加密的一种推广，其中公钥可以是任何 \(\textsf{NP}\) 语句 x，而相关的解密密钥是 x 的任何证明 w。尽管早期的见证加密构建依赖于多线性映射和不可区分混淆 (\(i\mathcal {O}\))，但最近的研究提供了直接构建见证加密的方法，这种方法比 \(i\mathcal {O}\) 更高效（并且似乎不太可能产生 \(i\mathcal {O}\)）。受到这一进展的启发，我们重新考虑使用见证加密来实现以前只在“混淆乌托邦”中已知的先进加密原语的可能性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_16](https://doi.org/10.1007/978-3-031-38551-3_16)
## Constant Input Attribute Based (and Predicate) Encryption from Evasive and Tensor LWE.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#constant-input-attribute-based-and-predicate-encryption-from-evasive-and-tensor-lwe) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#constant-input-attribute-based-and-predicate-encryption-from-evasive-and-tensor-lwe)**
### 作者
* Shweta Agrawal, IIT Madras, Chennai, India
* Mélissa Rossi, ANSSI, Paris, France
* Anshu Yadav, IIT Madras, Chennai, India
* Shota Yamada, AIST, Tokyo, Japan
### 摘要
> 构建高级密码学原语，如混淆或广播加密，在后量子时代的标准困难假设上是一个重要的研究领域，尽管付出了巨大的努力，但取得的成功有限。因此，在这个领域中找到新的、简单陈述的假设非常重要，可以用来填补这个空白。最近，Wee（Eurocrypt'22）在格上鉴别出两个新的假设，即回避\(\textsf{LWE}\) 和张量\(\textsf{LWE}\)，并借此构建了带有最优参数的广播加密和基于密文策略的属性加密方案。独立地，Tsabary提出了类似的假设，并用它来构造证人加密（Crypto'22）。在Wee的工作之后，Vaikuntanathan、Wee和Wichs独立地提供了一种证人加密方案（Asiacrypt'22）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_17](https://doi.org/10.1007/978-3-031-38551-3_17)
## Correlated Pseudorandomness from the Hardness of Quasi-Abelian Decoding.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#correlated-pseudorandomness-from-the-hardness-of-quasi-abelian-decoding) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#correlated-pseudorandomness-from-the-hardness-of-quasi-abelian-decoding)**
### 作者
* Maxime Bombar, Laboratoire LIX, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Alain Couvreur, Laboratoire LIX, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Maxime Bombar, Inria, Saclay, France
* Alain Couvreur, Inria, Saclay, France
* Clément Ducros, Inria, Saclay, France
* Geoffroy Couteau, CNRS, Paris, France
* Geoffroy Couteau, IRIF, Université Paris Cité, Paris, France
* Clément Ducros, IRIF, Université Paris Cité, Paris, France
### 摘要
> Boyle等人（CCS 2018，Crypto 2019）提出了一个最近的范式，展示了如何使用伪随机相关生成器（PCG）来生成大量有用的相关（伪）随机性形式，仅需进行极少的交互，然后仅进行本地计算，从而产生安静安全的两方计算协议。这可以通过使用可编程的PCG来扩展到N方。以前的工作构建了非常高效（不可编程）的用于相关性的PCG，比如随机遗忘转移。然而，对于随机遗忘线性评估（OLE）及其在大字段上的泛化，情况就显得不那么令人满意了。Boyle等人（Crypto 2020）的最新工作构建了用于OLE的可编程PCG，但他们的工作存在两个重要的缺点：（1）它仅生成大字段上的OLE，（2）它依赖于一个相对较新的“可分割”环-LPN假设，该假设缺乏强大的安全基础。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_18](https://doi.org/10.1007/978-3-031-38551-3_18)
## Expand-Convolute Codes for Pseudorandom Correlation Generators from LPN.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#expand-convolute-codes-for-pseudorandom-correlation-generators-from-lpn) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#expand-convolute-codes-for-pseudorandom-correlation-generators-from-lpn)**
### 作者
* Srinivasan Raghuraman, Visa Research and MIT, Cambridge, USA
* Peter Rindal, Visa Research, Palo Alto, USA
* Titouan Tanguy, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 最近伪随机相关生成器（PCG）的发展为高效的多方计算协议带来了巨大的前景。在其他相关性中，PCG允许以亚线性通信和具体良好的计算开销高效地生成无意传输（OT）和向量无意线性评估（VOLE）。这种类型的PCG利用所谓的LPN友好纠错码。也就是说，对于较大的维度，该编码应具有非常高效的编码并具有较高的最小距离。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_19](https://doi.org/10.1007/978-3-031-38551-3_19)
## Correlation Intractability and SNARGs from Sub-exponential DDH.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#correlation-intractability-and-snargs-from-sub-exponential-ddh) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#correlation-intractability-and-snargs-from-sub-exponential-ddh)**
### 作者
* Arka Rai Choudhuri, NTT Research, Sunnyvale, USA
* Sanjam Garg, NTT Research, Sunnyvale, USA
* Sanjam Garg, University of California Berkeley, Berkeley, USA
* Jiaheng Zhang, University of California Berkeley, Berkeley, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Zhengzhong Jin, Massachusets Institute of Technology, Cambridge, USA
### 摘要
> 我们仅基于次指数级的决策性Diffie-Hellman（DDH）假设，提出了批处理NP和P问题的SNARGs构造。我们的方案实现了多对数级别的证明大小。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_20](https://doi.org/10.1007/978-3-031-38551-3_20)
## Algebraic Reductions of Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#algebraic-reductions-of-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#algebraic-reductions-of-knowledge)**
### 作者
* Abhiram Kothapalli, Carnegie Mellon University, Pittsburgh, USA
* Bryan Parno, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 我们介绍了知识降级，这是知识论证的一个概括，它将一个关系中对证人知识的检查降级为对另一个（更简单的）关系中证人知识的检查。知识降级统一了一类不断增长的现代技术，并为分模块地推理复杂知识论证中的各个步骤提供了一个组成性框架。作为示例，我们通过将其分解为一系列知识降级来简化和统一线性代数陈述中的递归论证。为此，我们开发了张量知识降级，它泛化了许多递归论证中常见的中心化简步骤。张量知识降级的基础是一种新的信息论降级，对于任何模块U、\(U_1\)和\(U_2\)，使得\(U \cong U_1 \otimes U_2\)，将在U中评估同态映射的任务降级为在\(U_1\)中评估同态映射和在\(U_2\)中评估同态映射。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_21](https://doi.org/10.1007/978-3-031-38551-3_21)
## On the Impossibility of Algebraic NIZK in Pairing-Free Groups.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#on-the-impossibility-of-algebraic-nizk-in-pairing-free-groups) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#on-the-impossibility-of-algebraic-nizk-in-pairing-free-groups)**
### 作者
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
### 摘要
> 非交互式零知识证明（NIZK）允许证明者通过仅发送一条信息并且不传递任何其他信息来说服验证者该陈述是真实的。在CRS模型中，许多实例已经从群论假设中提出。一方面，其中一些构造以黑盒方式使用群结构，但依赖于配对，例如著名的Groth-Sahai证明系统。另一方面，最近的一系列研究利用配对无关群中的次指数DDH实现了NIZK，使用了相关可行性难题函数，但代价是对群的非黑盒使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_22](https://doi.org/10.1007/978-3-031-38551-3_22)
## A Note on Non-interactive Zero-Knowledge from CDH.
🌍 [English](../../../docs/en/Crypto/Crypto[2023-4].md#a-note-on-non-interactive-zero-knowledge-from-cdh) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2023-4].md#a-note-on-non-interactive-zero-knowledge-from-cdh)**
### 作者
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Abhishek Jain, Johns Hopkins University, Baltimore, MD, USA
* Zhengzhong Jin, MIT, Cambridge, MA, USA
* Willy Quach, Northeastern University, Boston, MA, USA
### 摘要
> 我们构建了对所有 \(\textsf{NP} \) 类问题的非交互式零知识（NIZK）和ZAP证明，其中音符性在无限多个安全参数上成立，并且能够对抗均匀攻击者。我们假设计算Diffie-Hellman（CDH）困难问题在次指数级别下具有困难度。我们还在假设多项式难度下同时满足CDH和带噪声的学习奇偶校验（LPN）的情况下，证明了存在具备这些属性的NIZK证明。在这两种情况下，CDH假设并不要求群体配对。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-38551-3_23](https://doi.org/10.1007/978-3-031-38551-3_23)
