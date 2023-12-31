# Asiacrypt[2022-1]
## Full Quantum Equivalence of Group Action DLog and CDH, and More.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#full-quantum-equivalence-of-group-action-dlog-and-cdh-and-more) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#full-quantum-equivalence-of-group-action-dlog-and-cdh-and-more)**
### 作者
* Hart Montgomery, Linux Foundation, San Francisco, USA
* Mark Zhandry, NTT Research and Princeton University, Princeton, USA
### 摘要
> 密码学群操作是标准密码学群的一种松弛，它们具有较少的结构。这种缺乏结构使它们在Shor算法的影响下可能具有量子抗性，并且仍然具有许多应用。群操作的最著名示例是基于椭圆曲线的同源。
> 
> 我们的主要结果是，交换群操作的CDH在量子上等同于离散对数。Galbraith等人（数学密码学）先前证明了完美解决CDH与量子离散对数等价；我们的结果适用于任何非可忽略优势。我们还探讨了关于群操作和同源协议的其他几个问题。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_1](https://doi.org/10.1007/978-3-031-22963-3_1)
## Cryptographic Primitives with Hinting Property.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#cryptographic-primitives-with-hinting-property) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#cryptographic-primitives-with-hinting-property)**
### 作者
* Navid Alamati, VISA Research, Palo Alto, USA
* Sikhar Patranabis, IBM Research India, Bangalore, India
### 摘要
> 一个提示性伪随机生成器（PRG）是PRG的一种（可能更强的）变体，它具有与PRG的种子“确定性”形式的循环安全性。提示性PRG能够实现许多密码应用，特别是CCA安全的公钥加密和陷门函数。本文研究具有提示性质的密码基元，得到以下结果：
> 
> 我们提出了一种新颖而概念上更简单的方法，用于通过环形群或同源基群操作的特定决策性假设设计提示性PRG，相比于现有方法简化了安全证明过程。
> 
> 我们引入了提示性弱伪随机函数（PRF），这是提示性质在弱PRF上的自然扩展，并展示如何从任意提示性弱PRF实现循环/KDM安全的对称密钥加密。我们证明了我们构建提示性PRG的简单方法可以扩展到从相同决策性假设集合实现提示性弱PRF。
> 
> 我们提出了提示性性质的更强版本，称为功能提示性质，它在有关秘密种子/密钥的函数提示存在的情况下仍能保证安全。我们展示了如何通过利用我们实现普通提示性PRG/弱PRF的简单技术，构建特定（函数组的）函数的功能提示性PRG和功能提示性弱PRF。我们还展示了具有特定代数特性的功能提示性弱PRF在以黑盒方式实现KDM安全的公钥加密中的适用性。
> 
> 最后，我们展示了仅使用随机预言机的简单实现，首次实现了提示性弱PRF（和提示性PRG）与公钥加密之间的黑盒分离。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_2](https://doi.org/10.1007/978-3-031-22963-3_2)
## SwiftEC: Shallue-van de Woestijne Indifferentiable Function to Elliptic Curves - Faster Indifferentiable Hashing to Elliptic Curves.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#swiftec-shallue-van-de-woestijne-indifferentiable-function-to-elliptic-curves-faster-indifferentiable-hashing-to-elliptic-curves) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#swiftec-shallue-van-de-woestijne-indifferentiable-function-to-elliptic-curves-faster-indifferentiable-hashing-to-elliptic-curves)**
### 作者
* Jorge Chavez-Saab, Computer Science Department, Cinvestav IPN, Mexico City, Mexico
* Francisco Rodríguez-Henríquez, Computer Science Department, Cinvestav IPN, Mexico City, Mexico
* Jorge Chavez-Saab, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
* Francisco Rodríguez-Henríquez, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
* Mehdi Tibouchi, NTT Social Informatics Laboratories, Tokyo, Japan
### 摘要
> 对于很多密码构造来说，将任意值散列到椭圆曲线上的点是必需的步骤，并且多年来已经提出了许多技术来实现此目标。最早的一种方法是由Shallue和van de Woestijne(ANTS-VII)提出的，它具有将几乎所有有限域上的椭圆曲线都映射为点的有趣属性。然而，它没有与随机预言机组合时不可区分于随机预言机的理想属性。
> 
> 随后，人们考虑了各种方法来克服这个限制，始于Brier等人的奠基性工作(CRYPTO 2011)。例如，如果\(f:\mathbb F_{q}\rightarrow E(\mathbb F_{q})\)是Shallue-van de Woestijne(SW)映射，\(\mathfrak {h}_ 1，\mathfrak {h}_2\)分别是对\(\mathbb F_{q}\)的两个独立随机预言机，我们现在知道\(m\mapsto f\big (\mathfrak {h}_1(m)\big )+f\big (\mathfrak {h}_2(m)\big )\)与随机预言机不可区分。不幸的是，这种方法的计算成本是直接计算的两倍，即\(m\mapsto f\big (\mathfrak {h}_1(m)\big )\)，虽然\(m\mapsto f\big (\mathfrak {h}_1(m)\big )\)不可区分。到目前为止，其他解决方案也面临相同的问题：它们的计算成本至少与两次基域指数运算相同，而普通的编码映射f只需要一次指数运算。最近，Koshelev(DCC 2022)首次提出了只需一次指数运算的不可区分散列构造，但仅适用于一类非常特殊的曲线(其中一部分曲线的j不变量为0)，并使用的技术不太可能更广泛地应用。
> 
> 在本研究中，我们重新审视了这个长期存在的开放性问题，并观察到SW映射实际上属于一个参数化一族\((f_u)_{u\in \mathbb F_{q}}\)的编码，对于\(\mathbb F_{q}\)上的独立随机预言机\(\mathfrak {h}_ 1, \mathfrak {h}_2\)，\(F:m\mapsto f_{\mathfrak {h}_2(m)}\big (\mathfrak {h}_1(m)\big )\)是不可区分的。此外，在一个非常大的曲线类别上(基本上是奇数阶或4的倍数阶的曲线)，这个参数化一族具有一个有理参数化，使得我们能够以几乎与小f相同的成本计算F，并最终实现对大多数曲线的不可区分散列只需一次指数运算。我们的新方法还产生了Tibouchi(FC 2014)的Improved Elligator Squared技术的改进变种，该技术将任意椭圆曲线上的点表示为接近均匀随机字符串。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_3](https://doi.org/10.1007/978-3-031-22963-3_3)
## Multi-Client Functional Encryption with Fine-Grained Access Control.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#multi-client-functional-encryption-with-fine-grained-access-control) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#multi-client-functional-encryption-with-fine-grained-access-control)**
### 作者
* Ky Nguyen, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* David Pointcheval, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Duong Hieu Phan, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
### 摘要
> 多客户功能加密（MCFE）和多输入功能加密（MIFE）是功能加密的非常有趣的扩展，适用于实际目的。它们允许计算来自多个参与方的数据的联合函数。这两个基元旨在用于多用户环境中，在这种环境中，仅当具有适当的功能解密密钥的用户时解密才能正确输出。虽然对于单个用户或多个用户的定义非常一般，并且可以实现与图灵机或所有电路一样具有表现力的函数的一般类别，但目前已针对具体函数类别提出了高效的方案：仅用于访问控制（即，在某些条件下的恒等函数）或者在没有任何条件下的线性/二次函数。
> 
> 在本文中，我们针对具有细粒度访问控制的功能类别，明确地结合了一些不依赖于解密用户的评估函数并在某些访问控制条件下。更具体地说，我们引入了一个细粒度访问控制的MCFE框架，并针对内积评估和通过线性秘密共享方案（LSSS）实现访问控制，提出了单客户端和多客户端设置的构造，具有选择性和自适应安全性。迄今为止，将多用户环境下的功能加密与访问控制结合的唯一已知工作是由Abdalla等人提出的（Asiacrypt '20），其依赖于从单客户端方案导出MIFE方案的一般化转换，并且密文大小具有二次因子n（其中n表示客户端数量）。我们走了一条不同的道路，通过MCFE：我们提出了一种复制和压缩技术，将单客户端方案转换为具有细粒度访问控制方案，并仅具有密文大小的线性因子n。因此，我们的最终方案比Abdalla等人的方案性能提高了n倍，因为可以通过将MCFE中的所有标签设置为固定公共常数来获得MIFE。具体构造在MCFE方案的随机预言机模型下满足SXDH假设，在MIFE改进中满足标准模型。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_4](https://doi.org/10.1007/978-3-031-22963-3_4)
## Compact FE for Unbounded Attribute-Weighted Sums for Logspace from SXDH.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#compact-fe-for-unbounded-attribute-weighted-sums-for-logspace-from-sxdh) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#compact-fe-for-unbounded-attribute-weighted-sums-for-logspace-from-sxdh)**
### 作者
* Pratish Datta, NTT Research, Inc., Sunnyvale, CA, 94085, USA
* Tapas Pal, NTT Social Informatics Laboratories, Musashino-shi, Tokyo, 180-8585, Japan
* Katsuyuki Takashima, Waseda University, Shinjuku-ku, Tokyo, 169-8050, Japan
### 摘要
> 本文介绍了第一个支持统一计算模型的属性加权和功能的函数加密（FE）方案。在这种FE方案中，加密以属性对（x，z）作为输入，其中属性x是公开的，而属性z是私有的。秘密密钥对应于某个权重函数f，解密恢复加权和f（x）z。这是一个具有广泛潜在现实应用的重要功能，其中许多应用需要属性长度具有灵活性，而不是在系统设置时固定。在所提出的方案中，公开属性被视为二进制字符串，而私有属性被视为某个有限域上的向量，两者都具有任意多项式长度，不在系统设置时固定。权重函数被建模为对数空间图灵机。
> 
> 之前的方案[Abdalla，Gong和Wee，CRYPTO 2020和Datta和Pal，ASIACRYPT 2021]只能支持非统一对数空间。所提出的方案是在非对称素序双线性群中构建的，并在对称外部Diffie-Hellman（SXDH）假设下被证明是自适应模拟安全的，针对任意多项式数量的秘密密钥查询，在挑战密文之前和之后。这是文献中所指出的FE的最高安全级别。作为所提出的FE方案的特例，我们还获得了第一个自适应模拟安全的内积FE（IPFE），用于不在系统设置时固定的任意长度向量。
> 
> 在技术方面，我们的贡献在于扩展了Lin和Luo [EUROCRYPT 2020]为统一对数空间访问策略的有效载荷隐藏属性基础加密（ABE）的技术，避免了在不可区分性为基础的安全模型中所谓的“一次使用”限制，以及Datta和Pal [ASIACRYPT 2021]为非统一对数空间的模拟安全属性隐藏FE设计的“三插槽约简”技术，将其应用于统一对数空间的模拟安全属性隐藏FE的背景中。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_5](https://doi.org/10.1007/978-3-031-22963-3_5)
## Collusion-Resistant Functional Encryption for RAMs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#collusion-resistant-functional-encryption-for-rams) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#collusion-resistant-functional-encryption-for-rams)**
### 作者
* Prabhanjan Ananth, UC Santa Barbara, Santa Barbara, CA, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Xiong Fan, Rutgers University, Piscataway, NJ, USA
* Luowen Qian, Boston University, Boston, MA, USA
### 摘要
> 近年来，功能加密（FE）已成为密码学中的基本原语之一。计算模型的选择，用于表示与功能密钥相关联的函数，对FE方案的算法复杂性起着至关重要的作用。历史上，这些函数被表示为电路。然而，这导致FE方案的解密时间与功能的最坏情况运行时间以及输入大小成正比增长，在许多应用中输入可能非常大。
> 
> 在这项工作中，我们提出了第一个具有公钥阻挠共谋的FE方案的构建，其中与密钥相关联的函数被表示为随机访问机器（RAM）。我们基于以下存在的安全性来保证我们方案的安全性：（i）电路的公钥阻挠共谋的FE和，（ii）公钥双效私密信息检索[Boyle等人，Canetti等人，TCC 2017]。我们的方案具有许多良好的效率特性，包括特定输入的解密时间。
> 
> 我们还展示了如何在有界密钥设置中实现较弱效率保证的RAM的FE，这可以基于标准的密码学假设来实现，其中包括简明无差错传输。在实现我们的结果的过程中，我们从较弱的假设中提出了更简单概念的RAM简洁编码的构造[Canetti等人，Chen等人，ITCS 2016]。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_6](https://doi.org/10.1007/978-3-031-22963-3_6)
## Witness Encryption and Null-IO from Evasive LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#witness-encryption-and-null-io-from-evasive-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#witness-encryption-and-null-io-from-evasive-lwe)**
### 作者
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
* Hoeteck Wee, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
* Daniel Wichs, Northeastern University, Boston, USA
### 摘要
> 见证加密（Witness Encryption，简称WE）允许我们将任意的NP语句x用作公钥来加密消息，而证人w则用作解密密钥。安全性确保当语句x为假时，加密的消息仍然在计算上保持隐藏。WE似乎比不可区分混淆（indistinguishability obfuscation，简称iO）弱得多。事实上，WE与一种高度限制的iO形式密切相关，该形式只对空电路（null circuits）提供安全性（null iO）。然而，目前构建满足良好假设下的WE的所有方法都要经过iO。这样的构造非常复杂，不太可能产生可以立即实现的方案。在本研究中，我们重新审视了Chen、Vaikuntanathan和Wee（CRYPTO 2018）提出的非常简单的WE和null iO候选方案。我们展示了如何在一个既简单又易于陈述的假设下证明其安全性，我们将其称为逃避LWE（evasive LWE），遵循Wee（EUROCRYPT 2022）的说法。粗略地说，逃避LWE假设如下：假设我们对矩阵P、S和辅助信息aux有一些联合分布，其中B是均匀随机（且秘密的）矩阵，U和U'是均匀随机矩阵，E和E'是根据LWE错误分布选择的，并具有适当的参数。那么也必须满足以下情况：
> 
> 基本上，上述内容表明，给定{SB + E}，获得附加组件B^(-1)(P)比仅获得乘积(SB + E) · B^(-1)(P) ≈ SP + E'更没有用处。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_7](https://doi.org/10.1007/978-3-031-22963-3_7)
## Algebraic Meet-in-the-Middle Attack on LowMC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#algebraic-meet-in-the-middle-attack-on-lowmc) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#algebraic-meet-in-the-middle-attack-on-lowmc)**
### 作者
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
* Gaoli Wang, East China Normal University, Shanghai, China
* Gaoli Wang, Key Lab of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Willi Meier, FHNW, Windisch, Switzerland
### 摘要
> 通过利用部分非线性层的特征，我们提出了一种新技术，称为代数 meet-in-the-middle（MITM）攻击来分析 LowMC 的安全性，能够降低简单差异枚举攻击的内存复杂度，超越了现有技术水平。此外，在 CRYPTO 2021 上已经提出了一种高效的代数技术，可以从 LowMC 的差分轨迹中恢复完整密钥，但其时间复杂度仍然是指数级的。在本论文中，我们展示了如何将其降低为常数时间，在轨迹中存在足够多活跃的 S-盒时效果更佳。借助上述新技术，我们进一步改进了对于 LowMC 和 LowMC-M 的攻击，并首次破解了一些 LowMC 实例。我们的研究结果似乎表明，部分非线性层仍然没有被充分理解。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_8](https://doi.org/10.1007/978-3-031-22963-3_8)
## Latin Dances Reloaded: Improved Cryptanalysis Against Salsa and ChaCha, and the Proposal of Forró.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#latin-dances-reloaded-improved-cryptanalysis-against-salsa-and-chacha-and-the-proposal-of-forr) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#latin-dances-reloaded-improved-cryptanalysis-against-salsa-and-chacha-and-the-proposal-of-forr)**
### 作者
* Murilo Coutinho, Electrical Engineering Department (ENE), Technology College, University of Brasília, Brasília, Brazil
* Iago Passos, Electrical Engineering Department (ENE), Technology College, University of Brasília, Brasília, Brazil
* Fábio L. L. de Mendonça, Electrical Engineering Department (ENE), Technology College, University of Brasília, Brasília, Brazil
* Rafael Timteo de Sousa Jr., Electrical Engineering Department (ENE), Technology College, University of Brasília, Brasília, Brazil
* Juan C. Grados Vásquez, Technology Innovation Institute, Abu Dhabi, UAE
* Fábio Borges, National Laboratory for Scientific Computing, Petrópolis, Brazil
### 摘要
> 在这篇论文中，我们对ARX密码和Salsa/ChaCha流密码家族提出了四个重要贡献：
> 
> (a) 我们针对ChaCha提出了改进的差分-线性区分器。为此，我们提出了一种新的方法来推导线性逼近，通过将算法表示为更简单的子轮。利用这个思想，我们展示了只需三条简单规则就可以从先前的研究中得到几乎所有的线性逼近。此外，我们还展示了通过增加一条额外规则可以改进Coutinho和Souza在Eurocrypt 2021 [11]中提出的线性逼近。
> 
> (b) 我们提出了一种名为双向线性扩展（BLE）的技术来改进对Salsa的攻击。之前的研究只考虑了向前扩展的线性扩展，而BLE则探索了单个位的正反两个方向的扩展。应用BLE，我们提出了第一个针对Salsa 7轮和8轮的差分-线性区分器，并改进了对Salsa 8轮的PNB密钥恢复攻击。
> 
> (c) 基于对这些密码学分析的研究，我们提出了一些修改，以提供更好的扩散效果和更高的抗密码分析能力，从而创建了一个名为Forró的新的流密码。我们展示了Forró具有更高的安全边际，这使我们能够在维持安全级别的同时减少总轮数，从而在许多平台上创建出更快的密码算法，特别是在受限设备中。
> 
> (d) 最后，我们开发了CryptDances，这是一个用于对Salsa、ChaCha和Forró进行密码分析的新工具，旨在在具有多个GPU的高性能环境中使用。使用CryptDances，可以计算差分相关性，自动推导ChaCha的新线性逼近，自动计算PNB攻击的复杂度等。我们将CryptDances提供给社区使用，网址为https://github.com/MurCoutinho/cryptDances。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_9](https://doi.org/10.1007/978-3-031-22963-3_9)
## Mind the TWEAKEY Schedule: Cryptanalysis on SKINNYe-64-256.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#mind-the-tweakey-schedule-cryptanalysis-on-skinnye-64-256) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#mind-the-tweakey-schedule-cryptanalysis-on-skinnye-64-256)**
### 作者
* Lingyue Qin, BNRist, Tsinghua University, Beijing, China
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Jialiang Hua, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
* Anyu Wang, Shangdong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Shangdong Institute of Blockchain, Jinan, China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, China
* Anyu Wang, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Lingyue Qin, National Financial Cryptography Research Center, Beijing, China
* Xiaoyang Dong, National Financial Cryptography Research Center, Beijing, China
* Anyu Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
### 摘要
> 对于特定应用设计对称密码变得越来越热门。在EUROCRYPT 2020会议上，Naito、Sasaki和Sugawara发明了阈值实现友好的密码SKINNYe-64-256，以满足经过身份验证的加密PFB\(\_\)Plus的要求。不久，Thomas Peyrin指出，由于新的tweakey计划，SKINNYe-64-256可能会失去安全性期望。尽管SKINNYe-64-256的安全问题仍不清楚，Naito等人决定推出SKINNYe-64-256 v2作为回应。
> 
> 在本文中，我们对SKINNYe-64-256的新tweakey计划进行了正式密码分析，并发现了tweakey计划中意想不到的差分抵消。例如，我们发现在30个连续轮中，取消数量可以达到8个，这显著高于预期的3个抵消。此外，我们将我们的新发现运用到矩形、MITM和不可能差分攻击中，并根据我们的发现调整相应的自动化工具的新约束条件。最后，我们发现了一种41轮相关tweakey矩形攻击SKINNYe-64-256，并仅留下3轮的安全余地。
> 
> 由于STK接受任意tweakey大小，但SKINNY和SKINNYe-64-256 v2仅支持4n tweakey大小。我们提出了一种新的SKINNY-64 tweakey计划设计，以进一步扩展支持的tweakey大小。我们提供了正式证明，表明我们的新tweakey计划继承了STK和SKINNY的安全要求。我们还讨论了扩展SKINNY-128 tweakey大小的

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_10](https://doi.org/10.1007/978-3-031-22963-3_10)
## Enhancing Differential-Neural Cryptanalysis.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#enhancing-differential-neural-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#enhancing-differential-neural-cryptanalysis)**
### 作者
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Zhenzhen Bao, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yi Tu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Meicheng Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Li Ma, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenzhen Bao, Zhongguancun Laboratory, Beijing, China
### 摘要
> 在CRYPTO 2019中，Gohr展示了经过良好训练的神经网络能够执行比传统差分区分器更优秀的密码分析区分任务。此外，通过应用一种不寻常的密钥猜测策略，在现代分组密码Speck32/64上进行的一个11轮密钥恢复攻击优于已发表的最新成果。这引出了下面的问题：机器学习（ML）相对传统方法的优势程度如何，以及这种优势是否普遍存在于现代密码分析中？为回答第一个问题，我们设计了基于ML的扩展轮简化Speck32/64的密钥恢复攻击。我们取得了改进的12轮和首个实用的13轮攻击。新成果的关键是增强了ML-based攻击中一个经典组件，即中性位。为回答第二个问题，我们生成了在轮简化Simon32/64上的各种神经区分器，并与纯差分区分器进行了比较。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_11](https://doi.org/10.1007/978-3-031-22963-3_11)
## Towards Tight Security Bounds for OMAC, XCBC and TMAC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#towards-tight-security-bounds-for-omac-xcbc-and-tmac) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#towards-tight-security-bounds-for-omac-xcbc-and-tmac)**
### 作者
* Soumya Chattopadhyay, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> OMAC是Iwata和Kurosawa提出的一种单密钥CBC-MAC变种，它是广泛使用和标准化的（NIST FIPS 800-38B，ISO/IEC 29167-10:2017）消息认证码（MAC）算法。OMAC的最佳安全上界是由Nandi证明的，他证明OMAC的伪随机函数（PRF）优势的上界为\( O(q^2\ell /2^n) \)，其中n、q和\(\ell\)分别表示底层分组密码的分组大小、查询次数和最大允许查询长度（以n位块为单位）。相比之下，没有匹配的下界攻击。事实上，对OMAC的最佳已知攻击是传统的生日攻击，实现了下界\(\varOmega (q^2/2^n)\)。在这项工作中，我们在大范围的消息长度上填补了这一差距。具体来说，我们证明了OMAC的PRF安全性的上界为\( O(q^2/2^n + q\ell ^2/2^n)\)。就实际意义而言，这意味着对于一个128位分组密码和最大64GB的消息长度，OMAC可以在重新生成密钥之前处理最多\( 2^{64} \)条消息（与生日上界相同）。相比之下，先前的上界只允许\( 2^{48} \)条消息。作为我们证明技术的副作用，我们还为XCBC（由Black和Rogaway提出）和TMAC（由Kurosawa和Iwata提出）导出了类似的严格安全上界。作为这项工作的直接结果，我们已经为除了原始的CBC-MAC以外的所有CBC-MAC变体（在广泛的\(\ell\)范围内）建立了严格的安全上界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_12](https://doi.org/10.1007/978-3-031-22963-3_12)
## A Modular Approach to the Security Analysis of Two-Permutation Constructions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#a-modular-approach-to-the-security-analysis-of-two-permutation-constructions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#a-modular-approach-to-the-security-analysis-of-two-permutation-constructions)**
### 作者
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> 基于两次公共置换调用的构造在当今的密码学领域非常常见。然而，每次引入新的构造时，都必须进行专门的证明以研究其安全性。在这项工作中，我们提出了一种新的工具，以模块化方式分析这些构造的安全性。该工具基于基于块密码构造的经典"镜像理论"，可用于理想置换模型中的安全性证明。我们提出了不同变体的公共置换镜像理论，以适应不同的安全概念。
> 
> 我们还提出了一个框架，用于使用这些新技术，并提供需要排除的不良事件，以便应用公共置换镜像理论。此外，我们在三个示例上展示了这种新技术：Cogliati等人的'Tweakable Even-Mansour'密码（CRYPTO '15），Dutta等人的pEDM PRF的两个置换变种（ToSC '21(2)）以及Dutta和Nandi的nEHtM\(_p\) MAC算法的两个置换变种（AFRICACRYPT '20）。有了这个新工具，我们以一种更简化的方式证明了这些构造的多用户安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_13](https://doi.org/10.1007/978-3-031-22963-3_13)
## Optimizing Rectangle Attacks: A Unified and Generic Framework for Key Recovery.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#optimizing-rectangle-attacks-a-unified-and-generic-framework-for-key-recovery) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#optimizing-rectangle-attacks-a-unified-and-generic-framework-for-key-recovery)**
### 作者
* Ling Song, College of Cyber Security, Jinan University, Guangzhou, China
* Jian Weng, College of Cyber Security, Jinan University, Guangzhou, China
* Nana Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Qianqian Yang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Jiahao Zhao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ling Song, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Jian Weng, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Jian Weng, Guangdong Key Laboratory of Data Security and Privacy Preserving, Jinan University, Guangzhou, China
* Nana Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Qianqian Yang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Jiahao Zhao, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 矩形攻击已经被证明是一种非常强大的对称密码分析形式。通过使用矩形区分器，人们期望能够尽可能高效地进行密钥恢复攻击。在文献中，有四种用于矩形密钥恢复攻击的算法。然而，它们的性能因情况而异。此外，攻击缺乏最优性的应用程序非常多。在本文中，我们深入研究矩形密钥恢复，并提出了一种统一且通用的密钥恢复算法，支持任何可能的攻击参数。值得注意的是，它不仅涵盖了四种先前的矩形密钥恢复算法，而且揭示了之前被忽视的五种新攻击类型。除了新的密钥恢复算法，我们还提出了一个自动寻找最佳攻击参数的框架，利用该框架可以最小化矩形攻击的时间复杂度。为了展示新的密钥恢复算法的效率，我们应用它于Serpent、CRAFT、SKINNY和Deoxys-BC-256，基于现有的区分器获得了一系列改进的矩形攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_14](https://doi.org/10.1007/978-3-031-22963-3_14)
## Random Sources in Private Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#random-sources-in-private-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#random-sources-in-private-computation)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Adi Rosén, CNRS, FILOFOCS, Tel Aviv, Israel
### 摘要
> 我们考虑多方信息论私有计算。这样的计算本质上需要各方使用本地随机性，而在文献中已经广泛关注如何在给定私有计算中最小化使用随机比特的总数，例如[5、9、14、16、17、19、21、26]。
> 
> 在这项工作中，我们对另一个问题感兴趣：给定一个私有计算，我们想知道有多少个参与方需要访问一个随机源，有多少个参与方可以是确定性方。我们还对系统中随机源的数量和计算所需的随机比特的总数之间的可能相互作用感兴趣。
> 
> 我们给出了一些结果。我们首先展示，也许出乎意料的是，对于任何t<n/2的n个参与方的确定性功能，具有访问随机源权限的t个参与方（而不是t+1个）足以进行信息论上的t-私有计算；根据[16]的结果，这是最佳的可能性。这意味着，令人反直觉的是，虽然没有随机性私有计算是不可能的，但在对手可以控制可以抛硬币的所有参与方（因此可以看到所有随机硬币）的情况下，却可以进行私有计算。对于随机功能，我们证明了t+1个随机源是必要的（且充分的）。
> 
> 然后我们转向随机源的数量与所需的随机比特的可能相互作用的问题。由于在私有计算中，对所需随机比特数量的有意义的界限仅有非常少的设置被知悉，我们考虑AND功能，对于这个功能，一些此类界限是已知的。我们提供了一种新的协议来进行1-私有计算的n-参与方AND功能，该协议使用一个随机源和由该源抛6个随机比特。这改进了当前已知的最佳结果[18]，同时改进了源的数量和随机比特的数量（[18]提供了一个2个源、8个比特的协议）。这个结果也许提供了一些证据，即对于1-隐私，使用最小必要的源数量也可以实现必要的最小随机比特数量。然而，我们相信我们的协议对于私有计算中的随机性研究具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_15](https://doi.org/10.1007/978-3-031-22963-3_15)
## Non-interactive Secure Computation of Inner-Product from LPN and LWE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#non-interactive-secure-computation-of-inner-product-from-lpn-and-lwe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#non-interactive-secure-computation-of-inner-product-from-lpn-and-lwe)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Maryam Zarezadeh, Barkhausen Institut, Dresden, Germany
### 摘要
> 我们提出了一种新的密码学原语，用于在可扩展的非交互方式下安全计算内积：任何一方都可以广播其输入的公共（计算隐藏）编码，并存储一个秘密状态。给定他们的秘密状态和另一方的公共编码，任何一对参与方都可以非交互地计算编码向量之间的内积的可添加份额。
> 
> 我们从一个共同的模板中给出了这个原语的构造方法，可以在LPN（具有可忽略正确性错误）或LWE（具有可忽略正确性错误）假设下实例化。我们的构造方法使用了一种新颖的方法，基于Alekhnovich加密系统的非交互密钥交换，将其几乎免费升级为非交互式内积协议。除了是非交互的之外，我们的构造方法具有线性通信（具有比所有已知替代方案更小的常数）和小计算量：使用具有准循环码的LPN或LWE，我们估计在标准笔记本上对一个长度为\(2^{20}\)的向量进行32位字段的编码只需不到2秒；解码只需一个廉价的内积。
> 
> 我们展示了如何通过一次一次性、对数通信的预处理来消除我们的LPN实例中的可忽略错误。最终，我们展示了如何使用新的亚线性通信零知识证明来将其安全升级到恶意模型，这可能具有独立的重要性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_16](https://doi.org/10.1007/978-3-031-22963-3_16)
## Efficient Adaptively-Secure Byzantine Agreement for Long Messages.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#efficient-adaptively-secure-byzantine-agreement-for-long-messages) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#efficient-adaptively-secure-byzantine-agreement-for-long-messages)**
### 作者
* Amey Bhangale, UC Riverside, Riverside, USA
* Chen-Da Liu-Zhang, NTT Research, Sunnyvale, USA
* Julian Loss, CISPA Helmholtz Center, Saarbrücken, Germany
* Kartik Nayak, Duke University, Durham, USA
### 摘要
> 我们研究了适应性对手下拜占庭协议在传输长消息时的通信复杂性。在这种情况下，之前的n方派对协议要么实现通信复杂度为\(O(nl\cdot \textsf{poly}(\kappa ))\)，要么是\(O(nl + n^2 \cdot \textsf{poly}(\kappa ))\)，其中l为位长，\(\kappa\)为安全参数。我们通过提出的协议改进了现有技术水平，在同步和异步通信模型中都实现了通信复杂度为\(O(nl + n \cdot \textsf{poly}(\kappa ))\)。同步协议容忍\(t \le (1-\varepsilon ) \frac{n}{2}\)个污染，并假设有VRF设置，而异步协议在进一步的密码学假设下可以容忍\(t \le (1-\varepsilon ) \frac{n}{3}\)个污染。我们的协议非常简单，结合了子委员会选举和最近Nayak等人（DISC '20）的方法。令人惊讶的是，我们协议的分析一切都除了简单，还涉及到了对Mc Diarmid不等式的有趣新应用，以获得近乎最优的污染阈值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_17](https://doi.org/10.1007/978-3-031-22963-3_17)
## Concurrently Composable Non-interactive Secure Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#concurrently-composable-non-interactive-secure-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#concurrently-composable-non-interactive-secure-computation)**
### 作者
* Andrew Morgan, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York, USA
### 摘要
> 我们考虑在纯模型中满足超多项式时间仿真（SPS）概念的非交互式安全两方计算（NISC）的可行性。尽管已知存在基于标准假设的独立安全的SPS-NISC协议（Badrinarayanan等人，Asiacrypt 2017），但构建一个同时可组合的SPS-NISC仍然是一个未解决的问题。在我们的工作之前，最好的协议需要5轮（Garg等人，Eurocrypt 2017）或3个同时消息轮次（Badrinarayanan等人，TCC 2017）。
> 
> 在这项工作中，我们展示了第一个同时可组合的SPS-NISC。我们的构造假设以下存在：
> 
> 一个非交互式（弱）CCA安全承诺，
> 
> 一个具有次指数安全性的独立安全SPS-NISC，
> 
> 并且满足“基于天使”UC安全（即UC与超多项式时间辅助）以及完美正确性。
> 
> 我们还论证了我们使用的两种原语（尽管只具有多项式安全性）对于具有完美正确性的同时可组合SPS-NISC是必要的。因此，我们的工作在纯模型中确定了同时可组合的SPS-NISC的基本必需和充分原语。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_18](https://doi.org/10.1007/978-3-031-22963-3_18)
## Attaining GOD Beyond Honest Majority with Friends and Foes.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#attaining-god-beyond-honest-majority-with-friends-and-foes) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#attaining-god-beyond-honest-majority-with-friends-and-foes)**
### 作者
* Aditya Hegde, Johns Hopkins University, Baltimore, USA
* Nishat Koti, Indian Institute of Science, Bangalore, Bengaluru, India
* Varsha Bhat Kukkala, Indian Institute of Science, Bangalore, Bengaluru, India
* Shravani Patil, Indian Institute of Science, Bangalore, Bengaluru, India
* Arpita Patra, Indian Institute of Science, Bangalore, Bengaluru, India
* Protik Paul, Indian Institute of Science, Bangalore, Bengaluru, India
### 摘要
> 在多方计算（MPC）的经典概念中，诚实的一方学习他人的私人输入，无论是作为协议规范的一部分还是由于恶意一方的未指定消息，都不被视为潜在的违约。文献中的一些作品利用这个看似微小的漏洞来实现通过可信第三方的最强安全性，从而使MPC的目的无效化。Alon等人（CRYPTO 2020）提出了朋友和敌人（FaF）安全性的概念，该概念考虑了对诚实方的不希望的泄漏，将他们建模为半诚实（朋友），他们不会与恶意方（敌人）勾结。考虑到实际应用，假设各方是半诚实的而不是完全诚实，因此必须设计符合FaF安全模型的高效协议是至关重要的。
> 
> 我们的贡献不仅受到实际观点的启发，还考虑了FaF安全性的理论方面。我们证明了半诚实的遗忘转移对于具有最佳弹性的FaF安全协议是必要的。在实际方面，我们提出了QuadSquad，一个基于环的4PC协议，它在FaF模型中实现了公平性和GOD，并且对1个恶意和1个半诚实方的最佳腐败。据我们所知，QuadSquad是第一个实际高效的FaF安全协议，具有最佳弹性。它的性能与最先进的多数不诚实协议相当，同时改善了中止到公平性和GOD的安全保证。此外，QuadSquad通过应对比最先进的诚实多数协议更强大的对抗性模型，为输入相关计算提供了可比较的性能。我们通过对QuadSquad的性能进行基准测试来证实这些说法。我们考虑了涉及敏感金融交易数据的流动性匹配应用，这是适合FaF安全性的。我们设计了一系列FaF安全的构建模块，以安全地实现流动性匹配以及其他流行的应用，如隐私保护机器学习。包括这些模块使QuadSquad成为一个全面的框架。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_19](https://doi.org/10.1007/978-3-031-22963-3_19)
## Towards Practical Topology-Hiding Computation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#towards-practical-topology-hiding-computation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#towards-practical-topology-hiding-computation)**
### 作者
* Shuaishuai Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Shuaishuai Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### 摘要
> 拓扑隐藏计算（THC）使n个参与方能在不完整的通信图中执行安全的多方计算（MPC）协议，同时保持通信图的隐藏。Akavia等人的研究（CRYPTO 2017和JoC 2020）表明，THC对于任何图都是可行的。在这项工作中，我们关注THC的效率，并对包括广播、求和和一般计算在内的各种任务进行了改进。我们主要考虑在无向循环中的THC，但我们还给出了两个关于一般图的THC结果。我们所有的结果都是在存在被动对手静态腐败任意数量的参与方的情况下得出的。
> 
> 在无向循环中，最先进的拓扑隐藏广播（THB）协议是Akavia等人的Akavia-Moran（AM）协议（EUROCRYPT 2017）。我们对AM协议进行了优化，使得广播的通信成本从\(O(n^2\kappa ^2)\)比特降低到\(O(n^2\kappa )\)比特。我们还考虑了求和和一般计算功能。在我们的工作之前，唯一实现求和和一般计算功能的THC协议是通过使用THB在MPC协议中分别模拟点对点通道而构建的。通过允许参与方知道参与方数量的确切值（AM协议和我们的优化只假设参与方知道参与方数量的上限），我们可以得到更高效的THC协议，实现这两个功能。因此，与以前的工作相比，我们在求和和一般计算功能的通信成本上降低了\(O(n\kappa )\)的因子。
> 
> 正如我们前面提到的，我们还得到了关于一般图的两个THC结果。一般图的最先进THB协议是Akavia等人的Akavia-LaVigne-Moran（ALM）协议（CRYPTO 2017和JoC 2020）。我们的结果是，我们对AM协议的优化也适用于ALM协议，并且可以将其通信成本降低一个\(O(\kappa )\)的因子。此外，我们优化了基于完全同态加密（FHE）的LaVigne等人的GTHC协议（TCC 2018），将其通信成本从\(O(n^8\kappa ^2)\)的FHE密文和\(O(n^5\kappa )\)的FHE公钥降低到\(O(n^6\kappa )\)的FHE密文和\(O(n^5\kappa )\)的FHE公钥。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_20](https://doi.org/10.1007/978-3-031-22963-3_20)
## Key-Schedule Security for the TLS 1.3 Standard.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#key-schedule-security-for-the-tls-1-3-standard) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#key-schedule-security-for-the-tls-1-3-standard)**
### 作者
* Chris Brzuska, Aalto University, Espoo, Finland
* Konrad Kohbrok, Aalto University, Espoo, Finland
* Antoine Delignat-Lavaud, Microsoft Research Cambridge, Cambridge, UK
* Cédric Fournet, Microsoft Research Cambridge, Cambridge, UK
* Christoph Egger, IRIF, Université Paris Cité, Paris, France
* Markulf Kohlweiss, University of Edinburgh, Edinburgh, UK
### 摘要
> 传输层安全（Transport Layer Security, TLS）是互联网安全通信的加密基础。在最新的版本1.3中，标准化过程考虑了形式分析，这是由于协议的重要性以及对先前版本的概念攻击的经验。为了管理TLS（规范超过100页）的复杂性，以前的基于简化的分析集中于某些协议特性，忽略了其他特性，例如包括会话恢复但省略了灵活算法或相反。
> 
> 本文是分析TLS 1.3密钥协议的重要一步，该协议在严格的标准化过程的最后进行了规定。具体而言，我们为TLS密钥调度提供了完整的证明，这是一个核心的协议组件，用于生成密钥交换协议的输出密钥和内部密钥。特别地，我们的模型支持标准中所提供的所有密钥衍生，包括其协商模式和将可选的Diffie-Hellman交换用于前向保密性的算法，以及由应用程序提供的可选的预共享密钥或在先前会话中递归建立的密钥。
> 
> 技术上，我们依赖于分离状态证明（Asiacrypt'18）并引入了建模大型和复杂衍生图的技术。我们的密钥调度分析技术已随后用于分析MLS协议（S&P'22）的Draft 11的密钥调度，并提出改进方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_21](https://doi.org/10.1007/978-3-031-22963-3_21)
## YOLO YOSO: Fast and Simple Encryption and Secret Sharing in the YOSO Model.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#yolo-yoso-fast-and-simple-encryption-and-secret-sharing-in-the-yoso-model) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#yolo-yoso-fast-and-simple-encryption-and-secret-sharing-in-the-yoso-model)**
### 作者
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Lydia Garms, IMDEA Software Institute, Madrid, Spain
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Anders Konring, IT University of Copenhagen, Copenhagen, Denmark
* Lydia Garms, Keyless Technologies Limited, London, UK
### 摘要
> 由于对手在执行过程中具有动态腐败各方的能力，实现密码协议中的自适应（或主动）安全性一直非常困难。受Benhamouda等人在TCC 2020的工作启发，Gentry等人在CRYPTO 2021中引入了YOSO（You Only Speak Once）模型，用于在大规模分布式环境（例如区块链）中构建自适应（或主动）安全的协议。在这个模型中，不是所有各方都执行整个协议，而是随机选择较小的匿名委员会来执行协议的每个个体回合。完成自己的角色后，各方会将协议消息加密发送给下一个匿名委员会，并在发布密文之前擦除自己的内部状态。然而，实现YOSO协议仍面临一个巨大的挑战：在不了解匿名各方身份的情况下，高效地将消息加密发送给随机选择的匿名各方，并证明加密的消息符合协议的要求。特别是，Benhamouda等人和Gentry等人的协议要求证明密文包含有效的秘密状态份额。我们提出了一种具有具体高效性的方法，用于向随机的匿名委员会加密协议的秘密状态。我们首先提出了一种非常简单且高效的方案，用于向随机选择的匿名各方加密消息。然后，我们展示了具有具体高效性且可公开验证的秘密（再）共享（PVSS）方案的构建，这些方案可以通过具有某些线性同态性质的加密方案进行通用实例化，并具有（再）共享有效性的具体高效性证明。此外，我们引入了一种只由两个域元素组成的具有共享证明的PVSS方案，据我们所知，这是首次实现这一目标，并可能引起独立关注。最后，我们展示了我们的PVSS方案可以从我们的加密方案中实现高效。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_22](https://doi.org/10.1007/978-3-031-22963-3_22)
## State Machine Replication Under Changing Network Conditions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#state-machine-replication-under-changing-network-conditions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#state-machine-replication-under-changing-network-conditions)**
### 作者
* Andreea B. Alexandru, University of Maryland, College Park, USA
* Erica Blum, University of Maryland, College Park, USA
* Jonathan Katz, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> 状态机复制（SMR）协议通常针对同步或异步网络设计，后一种情况下的损坏阈值较低。最近的网络不可知协议在同步或异步网络中运行时是安全的。我们提出了两种新的网络不可知SMR协议构造，相对于现有协议在对抗模型或通信复杂性方面有所改进：
> 
> 1. 一种具有最优损坏阈值和每个交易的二次摊销通信复杂度的自适应安全协议；
> 
> 2. 一种具有接近最优损坏阈值和每个交易的线性摊销通信复杂度的静态安全协议。
> 
> 我们进一步研究了在可能在同步和异步之间任意频繁变化的网络中运行的SMR协议;参与方可以是没有被损坏的（如积极模型），只要保持适当的损坏阈值，协议就应该保持安全。我们证明了在没有参与方之间的某种形式的同步的纯异步积极秘密共享是不可能的，排除了一种自然的保护性安全网络不可知SMR协议的方法。在这个负面结果的基础上，我们考虑了敌方在协议期间可以损坏的参与方的总数受限的模型，并在这种设置下证明了我们的SMR协议即使在网络条件任意变化的情况下仍然是安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_23](https://doi.org/10.1007/978-3-031-22963-3_23)
## Non-interactive Mimblewimble Transactions, Revisited.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#non-interactive-mimblewimble-transactions-revisited) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#non-interactive-mimblewimble-transactions-revisited)**
### 作者
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Michele Orrù, UC Berkeley, Berkeley, USA
### 摘要
> Mimblewimble是一种加密货币协议，承诺解决臭名昭著的区块链可扩展性问题并提供用户隐私保护。长期以来，由于缺乏非交互式交易（即仅发送方需要在线的付款），其广泛采用受到了阻碍。于提出了一种将非交互式交易添加到Mimblewimble的隐秘地址的方法，但后来发现存在缺陷。基于于的工作，并结合了Burkett的思想，我们提供了一个固定的方案，并对以前在Eurocrypt'19中的安全模型进行了严格的安全性分析，并进行了加强。我们的协议被MimbleWimbleCoin考虑用于实施，并且其一个变种现在已部署为Litecoin中的MimbleWimble扩展块（MWEB）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_24](https://doi.org/10.1007/978-3-031-22963-3_24)
## A Universally Composable Non-interactive Aggregate Cash System.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#a-universally-composable-non-interactive-aggregate-cash-system) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#a-universally-composable-non-interactive-aggregate-cash-system)**
### 作者
* Yanxue Jia, Shanghai Jiao Tong University, Shanghai, China
* Shi-Feng Sun, Shanghai Jiao Tong University, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
* Hong-Sheng Zhou, Virginia Commonwealth University, Richmond, USA
### 摘要
> Mimblewimble是一种隐私保护的加密货币，提供交易聚合功能。在Mimblewimble中，某些硬币一旦被花费，就可以从UTXO集中删除。这是可取的：现在可以节省存储空间并减少计算成本。Fuchsbauer等人（EUROCRYPT 2019）将Mimblewimble摘要为聚合现金系统（ACS），并通过基于游戏的定义提供了安全分析。
> 
> 在本文中，我们重新审视了ACS，并关注非交互式ACS，表示为NiACS。我们首次提出了基于模拟的安全定义，并为NiACS正式化了理想功能。然后，在混合模型中构建了一个NiACS协议，该混合模型可以在通用组合（UC）框架中安全地实现理想NiACS功能。另外，我们提出了一个构建块，这是ElGamal加密方案的变体，可能具有独立的兴趣。最后，我们展示了如何实例化我们的协议，并获得了第一个UC安全的NiACS系统。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_25](https://doi.org/10.1007/978-3-031-22963-3_25)
## Practical Provably Secure Flooding for Blockchains.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#practical-provably-secure-flooding-for-blockchains) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#practical-provably-secure-flooding-for-blockchains)**
### 作者
* Chen-Da Liu-Zhang, NTT Research, Sunnyvale, USA
* Christian Matt, Concordium, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Søren Eller Thomsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
### 摘要
> 近年来，无需许可的区块链技术受到了工业界和学术界的广泛关注，相应的，大量的工作都花费在了开发共识协议上，使其在资源（如股份或计算能力）少于一半（或三分之一）被腐败方控制时仍能保持安全。这些共识协议的安全性证明通常假定了网络功能能够保证在一定的时间内，诚实方发送的区块能够被所有诚实方接收到。为了获得在相同腐败假设下安全的整体协议，因此有必要将共识协议与网络协议相结合，以在该假设下实现此属性。然而，实际上，基础网络通常由不被证明在考虑到一定份额的权重可以被腐败的情况下是安全的泛洪协议实现。这导致现有协议受到许多所谓的日食攻击和特定攻击的定制修复。
> 
> 为了弥补这一明显的缺陷，我们提出了第一个实用的泛洪协议，可以在对数步骤之后向所有诚实方发送已确认的消息。我们证明了在所有各方公开分配的正权重下，且对手可以腐败总权重的一个定量部分时，我们的协议是安全的。这可直接用于股权证明设定中，但不限于此。为了证明我们协议的安全性，我们将众所周知的Erdős–Rényi图的直径结果与不同类型的随机图之间的约简相结合。我们进一步表明，我们协议的效率在渐近意义下是最优的。
> 
> 我们的协议的实用性得到了对不同各方数量、权重分布和腐败策略进行的广泛模拟的支持。模拟确认了我们的理论结果，并显示了消息在权重分布不均匀的情况下能够快速传递，完全无视各方权重的协议在权重分布不均匀的情况下会完全失败。此外，我们协议的每个当事方的平均消息复杂度在一个较小的常数因

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_26](https://doi.org/10.1007/978-3-031-22963-3_26)
## SNACKs: Leveraging Proofs of Sequential Work for Blockchain Light Clients.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#snacks-leveraging-proofs-of-sequential-work-for-blockchain-light-clients) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#snacks-leveraging-proofs-of-sequential-work-for-blockchain-light-clients)**
### 作者
* Hamza Abusalah, IMDEA Software Institute, Madrid, Spain
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Peter Gaži, IOG, Chennai, India
* Karen Klein, ETH Zurich, Zürich, Switzerland
### 摘要
> 区块链的成功导致了不断增长的账本，由所有参与的全节点进行存储。相比之下，轻客户端只存储少量与区块链相关的数据，并依赖于全节点的中介来与账本进行交互。区块链的更广泛应用需要能够使这种交互无需信任的协议。
> 
> 我们从经典证明系统理论的角度重新审视轻客户端区块链协议的设计，并解释证明顺序工作（PoSWs）在其中的作用。为此，我们定义了一种新的原语，称为简洁非交互证明区块知识（SNACK），它是一种非交互式的证明系统，即使只与一个不诚实的证明者（全节点）进行交互，也可以为验证者（轻客户端）提供明确的安全保证。我们展示了如何通过在任何区块链中引入任何图标记PoSW（GL-PoSW）来实现对该区块链的SNACK证明。我们还提供了对GL-PoSW的统一扩展定义，涵盖了所有现有的构建，并描述了两种新的变体。然后，我们展示了如何使用SNACK来构建轻客户端协议，并强调现有设计的一些不足之处，以及相应的缓解措施。最后，我们引入了增量SNACK，它可能为轻型挖矿提供了一种新的方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_27](https://doi.org/10.1007/978-3-031-22963-3_27)
