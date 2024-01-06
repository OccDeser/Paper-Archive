# Asiacrypt[2020-1]
## Finding Collisions in a Quantum World: Quantum Black-Box Separation of Collision-Resistance and One-Wayness.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#finding-collisions-in-a-quantum-world-quantum-black-box-separation-of-collision-resistance-and-one-wayness) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#finding-collisions-in-a-quantum-world-quantum-black-box-separation-of-collision-resistance-and-one-wayness)**
### 作者
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### 摘要
> 自从Impagliazzo和Rudich（1989年STOC）的著名工作以来，已经证明了许多关于黑盒不可能性的结果。然而，这些研究只排除了密码学原语之间的经典黑盒归约。因此，通过使用量子归约可能有助于克服这些不可能性结果。为了排除这种可能性，我们必须将这些不可能性结果扩展到量子环境中。在本文中，我们研究了量子环境中的黑盒不可能性。
> 
> 我们首先对完全黑盒归约进行了量子对应的形式化，该形式化遵循Reingold、Trevisan和Vadhan（2004年TCC）的定义。然后，我们证明了从抗碰撞哈希函数到单向置换（甚至是陷门置换）的量子完全黑盒归约是不可能的。我们考虑了经典和量子实现方式。这是对Simon（1998年Eurocrypt）在经典环境中展示类似结果的量子环境下的扩展研究。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_1](https://doi.org/10.1007/978-3-030-64837-4_1)
## New Results on Gimli: Full-Permutation Distinguishers and Improved Collisions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#new-results-on-gimli-full-permutation-distinguishers-and-improved-collisions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#new-results-on-gimli-full-permutation-distinguishers-and-improved-collisions)**
### 作者
* Antonio Flórez Gutiérrez, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
* Ferdinand Sibleyras, Inria, Paris, France
### 摘要
> \(\mathsf {Gimli}\) 是一组加密原语（包括哈希函数和AEAD方案），被选为NIST标准化新轻量级设计竞赛的第二轮的候选方案。候选方案 \(\mathsf {Gimli}\) 基于在CHES 2017上介绍的置换 \(\mathsf {Gimli}\)。本文研究了该置换以及基于它的构造的安全性。我们利用 \(\mathsf {Gimli}\) 中的慢扩散和内部对称性，首次构建了一个复杂度为 \(2^{64}\) 的完整置换区分器。我们还提供了对实现了 \(\mathsf {Gimli}\) 全部24轮中的23轮的实际区分器。
> 
> 接下来，我们提出（完整状态下）对 \(\mathsf {Gimli}\)-Hash 的碰撞攻击和半自由起始碰撞攻击，可分别达到12轮和18轮。在实际环境中，我们计算了8轮 \(\mathsf {Gimli}\)-Hash 的碰撞。在量子环境中，这些攻击可以多达2轮。最后，我们对置换中的线性迹进行了第一次研究，并提出了能够达到17轮 \(\mathsf {Gimli}\) 的差分线性密码分析。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_2](https://doi.org/10.1007/978-3-030-64837-4_2)
## SQISign: Compact Post-quantum Signatures from Quaternions and Isogenies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#sqisign-compact-post-quantum-signatures-from-quaternions-and-isogenies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#sqisign-compact-post-quantum-signatures-from-quaternions-and-isogenies)**
### 作者
* Luca De Feo, IBM Research, Zürich, Switzerland
* David Kohel, Aix Marseille University, CNRS, Centrale Marseille, I2M, Marseille, France
* Antonin Leroux, DGA, Paris, France
* Christophe Petit, University of Birmingham, Birmingham, UK
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, F-33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, F-33400, Talence, France
* Luca De Feo, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Paris, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Paris, France
* Luca De Feo, INRIA, Rocquencourt, France
* Antonin Leroux, INRIA, Rocquencourt, France
* Christophe Petit, Université libre de Bruxelles, Brussels, Belgium
### 摘要
> 我们介绍了一种新的签名方案，SQISign（用于短四元数和同源性签名），它基于超奇异椭圆曲线的同构图形。该签名方案源自一种全新的、高度可靠的单轮交互式标识协议。针对后量子时代NIST-1级别的安全性，我们的实现结果包括204字节的签名、16字节的秘密密钥以及64字节的公开密钥。特别地，签名和公开密钥的大小总合比其他后量子签名方案小一个数量级。在现代工作站上，我们用C语言实现的生成密钥花费0.6秒，进行签名花费2.5秒，验证花费50毫秒。
> 
> 虽然标识协议的可靠性来自经典假设，但零知识特性则依赖于论文的第二个主要贡献。我们介绍了一种新算法，用于找到连接两个已知端群环的超奇异椭圆曲线之间的同源路径。早期解决该问题的算法由Kohel、Lauter、Petit和Tignol提出，系统地透露了从输入曲线到“特殊”曲线的路径。这种泄露将破坏协议的零知识性质。我们的算法并不直接透露这样的路径，并且在满足一个新的计算假设的前提下，我们证明了生成的标识协议是零知识的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_3](https://doi.org/10.1007/978-3-030-64837-4_3)
## Public-Key Generation with Verifiable Randomness.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#public-key-generation-with-verifiable-randomness) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#public-key-generation-with-verifiable-randomness)**
### 作者
* Olivier Blazy, Universite de Limoges, Limoges, France
* Patrick Towa, IBM Research – Zurich, Rüschlikon, Switzerland
* Patrick Towa, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### 摘要
> 我们重新审视了一个问题，即如何证明用户算法选择并正确使用了真正的随机种子来生成她的加密密钥。2002年，Juels和Guajardo提出了第一个方法，用于验证RSA秘密密钥。我们提出了一个新的安全模型和通用工具，以高效地证明私钥是根据预定过程随机生成的，而不泄露有关私钥的任何进一步信息。
> 
> 我们为所有基于概率电路的密钥生成算法提供了一个通用协议，并证明了它的安全性。我们还提出了一种新的基于因数分解的密码协议，并在上述模型中证明了其安全性。后者依赖于一种新的高效零知识证明算法，用于双离散对数问题，在通信复杂度上相比现有技术取得了指数级的改进，并且具有独立的研究价值。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_4](https://doi.org/10.1007/978-3-030-64837-4_4)
## Simulation-Sound Arguments for LWE and Applications to KDM-CCA2 Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#simulation-sound-arguments-for-lwe-and-applications-to-kdm-cca2-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#simulation-sound-arguments-for-lwe-and-applications-to-kdm-cca2-security)**
### 作者
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Radu Titiu, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Nanyang Technological University, SPMS, Singapore, Singapore
* Alain Passelègue, Inria, Lyon, France
* Radu Titiu, Bitdefender, Bucharest, Romania
### 摘要
> Naor-Yung模型是一种著名的技术，通过满足一种模拟鲁棒性的非交互式零知识证明，构建IND-CCA2安全的加密方案。直到最近，如何在仅基于Learning-With-Errors（LWE）假设下进行实例化，并不依赖于随机预言机，一直是一个悬而未决的问题。尽管Canetti等人（STOC'19）和Peikert-Shiehian（Crypto'19）的最新研究通过在标准模型中应用Fiat-Shamir变换找到了这个问题的解决方案，但是由此产生的构造方式极其低效，因为它们通过将问题归约为一个NP完全问题来进行。本文中，我们提供了一种直接的、非通用的方法来在不依赖于随机预言机模型的前提下实例化Naor-Yung模型。具体来说，我们直接构造了一个无界模拟鲁棒的NIZK证明系统，通过精心选择的参数，可以在Regev密码系统中表达使用不同密钥加密的明文的相等性。我们还提供了我们的证明的一个变种，提供了紧密的安全性。作为应用，我们获得了一个基于LWE的公钥加密方案，在标准模型中可以证明（紧密的）密钥相关消息安全性，抵御选择密文攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_5](https://doi.org/10.1007/978-3-030-64837-4_5)
## CCA-Secure (Puncturable) KEMs from Encryption with Non-Negligible Decryption Errors.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#cca-secure-puncturable-kems-from-encryption-with-non-negligible-decryption-errors) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#cca-secure-puncturable-kems-from-encryption-with-non-negligible-decryption-errors)**
### 作者
* Valerio Cini, AIT Austrian Institute of Technology, Vienna, Austria
* Sebastian Ramacher, AIT Austrian Institute of Technology, Vienna, Austria
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
* Christoph Striecks, AIT Austrian Institute of Technology, Vienna, Austria
### 摘要
> 公钥加密（PKE）方案或密钥封装机制（KEM）是实现安全通信协议的基本密码构建块。已知有几种变换可以将弱安全方案通用地转化为强安全（即IND-CCA）的方案。虽然大多数这些变换要求弱安全方案提供完美正确性，但Hofheinz、Hövelmanns和Kiltz（HHK）（TCC 2017）最近表明，Fujisaki-Okamoto（FO）变换的变体可以在（量子）随机预言模型（QROM）中与具有可忽略正确性错误的方案一起工作。NIST后量子竞赛（PQC）中的许多最新方案使用了这些变换的变体。其中一些CPA安全版本甚至具有非可忽略的正确性错误，因此无法应用HHK的技术。
> 
> 在这项工作中，我们研究了将具有潜在较大（即非可忽略）正确性错误的PKE方案通用转换为具有可忽略正确性错误的方案的设置。虽然以前由Dwork等人（EUROCRYPT 2004）对渐进设置进行了处理，但我们的目标是在具体的设置中提出实际高效的编译器，并将其应用于两个不同的背景下：首先，我们展示了如何使用HHK的变体将弱安全确定性或随机性PKE通用转换为（Q）ROM中的CCA安全KEM。这适用于基于格和代码的NIST PQC候选方案，其中存在非可忽略的错误，对此我们提供了广泛的分析。因此，我们证明它改进了一些基于码的候选方案。其次，我们研究了Bloom Filter KEM（BFKEM）的可穿孔KEM，该KEM由Derler等人（EUROCRYPT 2018）提出，并且本质上具有非可忽略的正确性错误。BFKEM是构建完全前向安全的零往返时间（0-RTT）密钥交换协议的构建块。特别地，我们展示了如何通过将我们的技术应用于具有（非）可忽略正确性错误的基于身份的加密（IBE）方案，从而通用地实现第一个后量子安全的BFKEM。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_6](https://doi.org/10.1007/978-3-030-64837-4_6)
## Possibility and Impossibility Results for Receiver Selective Opening Secure PKE in the Multi-challenge Setting.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#possibility-and-impossibility-results-for-receiver-selective-opening-secure-pke-in-the-multi-challenge-setting) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#possibility-and-impossibility-results-for-receiver-selective-opening-secure-pke-in-the-multi-challenge-setting)**
### 作者
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Man Ho Au, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Qiuliang Xu, School of Software, Shandong University, Jinan, China
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong NSW, Australia
### 摘要
> 公钥加密（PKE）方案通常部署在具有众多用户的开放系统中。实际上，常见的情况是一些用户被腐败了。如果PKE方案能够在对手损坏了一些接收者并学习了他们的秘密钥匙后仍然保护传送给未腐败接收者的消息，则称PKE方案为接收者选择性打开（RSO）安全。这通常通过要求存在一个可以模拟对手视角的模拟器来定义。现有作品在单挑战设置中构建了RSO安全的PKE方案，其中对手只能获得每个公钥的一个挑战密文。然而，在实践中，最好的是具有多重挑战设置中的RSO安全的PKE方案，公钥可以用于加密多个消息。在这项工作中，我们探讨了在多重挑战设置中实现具有接收者选择性打开安全性的PKE方案的可能性。我们的贡献有三方面。首先，我们证明了单挑战设置中具有RSO安全的PKE方案不一定在多挑战设置中具有RSO安全。然后，我们展示了如果每个公钥下的挑战密文的数量是先验无界的，则无法实现PKE方案的RSO安全。特别是，我们证明，如果其秘密钥少于k位，则没有PKE方案可以在k挑战设置中达到RSO安全。在积极的一面，我们给出了具有k挑战设置中RSO安全的PKE方案的具体构建，其中秘密钥长度与k的比率接近下界1。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_7](https://doi.org/10.1007/978-3-030-64837-4_7)
## Security Reductions for White-Box Key-Storage in Mobile Payments.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#security-reductions-for-white-box-key-storage-in-mobile-payments) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#security-reductions-for-white-box-key-storage-in-mobile-payments)**
### 作者
* Estuardo Alpirez Bock, Aalto University, Helsinki, Finland
* Chris Brzuska, Aalto University, Helsinki, Finland
* Marc Fischlin, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Technische Universität Darmstadt, Darmstadt, Germany
* Wil Michiels, Technische Universiteit Eindhoven, Eindhoven, The Netherlands
* Wil Michiels, NXP Semiconductors, Eindhoven, The Netherlands
### 摘要
> 白盒密码学的目标是在对手控制的环境中执行加密实现时提供安全性。如今，白盒实现出现在商业产品中，例如由万事达卡认证的移动支付应用程序。有趣的是，在这里，白盒密码学被誉为安全存储付款令牌的工具，并且重要的是，白盒化存储功能与硬件功能绑定，以防止代码提取攻击。
> 
> 在本文中，我们展示了使用硬件绑定和混淆进行安全存储的方法在概念上是合理的。遵循万事达卡和EMVCo的安全规范，我们首先为绑定到硬件功能的白盒密钥派生函数（WKDF）定义安全性。具有硬件绑定模型的WKDF模拟了安全存储功能，因为WKDF可以用于派生用于安全存储的加密密钥。然后，我们提供了一个基于伪随机函数（PRF）和混淆的WKDF的概念验证构造。为了证明我们对密码原语的使用是合理的，我们进行了密码分析，并将我们的WKDF的安全性降级到不可区分性混淆和PRF安全性的密码假设。我们的WKDF绑定到的硬件功能是类似PRF的功能。混淆帮助我们隐藏用于验证的秘密密钥，从本质上模拟了Android密钥库提供的签名功能。
> 
> 我们严格定义了硬件绑定的白盒支付应用程序（WPAY）生成和加密有效付款请求所需的安全性质。我们构建了一个使用WKDF作为安全构建模块的WPAY。因此，我们展示了WKDF可以与任何安全对称加密方案安全结合，包括基于标准密码（如AES）的方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_8](https://doi.org/10.1007/978-3-030-64837-4_8)
## Circular Security Is Complete for KDM Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#circular-security-is-complete-for-kdm-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#circular-security-is-complete-for-kdm-security)**
### 作者
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Takahiro Matsuda, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### 摘要
> 循环安全是密钥相关消息（KDM）安全的最基本形式，它允许我们安全加密只有秘密密钥位的副本。在这项工作中，我们展示循环安全在KDM安全方面是完整的，这意味着满足这一安全概念的加密方案可以转换为满足a-priori有界大小电路可计算的所有函数（有界KDM安全）的加密方案。这一结果在任意数量的密钥和秘密密钥/公钥和CPA/CCA设置下都成立。此前，Applebaum（EUROCRYPT 2011）已经证明了这样的完整性结果，针对投影函数（投影-KDM安全）的KDM安全，这允许我们安全地加密秘密密钥位的副本和否定。除了增加KDM安全的强度，我们的转换实际上可以起始于一个针对CPA攻击的循环安全加密方案，结果是一个针对CCA攻击的有界KDM安全加密方案。这一结果改进了Kitagawa和Matsuda（TCC 2019）最近在KDM安全公钥加密方案中展示的CPA到CCA的转换。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_9](https://doi.org/10.1007/978-3-030-64837-4_9)
## Scalable Ciphertext Compression Techniques for Post-quantum KEMs and Their Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#scalable-ciphertext-compression-techniques-for-post-quantum-kems-and-their-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#scalable-ciphertext-compression-techniques-for-post-quantum-kems-and-their-applications)**
### 作者
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Kris Kwiatkowski, PQShield, Oxford, UK
* Thomas Prest, PQShield, Oxford, UK
* Federico Pintore, Mathematical Institute, University of Oxford, Oxford, UK
### 摘要
> 为了安全地与一个大群体进行通信，并且在带宽和计算成本上比与每个成员单独通信的解决方案节省资源，多接收者密钥封装机制（多KEM）提供了一个可伸缩的解决方案。所有关于多KEM的之前研究都限于经典假设，并且虽然一些通用的构造已知，但它们都需要一些并非大部分后量子方案所共有的特定属性。在本研究中，我们首先提供了一个简单有效的通用构造多KEM，可以从各种假设中实例化，包括后量子假设。然后，我们使用了8个后量子KEM（包括格和同态基于NIST的候选方案）以及CSIDH来在实际层面研究这些多KEM实例，并展示相较于简单解决方案，我们的多KEM在带宽方面至少节省了一个数量级，并且加密时间缩短了1.92至35倍。此外，我们还展示通过将多KEM与MLS使用的TreeKEM协议相结合（一个用于安全群组通信的IETF草案），我们可以获得显著的带宽节省。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_10](https://doi.org/10.1007/978-3-030-64837-4_10)
## Post-Quantum Verification of Fujisaki-Okamoto.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#post-quantum-verification-of-fujisaki-okamoto) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#post-quantum-verification-of-fujisaki-okamoto)**
### 作者
* Dominique Unruh, University of Tartu, Tartu, Estonia
### 摘要
> 我们提出了一种计算机验证的福岛-冈本变换的后量子安全证明的形式化方法（由Hövelmanns，Kiltz，Schäge和Unruh在PKC 2020上进行分析）。这种形式化方法是在量子关系Hoare逻辑中完成的，并在qrhl-tool（Unruh，POPL 2019）中进行了验证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_11](https://doi.org/10.1007/978-3-030-64837-4_11)
## A New Decryption Failure Attack Against HQC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#a-new-decryption-failure-attack-against-hqc) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#a-new-decryption-failure-attack-against-hqc)**
### 作者
* Qian Guo, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Qian Guo, Department of Informatics, University of Bergen, P.O. Box 7803, 5020, Bergen, Norway
### 摘要
> 《HQC是一个正在NIST后量子密码项目中标准化的IND-CCA2密钥交换机制，已经进入第二轮。它是一种基于编码的公钥加密方案，具有给定的参数集，涵盖了NIST安全强度1、3和5，分别对应经典安全性的128、192和256位。在本文中，我们提出了一种攻击方法，用于恢复名为hqc-256-1的HQC实例的秘密密钥。该攻击只需要进行一次预计算，之后再也不需要。对HQC实例的在线攻击随后提交约2^64个特殊密文进行解密（从预计算中获取），并通过分析阶段研究那些未正确解密的密文子集。在该阶段中，可以确定HQC实例的秘密密钥。如果攻击者平衡预计算和后处理的成本，整体复杂度估计为2^246，从而在NIST设置中对hqc-256-1发动成功攻击。如果允许预计算成本为2^254，这在256位秘密密钥上进行穷举搜索之下，后续部分的计算复杂度最多为2^64。这是与实际安全相关的设置，因为大规模预计算只需要一次完成。另外，我们注意到如果允许在线攻击提交超过2^64个密文进行解密，预计算的复杂度可以降低。》

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_12](https://doi.org/10.1007/978-3-030-64837-4_12)
## A Bit-Vector Differential Model for the Modular Addition by a Constant.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#a-bit-vector-differential-model-for-the-modular-addition-by-a-constant) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#a-bit-vector-differential-model-for-the-modular-addition-by-a-constant)**
### 作者
* Seyyed Arash Azimi, Department of Electrical Engineering, Sharif University of Technology, Tehran, Iran
* Mohammad Reza Aref, Department of Electrical Engineering, Sharif University of Technology, Tehran, Iran
* Adrián Ranea, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, imec-COSIC, KU Leuven, Leuven, Belgium
* Mahmoud Salmasizadeh, Electronic Research Institute, Sharif University of Technology, Tehran, Iran
* Javad Mohajeri, Electronic Research Institute, Sharif University of Technology, Tehran, Iran
* Vincent Rijmen, Department of Informatics, UiB, Bergen, Norway
### 摘要
> ARX算法是一类由加法、旋转和异或构成的对称密钥算法，其在低端微控制器中实现了最佳软件性能。为了评估ARX密码对差分密码分析及其变种的抵抗力，最近的自动化方法采用了约束满足求解器，比如SMT求解器来寻找最佳特性。制定这种搜索作为约束满足问题的主要困难是获取非线性操作的差分模型，也就是描述密码的每个非线性操作的差分概率的约束。虽然对于具有两个可变输入的模块加法获得了高效的位向量差分模型，但至今还没有针对常量的模块加法提出差分模型，这阻碍了包括此操作的ARX密码的自动化评估。
> 
> 本文提出了第一个n位模块加法的位向量差分模型。我们的模型包含O(log2(n))个基本位向量约束，并描述了差分概率的二进制对数。我们还提出了一种基于SMT的自动化方法，用于查找ARX的差分特性，包括常量加法，并提供了一个名为ArxPy的开源工具，可以完全自动化地寻找ARX的差分特性。为了提供一些示例，我们已经搜索了TEA、XTEA、HIGHT和LEA的相关密钥差分特性，获得了比以前更好的结果。我们的差分模型和自动化工具允许密码设计者选择模块加法的最佳常量输入，也允许密码分析人员评估ARX密码对差分攻击的抵抗力。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_13](https://doi.org/10.1007/978-3-030-64837-4_13)
## Mind the Propagation of States - New Automatic Search Tool for Impossible Differentials and Impossible Polytopic Transitions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#mind-the-propagation-of-states-new-automatic-search-tool-for-impossible-differentials-and-impossible-polytopic-transitions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#mind-the-propagation-of-states-new-automatic-search-tool-for-impossible-differentials-and-impossible-polytopic-transitions)**
### 作者
* Xichao Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yongqiang Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Shizhu Tian, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Mingsheng Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xichao Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yongqiang Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Shizhu Tian, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Mingsheng Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lin Jiao, State Key Laboratory of Cryptology, Beijing, China
### 摘要
> 不可能差分密码分析和不可能多面体密码分析是评估分组密码安全性的最有效方法。然而，它们的区别器之前的自动搜索方法既未考虑单密钥设置下密钥编排的影响和大型S盒差分特性，也不适用于具有可变旋转的分组密码。
> 
> 因此，与之前侧重于差分或s-差分传播的方法不同，我们根据状态传播重新定义不可能差分和不可能(s+1)-多面体转换，从而克服了先前方法的这些限制。从理论上讲，我们证明传统的不可能差分和不可能(s+1)-多面体转换相当于我们的重新定义的一部分，具有更广阔的优势。从技术上讲，我们更新了自动搜索模型，并设计了一种基于SAT的工具来高效地评估我们重新定义的不可能差分和不可能(s+1)-多面体转换。
> 
> 结果，对于GIFT64，我们获得了无法被所有先前工具检测到的6轮不可能差分。对于PRINTcipher，我们提出了第一个针对关键依赖置换和关键依赖S-盒的建模方法。对于MISTY1，我们通过利用S盒的差分特性获得了902个4轮不可能差分。对于RC5，我们提出了可变旋转的建模方法，并获得了每个版本的2.5轮不可能差分。更为重要的是，我们的工具可以用于评估给定密码方案对不可能差分的安全性，我们证明即使考虑3轮密钥之间的关系，AES-128不存在5轮1输入活动字和1输出活动字的不可能差分。此外，我们还获得了PRINTcipher、GIFT64、PRESENT和RC5的不可能(s+1)-多面体转换，据我们所知，这些转换都可以覆盖比它们对应的不可能差分更多的轮数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_14](https://doi.org/10.1007/978-3-030-64837-4_14)
## An Algebraic Formulation of the Division Property: Revisiting Degree Evaluations, Cube Attacks, and Key-Independent Sums.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-formulation-of-the-division-property-revisiting-degree-evaluations-cube-attacks-and-key-independent-sums) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-formulation-of-the-division-property-revisiting-degree-evaluations-cube-attacks-and-key-independent-sums)**
### 作者
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Qingju Wang, SnT, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### 摘要
> 自2015年提出作为积分性质的一般化以来，除法性质已经发展成为一种探索布尔函数结构的强大工具，其代数标准形式不可用。我们从纯代数的角度捕获了检测除法性质所需的最基本要素，并提出了一种名为“单项式预测”的技术，可以通过计算向量布尔函数\(\textit{\textbf{f}}\)的坐标函数乘积中所谓的单项式路径的数量来确定单项式的存在或不存在。在单项式预测框架下，我们正式证明了文献中大多数用于检测除法性质的算法不会产生误报，但可能会漏报。我们还建立了单项式预测和在EUROCRYPT 2020中介绍的无未知子集的三子集比特型除法性质之间的等价性，并且表明这两种技术完全准确。
> 
> 单项式预测技术可以被视为对除法性质定义的一种纯化，而无需使用外部多重集合。这种代数形式给予了对除法性质更深入的洞察，并激发了新的搜索策略。借助单项式预测，我们首次获得了Trivium在834轮以下的精确代数度。在立方攻击的背景下，我们能够在有限时间内探索更大的搜索空间，并借助分而治之的策略恢复复杂超多项式的精确代数标准形式。结果是，我们发现了更多维度较小的立方体，从而改进了针对840轮、841轮和842轮Trivium的一些近乎最优攻击方法。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_15](https://doi.org/10.1007/978-3-030-64837-4_15)
## An Algebraic Attack on Ciphers with Low-Degree Round Functions: Application to Full MiMC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-attack-on-ciphers-with-low-degree-round-functions-application-to-full-mimc) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-attack-on-ciphers-with-low-degree-round-functions-application-to-full-mimc)**
### 作者
* Maria Eichlseder, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, IAIK, Graz University of Technology, Graz, Austria
* Reinhard Lüftenegger, IAIK, Graz University of Technology, Graz, Austria
* Christian Rechberger, IAIK, Graz University of Technology, Graz, Austria
* Markus Schofnegger, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Morten Øygarden, Simula UiB, Bergen, Norway
* Qingju Wang, SnT, University of Luxembourg, Luxembourg City, Luxembourg
### 摘要
> 代数简单的PRFs（伪随机函数）、密码算法或密码散列函数正变得越来越流行，例如由于它们在多方计算和新的证明系统（SNARKs、STARKs等）方面具有吸引人的特性。
> 
> 在本论文中，我们聚焦于代数简单的构造MiMC，它由于简洁性而成为吸引密码学攻击目标，同时也因为在探索这个设计空间的更新算法竞赛中作为基准被使用。
> 
> 我们首次能够描述出关于MiMC在\({\mathbb {F}}_{2^n}\)上的所有完整轮版本的密钥恢复攻击，仅需要半个码本。在被选密文的情况下，从这些数据中恢复MiMC n位完整版本的密钥所需的操作相当于不到\(2^{n-\log _2(n) +1}\)次调用MiMC以及可忽略的内存开销。
> 
> 攻击过程是高阶差分攻击的一种泛化方法，基于两个主要因素。首先，我们提出了一种高阶区分器，利用MiMC的代数阶数增长速度明显比最初预计的要慢。其次，我们描述了一种将该区分器转化为密钥恢复攻击的方法，而无需猜测完整的子密钥。
> 
> 最后，我们证明了大约需要额外\(\lceil \log _3(2\cdot R)\rceil \)轮（其中\(R = \lceil n \cdot \log _3(2)\rceil \)为当前MiMC-n/n的轮数）才能恢复这里呈现的密钥恢复攻击的安全性。
> 
> 该攻击已在MiMC的仿真版本上得到验证。请注意，我们的攻击不会影响MiMC在素数域上的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_16](https://doi.org/10.1007/978-3-030-64837-4_16)
## Improvements of Algebraic Attacks for Solving the Rank Decoding and MinRank Problems.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#improvements-of-algebraic-attacks-for-solving-the-rank-decoding-and-minrank-problems) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#improvements-of-algebraic-attacks-for-solving-the-rank-decoding-and-minrank-problems)**
### 作者
* Maxime Bros, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Philippe Gaborit, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, University of Louisville, Louisville, USA
* Magali Bardet, Inria, 2 rue Simone Iff, 75012, Paris, France
* Jean-Pierre Tillich, Inria, 2 rue Simone Iff, 75012, Paris, France
* Magali Bardet, LITIS, University of Rouen Normandie, Mont-Saint-Aignan, France
* Daniel Cabarcas, Universidad Nacional de Colombia Sede Medellín, Medellín, Colombia
* Javier Verbel, Universidad Nacional de Colombia Sede Medellín, Medellín, Colombia
### 摘要
> 在这篇论文中，我们展示了如何显著改进用于解决MinRank问题的代数技术，该问题在多变量和秩度量编码密码学中非常普遍。在后者所涉及的结构MinRank实例中，我们基于最近的突破性研究[11]的基础上，通过一种轻微修改的方法，完全避免了对某些参数进行Gröbner基计算，并仅需要解线性系统。这不仅大大提高了复杂性，而且还为代数技术在这种情况下有效工作提供了有力的论证。当应用于第二轮NIST-PQC候选方案ROLLO-I-128/192/256时，我们的新攻击的位复杂性分别为71、87和151，与[11]中所得到的117、144和197相比。线性系统源于与代数建模相关的某个矩阵的最大子式的零空间。我们还使用类似的方法改进了常规MinRank问题的代数解算器。当应用于第二轮NIST-PQC候选方案GeMSS和Rainbow时，我们的攻击复杂性非常接近甚至略优于迄今为止已知的最佳攻击。请注意，这些先前的攻击并不依赖于MinRank技术，因为MinRank方法的复杂性远远超出了经典安全级别的要求。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_17](https://doi.org/10.1007/978-3-030-64837-4_17)
## Lower Bounds on the Degree of Block Ciphers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#lower-bounds-on-the-degree-of-block-ciphers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#lower-bounds-on-the-degree-of-block-ciphers)**
### 作者
* Phil Hebborn, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Baptiste Lambin, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, Japan
### 摘要
> 目前只有一种估算分组密码代数次数上限的方法是已知的，但对于设计师来说，这并不有助于保证安全性。本篇论文提供了现代分组密码代数次数的有意义的下界。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_18](https://doi.org/10.1007/978-3-030-64837-4_18)
## Towards Closing the Security Gap of Tweak-aNd-Tweak (TNT).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#towards-closing-the-security-gap-of-tweak-and-tweak-tnt) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#towards-closing-the-security-gap-of-tweak-and-tweak-tnt)**
### 作者
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Eik List, Bauhaus-Universität Weimar, Weimar, Germany
* Ling Song, Jinan University, Guangzhou, China
* Ling Song, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### 摘要
> 调整可叠加分组密码（TBC）已被确定为许多经典分组密码应用的有价值替代品。尽管在过去几年中提出了几种专用TBC，但从经典分组密码构建TBC的通用构造仍然非常有用，例如，可以重用现有的实现。然而，大多数通用构造都需要额外调用分组密码或通用哈希函数来处理调整，这限制了它们的效率。
> 
> 为了解决这一问题，Bao等人在EUROCRYPT’20提出了Tweak-aNd-Tweak（TNT）。他们的构造链了三次独立密钥置换的调用，并在每次调用之间将未修改的调整添加到状态中。他们进一步建议了一种基于轮减少AES的高效实例化TNT-AES用于每个置换。他们的工作可以证明其构造的2n/3位安全性，其中n是以位为单位的分组大小。但是，在缺乏上限的情况下，他们的分析必须考虑所有可能的攻击矢量，最多需要\(2^n\)时间、数据和内存。尽管如此，缩小两个边界之间的差距仍然是一个非常有趣的研究问题。
> 
> 在这项工作中，我们展示了Mennink在TCC’18上对CLRW2的变体区分器，使用\(O(\sqrt{n} 2^{3n/4})\)的数据和\(O(2^{3n/2})\)的时间。也适用于TNT。我们将其时间复杂度降低到\(O(\sqrt{n} 2^{3n/4})\)，展示了存在第二个类似的区分器，并展示了如何将区分器转化为从不可能的差分攻击中恢复密钥。从建设性的角度来看，我们适应了Jha和Nandi对CLRW2严格的STPRP分析，以展示对TNT的\(O(2^{3n/4})\) TPRP安全性。因此，我们朝着缩小先前证据和TNT攻击之间的差距以及其提出的实例迈出了一步。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_19](https://doi.org/10.1007/978-3-030-64837-4_19)
## Minimizing the Two-Round Tweakable Even-Mansour Cipher.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#minimizing-the-two-round-tweakable-even-mansour-cipher) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#minimizing-the-two-round-tweakable-even-mansour-cipher)**
### 作者
* Avijit Dutta, Institute for Advancing Intelligence, TCG-CREST, Kolkata, India
### 摘要
> 在CRYPTO 2015年的研究中，Cogliati等人提出了一个由单个n位公共置换\(\pi\)和一个均匀且几乎异或通用的散列函数H构造的一轮可调整 Even-Mansour (1-TEM) 密码，形式为 \((k, t, x) \mapsto \textsf {H}_k(t) \oplus \pi (\textsf {H}_k(t) \oplus x)\)，其中t是调整参数，x是n位消息。作者证明了它的两轮扩展，我们称之为2-TEM，通过级联2个独立的构造实例可以提供2n/3位安全性，而级联r轮后可以提供 \(rn/r+2\)位安全性。在ASIACRYPT 2015年的研究中，Cogliati 和 Seurin证明了由四个独立的n位置换\(\pi _1, \pi _2, \pi _3, \pi _4\) 和两个独立的n位密钥\(k_1, k_2\)构造的四轮可调整 Even-Mansour 密码，我们称之为4-TEM，对 \(2^{2n/3}\)个对手查询具有安全性。在本文中，我们证明了如果我们用一个单独的n位公共置换替换2-TEM (Cogliati等人，CRYPTO 2015)中的两个独立置换，那么结果构造仍然能保证对 \(2^{2n/3}\)个对手查询的安全性。使用其中推导出的结果，我们还证明了在上述方程中将置换 \((\pi _4, \pi _3)\) 替换为 \((\pi _1, \pi _2)\) 仍然保持对 \(2^{2n/3}\)个对手查询的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_20](https://doi.org/10.1007/978-3-030-64837-4_20)
## Beyond Birthday Bound Secure Fresh Rekeying: Application to Authenticated Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#beyond-birthday-bound-secure-fresh-rekeying-application-to-authenticated-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#beyond-birthday-bound-secure-fresh-rekeying-application-to-authenticated-encryption)**
### 作者
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 新鑰匙生成是一種保護原始碼或模式免受側信道攻擊的成熟方法：一個易於保護但密碼學上不那麼複雜的函數從主鑰匙生成子鑰匙，然後該子鑰匙用於加密單個或少數幾個消息的分塊。這是一種實現側信道保護的高效方式，但當前的解決方案在密碼器的分塊大小方面僅實現了生日界限安全性，因此將其安全性降低了一半（除非使用更複雜的原始碼）。我們提出了通用的並行分塊密碼重新生成解決方案，首次實現了超越分塊大小 n 生日界限的安全性。第一個解決方案除了子鑰匙生成外，還涉及一次乘法和核心分塊密碼呼叫，實現了 \(2^{2n/3}\) 的安全性。第二個解決方案進行了兩次分塊密碼呼叫，實現了最優 \(2^n\) 安全性。我們的第三個解決方案使用稍大的子鑰匙生成函數，但不需要對核心加密進行任何調整，同樣實現了最優安全性。該結構無縫地概括了基於置換的新鑰匙生成。我們方案的核心觀察是新鑰匙生成和通用可調雜湊分塊密碼設計兩者之間存在非常密切的關係，我們可以從後者的先進結果中吸取教訓，改進我們對前者的理解和開發。然後我們以建設性的方式使用這些重新生成方案，提供了三種具有超越生日界限安全性且易於保護免受側信道攻擊的驗證加密模式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_21](https://doi.org/10.1007/978-3-030-64837-4_21)
## Tight Security Analysis of 3-Round Key-Alternating Cipher with a Single Permutation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#tight-security-analysis-of-3-round-key-alternating-cipher-with-a-single-permutation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#tight-security-analysis-of-3-round-key-alternating-cipher-with-a-single-permutation)**
### 作者
* Yusai Wu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Liqing Yu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Xiaolei Dong, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Cyberspace Security Research Center, Peng Cheng Laboratory, Shenzhen, China
* Zhenfu Cao, Shanghai Institute of Intelligent Science and Technology, Tongji University, Shanghai, China
### 摘要
> 密钥交替密码（KAC）结构，其轮置换相互独立的严格安全界限已经得到了深入研究。然后一个自然的问题是，当我们在KAC结构中使用较少的排列时，安全界限将如何改变。在2014年的CRYPTO会议上，陈等人证明了具有单个排列的两轮KAC（2KACSP）与经典的两轮KAC（即2轮KAC）具有相同的安全级别。但是我们对于具有超过2轮的不完全独立KAC结构的安全界限仍知之甚少。在本文中，我们将证明类似的结果也适用于3轮的情况。更具体地说，我们证明了具有单个排列的3轮KAC（3KACSP）在\(Θ(2^{\frac{3n}{4}})\)次查询下是安全的，这也限制了3轮KAC的安全性。为了避免陈等人的工作中所使用的繁琐的图形说明，引入了一种新的表示方法来描述底层的组合问题。通过这种方法，我们可以以模块化的方式处理复杂的依赖关系，并展示了研究rKACSP安全性的一种可行方式。技术上，我们抽象出了一类问题，捕捉rKACSP构造的内在随机性，并提出了一个高层次的框架来处理这类问题。此外，我们的证明技术还表明，对于任何r，rKACSP与随机排列模型中的经典r轮KAC具有相同的安全级别。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_22](https://doi.org/10.1007/978-3-030-64837-4_22)
## Improved Security Analysis for Nonce-Based Enhanced Hash-then-Mask MACs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#improved-security-analysis-for-nonce-based-enhanced-hash-then-mask-macs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#improved-security-analysis-for-nonce-based-enhanced-hash-then-mask-macs)**
### 作者
* Wonseok Choi, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Yeongmin Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### 摘要
> 在本文中，我们证明了基于nonce的增强哈希-掩码MAC (\(\mathsf {nEHtM}\))在最多\(2^{\frac{3n}{4}}\)次MAC查询和\(2^n\)次验证查询（忽略对数因子）的情况下是安全的，只要有错误查询数\(\mu \)满足小于\(2^\frac{3n}{8}\)，这显著改进了Dutta等人之前的结果。即使当\(\mu \)超过\(2^{\frac{3n}{8}}\)时，\(\mathsf {nEHtM}\)的安全性也会逐渐降低。
> 
> 第二个结果是证明了基于PRF的\(\mathsf {nEHtM}\)的安全性；当\(\mathsf {nEHtM}\)基于一个n到s位随机函数（对于一个固定大小的s，使得\(1\le s\le n\)）时，只要满足以下条件，它就被证明是安全的：（1）\(s=n\)并且\(\mu <2^{\frac{n}{2}}\)，或者（2）\(\frac{n}{2}<s<2^{n-s}\)并且\(\mu <\max \{2^{\frac{s}{2}},2^{n-s}\}\)，或者（3）\(s\le \frac{n}{2}\)并且\(\mu <2^{\frac{n}{2}}\)。这个结果可以用来证明只返回原始标签的s位的截断\(\mathsf {nEHtM}\)的安全性，因为截断置换可以看作是伪随机函数。特别地，当\(s\le \frac{2n}{3}\)时，截断的\(\mathsf {nEHtM}\)在最多 \(2^{n-\frac{s}{2}}\)次MAC查询和 \(2^s\)次验证查询的情况下是安全的，只要\(\mu <\min \{2^{\frac{n}{2}},2^{n-s}\}\)。例如，当\(s=\frac{n}{2}\)（或者 \(s=\frac{n}{4}\)）时，截断的\(\mathsf {nEHtM}\)在最多 \(2^{\frac{3n}{4}}\)（或者 \(2^{\frac{7n}{8}}\)）次MAC查询的情况下是安全的。因此，与MAC查询数量相关，截断可能提供更好的可证安全性比原始的\(\mathsf {nEHtM}\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_23](https://doi.org/10.1007/978-3-030-64837-4_23)
## On the Adaptive Security of MACs and PRFs.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#on-the-adaptive-security-of-macs-and-prfs) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#on-the-adaptive-security-of-macs-and-prfs)**
### 作者
* Andrew Morgan, Cornell University, Ithaca, USA
* Elaine Shi, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York City, USA
### 摘要
> 我们考虑两种最常用的加密基元——消息认证码（MAC）和伪随机函数（PRF）——在具有适应性破坏的多用户环境下的安全性。虽然众所周知，任何安全的MAC或PRF在适应性破坏下也是多用户安全的，但简单的约化导致的安全损失与用户数量成线性关系。
> 
> 我们的主要结果表明，“标准”假设的黑盒约化不能用于为自适应多用户安全确定性无状态MAC提供紧密甚至线性保持的安全约化，从而也适用于PRF。换句话说，任何这样的黑盒约化都必然伴随着随着用户数量增加而增长的安全损失。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_24](https://doi.org/10.1007/978-3-030-64837-4_24)
## How to Build Optimally Secure PRFs Using Block Ciphers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#how-to-build-optimally-secure-prfs-using-block-ciphers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#how-to-build-optimally-secure-prfs-using-block-ciphers)**
### 作者
* Benoît Cogliati, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ashwin Jha, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
### 摘要
> 在EUROCRYPT'96中，Aiello和Venkatesan提出了两个2n位到2n位伪随机函数（PRFs）的候选方案，分别称为Benes和修改Benes（或mBenes），基于n位到n位的PRFs。虽然已经证明Benes对\(2^n\)个查询是安全的（Patarin，AFRICACRYPT’08），但mBenes的安全性仅在\(2^{n(1-\epsilon)}\)个查询上被Patarin和Montreuil在ICISC’05中证明对于所有的\(\epsilon > 0\)。在本文中，我们展示了一个由2n位哈希函数与mBenes组合而成的安全可变输入长度（VIL）PRF，对于\(2^{n-2}\)个查询是安全的（在给定适当的哈希函数边界的情况下）。我们将我们的分析扩展到以分组密码作为基本原语，并使用分组密码获得两个最优安全的VIL PRFs。这两个候选方案中的第一个需要调用分组密码6次。第二个候选方案只需要调用分组密码4次，但是这里的证明基于Patarin的镜像理论。此外，我们通过使用类似PMAC+/LightMAC+的哈希函数来实例化哈希函数，得到了六个具有最优安全性的确定性消息认证码的候选方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_25](https://doi.org/10.1007/978-3-030-64837-4_25)
## SILVER - Statistical Independence and Leakage Verification.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#silver-statistical-independence-and-leakage-verification) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#silver-statistical-independence-and-leakage-verification)**
### 作者
* David Knichel, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
* Pascal Sasdrich, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
* Amir Moradi, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
### 摘要
> 实现密码学功能在物理对手存在的情况下仍然是一个挑战，尽管在物理安全领域的大部分研究已经用于开发对策。在几种保护方案中，掩蔽方案吸引了学术界和工业界的大量研究关注，因为它具有理论基础，可以提供证明或对实现的安全级别进行建模。然而，掩蔽方案难以实施，因为实施过程通常是手动的、复杂的和容易出错的。这促使对设计师和工程师在制造之前进行分析和验证的形式验证工具的需求。
> 
> 在这项工作中，我们提出了一个新的框架，用于使用不同的安全模型和参考来分析和验证掩蔽实现的各种安全概念。特别地，我们的框架直接处理硬件合成的门级网表，特别依赖于降低有序二进制决策图（ROBDDs）和概率分布的统计独立概念。与现有工具相比，我们的框架由于其简单性、准确性和功能性而具有吸引力，同时对于许多应用和常见用例仍具有相对高效的性能。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_26](https://doi.org/10.1007/978-3-030-64837-4_26)
## Cryptanalysis of Masked Ciphers: A Not So Random Idea.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#cryptanalysis-of-masked-ciphers-a-not-so-random-idea) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#cryptanalysis-of-masked-ciphers-a-not-so-random-idea)**
### 作者
* Tim Beyne, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Siemen Dhooghe, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Zhenda Zhang, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
### 摘要
> 开发了一种针对硬件导向的掩蔽密码进行二阶次信道攻击安全分析的新方法。通过依赖对称密钥密码分析技术，可以在一种变体的探测模型中获得具体的安全界限，该模型允许对手进行有界但可能非常大量的测量。具体而言，正式证明了如何将有界查询的鲁棒探测安全性变种降低为掩蔽密码的线性密码分析。因此，可以在不依赖新鲜随机性的情况下克服高阶阈值实现的组合问题。从实际角度来看，上述方法使得许多一阶阈值实现的理想特性可以应用于二阶设置。例如，直接应用于分组密码LED时，使用少于700个随机位（包括初始共享）进行掩蔽。此外，本文介绍的密码分析方法为掩蔽密码的设计提供了额外的见解，并允许在安全性和性能之间进行可量化的权衡。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_27](https://doi.org/10.1007/978-3-030-64837-4_27)
## Packed Multiplication: How to Amortize the Cost of Side-Channel Masking?
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#packed-multiplication-how-to-amortize-the-cost-of-side-channel-masking) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#packed-multiplication-how-to-amortize-the-cost-of-side-channel-masking)**
### 作者
* Weijia Wang, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Weijia Wang, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Weijia Wang, State Key Laboratory of Information Security (Institute of Information Engineering), Chinese Academy of Sciences, Beijing, 100093, China
* Chun Guo, State Key Laboratory of Information Security (Institute of Information Engineering), Chinese Academy of Sciences, Beijing, 100093, China
* François-Xavier Standaert, Institute of Information and Communication Technologies, Electronics and Applied Mathematics (ICTEAM), UCLouvain, 1348, Louvain-la-Neuve, Belgium
* Gaëtan Cassiers, Institute of Information and Communication Technologies, Electronics and Applied Mathematics (ICTEAM), UCLouvain, 1348, Louvain-la-Neuve, Belgium
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Qizhi Institute, Shanghai, 200232, China
### 摘要
> 高阶掩蔽对策能够在侧信道攻击方面提供强大的可证明安全性，但代价是产生显著的开销，这在很大程度上限制了其适用性。以往解决成本的相关工作主要集中在“局部”计算上，即优化计算单元的成本，例如一个与门或场乘法。本文探讨了一种互补的“全局”方法，即将掩蔽域中的多个操作作为一批来考虑，并通过摊销减少随机性和计算开销。具体而言，我们关注适当整数 \(\ell > 1\) 下 \(\ell \) 个并行场乘法的摊销，并设计了一个名为打包乘法的工具包来实现这样一个批处理过程。对于 \(\ell +d\le 2^m\)，当在具有 d 阶探测安全性的 \(\mathbb {F}_{2^{m}}\) 上实现 \(\ell \) 个并行乘法时，打包乘法需要消耗 \(d^2+2\ell d + \ell \) 个双线性乘法和 \(2d^2 + d(d+1)/2\) 个随机场变量，优于现有技术结果的 \(O(\ell d^2)\) 个乘法和 \(\ell \left\lfloor d^2/4\right\rfloor + \ell d\) 个随机性。为了证明打包乘法的 d 探测安全性，我们引入了一些多输入多输出器件的较弱的安全概念，并将它们用作中间步骤，这可能具有独立的研究价值。由于并行场乘法在对称加密中几乎无处不在，将从“局部”优化转移到“全局”大大扩大了改进的空间。为了证明这一点，我们在 AES Subbytes 步骤、GCM 和 TET（一种常见的磁盘加密）中展示了该方法。值得注意的是，当 \(d=8\) 时，我们在 ARM Cortex M 架构中实现的 AES Subbytes 可使总速度提高高达 \(33\%\)，并且比 ASIACRYPT 2018 年报道的最先进的位切片实现节省了高达 \(68\%\) 的随机比特。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_28](https://doi.org/10.1007/978-3-030-64837-4_28)
## Side Channel Information Set Decoding Using Iterative Chunking - Plaintext Recovery from the "Classic McEliece" Hardware Reference Implementation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#side-channel-information-set-decoding-using-iterative-chunking-plaintext-recovery-from-the-classic-mceliece-hardware-reference-implementation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#side-channel-information-set-decoding-using-iterative-chunking-plaintext-recovery-from-the-classic-mceliece-hardware-reference-implementation)**
### 作者
* Norman Lahr, Fraunhofer SIT, Darmstadt, Germany
* Ruben Niederhagen, Fraunhofer SIT, Darmstadt, Germany
* Richard Petri, Fraunhofer SIT, Darmstadt, Germany
* Simona Samardjiska, Radboud Universiteit, Nijmegen, The Netherlands
### 摘要
> 本文提出了一种基于侧信道信息和ISD的基于代码的Niederreiter密码系统的攻击，以及使用电磁侧信道评估攻击的可行性。我们首先直接将Shoufan等人在2010年提出的时序侧信道明文恢复攻击方法应用于Niederreiter密码系统的常量时间实现，该实现在NIST决赛作品“经典McEliece”的官方FPGA实现中使用。然后，我们使用ISD和一种名为迭代分块的新技术来进一步显著减少所需的侧信道测量次数。理论上，我们证明了攻击改进对减少所需的侧信道测量次数有重大影响。例如，对于“经典McEliece”的256位安全参数设置kem/mceliece6960119，我们改进了基本攻击方法，该方法需要5415次测量，平均只需要不到562次测量即可成功发动明文恢复攻击。进一步的减少可以通过增加ISD计算的成本来实现。我们通过在所有提议的参数集上实际攻击“经典McEliece”的官方FPGA实现来确认我们的发现。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_29](https://doi.org/10.1007/978-3-030-64837-4_29)
