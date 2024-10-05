# Asiacrypt[2023-5]
## Improved Fully Adaptive Decentralized MA-ABE for NC1 from MDDH.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#improved-fully-adaptive-decentralized-ma-abe-for-nc1-from-mddh) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#improved-fully-adaptive-decentralized-ma-abe-for-nc1-from-mddh)**
### 作者
* Jie Chen, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Qiaohan Chu, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Ying Gao, School of Cyber Science and Technology, Beihang University, Beijing, China
* Ying Gao, Zhongguancun Laboratory, Beijing, China
* Jianting Ning, College of Computer and Cyberspace Security, Fujian Normal University, Fuzhou, China
* Luping Wang, School of Electronic and Information Engineering, Suzhou University of Science and Technology, Suzhou, China
### 摘要
> 我们改进了Datta-Komargodski-Waters（Eurocrypt ’23）中NC1的首个也是唯一存在的素数阶全自适应安全去中心化多权威属性基加密（MA-ABE）方案。与Datta-Komargodski-Waters相比，我们的去中心化MA-ABE方案不仅具有更短的参数，同时支持属性的多次使用。较短的参数始终是属性基加密（ABE）的目标，而属性的多次使用是NC1的去中心化MA-ABE的固有特性。我们的方案依赖于矩阵决策Diffie-Hellman（MDDH）假设，并且在随机预言模型中，与Datta-Komargodski-Waters相同。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_1](https://doi.org/10.1007/978-981-99-8733-7_1)
## Verifiable Decentralized Multi-client Functional Encryption for Inner Product.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#verifiable-decentralized-multi-client-functional-encryption-for-inner-product) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#verifiable-decentralized-multi-client-functional-encryption-for-inner-product)**
### 作者
* Dinh Duy Nguyen, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Duong Hieu Phan, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* David Pointcheval, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
### 摘要
> 加密数据的联合计算在云计算的崛起中变得愈发关键。近年来，多客户功能加密（MCFE）的发展使得可以在不需要任何交互的情况下对私人输入进行联合计算成为可能。针对线性函数的成熟解决方案已经变得高效和安全，但仍然存在一个缺点：如果一个用户输入错误的数据，函数的输出可能对其他所有用户来说变得毫无意义（尽管对恶意用户仍然有用）。为了解决这个问题，Badrinarayanan等人在Asiacrypt ’16（BGJS）提出了可验证的功能加密的概念。然而，他们的解决方案由于强大的统计要求而并不切实际。最近，Bell等人介绍了一个相关概念用于安全聚合，即他们的ACORN解决方案，但它需要用户之间的多轮交互。在本文中，首先提出了MCFE的可验证性的计算定义。我们的概念涵盖了BGJS的计算版本，并将其扩展到处理由谓词定义的任何有效输入。BGJS概念对应于我们设置中固定谓词的特定情况；然后，我们介绍了一种称为“先汇总，再分散”的新技术，它依赖于类群。这使我们能够在可验证的私人输入上构建一次性的分散求和（\(\textsf{ODSUM}\)）。\(\textsf{ODSUM}\)是我们最终协议的构建模块，用于范围内的可验证的分散MCFE的内积。我们的方法显著地实现了对恶意用户的高效识别，从而解决了ACORN中的一个未解决问题。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_2](https://doi.org/10.1007/978-981-99-8733-7_2)
## Registered ABE via Predicate Encodings.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#registered-abe-via-predicate-encodings) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#registered-abe-via-predicate-encodings)**
### 作者
* Ziqi Zhu, East China Normal University, Shanghai, China
* Junqing Gong, East China Normal University, Shanghai, China
* Haifeng Qian, East China Normal University, Shanghai, China
* Kai Zhang, Shanghai University of Electric Power, Shanghai, China
* Junqing Gong, Shanghai Qi Zhi Institute, Shanghai, China
### 摘要
> 本文通过谓词编码[TCC'14]，提出了注册属性加密(Reg-ABE)的第一种通用黑盒构建方案。该通用方案基于素数阶双线性群的k-Lin假设，并暗示了以下具体方案，改进了现有结果：
> 
> 素数阶群中，关于跨度程序的第一个Reg-ABE方案；之前的工作使用复合群；
> 
> 基于k-Lin假设，对于零内积谓词的第一个Reg-ABE方案；之前的工作依赖于通用群模型(GGM)；
> 
> 尚未实现的算术分支程序(ABP)的第一个Reg-ABE方案。
> 
> 技术上，我们遵循Hohenberger和其他人的蓝图[Eurocrypt'23]，但是从Chen等人的素数阶双系统ABE[Eurocrypt'15]开始，将谓词编码转换为ABE。在Reg-ABE的背景下，证明遵循双系统方法：我们将助手密钥概念上视为秘密密钥；此外，针对恶意公共密钥的处理通过Kiltz和Wee [Eurocrypt'15]的基于配对的准自适应非交互零知识证明实现。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_3](https://doi.org/10.1007/978-981-99-8733-7_3)
## Registered (Inner-Product) Functional Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#registered-inner-product-functional-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#registered-inner-product-functional-encryption)**
### 作者
* Danilo Francati, Aarhus University, Aarhus, Denmark
* Daniele Friolo, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Monosij Maitra, Ruhr-Universität Bochum, Bochum, Germany
* Giulio Malavolta, Bocconi University, Milan, Italy
* Monosij Maitra, Max-Planck Institute for Security and Privacy, Bochum, Germany
* Giulio Malavolta, Max-Planck Institute for Security and Privacy, Bochum, Germany
* Ahmadreza Rahimi, Max-Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 注册加密（Garg等，TCC'18）是一种新兴范式，通过用一个称为密钥管理员的更弱实体取代私钥生成器来解决与基于身份的加密相关的关键托管问题。密钥管理员不持有任何秘密信息，其责任是：（i）在新用户向系统注册其公钥时更新主公钥；（ii）为已在系统中注册的用户提供助手解密密钥，以便使他们仍然能够在新用户加入系统后解密。出于实际目的，任务（i）和（ii）需要高效完成，即公共参数的大小、主公钥和辅助解密密钥的大小，密钥生成和用户注册的运行时间，以及更新的数量必须较小。
> 
> 在本文中，我们将注册加密的概念推广到功能加密（FE）的设置中。
> 
> 作为我们的主要贡献，我们展示了注册FE的高效构建，针对特殊情况（属性隐藏）内积谓词，建立在素数阶双线性群之上。我们的方案支持大规模属性宇宙，并在双线性通用群模型中被证明安全。我们还实现了我们的方案，并在实验中展示了注册设置的效率要求。我们的第二个贡献是一个可行性结果，我们基于不可区分混淆和某处统计绑定哈希函数构建了基于注册的FE。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_4](https://doi.org/10.1007/978-981-99-8733-7_4)
## Robust Decentralized Multi-client Functional Encryption: Motivation, Definition, and Inner-Product Constructions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#robust-decentralized-multi-client-functional-encryption-motivation-definition-and-inner-product-constructions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#robust-decentralized-multi-client-functional-encryption-motivation-definition-and-inner-product-constructions)**
### 作者
* Yamin Li, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Xiaofeng Chen, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Jianghong Wei, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, 450001, China
* Fuchun Guo, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
* Willy Susilo, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
### 摘要
> 分散化多客户功能加密（DMCFE）是无需信任第三方的功能加密（FE）的多用户扩展。然而，DMCFE的一个基本要求是解密者必须从所有客户端收集部分功能密钥和密文。如果有一个客户端没有生成部分功能密钥或密文，则解密者无法获取任何有用信息。我们发现这个强要求限制了DMCFE在统计分析和机器学习等场景中的应用。
> 
> 在本文中，我们首先介绍了一种名为鲁棒分散化多客户功能加密（RDMCFE）的新基元，它是从DMCFE概念推广而来，旨在容忍负面客户导致解密者无法获得任何信息的问题，其中负面客户代表无法或不愿计算部分功能密钥或密文的参与者。相反，如果一个客户端能够并愿意计算部分功能密钥和密文，则称为正面客户端。在RDMCFE方案中，正面客户集合S被每个正面客户知道，以便生成的部分功能密钥有助于消除负面客户的影响，当集合S的基数不小于给定阈值时，解密者可以学习对应于所有正面客户的敏感数据的函数值。我们为相应于内积评估的功能提供这样的构造。
> 
> 1. 我们通过双层遮盖结构的技术提供了一个基本的RDMCFE构造，这是受Bonawitz等人的工作（CCS 2017）的启发。构造的存储和通信开销很小，不受向量长度的影响。然而，在基本构造中，为了安全保障，一组秘密密钥只能用于为一个函数生成部分功能密钥。
> 
> 2. 我们展示了如何设计增强构造，使不同函数的部分功能密钥可以使用相同的一组秘密密钥生成，以增加存储和通信开销为代价。具体而言，在增强的RDMCFE构造中，我们通过单输入FE方案和具有加性同态性质的阈值秘密共享方案来保护掩码。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_5](https://doi.org/10.1007/978-981-99-8733-7_5)
## Cuckoo Commitments: Registration-Based Encryption and Key-Value Map Commitments for Large Spaces.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#cuckoo-commitments-registration-based-encryption-and-key-value-map-commitments-for-large-spaces) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#cuckoo-commitments-registration-based-encryption-and-key-value-map-commitments-for-large-spaces)**
### 作者
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, Universidad Politénica de Madrid, Madrid, Spain
* Paola de Perthuis, DIENS, École Normale Supérieure, CNRS, Inria, Université PSL, Paris, France
* Paola de Perthuis, Cosmian, Paris, France
### 摘要
> 基于注册的加密（RBE）[Garg等人 TCC'18]是一种公钥加密机制，其中用户生成自己的公钥和私钥，并将其公钥注册到称为密钥管理者的中央机构。与身份基础加密（IBE）类似，在RBE中，用户只需知道公共参数和接收者的公共身份就可以进行加密。然而，与IBE不同的是，RBE不会遇到密钥托管问题——IBE实际应用中的主要障碍之一——因为密钥管理者不持有秘密。
> 
> 在这项工作中，我们提出了一种构建支持大型用户身份（即任意字符串）的RBE方案的新方法。我们的主要成果是第一个支持大型身份的高效基于配对的RBE。在我们的工作之前，最高效的RBE是[Glaeser等人 ePrint'22]支持小型身份的RBE方案。已知的具有大型身份的RBE方案要么通过昂贵的非黑盒技术实现（1000个用户的密文为3.6TB），要么通过专门的基于格的构造[Döttling等人 Eurocrypt'23]（2.4GB的密文），或者通过更复杂的已注册属性加密概念[Hohenberger等人 Eurocrypt'23]实现。通过解锁用于具有大型身份空间的RBE的配对使用，我们实现了三个数量级的进一步改进，因为我们用于一个具有1000个用户系统的密文为1.7MB。
> 
> 我们方法的核心技术是在密码学中对杜鹃哈希的新颖应用，这可能是独立感兴趣的。我们提供了两个主要应用。第一个是上述的RBE方法，我们使用杜鹃哈希将具有小身份的RBE编译成具有大身份的RBE。第二个是将任何向量承诺方案转换为键-值映射承诺的方法。例如，这导致了第一个代数配对的键-值映射承诺。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_6](https://doi.org/10.1007/978-981-99-8733-7_6)
## Lattice-Based Functional Commitments: Fast Verification and Cryptanalysis.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#lattice-based-functional-commitments-fast-verification-and-cryptanalysis) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#lattice-based-functional-commitments-fast-verification-and-cryptanalysis)**
### 作者
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### 摘要
> 功能承诺允许用户对输入 \(\textbf{x}\in \{0,1\}^\ell \) 进行承诺，随后将承诺公开为一个值 \(y = f(\textbf{x})\)，其中 f 是某个函数。在这项工作中，我们关注支持快速验证的方案。具体来说，在仅依赖于 f 的预处理步骤之后，验证时间以及承诺和公开的大小应该都是输入长度 \(\ell \) 的次线性。我们还考虑了用户对函数 f 进行承诺，并随后在输入 \(\textbf{x}\) 处打开承诺的双重设置。
> 
> 在这项工作中，我们开发了两种支持快速验证的（非交互式）功能承诺。第一种构造支持常数次多项式的公开，并且与先前的构造相比，在广泛范围的设置中具有较短的CRS。我们的第二种构造是用于任意有界深度布尔电路的双重功能承诺，支持从可证伪假设中获得的安全的快速验证。这两种方案都基于格，避免了对密码原语或格采样算法的非黑盒使用。这两种构造的安全性依赖于 \(\ell \)-简洁短整数解（SIS）假设，这是 SIS 假设（Preprint 2023）的一个可证伪 q-类型泛化。
> 
> 此外，我们研究了将基于格的功能承诺延伸为可提取的功能承诺的挑战，这个概念等同于简洁的非交互式论证（考虑到对二次关系的公开）。我们描述了一种通用方法论，启发性地打破了我们构造的可提取性，并提供了 Albrecht 等人（CRYPTO 2022）所使用的格基简洁参数构造的知识 k-R-\(\textsf{ISIS}\) 假设不可能性的证据。如果我们还额外假设标准非齐次 SIS 假设的困难性，我们就可以对 Albrecht 等人的可提取线性功能承诺的变种进行直接攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_7](https://doi.org/10.1007/978-981-99-8733-7_7)
## Non-interactive Zero-Knowledge Functional Proofs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#non-interactive-zero-knowledge-functional-proofs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#non-interactive-zero-knowledge-functional-proofs)**
### 作者
* Gongxian Zeng, Peng Cheng Laboratory, Shenzhen, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Linru Zhang, Nanyang Technological University, Singapore, Singapore
* Xiangning Wang, Nanyang Technological University, Singapore, Singapore
* Kwok-Yan Lam, Nanyang Technological University, Singapore, Singapore
* Huaxiong Wang, Nanyang Technological University, Singapore, Singapore
### 摘要
> 本文考虑通过给证明者授权以细粒度地向验证者共享证人来推广NIZK。大致上，证明者能够授权验证者从接受证明中使用由证明者提供的秘密功能密钥获得证人的额外信息，即除了验证陈述的真实性外，验证者还可以获取一定函数的证人。
> 
> 为了实现这些要求，我们引入了一个称为非交互式零知识功能证明（fNIZKs）的新原语，并形式化其安全概念。我们针对任何NP关系R提供了fNIZK的通用构造，使证明者能够与验证者共享证人的任何函数。对于广泛使用的关于集合成员证明的关系（暗示范围证明），我们通过新的构建块（集合成员加密和双内积加密）构建了一个具体且高效的fNIZK，这可能是独立趣味的地方。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_8](https://doi.org/10.1007/978-981-99-8733-7_8)
## Zero-Knowledge Functional Elementary Databases.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#zero-knowledge-functional-elementary-databases) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#zero-knowledge-functional-elementary-databases)**
### 作者
* Xinxuan Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 零知识元素数据库（ZK-EDB）允许证明者提交一个由键值（x，v）对组成的数据库D，并在之后对查询“发送值为x的键相关联的D（x）值”提供令人信服的答案，而不透露任何额外的信息（包括D的大小）。在其引入后，已有多项工作将其扩展到允许更具表现力的查询，但迄今为止所实现的表现力仍然有限：仅可以处理相对较简单的查询-键和值范围查询-通过已知的构建完成。
> 
> 在本文中，我们引入了一个称为零知识功能元素数据库（ZK-FEDB）的新概念，该概念允许最一般的功能查询。粗略地说，对于任何布尔电路f，ZK-FEDB允许ZK-EDB证明者对查询形式“发送我D中满足f（x，v）= 1的所有记录（x，v）”提供令人信服的答案，而不透露任何额外信息（包括D的大小）。我们使用随机预言模型和通用群模型提供了ZK-FEDB的构造，其证明大小仅与记录长度和查询电路大小成线性关系，并且独立于输入数据库D的大小。
> 
> 我们的技术贡献有两个方面。首先，我们引入了一种新型零知识集合（ZKS）变体，它支持对集合的组合操作，并提出了一种基于未知阶群的具体构造。其次，我们开发了一种将布尔电路查询转换为关联集合上的组合操作查询的转换，这可能是独立于兴趣的。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_9](https://doi.org/10.1007/978-981-99-8733-7_9)
## WhatsUpp with Sender Keys? Analysis, Improvements and Security Proofs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#whatsupp-with-sender-keys-analysis-improvements-and-security-proofs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#whatsupp-with-sender-keys-analysis-improvements-and-security-proofs)**
### 作者
* David Balbás, IMDEA Software Institute, Madrid, Spain
* David Balbás, Universidad Politécnica de Madrid, Madrid, Spain
* Daniel Collins, EPFL, Lausanne, Switzerland
* Phillip Gajland, Max Planck Institute for Security and Privacy, Bochum, Germany
* Phillip Gajland, Ruhr University Bochum, Bochum, Germany
### 摘要
> 开发用于群组对话的端到端加密即时通讯解决方案是一个持续挑战，引起了从从业者到密码学社区的广泛关注。值得注意的是，行业领先的消息应用如WhatsApp和Signal Messenger已采用了发送方密钥协议，其中每个群成员与他人共享自己的对称加密密钥。尽管发送方密钥被广泛采纳，但它从未在密码学文献中得到正式建模，引发了以下自然问题：关于发送方密钥协议的安全性可以证明什么，我们如何实际上弥补其缺点？
> 
> 在回答这个问题时，我们首先提出了一个适合于类似发送方密钥的协议的新安全模型，偏离了传统的基于组密钥协商的抽象。我们的框架允许在可能引起独立兴趣的群组消息会话中自然集成两方消息。利用这一框架，我们进行了对发送方密钥协议的第一次正式分析，并证明其满足弱安全概念。为了提高安全性，我们提出了一系列有效修改发送方密钥的方法，而不会对性能造成重大负担。我们将这些改进结合成一个新协议，我们称之为Sender Keys+，这可能在理论和实践中都很有趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_10](https://doi.org/10.1007/978-981-99-8733-7_10)
## Efficient Updatable Public-Key Encryption from Lattices.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#efficient-updatable-public-key-encryption-from-lattices) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#efficient-updatable-public-key-encryption-from-lattices)**
### 作者
* Calvin Abou Haidar, ENS de Lyon, Lyon, France
* Alain Passelègue, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Calvin Abou Haidar, INRIA, Paris, France
* Alain Passelègue, INRIA, Paris, France
* Alain Passelègue, CryptoLab Inc, Lyon, France
* Damien Stehlé, CryptoLab Inc, Lyon, France
### 摘要
> 可更新公钥加密近来被引入作为解决安全群组通信中前向安全性的方案，而不影响效率，但目前为止，尚未知晓此基本实例的高效基于格的实现。本研究构建了首个具有多项式模量-噪声率的基于LWE的UPKE方案，它在标准模型下是CPA安全的。我们的安全分析核心是从标准LWE问题到（更强的版本的）扩展LWE问题的广义规约。我们通过提出两个通用转换，进一步扩展我们的构建方案以实现更强的安全性概念。我们的第一个转换允许在随机预言模型下获得CCA安全，并将藤崎-冈本转换调整到UPKE设置中。我们的第二个转换通过在更新机制中添加NIZK参数来实现对恶意更新的安全防范。在此过程中，我们还引入了可更新密钥封装机制（UKEM）的概念，作为KEM的可更新变体。总体而言，在随机预言模型下，我们获得了与CRYSTALS-Kyber相同数量级的密文大小的CCA安全UKEM。。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_11](https://doi.org/10.1007/978-981-99-8733-7_11)
## CCA-1 Secure Updatable Encryption with Adaptive Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#cca-1-secure-updatable-encryption-with-adaptive-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#cca-1-secure-updatable-encryption-with-adaptive-security)**
### 作者
* Huanhuan Chen, Delft University of Technology, Delft, The Netherlands
* Kaitai Liang, Delft University of Technology, Delft, The Netherlands
* Yao Jiang Galteland, Qredo, London, UK
### 摘要
> 可更新加密（UE）使云服务器能够使用客户端生成的令牌来更新密文。UE有两种类型：与密文无关（c-i）和与密文相关（c-d）。在构建和效率方面，c-i UE利用单个令牌来更新所有密文。更新机制主要依赖于指数运算的同态性质，这限制了加密和更新的效率。尽管c-d UE可能看起来不方便，因为它在令牌生成过程中需要下载部分密文，但它允许轻松实现Dec-then-Enc结构。这种方法显著简化了更新机制的构建。值得注意的是，由Boneh等人提出的c-d UE方案（ASIACRYPT’20）据报道比基于DDH难度的先前UE方案快200倍，而大多数现有的c-i UE方案也是如此。此外，c-d UE确保了高水平的安全性，因为令牌不会泄露任何关键信息，而这对于c-i UE来说很难实现。然而，以前关于c-d UE的安全研究只涉及选择性安全性；而自适应安全性的研究仍然是一个悬而未决的问题。
> 
> 在本研究中，我们对与密文相关的可更新加密（c-d UE）做出了三项重要贡献。首先，我们提供了比以前工作更强的安全概念，涵盖了自适应安全性，并考虑了在自适应损坏设置下对手的解密能力。其次，我们提出了一个新的c-d UE方案，实现了所提出的安全概念。令牌生成技术与之前的Dec-then-Enc结构有着明显不同，同时又能防止关键信息泄漏。最后，我们引入了一种打包技术，可以在单个密文中同时加密和更新多个消息。这种技术有助于通过减少在令牌生成过程中下载部分密文来减轻c-d UE的成本。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_12](https://doi.org/10.1007/978-981-99-8733-7_12)
## Distributed Broadcast Encryption from Bilinear Groups.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#distributed-broadcast-encryption-from-bilinear-groups) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#distributed-broadcast-encryption-from-bilinear-groups)**
### 作者
* Dimitris Kolonelos, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, Universidad Politécnica de Madrid, Madrid, Spain
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Hoeteck Wee, NTT Research, Palo Alto, CA, USA
* Hoeteck Wee, École Normale Supérieure - PSL, Paris, France
### 摘要
> 分布式广播加密（DBE）改进了传统广播加密的概念，通过消除密钥托管问题：在DBE系统中，用户可以非交互地生成自己的秘密密钥，而无需信任方的帮助。然后，任何人都可以向用户子集S广播消息，以便产生的密文大小是子集S的次线性（理想情况下独立于|S|）。不幸的是，已知的仅有的DBE构造需要复杂的加密机制，如通用不可区分混淆，或者没有安全证明。
> 
> 在这项工作中，我们正式表明混淆对于DBE并非必须，并且我们从素数阶双线性群的标准假设中提出了两种实用的DBE方案。我们的构造概念简单，满足自适应安全性强概念，并且具有实际的高效性。事实上，它们的性能，包括群元素数量和算法的效率，与来自双线性群的传统（非分布式）广播加密方案相当。

### 链接
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_13](https://doi.org/10.1007/978-981-99-8733-7_13)
