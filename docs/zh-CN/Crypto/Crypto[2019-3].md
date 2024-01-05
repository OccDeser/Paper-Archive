# Crypto[2019-3]
## Trapdoor Hash Functions and Their Applications.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#trapdoor-hash-functions-and-their-applications) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#trapdoor-hash-functions-and-their-applications)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, UC Berkeley, Berkeley, CA, USA
* Yuval Ishai, Technion, Haifa, Israel
* Giulio Malavolta, Carengie Mellon University, Pittsburgh, PA, USA
* Tamer Mour, Weizmann Institute of Science, Rehovot, Israel
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
### 摘要
> 我们引入了一种新的原语，称为陷门哈希函数（TDH），它们是具有陷门函数特性的哈希函数\(\mathsf{H}:\{0,1\}^n \rightarrow \{0,1\}^\lambda \)。具体而言，给定一个索引\(i\in[n]\)，TDH 允许在编码密钥\(\mathsf{ek}\)（隐藏 i）以及相应的陷门的情况下进行采样。此外，给定\(\mathsf{H}(x)\)，一个暗示值\(\mathsf{E}(\mathsf{ek},x)\)，以及与\(\mathsf{ek}\)对应的陷门，可以有效地恢复 x 的第 \(i\) 位。在这种情境下，我们的一个主要问题是：暗示值\(\mathsf{E}(\mathsf{ek},x)\)能有多小？我们基于 DDH、QR、DCR 或 LWE 获得了暗示只有一位的构造。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_1](https://doi.org/10.1007/978-3-030-26954-8_1)
## CCA Security and Trapdoor Functions via Key-Dependent-Message Security.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#cca-security-and-trapdoor-functions-via-key-dependent-message-security) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#cca-security-and-trapdoor-functions-via-key-dependent-message-security)**
### 作者
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Takahiro Matsuda, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> 我们研究了公钥加密（PKE）满足针对已选明文攻击（IND-CPA安全性）的不可区分性、针对已选密文攻击（IND-CCA安全性）的关系以及陷门函数（TDF）。具体而言，我们的目标是找到一种统一的方法和一些额外要求，以实现基于IND-CPA安全的PKE的IND-CCA安全的PKE和TDF，并展示了以下两个主要结果。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_2](https://doi.org/10.1007/978-3-030-26954-8_2)
## Zero-Knowledge Proofs on Secret-Shared Data via Fully Linear PCPs.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#zero-knowledge-proofs-on-secret-shared-data-via-fully-linear-pcps) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#zero-knowledge-proofs-on-secret-shared-data-via-fully-linear-pcps)**
### 作者
* Dan Boneh, Stanford University, Stanford, USA
* Henry Corrigan-Gibbs, Stanford University, Stanford, USA
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Be’er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
### 摘要
> 我们引入并研究了全线性概率检查证明系统的概念。在这种证明系统中，验证者可以提出一小段数量的线性查询，这些查询同时适用于输入和证明向量。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_3](https://doi.org/10.1007/978-3-030-26954-8_3)
## Non-Uniformly Sound Certificates with Applications to Concurrent Zero-Knowledge.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#non-uniformly-sound-certificates-with-applications-to-concurrent-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#non-uniformly-sound-certificates-with-applications-to-concurrent-zero-knowledge)**
### 作者
* Cody Freitag, Cornell Tech, New York, NY, 10044, USA
* Ilan Komargodski, Cornell Tech, New York, NY, 10044, USA
* Rafael Pass, Cornell Tech, New York, NY, 10044, USA
### 摘要
> 我们介绍了非均匀有声证书的概念：简洁的单消息（单向）论证系统，对于非均匀多项式时间攻击者提供了"最佳安全性"。特别地，没有带有 s 位非均匀建议的多项式时间攻击者能够显著地找到超过 s 个接受错误陈述的证明。我们的第一个结果是在随机预言机模型中构建非均匀有声证书，其中攻击者的建议可以任意依赖于随机预言机。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_4](https://doi.org/10.1007/978-3-030-26954-8_4)
## On Round Optimal Statistical Zero Knowledge Arguments.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#on-round-optimal-statistical-zero-knowledge-arguments) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#on-round-optimal-statistical-zero-knowledge-arguments)**
### 作者
* Nir Bitansky, Tel Aviv University, Tel Aviv-Yafo, Israel
* Omer Paneth, MIT and Northeastern University, Cambridge, USA
### 摘要
> 我们构建了第一个针对所有NP问题的三信息统计零知识证明，与已知的下界相匹配。我们基于无密钥多碰撞抗性散列函数和误差学习假设进行构建，这些假设与获得计算零知识的最优轮数所使用的假设相同。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_5](https://doi.org/10.1007/978-3-030-26954-8_5)
## It Wasn't Me! - Repudiability and Claimability of Ring Signatures.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#it-wasnt-me-repudiability-and-claimability-of-ring-signatures) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#it-wasnt-me-repudiability-and-claimability-of-ring-signatures)**
### 作者
* Sunoo Park, MIT and Harvard, Cambridge, USA
* Adam Sealfon, MIT, Cambridge, USA
### 摘要
> 环签名（Ring signatures）是一种数字签名的变体，由[RST01]引入，它证明了在一个特定的参与方集合中，有其中一个参与方对信息进行了认可，同时隐藏了集合中哪个参与方是签署者的身份。环签名旨在允许任何人将其他人的名字附加到一个签名上，前提是签署者自己的名字也被附加上去。但是，如果一个声称是签名人的人希望否认一个已签署的信息，或者反过来，如果一个签名人希望事后声称拥有一个签名，环签名能提供什么样的保证呢？先前关于环签名的安全定义对于这个问题并没有给出明确的答案：根据大多数现有的定义，这些保证可能是任意的。也就是说，根据一些标准定义，非签署者可能能够否认自己并未生成的签名，也可能不行。同样地，签署者可能能够事后有力地声称自己生成的签名确实是自己的，或者不是自己的。其中任何一种保证都可能是可取的。例如，举报者可能有理由希望事后声明匿名发布的签名，而一个被冤枉和受到环签名涉罪的人可能希望否认这个损害了自己声誉的签名。在其他情况下，即使在威胁下，一个环中的成员也不能提供证据证明他是否签署了特定的签名，这也是可取的。无论如何，明确地提供一种保证似乎是非常有意义的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_6](https://doi.org/10.1007/978-3-030-26954-8_6)
## Two-Party ECDSA from Hash Proof Systems and Efficient Instantiations.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#two-party-ecdsa-from-hash-proof-systems-and-efficient-instantiations) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#two-party-ecdsa-from-hash-proof-systems-and-efficient-instantiations)**
### 作者
* Guilhem Castagnos, Université de Bordeaux, Inria, CNRS, IMB UMR 5251, F-33405, Talence, France
* Dario Catalano, Università di Catania, Catania, Italy
* Federico Savasta, Università di Catania, Catania, Italy
* Fabien Laguillaumie, Univ Lyon, EnsL, UCBL, CNRS, Inria, LIP, F-69342, Lyon Cedex 07, France
* Ida Tucker, Univ Lyon, EnsL, UCBL, CNRS, Inria, LIP, F-69342, Lyon Cedex 07, France
* Federico Savasta, Scuola Superiore di Catania, Catania, Italy
### 摘要
> ECDSA是一种广泛采用的数字签名标准。不幸的是，这种算法的高效分布式变体通常很难实现，并且已知的解决方案通常需要昂贵的零知识证明来处理恶意对手。对于两方的情况，Lindell [Lin17]最近成功实现了一种高效的解决方案，为了实现基于模拟的安全性，它依赖于对Paillier密码系统的交互式、非标准的假设。在本文中，我们使用哈希证明系统推广了Lindell的解决方案。我们通用方法的主要优势在于它可以通过模拟为基础的安全性证明来避免使用非标准的交互式假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_7](https://doi.org/10.1007/978-3-030-26954-8_7)
## Asymmetric Message Franking: Content Moderation for Metadata-Private End-to-End Encryption.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#asymmetric-message-franking-content-moderation-for-metadata-private-end-to-end-encryption) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#asymmetric-message-franking-content-moderation-for-metadata-private-end-to-end-encryption)**
### 作者
* Nirvan Tyagi, Cornell Tech, New York City, USA
* Paul Grubbs, Cornell Tech, New York City, USA
* Julia Len, Cornell Tech, New York City, USA
* Ian Miers, Cornell Tech, New York City, USA
* Thomas Ristenpart, Cornell Tech, New York City, USA
* Ian Miers, University of Maryland, College Park, USA
### 摘要
> 内容审查对于在线平台中停止滥用和骚扰信息至关重要。现有的审查机制，例如信息登记，要求平台提供者能够将用户标识符与加密信息关联起来。这些机制在元数据私密的消息系统（如Signal）中失效，用户可以向平台提供者隐藏自己的身份。阻碍审查的主要技术挑战是在保持可否认性的同时实现密码学问责。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_8](https://doi.org/10.1007/978-3-030-26954-8_8)
## Statistical Zeroizing Attack: Cryptanalysis of Candidates of BP Obfuscation over GGH15 Multilinear Map.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#statistical-zeroizing-attack-cryptanalysis-of-candidates-of-bp-obfuscation-over-ggh15-multilinear-map) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#statistical-zeroizing-attack-cryptanalysis-of-candidates-of-bp-obfuscation-over-ggh15-multilinear-map)**
### 作者
* Jung Hee Cheon, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Wonhee Cho, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Minki Hhan, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Jiseung Kim, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Jung Hee Cheon, Research Institute of Mathematics (RIM), SNU, Seoul, Republic of Korea
* Jung Hee Cheon, Cryptolab, Seoul, Republic of Korea
* Changmin Lee, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
### 摘要
> 我们提出了一种基于GGH15多线性映射的混淆密码算法的新的密码分析算法。我们的算法是一种统计清零攻击，它可以直接区分来自混淆的两个分布，同时遵循清零攻击范式，即利用混淆程序的零评估。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_9](https://doi.org/10.1007/978-3-030-26954-8_9)
## Indistinguishability Obfuscation Without Multilinear Maps: New Paradigms via Low Degree Weak Pseudorandomness and Security Amplification.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#indistinguishability-obfuscation-without-multilinear-maps-new-paradigms-via-low-degree-weak-pseudorandomness-and-security-amplification) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#indistinguishability-obfuscation-without-multilinear-maps-new-paradigms-via-low-degree-weak-pseudorandomness-and-security-amplification)**
### 作者
* Prabhanjan Ananth, MIT, Cambridge, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Huijia Lin, University of Washington, Seattle, USA
* Christian Matt, Concordium, Zurich, Switzerland
### 摘要
> 存在安全不可区分混淆器（\(i\mathcal {O}\)）具有广泛的影响，显著扩大了可以通过密码学研究解决的问题范围。所有已知构建 \(i\mathcal {O}\) 的方法都依赖于 d-线性映射。虽然在密码学文献中对于安全双线性映射已有良好建立，但对于 \(d>2\) 的候选映射的安全性认识仍不足。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_10](https://doi.org/10.1007/978-3-030-26954-8_10)
## Watermarking PRFs from Lattices: Stronger Security via Extractable PRFs.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#watermarking-prfs-from-lattices-stronger-security-via-extractable-prfs) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#watermarking-prfs-from-lattices-stronger-security-via-extractable-prfs)**
### 作者
* Sam Kim, Stanford University, Stanford, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 一种软件水印方案可以在保留程序功能的同时，嵌入一个“标记”（即，一条消息）到程序中。此外，有一种提取算法可以从程序中恢复出嵌入的消息。主要安全目标是在不破坏程序功能的情况下，难以移除水印。现有的水印构造主要关注水印加密函数，如伪随机函数（PRFs）的水印；即使在这种情况下，实现基于标准假设的水印仍然很困难。Kim和Wu（CRYPTO 2017）首次提出了一种基于格的秘密密钥水印构造，只要求远离标记提取预言者，就能确保不可移除的标记性。Quach et al. (TCC 2018)提出的构造实现了更强的不可移除标记性概念，即使对手可以进行提取查询，但其缺点是水印授权机构（持有水印秘密密钥的机构）可以破坏所有PRF密钥（包括未标记密钥）的伪随机性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_11](https://doi.org/10.1007/978-3-030-26954-8_11)
## Watermarking Public-Key Cryptographic Primitives.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#watermarking-public-key-cryptographic-primitives) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#watermarking-public-key-cryptographic-primitives)**
### 作者
* Rishab Goyal, UT Austin, Austin, TX, USA
* Brent Waters, UT Austin, Austin, TX, USA
* Sam Kim, Stanford University, Stanford, CA, USA
* Nathan Manohar, UCLA, Los Angeles, CA, USA
* Brent Waters, NTT Research, East Palo Alto, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 软件水印方案使用户能够在保留软件功能的同时，嵌入一个信息或标记。此外，对于敌对方来说，从标记的程序中移除水印而不破坏其行为是困难的。已有的软件水印构建仅仅关注在基本假设下对伪随机函数（PRFs）进行水印标记。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_12](https://doi.org/10.1007/978-3-030-26954-8_12)
## SpOT-Light: Lightweight Private Set Intersection from Sparse OT Extension.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#spot-light-lightweight-private-set-intersection-from-sparse-ot-extension) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#spot-light-lightweight-private-set-intersection-from-sparse-ot-extension)**
### 作者
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Avishay Yanai, Bar-Ilan University, Ramat Gan, Israel
* Mike Rosulek, Oregon State University, Corvallis, USA
* Ni Trieu, Oregon State University, Corvallis, USA
### 摘要
> 我们描述了一种新的方法来进行具有半诚实安全性的双方私人集合交集（PSI）。与现有的PSI协议相比，我们的方法在通信和计算之间具有更有利的平衡。具体而言，当在互联网上使用基于云计算服务的方式运行时（考虑到当前CPU + 数据的费用），我们的协议拥有任何已知PSI协议中最低的金钱成本。在慢速网络（例如10 Mbps）上，我们的协议实际上是最快的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_13](https://doi.org/10.1007/978-3-030-26954-8_13)
## Universally Composable Secure Computation with Corrupted Tokens.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#universally-composable-secure-computation-with-corrupted-tokens) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#universally-composable-secure-computation-with-corrupted-tokens)**
### 作者
* Nishanth Chandran, Microsoft Research India, Bengaluru, India
* Wutichai Chongchitmate, Department of Mathematics and Computer Science, Faculty of Science, Chulalongkorn University, Bangkok, Thailand
* Rafail Ostrovsky, Department of Computer Science and Department of Mathematics, University of California, Los Angeles, CA, USA
* Ivan Visconti, DIEM, University of Salerno, Fisciano, Italy
### 摘要
> 我们介绍了一个被损坏的令牌模型。该模型推广了Katz（EUROCRYPT '07）提出的防篡改令牌模型，放宽了对令牌诚实行为的信任假设。我们的模型受到将硬件生产外包给可能被损坏的制造商的真实世界实践的启发。我们通过允许对诚实玩家的令牌进行破坏来捕捉令牌制造商的恶意行为。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_14](https://doi.org/10.1007/978-3-030-26954-8_14)
## Reusable Non-Interactive Secure Computation.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#reusable-non-interactive-secure-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#reusable-non-interactive-secure-computation)**
### 作者
* Melissa Chase, Microsoft Research, Redmond, USA
* Yevgeniy Dodis, New York University, New York, USA
* Yuval Ishai, Technion, Haifa, Israel
* Daniel Kraschewski, TNG Technology Consulting GmbH, Unterföhring, Germany
* Tianren Liu, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### 摘要
> 我们考虑非交互式双方安全计算（NISC）的问题。在这个问题中，Rachel希望以一种加密的方式发布她的输入x，以便任何其他持有输入y的参与方可以向她发送一条单一消息，该消息仅传达f(x, y)的值，而无其他信息。我们要求对恶意参与方进行安全保护。尽管使用混淆电路和一般非交互式零知识证明可以很容易地构建此类协议，但这种方法本质上会对底层的密码学原语进行非黑盒使用，在实践中是不可行的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_15](https://doi.org/10.1007/978-3-030-26954-8_15)
## Efficient Pseudorandom Correlation Generators: Silent OT Extension and More.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#efficient-pseudorandom-correlation-generators-silent-ot-extension-and-more) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#efficient-pseudorandom-correlation-generators-silent-ot-extension-and-more)**
### 作者
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 安全多方计算（MPC）通常依赖相关随机性以实现更高的效率和简单性。这在没有诚实多数的MPC中特别有用，其中与输入无关的相关随机性使得一旦输入已知，可以进行轻量级的“非加密”在线阶段。然而，由于随机性的数量通常与正在计算的函数的电路规模成比例，安全生成相关随机性形成了一个效率瓶颈，需要大量的通信和存储。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_16](https://doi.org/10.1007/978-3-030-26954-8_16)
## Adaptively Secure and Succinct Functional Encryption: Improving Security and Efficiency, Simultaneously.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#adaptively-secure-and-succinct-functional-encryption-improving-security-and-efficiency-simultaneously) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#adaptively-secure-and-succinct-functional-encryption-improving-security-and-efficiency-simultaneously)**
### 作者
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> 功能加密（FE）是一种先进的加密技术，使我们能够生成已硬编码的功能解密密钥。当我们使用一个已硬编码了函数f的功能解密密钥对消息m的密文进行解密时，我们只能获得f（m）而无法获取其他信息。我们称FE在目标消息在开始时选择或在发送函数查询后选择时分别为选择性安全或适应性安全。在弱选择设置中，函数查询也是在开始时选择的。我们称FE在仅拥有一个/多项式数量的功能解密密钥的对手面前安全时分别为单密钥/防共谋。当加密算法的运行时间在函数描述大小上是亚线性/多项式对数级的时候，我们称FE为次线性-简明/简明。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_17](https://doi.org/10.1007/978-3-030-26954-8_17)
## Non-interactive Non-malleability from Quantum Supremacy.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#non-interactive-non-malleability-from-quantum-supremacy) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#non-interactive-non-malleability-from-quantum-supremacy)**
### 作者
* Yael Tauman Kalai, Microsoft Research and MIT, Cambridge, USA
* Dakshita Khurana, Microsoft Research, Cambridge, USA
* Dakshita Khurana, UIUC, Urbana-Champaign, USA
### 摘要
> 在已经广泛研究的假设下，我们在普通模型中构建了无需设定的非交互式、非可塑性承诺。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_18](https://doi.org/10.1007/978-3-030-26954-8_18)
## Cryptographic Sensing.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#cryptographic-sensing) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#cryptographic-sensing)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Eyal Kushilevitz, Technion, Haifa, Israel
* Rafail Ostrovsky, University of California, Los Angeles, USA
* Amit Sahai, University of California, Los Angeles, USA
### 摘要
> 作为一名研究人员，您将会收到一篇研究论文的摘要。请将其翻译成简体中文。
> 
> 是否有可能以一种方法来测量一个物体，使得测量信号对外部观察者不可理解？或者说，可以通过使用精心设计的训练集来学习自然概念，而这些标记示例在没有引导思考的情况下变得无用？我们开始了一项关于这类“密码感知”问题的研究，提出定义、正面和负面结果，并指出进一步研究的方向。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_19](https://doi.org/10.1007/978-3-030-26954-8_19)
## Public-Key Cryptography in the Fine-Grained Setting.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#public-key-cryptography-in-the-fine-grained-setting) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#public-key-cryptography-in-the-fine-grained-setting)**
### 作者
* Rio LaVigne, MIT CSAIL and EECS, Cambridge, USA
* Andrea Lincoln, MIT CSAIL and EECS, Cambridge, USA
* Virginia Vassilevska Williams, MIT CSAIL and EECS, Cambridge, USA
### 摘要
> 密码学在很大程度上是建立在未经证实的假设之上的，尽管这些假设看起来可信，但却可能失败。特别是如果 \(P = NP\) ，或者我们生活在厄运之地（Pessiland）中，那么所有现有的密码学假设都将被破解。一个引人注目的问题是，在厄运之地是否存在任何有趣的密码学。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_20](https://doi.org/10.1007/978-3-030-26954-8_20)
## Exploring Constructions of Compact NIZKs from Various Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#exploring-constructions-of-compact-nizks-from-various-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#exploring-constructions-of-compact-nizks-from-various-assumptions)**
### 作者
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Shuichi Katsumata, The University of Tokyo, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 非交互式零知识(NIZK)协议允许证明者在泄露任何其他信息的情况下，以非交互的方式使验证者确信陈述的真实性。在本研究中，我们探索了所有\(\mathbf{NP}\)语言的较短NIZK证明。我们主要关注基于可证伪的配对/无配对群假设的NIZK证明。目前，基于可证伪的配对假设的常见参考字符串模型(CRS-NIZKs)中的NIZKs都需要至少\(O(|C| \kappa)\)大小的证明尺寸，其中C是计算\(\mathbf{NP}\)关系的电路，\(\kappa\)是安全参数。即使是较弱的指定验证者NIZKs(DV-NIZKs)，情况也是如此。值得注意的是，基于任何可证伪的配对假设构造一个(CRS, DV)-NIZK，其证明尺寸达到\(O(|C|) + \mathsf {poly}(\kappa)\)的增加开销，而不是乘法开销\( |C| \cdot \mathsf {poly}(\kappa)\) ，目前仍然是一个未解决的问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_21](https://doi.org/10.1007/978-3-030-26954-8_21)
## New Constructions of Reusable Designated-Verifier NIZKs.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#new-constructions-of-reusable-designated-verifier-nizks) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#new-constructions-of-reusable-designated-verifier-nizks)**
### 作者
* Alex Lombardi, MIT, Cambridge, MA, USA
* Willy Quach, Northeastern University, Boston, MA, USA
* Daniel Wichs, Northeastern University, Boston, MA, USA
* Ron D. Rothblum, Technion, Haifa, Israel
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 非交互式零知识证明 (NIZK) 对于 NP 问题是一种重要的密码学基元, 但目前我们仅在少数特定假设下实例化。值得注意的是，我们缺少从学习与错误（LWE）假设、Diffie-Hellman (CDH/DDH) 假设和学习带噪声的奇偶性 (LPN) 假设中的建构。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_22](https://doi.org/10.1007/978-3-030-26954-8_22)
## Scalable Zero Knowledge with No Trusted Setup.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#scalable-zero-knowledge-with-no-trusted-setup) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#scalable-zero-knowledge-with-no-trusted-setup)**
### 作者
* Eli Ben-Sasson, Technion, Haifa, Israel
* Yinon Horesh, Technion, Haifa, Israel
* Michael Riabzev, Technion, Haifa, Israel
* Eli Ben-Sasson, StarkWare Industries Ltd., Netanya, Israel
* Michael Riabzev, StarkWare Industries Ltd., Netanya, Israel
* Iddo Bentov, Cornell Tech, New York, NY, USA
### 摘要
> 一种构建零知识（ZK）论证的方法之一，依赖于早在1990年代初的具有影响力的作品中的“PCP技术” [Babai等人，Arora等人，1991-2]。这些技术仅需要极少的加密假设，即存在一系列抗碰撞散列函数的家族 [Kilian，STOC 1992]，并实现了两个显著的特性：（i）验证者生成的所有消息都是公共随机硬币，（ii）总验证时间仅仅是对待验证的计算进行天真执行所需时间的多项对数 [Babai等人，STOC

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_23](https://doi.org/10.1007/978-3-030-26954-8_23)
## Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#libra-succinct-zero-knowledge-proofs-with-optimal-prover-computation) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#libra-succinct-zero-knowledge-proofs-with-optimal-prover-computation)**
### 作者
* Tiacheng Xie, University of California, Berkeley, USA
* Jiaheng Zhang, University of California, Berkeley, USA
* Yupeng Zhang, University of California, Berkeley, USA
* Dawn Song, University of California, Berkeley, USA
* Yupeng Zhang, Texas A&M University, College Station, USA
* Charalampos Papamanthou, University of Maryland, College Park, USA
### 摘要
> 我们提出了名为Libra的零知识证明系统，它是第一个既具有最优证明时间又具有简洁的证明大小/验证时间的系统。特别地，如果C是要证明的电路的大小，则(i) 证明者时间为O(C)，与电路类型无关；(ii) 对于d-深度对数空间均匀电路（例如RAM程序），证明大小和验证时间均为 O(dlog C)。此外，Libra具有一次性的受信任设置，仅取决于电路输入的大小而不是电路逻辑。Libra的基础是Goldwasser，Kalai和Rothblum的交互式证明协议的新线性时间证明算法（也称为GKR协议），以及使用小的遮罩多项式将GKR协议转化为零知识的有效方法。Libra不仅具有出色的渐近表现，而且在实践中也非常高效。例如，我们的实现显示，生成基于SHA2的256个叶子的Merkle树根的证明需要200秒，优于所有现有的零知识证明系统。Libra的证明大小和验证时间也是很有竞争力的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_24](https://doi.org/10.1007/978-3-030-26954-8_24)
## Highly Efficient Key Exchange Protocols with Optimal Tightness.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#highly-efficient-key-exchange-protocols-with-optimal-tightness) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#highly-efficient-key-exchange-protocols-with-optimal-tightness)**
### 作者
* Katriel Cohn-Gordon, Oxford, UK
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Kristian Gjøsteen, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Håkon Jacobsen, McMaster University, Hamilton, Canada
* Tibor Jager, Paderborn University, Paderborn, Germany
### 摘要
> 在本文中，我们以Signal和Noise协议的风格给出了现代隐式身份验证Diffie-Hellman协议的几乎紧密归约。这些协议极其简单高效。与以往的方法不同，几乎紧密的证明和高效的协议的结合使得我们能够首次在现实世界中实现参数可以在理论上被选择的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_25](https://doi.org/10.1007/978-3-030-26954-8_25)
## Strong Asymmetric PAKE Based on Trapdoor CKEM.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#strong-asymmetric-pake-based-on-trapdoor-ckem) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#strong-asymmetric-pake-based-on-trapdoor-ckem)**
### 作者
* Tatiana Bradley, University of California, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, USA
* Jiayu Xu, University of California, Irvine, USA
### 摘要
> 密码认证密钥交换（PAKE）协议允许共享密码的两个方进行一种对离线攻击具有免疫性的方式来建立共享密钥。非对称PAKE（aPAKE）[20]将这种概念适应于常见的客户端-服务器环境，其中服务器存储密码的单向哈希而非密码本身，而服务器被攻击者攻破仅通过（不可避免的）离线字典攻击才能恢复密码。然而，大多数aPAKE协议允许攻击者预先计算散列密码的字典，从而在服务器受到攻击后立即得知密码。最近，Jarecki、Krawczyk和Xu正式化了一种通用组合强aPAKE（saPAKE）[23]，其要求密码哈希值加盐，以便字典攻击仅能在服务器被攻破泄露盐和加盐哈希值后开始。在[23]中展示的UC saPAKE协议称为OPAQUE，使用3个协议流，每个方进行3-4次指数运算，并依赖于ROM中的One-More Diffie-Hellman假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_26](https://doi.org/10.1007/978-3-030-26954-8_26)
## Broadcast and Trace with N^ε Ciphertext Size from Standard Assumptions.
🌍 [English](../../../docs/en/Crypto/Crypto[2019-3].md#broadcast-and-trace-with-n-ciphertext-size-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#broadcast-and-trace-with-n-ciphertext-size-from-standard-assumptions)**
### 作者
* Rishab Goyal, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Brent Waters, NTT Research, Tokyo, Japan
### 摘要
> 我们构建了一个广播和追踪方案（也称为追踪和撤销或广播、追踪和撤销），其中密文大小可以降低到\(O(N^\varepsilon)\)，对于任意小的常数\(\varepsilon>0\)。这一改进使得标准假设下之前基于Boneh和Waters（CCS'06）提出的广播和追踪方案的密文大小从\(O(N^{1/2})\)变为更小。尽管该方案依赖于双线性映射，我们的方案使用了差错学习（LWE）假设和双线性映射的组合。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_27](https://doi.org/10.1007/978-3-030-26954-8_27)
