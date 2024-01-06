# Asiacrypt[2020-2]
## Incrementally Aggregatable Vector Commitments and Applications to Verifiable Decentralized Storage.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#incrementally-aggregatable-vector-commitments-and-applications-to-verifiable-decentralized-storage) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#incrementally-aggregatable-vector-commitments-and-applications-to-verifiable-decentralized-storage)**
### 作者
* Matteo Campanelli, Aarhus University, Aarhus, Denmark
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, Universidad Politecnica de Madrid, Madrid, Spain
* Nicola Greco, Protocol Labs, San Francisco, USA
* Luca Nizzardo, Protocol Labs, San Francisco, USA
### 摘要
> 向量考证与子向量开放（SVC）[来-马拉沃尔塔，Boneh-Bunz-Fisch;CRYPTO'19]能允许以独立于向量长度和开放位置数量的开放大小，在一组位置上开放已承诺的向量。
> 
> 我们在继续研究SVC时有两个目标：提高效率并使其更适合去中心化环境。我们通过提出称为增量聚合的新VC概念来解决这两个问题，它可以以简洁的方式多次合并开放。我们展示了该性质的两个应用。第一个是即时的，是一种以分布式方式生成开放的方法。第二个应用是通过预处理加速生成开放的算法。
> 
> 然后我们开始实现具有增量聚合的SVC。我们在未知阶数的群中提供了两种构建方式，类似于Boneh等人的构建（仅支持单次聚合），具有恒定大小的公共参数、承诺和开放。作为附加功能，对于第一个构造方式，我们提出了高效的子向量开放知识证明，从而立即实现了紧凑证明的无密钥存储。
> 
> 最后，我们处理了一个与SVC密切相关的问题：在完全去中心化网络中高效存储文件的问题。我们引入并构建了可验证的去中心化存储（VDS），这是一种密码学原语，可以以分布式和去中心化的方式检查由网络节点存储的文件的完整性。我们的VDS构造依赖于我们的新向量考证技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_1](https://doi.org/10.1007/978-3-030-64834-3_1)
## Non-committing Encryption with Constant Ciphertext Expansion from Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#non-committing-encryption-with-constant-ciphertext-expansion-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#non-committing-encryption-with-constant-ciphertext-expansion-from-standard-assumptions)**
### 作者
* Yusuke Yoshida, Tokyo Institute of Technology, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Keita Xagawa, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 非承诺加密（NCE）是由Canetti等人（STOC ’96）引入的一种在自适应环境下实现多方计算协议安全性的核心工具。最近，Yoshida等人（ASIACRYPT ’19）基于DDH问题的困难性提出了一种基于NCE的方案，其密文扩展为\(\mathcal {O}(\log \lambda )\)，公钥扩展为\(\mathcal {O}(\lambda ^2)\)。
> 
> 在本研究中，我们改进了他们的结果，提出了一种构建具有恒定密文扩展的NCE方案的方法学。我们的方法可以从DDH假设和LWE假设实例化。当从LWE假设实例化时，公钥扩展为\(\lambda \cdot \mathsf {poly}(\log \lambda )\)。这些是首个在不使用iO或常规参考字符串的情况下，实现了具有恒定密文扩展性的NCE方案。
> 
> 在此过程中，我们定义了NCE的一个弱定义，该定义仅满足一定程度的正确性和安全性。我们展示了如何利用具有新安全性质的窃听线路编码将这种弱NCE方案扩大为一个完整的方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_2](https://doi.org/10.1007/978-3-030-64834-3_2)
## Collusion Resistant Trace-and-Revoke for Arbitrary Identities from Standard Assumptions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#collusion-resistant-trace-and-revoke-for-arbitrary-identities-from-standard-assumptions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#collusion-resistant-trace-and-revoke-for-arbitrary-identities-from-standard-assumptions)**
### 作者
* Sam Kim, Stanford University, Stanford, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### 摘要
> 叛徒追踪方案是一种多用户公钥加密方案，系统中的每个用户都持有与用户身份相关联的解密密钥。使用公钥，内容分发者可以将消息加密给系统中的所有用户。同时，如果一组恶意用户组合他们各自的解密密钥构建一个“海盗解码器”，内容分发者可以使用高效的追踪算法来识别构建解码器所使用的至少一个密钥。追踪和撤销方案是标准叛徒追踪方案的扩展，其中包含了额外的密钥撤销机制，内容分发者可以使用该机制来禁用被侵犯密钥的解密能力。即，在加密过程中，内容分发者可以针对撤销用户列表加密一条消息，使得只有未被撤销的用户可以解密得到结果密文。
> 
> 追踪和撤销方案的构建具有挑战性。基于现有的标准假设构建的方案仅能容忍有界串谋（即对手获得密钥数量的预先限制），系统参数随身份位长度呈指数级增长，或者满足易受特定类型“海盗演化”攻击的较弱可追踪性概念。在这项工作中，我们提供了第一个完全具有串谋抗性并且能支持任意身份（即身份可以来自指数大小空间）的追踪和撤销方案构建。我们的方案支持公开加密和秘密追踪，并且可以基于LWE问题（具有超多项式模量噪声比）的亚指数难度。我们构建方案中的密文大小在身份空间大小上以对数方式扩展，并且在撤销名单大小上线性扩展。我们的方案利用了组合和代数构建叛徒追踪的技术。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_3](https://doi.org/10.1007/978-3-030-64834-3_3)
## Subvert KEM to Break DEM: Practical Algorithm-Substitution Attacks on Public-Key Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#subvert-kem-to-break-dem-practical-algorithm-substitution-attacks-on-public-key-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#subvert-kem-to-break-dem-practical-algorithm-substitution-attacks-on-public-key-encryption)**
### 作者
* Rongmao Chen, College of Computer, National University of Defense Technology, Changsha, China
* Xinyi Huang, Fujian Provincial Key Laboratory of Network Security and Cryptology, College of Mathematics and Informatics, Fujian Normal University, Fuzhou, China
* Moti Yung, Google LLC, New York, NY, USA
* Moti Yung, Columbia University, New York City, USA
### 摘要
> 出于对加密通信大规模监控的普遍关注，Bellare等人在CRYPTO 2014中引入了算法替代攻击（ASA）的概念，其中合法的加密算法被旨在通过密文无法检测地窃取秘密密钥的被替代算法所替代。实际可行的ASA已经用于构建和分析各种密码原语（Bellare等人，CRYPTO'14和ACM CCS'15；Ateniese等人，ACM CCS'15；Berndt和Liśkiewicz，ACM CCS'17），并成功泄漏了秘密密钥。尽管取得了许多进展，ASA（最初针对对称密钥加密）对公钥加密（PKE）操作的实际影响仍然不清楚，主要是因为PKE的加密操作不涉及秘密密钥，而且先前已知的ASA在泄漏明文方面变得相对低效，由于流出速率的对数上界（Berndt和Liśkiewicz，ACM CCS'17）。
> 
> 在这项研究中，我们对PKE加密算法提出了一个实际的ASA，而令人惊讶的是，它比现有的方法更高效和稳健，表明PKE方案上的ASA比先前预期的要有效和危险得多。我们主要针对混合加密的PKE方案，这是文献和实践中最普遍的PKE使用方式。我们的ASA的主要策略是破坏底层的密钥封装机制（KEM），以便能够有效地提取封装的会话密钥，进而破坏数据封装机制（DEM），使我们能够获取明文本身。具体而言，我们的非黑盒但相当通用的攻击能够仅从两个连续的密文中恢复明文，并且最小程度上依赖于先前内部随机性的短状态。我们证明了一类广泛使用的KEM可以被我们强大的攻击所破坏。
> 
> 我们的攻击依赖于某些特性的新型识别和形式化，这些特性导致了KEM的实际ASA。更广泛地说，它指出并可能启示其他“组合密码原语”的结构弱点，这可能使它们容易受到更危险的超过已知对数上界的ASA的攻击（即将组合作为攻击的启动者进行审查

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_4](https://doi.org/10.1007/978-3-030-64834-3_4)
## Unbounded HIBE with Tight Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#unbounded-hibe-with-tight-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#unbounded-hibe-with-tight-security)**
### 作者
* Roman Langrehr, ETH Zurich, Zurich, Switzerland
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
### 摘要
> 我们提出了一种基于标准假设的首个紧密安全且无界层次身份基础加密（HIBE）方案。我们的主要技术贡献是一种新颖的证明策略，允许我们利用嵌入在小且与层次无关的主公钥中的低熵来紧密随机化具有任意层次深度的身份的用户秘钥。
> 
> Lewko和Waters在Eurocrypt 2011提出了无界HIBE的概念。与大多数HIBE方案不同，无界方案在设置阶段不需要指定任何最大深度，用户秘钥或密文可以为具有层次无关系统参数的任意深度的身份生成。
> 
> 尽管先前的所有无界HIBE方案在用户秘钥查询数量上至少呈线性增长的安全损失，我们的方案的安全损失仅依赖于安全参数，即使在多挑战情境下，其中对手可以请求多个挑战密文。我们基于素数阶对配对群的Matrix决策性Diffie-Hellman假设证明了我们方案的自适应安全性，该假设推广了一类标准Diffie-Hellman假设，如k-线性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_5](https://doi.org/10.1007/978-3-030-64834-3_5)
## Multi-client Oblivious RAM with Poly-logarithmic Communication.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#multi-client-oblivious-ram-with-poly-logarithmic-communication) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#multi-client-oblivious-ram-with-poly-logarithmic-communication)**
### 作者
* Sherman S. M. Chow, The Chinese University of Hong Kong, Shatin, Hong Kong
* Katharina Fech, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Russell W. F. Lai, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Giulio Malavolta, UC Berkeley & Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 混淆RAM（Oblivious RAM）使得单用户可以忽略地访问内存，但在网络环境中可能并不适用。多用户混淆RAM（MCORAM）考虑了一个协作但不可信的环境，其中数据库所有者可以选择性地授予多个客户对机密数据库不同条目的读取和写入权限。他们的访问模式不仅对服务器保持忽略，而且对其他客户也要保持忽略。这种升级排除了许多构建ORAM的技术，迫使我们寻求新的技术。MCORAM不仅提供了私密匿名数据访问的替代解决方案（Eurocrypt 2019），还作为一个有前景的建设模块，为装备了访问控制的混淆文件系统以及将其他先进密码系统扩展到多用户场景中。
> 
> 尽管作为一种强大的对象，当前的最新技术仍然不令人满意：唯一现有的方案对于大小为n的数据库需要\(O(\sqrt{n})\)的通信和客户端计算。是否可能将这些复杂性降低到\(\mathsf{polylog}(n)\)，从而与ORAM的上界相匹配，这是一个开放问题，即我们是否能在同样的界限下享受访问控制和客户端的忽略性？
> 
> 我们的第一个结果肯定地回答了上述问题，通过利用完全同态加密（FHE）进行构建。我们的主要技术创新是一种用于密文的交叉密钥试验求值的新技术。我们还在具有N个非串谋服务器的情况下考虑了同样的问题，其中至多有t个服务器可以被破坏。我们使用分布式点函数（DPF）构建多服务器MCORAM，并提出了通过虚拟化技术和引导启动的新的DPF构造方法，假设在NC0中存在同态秘密共享和伪随机生成器，而这些并不意味着FHE的存在。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_6](https://doi.org/10.1007/978-3-030-64834-3_6)
## Privacy-Preserving Pattern Matching on Encrypted Data.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#privacy-preserving-pattern-matching-on-encrypted-data) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#privacy-preserving-pattern-matching-on-encrypted-data)**
### 作者
* Anis Bkakria, IMT Atlantique, Rennes, France
* Nora Cuppens, IMT Atlantique, Rennes, France
* Frédéric Cuppens, IMT Atlantique, Rennes, France
* Nora Cuppens, Polytechnique Montréal, Montréal, Canada
* Frédéric Cuppens, Polytechnique Montréal, Montréal, Canada
### 摘要
> 模式匹配是多个应用领域中最基本和重要的范例之一，例如数字取证、网络威胁情报或基因组和医学数据分析。虽然在纯文本数据上执行时是一项简单的操作，但在必须保护所分析数据和分析模式的隐私时，它变成了一项具有挑战性的任务。本文提出了一种新的可证明正确、安全且相对高效（与类似现有方案相比）的基于公钥和私钥的构建方法，允许对加密数据进行任意模式匹配，同时保护待分析的数据和待匹配的模式。也就是说，除了模式提供者（即数据所有者）外，建议的构建方案中的其他相关各方不会得知要搜索的模式（或要检查的数据）。与现有解决方案相比，我们提出的构建方案具有一些有趣的特点：（1）密文的大小与明文的大小成线性关系，而不受分析模式的大小和数量的影响；（2）发行的陷门大小与待分析数据的大小保持恒定；（3）搜索复杂度与待检查数据的大小成线性关系，并与分析模式的大小无关。进行的评估表明，我们的构建方案极大地提高了效率，超越了最有效现有解决方案的性能水平。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_7](https://doi.org/10.1007/978-3-030-64834-3_7)
## Efficient Homomorphic Comparison Methods with Optimal Complexity.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#efficient-homomorphic-comparison-methods-with-optimal-complexity) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#efficient-homomorphic-comparison-methods-with-optimal-complexity)**
### 作者
* Jung Hee Cheon, Department of Mathematical Sciences, Seoul National University, Seoul, Republic of Korea
* Dongwoo Kim, Department of Mathematical Sciences, Seoul National University, Seoul, Republic of Korea
* Duhyeong Kim, Department of Mathematical Sciences, Seoul National University, Seoul, Republic of Korea
* Jung Hee Cheon, Crypto Lab Inc., Seoul, Republic of Korea
### 摘要
> 比较两个数是最常用的操作之一，但在同态加密（HE）中高效计算比较函数一直是一项具有挑战性的任务，因为HE主要支持加法和乘法。最近，Cheon等人（Asiacrypt 2019）引入了一种新的比较函数的近似表示方法，该方法使用了有理函数，并展示了该有理函数可以通过迭代算法进行求值。由于其迭代特性，与以前的多项式逼近方法相比，他们的方法实现了对数级的计算复杂性；然而，计算复杂性仍然不是最优的，并且在HE实现中对于大位输入而言，该算法速度较慢。
> 
> 在这项工作中，我们提出了基于复合多项式逼近的具有最优渐近复杂性的新比较方法。主要思想是通过识别核心属性，系统地设计一个常数次数多项式f，使得复合多项式\(f\circ f \circ \cdots \circ f\) 随着组合次数的增加逼近于sign函数（等同于比较函数）。我们额外引入了一种加速方法，即应用带有不同属性的一些其他多项式g的混合多项式组合\(f\circ \cdots \circ f\circ g \circ \cdots \circ g\)，而不是\(f\circ f \circ \cdots \circ f\)。利用设计的多项式f和g，我们的新比较算法只需要\(\varTheta (\log (1/\epsilon )) + \varTheta (\log \alpha )\)的计算复杂性，以获得满足\(|a-b|\ge \epsilon \)在\(2^{-\alpha }\)误差范围内的近似比较结果，其中\(a,b\in [0,1]\)。
> 
> 渐近最优性结果在性能上有显著提升：我们在使用HEAAN的近似HE方案的16位加密整数上进行的比较算法，在\(\alpha = 16\)的情况下，按摩摊计算时间为1.22毫秒，比以前的工作快18倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_8](https://doi.org/10.1007/978-3-030-64834-3_8)
## Practical Exact Proofs from Lattices: New Techniques to Exploit Fully-Splitting Rings.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#practical-exact-proofs-from-lattices-new-techniques-to-exploit-fully-splitting-rings) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#practical-exact-proofs-from-lattices-new-techniques-to-exploit-fully-splitting-rings)**
### 作者
* Muhammed F. Esgin, Monash University, Melbourne, Australia
* Muhammed F. Esgin, Data61, CSIRO, Eveleigh, Australia
* Ngoc Khanh Nguyen, IBM Research, Zurich, Switzerland
* Gregor Seiler, IBM Research, Zurich, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Gregor Seiler, ETH Zurich, Zurich, Switzerland
### 摘要
> 我们提出了一个非常快速的基于格的零知识证明系统，用于准确证明线性方程\(A\vec {s}=\vec {u}\)的一个三元解\(\vec {s} \in \{-1,0,1\}^n\)在\(\mathbb {Z}_q\)上的知识，相比于Bootle、Lyubashevsky和Seiler的协议（CRYPTO 2019），我们的系统生成的证明长度缩短了8倍。
> 
> 其核心是利用模同态BDLOP承诺方案（SCN 2018）在完全分裂的循环数环\(\mathbb {Z}_q[X]/(X^d + 1)\)上证明与秘密多项式的NTT向量的标量积。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_9](https://doi.org/10.1007/978-3-030-64834-3_9)
## Towards Classical Hardness of Module-LWE: The Linear Rank Case.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#towards-classical-hardness-of-module-lwe-the-linear-rank-case) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#towards-classical-hardness-of-module-lwe-the-linear-rank-case)**
### 作者
* Katharina Boudgoust, Univ Rennes, CNRS, IRISA, Rennes, France
* Corentin Jeudy, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Univ Rennes, CNRS, IRISA, Rennes, France
* Weiqiang Wen, Univ Rennes, CNRS, IRISA, Rennes, France
### 摘要
> 我们证明，对于任意多项式大小的模数p，带有任意多项式大小模p的模学习与误差（\(\mathrm {M\text {-}LWE}\)）问题在经典情况下至少与标准最坏情况格点问题一样难，只要模秩d不小于数域度n。先前的出版物仅在量子规约下显示了其难度。我们通过类似的方式在学习与误差（\(\mathrm {LWE}\)）问题的情况下取得这一结果。首先，我们展示了带有指数大小模数的\(\mathrm {M\text {-}LWE}\)的经典难度。在第二步，我们使用二进制秘密证明了\(\mathrm {M\text {-}LWE}\)的难度。最后，我们提供了一种模数减少技术。完整的结果适用于二的幂次圆域类。然而，一些工具适用于更一般的数域类，并且可能具有独立的兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_10](https://doi.org/10.1007/978-3-030-64834-3_10)
## Lattice-Based E-Cash, Revisited.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#lattice-based-e-cash-revisited) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#lattice-based-e-cash-revisited)**
### 作者
* Amit Deo, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Amit Deo, Inria, Lyon, France
* Khoa Nguyen, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Olivier Sanders, Orange Labs, Applied Crypto Group, Cesson-Sévigné, France
### 摘要
> 电子现金（E-cash）是40年前引入的传统现金的数字模拟。它允许用户提取电子硬币，并在商家处进行匿名消费。正如Camenisch等人（Eurocrypt 2005）所主张的那样，应该可以紧凑地存储提取的硬币（即，与硬币的总数量的对数成本相关），这导致了紧凑型电子现金的概念。针对这个问题提出了许多解决方案，但其中大多数的安全性证明在Bourse等人（Asiacrypt 2019）最近的论文中被证明是无效的。同一篇论文描述了一种修复现有构造/证明的通用方法，但在某些情况下，此补丁的具体实现目前尚不为人所知。特别是，在量子安全假设下，我们不再知道是否存在紧凑型电子现金。在这项工作中，我们通过基于格的方法提出了第一个基于拉丁筛选结果的安全紧凑型电子现金系统，解决了这个问题。与后者的工作相反，我们的构造不仅是通用的，而且我们描述了两种具体的实现方式。我们通过利用有损陷门函数来构造我们的硬币，与以前的电子现金系统框架不同。有损和可逆密钥的不可区分性使我们能够避免对所涉及的伪随机函数提出的非常强的要求，而这些要求是实现Bourse等人提出的通用修补程序所必需的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_11](https://doi.org/10.1007/978-3-030-64834-3_11)
## Twisted-PHS: Using the Product Formula to Solve Approx-SVP in Ideal Lattices.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#twisted-phs-using-the-product-formula-to-solve-approx-svp-in-ideal-lattices) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#twisted-phs-using-the-product-formula-to-solve-approx-svp-in-ideal-lattices)**
### 作者
* Olivier Bernard, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Univ Rennes, CNRS, IRISA, Rennes, France
* Olivier Bernard, Thales, Gennevilliers, Laboratoire CHiffre, Gennevilliers, France
### 摘要
> Approx-SVP是一个在格子上的著名难题，其要求是在给定的格子上找到短向量，但是它在理想格子上的变种（对应于数域K的整数环 \(\mathcal {O}_{K}\) 的理想）仍然没有得到完全理解。长期以来，解决理想格子上的这个问题的最佳已知算法与解决任意格子上的相同。但最近的一系列研究倾向于表明，在理想格子中解决这个问题可能比在任意格子中更容易，特别是在量子环境下。
> 
> 我们的主要贡献是提出了一种新的“扭曲”版本的PHS（由Pellet-Mary，Hanrot和Stehlé 2019年提出）算法，我们将其称为Twisted-PHS。作为次要贡献，我们还提出了PHS算法的几处改进。在理论方面，我们证明了我们的Twisted-PHS算法至少与原始的PHS算法具有相同的性能。然而，在实际方面，我们提供了我们算法的完整实现，这表明我们可以实现更好的逼近因子，并且所给出的格子基向量比PHS中使用的向量更正交。据我们所知，这是第一次完全实现和测试这种类型算法在60次域的领域中的情况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_12](https://doi.org/10.1007/978-3-030-64834-3_12)
## Simpler Statistically Sender Private Oblivious Transfer from Ideals of Cyclotomic Integers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#simpler-statistically-sender-private-oblivious-transfer-from-ideals-of-cyclotomic-integers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#simpler-statistically-sender-private-oblivious-transfer-from-ideals-of-cyclotomic-integers)**
### 作者
* Daniele Micciancio, University of California San Diego, San Diego, USA
* Jessica Sorrell, University of California San Diego, San Diego, USA
### 摘要
> 我们提出了一种基于RLWE假设的具有统计发送者隐私和计算接收者隐私的双消息无感知传输协议，适用于循环数域。该工作改进了之前基于格的统计发送者隐私无感知传输协议，通过将参与方之间的总通信量减少了一个 \(\mathcal {O}(n\log q)\) 的因子，用于传输长度为 O(n) 的消息。
> 
> Brakerski和Döttling的先前工作使用转移定理，表明格或其对偶中必然存在短向量，这种存在性保证了与该格相关的编码的低损失加密，从而实现了统计发送者隐私。对于来自环整数嵌入的理想格的情况，一个短向量的存在意味着存在许多短向量，因此相对于一般格而言，格或其对偶的加密能够丢失更多有关消息的信息。这种额外的环整数理想结构使得在从通用到理想的格设置时可以获得效率改进，从而减小了发送者和接收者的消息大小，并且更容易描述和分析该协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_13](https://doi.org/10.1007/978-3-030-64834-3_13)
## Cryptographic Group Actions and Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#cryptographic-group-actions-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#cryptographic-group-actions-and-applications)**
### 作者
* Navid Alamati, University of Michigan, Ann Arbor, USA
* Luca De Feo, IBM Research Zürich, Rüschlikon, Switzerland
* Hart Montgomery, Fujitsu Laboratories of America, Sunnyvale, USA
* Sikhar Patranabis, ETH Zürich, Zürich, Switzerland
### 摘要
> 基于同构假设的加密技术已成为量子安全密码学的可行选择。最近的研究表明，可以从同构假设（如CSIDH和CSI-FiSh）构建高效（公钥）的原语。然而，同构假设在其现有形式下似乎不太适合实现新的密码应用。同构假设往往具有独特的效率和安全性属性，因此从中构建新的密码应用可能是一个复杂且耗时的任务。
> 
> 在本文中，我们提出了一个基于群操作的新框架，可以方便地使用各种基于同构假设的方法。我们的框架推广了Brassard和Yung（Crypto'90）以及Couveignes（Eprint'06）的工作。我们为带有自然难度假设的群操作提供了新的定义，这些定义模拟了适合进行群操作的同构构造，如CSIDH和CSI-FiSh。
> 
> 我们利用我们的新框架展示了其实用性，构建了一些以前未知的基于同构假设的原语。其中包括平滑的射影散列、双模PKE、两条消息的统计发送者私密OT以及Naor-Reingold风格的PRF。这些原语是广泛范围的密码应用的有用构建块。
> 
> 我们引入了一种名为线性隐藏位移（LHS）假设的群操作假设。然后，我们对LHS假设的安全性进行了讨论，并展示它蕴含了对称KDM安全加密，从而使得以前未知的基于同构假设的许多其他原语成为可能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_14](https://doi.org/10.1007/978-3-030-64834-3_14)
## B-SIDH: Supersingular Isogeny Diffie-Hellman Using Twisted Torsion.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#b-sidh-supersingular-isogeny-diffie-hellman-using-twisted-torsion) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#b-sidh-supersingular-isogeny-diffie-hellman-using-twisted-torsion)**
### 作者
* Craig Costello, Microsoft Research, Redmond, USA
### 摘要
> 本篇论文探讨了一种新的椭圆曲线同源密码学实施方式，其中各方可以在超奇异曲线集合的\((p+1)\)-扭矩和对应于二次扭矩集合的\((p-1)\)-扭矩中进行操作。尽管给定超奇异曲线及其二次扭矩之间的同构在一般情况下并非定义于\(\mathbb {F}_{p^2}\)，但将操作限制为这两个扭矩集合的x轴线使得所有算术运算都可以像往常一样在\(\mathbb {F}_{p^2}\)上进行。此外，由于超奇异扭矩始终具有相同的\(\mathbb {F}_{p^2}\)-有理j-不变量，所以当Alice和Bob可以同时在这两个扭矩集合中工作时，SIDH协议保持不变。
> 
> 该框架解除了Jao和De Feo最初对底层素域形式的限制，并为实现同变异型公钥密码学提供了一系列新选项。这些选项包括利用Mersenne和Montgomery友好素数的其他选择，以及在Jao-De Feo构造中显著降低素数大小而不损失渐近安全性的可能性。对于给定的目标安全级别，由此产生的公钥比目前在NIST后量子标准化工作中考虑的所有密钥封装方案的公钥都更小。
> 
> 对于本文提出的实例化方法，已知的最佳攻击是Delfs和Galbraith的经典路径搜索算法及其由Biasse、Jao和Sankar进行的量子适应算法；分别以\(O(p^{1/2})\)和\(O(p^{1/4})\)时间运行，并且基本上不消耗内存。总结一下，消除大-O符号并获得具体的安全估计只涉及到实现相应同源性所需电路的成本。与其他后量子建议相比，这使得B-SIDH的安全分析相当简单。
> 
> 使用友好参数进行搜索，找到了几个素数，范围从237位到256位，它们都提供了一个猜测的安全性，可与SIKE建议中用于NIST level 1安全性的434位素数相媲美。其中一个值得注意的例子是一个247位素数，其中Alice的秘密同源对数是7901-平滑的，而Bob的秘密同源对数是7621-平滑的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_15](https://doi.org/10.1007/978-3-030-64834-3_15)
## Calamari and Falafl: Logarithmic (Linkable) Ring Signatures from Isogenies and Lattices.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#calamari-and-falafl-logarithmic-linkable-ring-signatures-from-isogenies-and-lattices) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#calamari-and-falafl-logarithmic-linkable-ring-signatures-from-isogenies-and-lattices)**
### 作者
* Ward Beullens, imec-COSIC, KU Leuven, Leuven, Belgium
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Federico Pintore, Mathematical Institute, University of Oxford, Oxford, UK
### 摘要
> 我们利用同构和格假设构建了高效的环签名 (RS)。我们的环签名基于对群操作的对数 OR 证明。我们通过将这个群操作实例化为 CSIDH 群操作或基于 MLWE 的群操作，分别获得基于同构和基于格的 RS 方案。尽管 OR 证明具有二进制挑战空间，因此在安全参数线性重复次数上要求一定数量的重复，但是我们环签名的大小小且随着环大小 N 缩放得比以前已知的量子后环签名更好。我们还构建了可链环签名 (LRS)，其效率几乎与不可链变体相当。基于同构的方案产生的签名尺寸比所有已知的对数式量子后环签名小一个数量级，但速度相对较慢（例如，在包含 8 个成员的环中，签名尺寸为 5.5 KB，签名时间为 79 秒）。相比之下，基于格的构造速度更快，但签名尺寸较大（例如，在同样的环尺寸下，签名尺寸为 30 KB，签名时间为 90 毫秒）。对于小型环尺寸，我们基于格的环签名略大于最先进的方案，但对于大于 N ≈ 1024 的环尺寸来说，它们更小。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_16](https://doi.org/10.1007/978-3-030-64834-3_16)
## Radical Isogenies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#radical-isogenies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#radical-isogenies)**
### 作者
* Wouter Castryck, Imec-COSIC, Leuven, KU, Belgium
* Thomas Decru, Imec-COSIC, Leuven, KU, Belgium
* Frederik Vercauteren, Imec-COSIC, Leuven, KU, Belgium
### 摘要
> 本文介绍了一种计算同构的新方法，称为“根同构”，以及一种对于小的N非常有效的计算N-同构链的相应方法。该方法是完全确定性的，并完全避免了生成N-扭曲点。它基于一个循环N同构φ：E→E'的像空间上的N-扭曲点P'的坐标的明确公式，使得将φ与E'→E'/⟨P'⟩组合产生一个循环的N2-同构。这些公式是E系数、核kerφ的生成器P的坐标和N阶根 简单的代数表达式，其中被开方数的根号自身是由E系数和P的坐标的易于计算的代数表达式给出的，这些公式可以迭代，并且在计算具有gcd(q-1，N)=1的有限域Fq上的N同构链时非常有用，其中对于N阶根而言，采取N次方计算非常简单。与现有技术相比，我们的方法在N≤13时可以快1个数量级；对于更大的N，优势会消失，因为公式的复杂性增加。当应用于CSIDH时，对于CSURF-512参数，与Bernstein、De Feo、Leroux和Smith的实现相比

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_17](https://doi.org/10.1007/978-3-030-64834-3_17)
## Oblivious Pseudorandom Functions from Isogenies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#oblivious-pseudorandom-functions-from-isogenies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#oblivious-pseudorandom-functions-from-isogenies)**
### 作者
* Dan Boneh, Stanford University, Stanford, CA, USA
* Dmitry Kogan, Stanford University, Stanford, CA, USA
* Katharine Woo, Stanford University, Stanford, CA, USA
* Katharine Woo, Princeton University, Princeton, NJ, USA
### 摘要
> 一个浑然无知的伪随机函数（OPRF）是客户端和服务器之间的协议，其中服务器具有安全伪随机函数F的密钥k，而客户端具有函数的输入x。在协议结束时，客户端仅学习F(k, x)，而服务器不学习任何内容。如果客户端确信服务器在先前对k的承诺方面正确评估了PRF，则OPRF是可验证的。OPRF和可验证的OPRF具有许多应用，例如私有集交集协议，基于密码的密钥交换协议和防御拒绝服务攻击。现有的OPRF构建使用RSA，Diffie-Hellman和格类型的假设。前两者不是后量子安全的。
> 
> 在本文中，我们使用同构构建了OPRF和可验证的OPRF。我们的主要构建使用\(\mathbb {F}_{p^{2}}\)上超奇异椭圆曲线的同构，并尝试将Diffie-Hellman OPRF适应到该设置中。然而，Galbraith等人最近对超奇异同构系统的攻击使得这种方法难以保护。为了克服这种攻击并验证服务器的响应，我们开发了两个新的零知识协议，使每个参与方确信对方发送了有效的消息。通过使用这些协议，我们在SIDH设置中得到一个OPRF并在UC框架中证明其安全性。
> 
> 我们的第二个构建是将Naor-Reingold伪随机函数适应于交换群作用。将其与最近对同构进行的遗忘传输的构建相结合，我们在CSIDH设置中获得一个OPRF。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_18](https://doi.org/10.1007/978-3-030-64834-3_18)
## SiGamal: A Supersingular Isogeny-Based PKE and Its Application to a PRF.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#sigamal-a-supersingular-isogeny-based-pke-and-its-application-to-a-prf) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#sigamal-a-supersingular-isogeny-based-pke-and-its-application-to-a-prf)**
### 作者
* Tomoki Moriya, Department of Mathematical Informatics, The University of Tokyo, Tokyo, Japan
* Hiroshi Onuki, Department of Mathematical Informatics, The University of Tokyo, Tokyo, Japan
* Tsuyoshi Takagi, Department of Mathematical Informatics, The University of Tokyo, Tokyo, Japan
### 摘要
> 我们提出了两种新的基于超奇异同源的公钥加密方案：SiGamal和C-SiGamal。它们是通过给CSIDH添加一个阶为\(2^r\)的附加点来开发的。SiGamal类似于ElGamal加密，而C-SiGamal是SiGamal的压缩版本。我们证明了在一个新的假设下（P-CSSDDH假设），SiGamal和C-SiGamal在不使用哈希函数的情况下具有IND-CPA安全性。这个假设来源于这样一种预期，即没有有效的算法能够区分出一个随机点和一个隐藏同源下的公共点的图像。
> 
> 接下来，我们提出了基于SiGamal的Naor-Reingold类型伪随机函数（PRF）。如果P-CSSDDH假设和CSSDDH*假设成立，即使用SiGamal设置中的素数p可以保证CSIDH的安全性，那么我们提出的函数就是一个伪随机函数。此外，我们估计计算我们所提出的PRF所需的群操作的计算成本大约是CSIDH中群操作的 \(\sqrt{\frac{8T}{3\pi }}\) 倍，其中T是PRF输入的Hamming权重。
> 
> 最后，我们对SiGamal和C-SiGamal进行了群操作的实验证明。在SiGamal-512中，与256位明文消息空间相比，群操作的计算成本约为CSIDH-512中群操作的2.62倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_19](https://doi.org/10.1007/978-3-030-64834-3_19)
## Estimating Quantum Speedups for Lattice Sieves.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#estimating-quantum-speedups-for-lattice-sieves) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#estimating-quantum-speedups-for-lattice-sieves)**
### 作者
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, Egham, UK
* Eamonn W. Postlethwaite, Information Security Group, Royal Holloway, University of London, Egham, UK
* Vlad Gheorghiu, Institute for Quantum Computing, University of Waterloo, Waterloo, Canada
* John M. Schanck, Institute for Quantum Computing, University of Waterloo, Waterloo, Canada
### 摘要
> 量子变种的晶格筛选算法常用于评估基于晶格的密码构建的安全性。在这项工作中，我们为高维球面上的几个近邻搜索算法的成本提供了一种启发式的非渐近分析。这些算法是晶格筛选的关键组成部分。我们设计了用于近邻搜索算法的量子电路，并提供了根据各种成本指标数值优化算法参数的软件。使用这个软件，我们估计了经典和量子近邻搜索在球面上的成本。对于我们分析的最佳近邻搜索算法，在密码学感兴趣的维度中，我们发现存在小的量子加速效果。实现这种加速需要几个乐观的物理和算法假设。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_20](https://doi.org/10.1007/978-3-030-64834-3_20)
## A Combinatorial Approach to Quantum Random Functions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#a-combinatorial-approach-to-quantum-random-functions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#a-combinatorial-approach-to-quantum-random-functions)**
### 作者
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sihang Pu, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 量子伪随机函数（QPRFs）通过允许对输入叠加进行查询，扩展了PRF的经典安全性。Zhandry [Zhandry, FOCS 2012]展示了这两个概念之间的差别，并证明了常见的构建范式在量子安全性方面也是成立的，尽管需要进行新的临时分析。在这项工作中，我们重新审视构建QPRFs的问题，并提出了一种从小域（经典）PRFs开始的新方法：我们方法的核心是基于双向扩展器的新域扩展技术。有趣的是，我们的分析几乎完全是经典的。
> 
> 作为我们主要定理的推论，我们基于学习带错误问题的量子难解性，获得了第一个（近似）密钥同态量子PRF。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_21](https://doi.org/10.1007/978-3-030-64834-3_21)
## Improved Classical and Quantum Algorithms for Subset-Sum.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#improved-classical-and-quantum-algorithms-for-subset-sum) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#improved-classical-and-quantum-algorithms-for-subset-sum)**
### 作者
* Xavier Bonnetain, Institute for Quantum Computing, Department of Combinatorics and Optimization, University of Waterloo, Waterloo, ON, Canada
* Rémi Bricout, Sorbonne Université, Collège Doctoral, 75005, Paris, France
* Rémi Bricout, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
* Yixin Shen, Université de Paris, IRIF, CNRS, 75006, Paris, France
### 摘要
> 我们提出了解决随机子集和实例的新的经典和量子算法。首先，我们通过使用值在\(\{-1,0,1,2\}\)范围内的更一般的表示，将Becker-Coron-Joux算法（EUROCRYPT 2011）的时间复杂度从\( \widetilde{\mathcal {O}} \left( 2^{0.291 n} \right) \)降低到 \( \widetilde{\mathcal {O}} \left( 2^{0.283 n} \right) \)。接下来，我们在几个方向上改进了这个问题的量子算法的最新进展。通过结合Howgrave-Graham-Joux算法（EUROCRYPT 2010）和量子搜索，我们设计了一个具有渐近运行时间\( \widetilde{\mathcal {O}} \left( 2^{0.236 n} \right) \)的算法，低于基于相同的经典算法由Bernstein、Jeffery、Lange和Meurer提出的量子行走算法的成本（PQCRYPTO 2013）。这个算法的优点是使用经典存储器与量子随机访问，而之前已知的算法使用了量子行走框架，并需要量子存储器与量子随机访问。
> 
> 我们还提出了新的子集和的量子行走方法，性能优于Helm和May给出的时间复杂度的先前最佳结果\( \widetilde{\mathcal {O}} \left( 2^{0.226 n} \right) \)（TQC 2018）。我们将我们的新技术结合起来，以达到一个时间复杂度为\( \widetilde{\mathcal {O}} \left( 2^{0.216 n} \right) \)的算法。这个时间复杂度取决于由Helm和May形式化的量子行走更新的启发式算法，这也是之前的算法所必需的。我们展示了如何部分地克服这个启发式算法，并获得了一个量子时间复杂度为\( \widetilde{\mathcal {O}} \left( 2^{0.218 n} \right) \)的算法，只需要标准的经典子集和启发式算法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_22](https://doi.org/10.1007/978-3-030-64834-3_22)
## Security Limitations of Classical-Client Delegated Quantum Computing.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#security-limitations-of-classical-client-delegated-quantum-computing) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#security-limitations-of-classical-client-delegated-quantum-computing)**
### 作者
* Christian Badertscher, IOHK, Zurich, Switzerland
* Alexandru Cojocaru, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Elham Kashefi, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Petros Wallden, School of Informatics, University of Edinburgh, 10 Crichton Street, Edinburgh, EH8 9AB, UK
* Léo Colisson, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
* Elham Kashefi, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
* Dominik Leichtle, Laboratoire d’Informatique de Paris 6 (LIP6), Sorbonne Université, 4 Place Jussieu, 75252, Paris CEDEX 05, France
* Atul Mantri, Joint Center for Quantum Information and Computer Science (QuICS), University of Maryland, College Park, USA
### 摘要
> 安全委托量子计算允许一个计算能力较弱的客户端以隐私保护的方式将任意量子计算外包给一个不受信任的量子服务器。实现经典委托量子计算的有望候选方案之一是经典客户端远程态制备（\(\mathsf{RSP}_{\mathsf{CC}}\)），其中客户端通过经典信道远程制备一个量子态。然而，使用\(\mathsf{RSP}_{\mathsf{CC}}\)作为子模块所带来的隐私损失尚不清楚。在本研究中，我们使用Maurer和Renner的构造密码学框架[MR11]来研究这个问题。首先，我们确定\(\mathsf{RSP}_{\mathsf{CC}}\)的目标是通过经典信道构造理想的\(\mathsf{RSP}\)资源，然后揭示了使用\(\mathsf{RSP}_{\mathsf{CC}}\)的安全限制。首先，我们揭示了构造理想的\(\mathsf{RSP}\)资源（通过经典信道）与量子态克隆任务之间的基本关系。任何经典构造的理想\(\mathsf{RSP}\)资源都必须向服务器泄漏所生成量子态的完整经典描述（可能以编码形式），即使我们只追求计算安全性。因此，我们发现在不削弱其保证的情况下，实现常见的\(\mathsf{RSP}\)资源是不可能的，这是由于无克隆定理。其次，上述结果并未排除某个特定的\(\mathsf{RSP}_{\mathsf{CC}}\)协议可以在某些情况下替代量子信道，例如Broadbent等人提出的Universal Blind Quantum Computing（\(\mathsf{UBQC}\)）协议[BFK09]。然而，我们证明，只要将\(\mathsf{RSP}_{\mathsf{CC}}\)作为子例程使用，所得到的\(\mathsf{UBQC}\)协议将无法保持其经过证明的可组合安全性。第三，我们展示了通过Cojocaru等人提出的\(\mathsf{RSP}_{\mathsf{CC}}\)协议QFactory来替代上述\(\mathsf{UBQC}\)协议的量子信道，可以保持\(\mathsf{UBQC}\)的较弱的基于游戏的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_23](https://doi.org/10.1007/978-3-030-64834-3_23)
## Quantum Circuit Implementations of AES with Fewer Qubits.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#quantum-circuit-implementations-of-aes-with-fewer-qubits) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#quantum-circuit-implementations-of-aes-with-fewer-qubits)**
### 作者
* Jian Zou, Mathematics and Computer Science of Fuzhou University, Fuzhou, Fujian Province, China
* Ximeng Liu, Mathematics and Computer Science of Fuzhou University, Fuzhou, Fujian Province, China
* Jian Zou, Key Lab of Information Security of Network Systems (Fuzhou University), Fujian Province, China
* Ximeng Liu, Key Lab of Information Security of Network Systems (Fuzhou University), Fujian Province, China
* Zihao Wei, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zihao Wei, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Wenling Wu, Institute of Software, Chinese Academy of Sciences, Beijing, China
### 摘要
> 我们提出了一些改进的AES量子电路实现。首先，我们提出了一些AES S-box和S-box\(^{-1}\)的量子电路，其所需的量子比特比以前的工作更少。其次，在我们AES的量子电路中引入了S-box\(^{-1}\)操作，以减少锯齿方法中的量子比特数量。第三，我们提出了一种在AES密钥调度中减少量子比特数量的方法。在先前的AES-128、AES-192和AES-256量子电路中，至少需要864、896和1232个量子比特，而我们的AES-128、AES-192和AES-256量子电路实现只需要512、640和768个量子比特，量子比特数量减少了超过30%。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_24](https://doi.org/10.1007/978-3-030-64834-3_24)
## Quantum Collision Attacks on AES-Like Hashing with Low Quantum Random Access Memories.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#quantum-collision-attacks-on-aes-like-hashing-with-low-quantum-random-access-memories) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#quantum-collision-attacks-on-aes-like-hashing-with-low-quantum-random-access-memories)**
### 作者
* Xiaoyang Dong, Institute for Advanced Study, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, Beijing National Research Center for Information Science and Technology, Tsinghua University, Beijing, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Fei Gao, State Key Laboratory of Networking and Switching Technology, Beijing University of Posts and Telecommunications, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
### 摘要
> 在2020年的EUROCRYPT会议上，Hosoyamada和佐々木提出了第一种专用量子攻击哈希函数的方法——一种利用差分且在经典环境下概率过低而无法使用的量子反弹攻击。这项工作为保护哈希函数免受量子攻击带来了新的视角。尤其是，它告诉我们，在寻找差分方面不应该止步于经典生日界限。尽管这些有意思且具有潜力的影响，Hosoyamada和佐々木所描述的具体攻击利用了大量的量子随机访问内存（qRAM），但该资源在可预见的未来就连在量子计算社群中都存在争议。如果没有大型的qRAM，这些攻击将会使时间复杂度显著增加。在本研究中，我们通过执行基于非完全激活超级S盒的差分的量子反弹攻击，减少甚至避免使用qRAM。同时，我们提出了一种基于MILP的方法，系统地探索与反弹攻击有关的截断差分的搜索空间。结果，我们得到了针对AES-MMO、AES-MP以及4轮和5轮Grøstl-512的首个经典碰撞攻击的改进攻击。有趣的是，在AES-MMO的分析中使用非完全激活超级S盒差分引发了收集足够起始点的新困难。为了解决这个问题，我们考虑了涉及两个消息块的攻击，以获得更多的自由度，并成功将对AES-MMO和AES-MP（EUROCRYPT 2020）的碰撞攻击所需的qRAM需求从$2^{48}$压缩到$2^{16}$至0范围内，同时仍保持相当的时间复杂度。据我们所知，这些是第一个在没有大型qRAM可用的模型中略胜一筹Chailloux、Naya-Plasencia和Schrottenloher所提出的通用量子碰撞攻击（ASIACRYPT 2017）的专用量子哈希函数攻击。这项工作再次展示了如何巧妙结合经典密码分析技术和量子计算来改进攻击，并表明Hosoyamada和佐々木指出的方向值得进一步研究。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_25](https://doi.org/10.1007/978-3-030-64834-3_25)
## Fuzzy Asymmetric Password-Authenticated Key Exchange.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#fuzzy-asymmetric-password-authenticated-key-exchange) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#fuzzy-asymmetric-password-authenticated-key-exchange)**
### 作者
* Andreas Erwig, Technische Universität Darmstadt, Darmstadt, Germany
* Maximilian Orlt, Technische Universität Darmstadt, Darmstadt, Germany
* Siavash Riahi, Technische Universität Darmstadt, Darmstadt, Germany
* Julia Hesse, IBM Research, Zurich, Switzerland
### 摘要
> 密码验证密钥交换（PAKE）允许具有密码的用户交换加密密钥。目前有两种变体的PAKE使其更适用于现实场景：
> 
> 非对称PAKE（aPAKE），旨在保护客户端的密码，即使认证服务器不可信。
> 
> 模糊PAKE（fPAKE），即使用户的密码有噪音但“足够接近”，也能进行密钥协商。
> 
> 支持模糊密码匹配可以简化使用高熵密码，并允许使用生物特征识别和环境读数（两者都是自然有噪音的）。
> 
> 到目前为止，PAKE的这两个变体只被单独考虑过。在本文中，我们同时考虑了它们两者。我们引入了模糊非对称PAKE（fuzzy aPAKE）的概念，它能够保护不受信任的服务器并支持有噪音的密码。我们在Canetti（FOCS'01）的通用复合性框架中提出了我们的新概念，这是密码基元的首选模型。然后，我们展示了模糊aPAKE可以从遗忘转移和某种鲁棒秘密分享的变体中获得（Cramer等，EC'15）。我们在避免使用昂贵的工具如非交互式零知识证明的同时，实现了对恶意方的安全。我们的构造是轮次最优的，消息和密码文件的大小与方案的容忍误差无关。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_26](https://doi.org/10.1007/978-3-030-64834-3_26)
## Two-Pass Authenticated Key Exchange with Explicit Authentication and Tight Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-2].md#two-pass-authenticated-key-exchange-with-explicit-authentication-and-tight-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-2].md#two-pass-authenticated-key-exchange-with-explicit-authentication-and-tight-security)**
### 作者
* Xiangyu Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Xiangyu Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
* Jian Weng, College of Cyber Security, Jinan University, Guangzhou, 510632, China
### 摘要
> 我们提出了一种通用的两遍认证密钥交换（AKE）方案，其中包含来自密钥封装机制（KEM）和签名（SIG）方案的显式认证。我们改进了Gjøsteen和Jager [Crypto2018]提出的安全模型，使之更加强大。在这个强模型中，如果某个用户接受了一条重放的消息，则AKE的认证就被破坏。我们为KEM定义了一个名为“IND-mCPA with adaptive reveals”的新安全概念。当底层KEM具有这样的安全性，并且SIG具有自适应破坏的不可伪造性时，我们的AKE构造配备计数器作为状态在强模型中是安全的，而无状态的AKE不包含计数器，在传统模型中是安全的。我们还提出了一个具有紧密“IND-mCPA安全性与自适应泄漏”的KEM，该KEM是在随机预言机模型中基于计算Diffie-Hellman假设得出的。当使用Gjøsteen和Jager [Crypto2018]提供的KEM和可用的SIG来实例化AKE的通用构造时，我们得到了第一个具有紧密安全性和显式认证的实用的两遍AKE。此外，将具有严密IND-mCCA安全的KEM（由Han等[ Crypto2019]推导出的PKE）和具有严密安全性的SIG（由Bader等[TCC2015]提供）集成在一起，得到了在标准模型中第一个具有严密安全性和显式认证的两遍AKE。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64834-3_27](https://doi.org/10.1007/978-3-030-64834-3_27)
