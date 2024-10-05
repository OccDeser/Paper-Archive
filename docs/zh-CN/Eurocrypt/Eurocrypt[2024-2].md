# Eurocrypt[2024-2]
## Anamorphic Encryption, Revisited.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#anamorphic-encryption-revisited) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#anamorphic-encryption-revisited)**
### 作者
* Fabio Banfi, Zühlke Engineering AG, Schlieren, Switzerland
* Konstantin Gegier, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Martin Hirt, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Guilherme Rito, Ruhr-Universität Bochum, Bochum, Germany
### 摘要
> 一种变形加密方案允许两个共享所谓双重密钥的方可以嵌入已建立的PKE方案的密文中的隐秘信息。这可以防止一个专制者强迫接收者揭示PKE方案的秘密密钥，但他对双关键字的存在毫不知情。我们确定了Persiano，Phan和Yung（EUROCRYPT 2022）原始模型的两个限制。首先，在他们的定义中，一个双重密钥只能与密钥对一起生成一次。这有缺点，即想要在专制统治后使用变形模式的接收方需要部署新的密钥对，这可能是可疑的行为。其次，接收方无法区分密文是否包含隐秘信息。
> 
> 在这项工作中，我们提出了一个新模型，克服了这些限制。首先，我们允许在部署后将多个双重密钥与密钥对关联起来。这也使得在双重密钥仅依赖于公钥的情况下，可以进行否认。其次，我们提出了一个自然的强度概念，它保证以变形方式解密正常加密的消息会导致指示不包含隐秘信息的特殊符号，这也消除了某些攻击。
> 
> 最后，为了实例化我们的新、更强的变形加密定义，我们提供了通用的和具体的构造。具体地说，我们表明ElGamal和Cramer-Shoup满足一个新的条件，选择性随机数恢复能力，这使得可以进行强大的变形扩展，并且我们还为RSA-OAEP提供了一种强大的变形扩展。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_1](https://doi.org/10.1007/978-3-031-58723-8_1)
## Anamorphic Encryption: New Constructions and Homomorphic Realizations.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#anamorphic-encryption-new-constructions-and-homomorphic-realizations) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#anamorphic-encryption-new-constructions-and-homomorphic-realizations)**
### 作者
* Dario Catalano, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Francesco Migliaro, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
* Emanuele Giunta, Web 3.0 Foundation, Zug, Switzerland
### 摘要
> 优美的非等距加密范例（Persiano等，Eurocrypt 2022）考虑在一个由独裁者控制的世界建立私密通信的问题。挑战在于允许共享某些秘密非等距密钥的两个用户交换隐蔽消息，而独裁者即使完全访问常规的秘密密钥也不会注意到。在过去一年中，几项工作考虑了这个问题并提出了构造，新颖的扩展和强化的定义。
> 
> 在这项工作中，我们从三个主要方向上取得了这种原语的研究进展。首先，我们展示了两个广泛且成熟的加密范例，即混合加密和IBE-to-CCA转换，均具有非常简单且自然的非等距扩展。接下来，我们展示了非等距性，远非仅限于“基本”的加密方案，它也适用于同态加密。我们展示了一些现有的同态方案（尤其是Gentry，Sahai和Waters提出的全同态方案）可以被制作成非等距的，同时保留它们的同态属性，无论是针对常规消息还是隐蔽消息。
> 
> 最后，我们通过设想将非等距密钥分为加密组件（仅允许加密隐蔽消息）和解密组件来完善非等距加密的概念。这使得接收者可以建立几个独立的与单个隐蔽密钥相关联的隐蔽通道。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_2](https://doi.org/10.1007/978-3-031-58723-8_2)
## Fully Homomorphic Encryption Beyond IND-CCA1 Security: Integrity Through Verifiability.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#fully-homomorphic-encryption-beyond-ind-cca1-security-integrity-through-verifiability) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#fully-homomorphic-encryption-beyond-ind-cca1-security-integrity-through-verifiability)**
### 作者
* Mark Manulis, PACY Lab @ RI CODE, Universität der Bundeswehr München, Munich, Germany
* Jérôme Nguyen, PACY Lab @ RI CODE, Universität der Bundeswehr München, Munich, Germany
### 摘要
> 我们关注构建完全同态加密（FHE）方案的问题，这些方案实现了一些有意义的自适应选择密文安全性概念，超越 \(\textrm{CCA1}\)。为此，我们提出了一个新概念，称为对验证选择密文攻击的安全性（\(\textrm{vCCA}\)）。其背后的思想是通过对评估算法施加强大控制来确保密文的完整性。基本上，我们要求通过同态评估获得的密文必须与原始输入密文“链接”在一起。我们用两种等价形式明确定义了 \(\textrm{vCCA}\) 概念；第一种是在不可区分范式中，第二种遵循非可塑性基于模拟方法，并且是 Boneh 等人在 2012 年介绍的有针对性可塑性的推广。
> 
> 我们通过探索与同态加密方案的现有安全性概念的关系来加强我们定义的可信度，即 \(\textrm{CCA1}\)、\(\textrm{RCCA}\)、\(\textrm{FuncCPA}\)、\(\textrm{CCVA}\)和 \(\textrm{HCCA}\)。我们证明 \(\textrm{vCCA}\) 安全性是迄今为止已知的最强概念，可以由 FHE 方案实现；特别是，\(\textrm{vCCA}\) 比 \(\textrm{CCA1}\) 强得多。
> 
> 最后，我们提供一个通用转换，将任何 \(\textrm{CPA}\)-安全的 FHE 方案转变为 \(\textrm{vCCA}\)-安全。我们的转换首先将 FHE 方案转变为一个 \(\textrm{CCA2}\)-安全方案，其中部分密文保留同态属性，然后使用简洁的非交互式知识论证（SNARK）扩展它以可验证地控制评估算法。事实上，我们获得了这个转换的四种常规变体。我们处理对称密钥和非对称密钥 FHE 方案，对于每种方案，我们提供两种不同之处在于密文完整性是否可以公开验证或需要秘钥的变体。我们使用众所周知的技术在转换的第一步中实现 \(\textrm{CCA2}\) 安全性。在非对称情况下，我们使用双重加密范式，在对称情况下，我们使用“加密然后认证”技术。此外，我们的转换还提供了基于引导技术的第一个 \(\textrm{CCA1}\)-安全 FHE 方案。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_3](https://doi.org/10.1007/978-3-031-58723-8_3)
## Bootstrapping Bits with CKKS.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#bootstrapping-bits-with-ckks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#bootstrapping-bits-with-ckks)**
### 作者
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jaehyung Kim, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Damien Stehlé, CryptoLab Inc., Lyon, France
### 摘要
> Cheon-Kim-Kim-Song（CKKS）完全同态加密方案旨在在加密状态下高效地执行实数计算。最近，Drucker等人 [J. Cryptol.] 提出了一种有效的策略，使用CKKS以黑盒方式执行二进制数据的计算。
> 
> 在这项工作中，我们介绍了几种专门设计用于加密二进制数据的CKKS引导算法。关键是，新的CKKS引导算法使得可以引导包含二进制数据的密文中的最高有效位。首先，这允许减少引导中使用的模数，从而节省更多的模数预算用于非引导操作。特别是，我们首次在环度数为\(2^{14}\)的完整槽引导中获得了可行性。其次，密文格式与DM/CGGI完全同态加密方案中使用的格式兼容。有趣的是，我们可以将CKKS位引导算法与Bae等人的快速环填充技术[Crypto’23]相结合。这导致了一种新的DM/CGGI引导算法，当同时执行的引导数量较少时，它优于现有技术。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_4](https://doi.org/10.1007/978-3-031-58723-8_4)
## Concurrently Secure Blind Schnorr Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#concurrently-secure-blind-schnorr-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#concurrently-secure-blind-schnorr-signatures)**
### 作者
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Mathias Wolf, TU Wien, Vienna, Austria
### 摘要
> 盲签名在区块链等很多应用场景中都需要与现有系统兼容性，并且盲发Schnorr签名（现在已由主流加密货币标准化和支持）也十分理想。然而，为了防止拒绝服务攻击，签名协议的安全性必须是并发的。我们提出了一个同时安全的盲签名协议，使用标准原语NIZK和PKE，并假设Schnorr签名本身是不可伪造的。我们的协议是第一个与256位椭圆曲线上标准Schnorr实现兼容的协议。我们将我们的方案作为盲签名和部分盲签名的概括：我们引入谓词盲签名的概念，其中签名者可以定义盲签名消息必须满足的谓词。我们为各种原语和场景提供了实现和基准测试，例如只有在满足签名者指定的某些条件时，才盲目签署比特币交易。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_5](https://doi.org/10.1007/978-3-031-58723-8_5)
## Foundations of Adaptor Signatures.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#foundations-of-adaptor-signatures) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#foundations-of-adaptor-signatures)**
### 作者
* Paul Gerhart, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Dominique Schröder, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Pratik Soni, University of Utah, Salt Lake City, UT, USA
* Sri AravindaKrishnan Thyagarajan, University of Sydney, Sydney, Australia
### 摘要
> 适配器签名通过在NP关系的陈述消息上计算预签名来扩展普通签名的功能。预签名是公开可验证的；它们同时隐藏并承诺对该消息上的基础签名方案的签名。拥有该陈述对应见证的任何人都可以调整预签名以获得“常规”签名。适配器签名已经在区块链系统的条件支付中找到了众多应用，例如支付通道（CCS'20，CCS'21），私人币混合（CCS'22，SP'23），以及基于预言的支付（NDSS'23）。
> 
> 在我们的工作中，我们重新审视了适配器签名及其构造的安全状态。特别是，我们的两个主要贡献是：
> 
> 安全漏洞和定义：我们回顾了Aumayr等人提出的适配器签名的广泛使用的安全模型，并确定了其定义中存在的漏洞，这使得已知的私人币混合和基于预言的支付协议不安全。我们给出了一些简单反例，这些适配器签名在其定义既是安全的，又导致了这些协议的不安全实例。为了填补这些漏洞，我们确定了一组最小的模块化定义，这些定义与这些实际应用实现一致。
> 
> 安全构造：尽管适配器签名很受欢迎，但所有已知的构造都是（1）通过随机预言模型中的Fiat-Shamir转换从识别方案派生，或者（2）需要修改基础签名验证算法，从而使构造在加密货币环境中无用。更让人担忧的是，所有已知的构造都被证明安全，尽管在Aumayr等人的不足定义下，这使我们没有可以在应用中使用的可证安全的适配器签名方案。
> 
> 首先，在这项工作中，我们通过证明我们提出的定义下广泛使用的Schnorr适配器签名的安全性，拯救了所有当前的应用。然后，我们提供了几种新构造，包括提出了Camenisch-Lysyanskaya（CL）、Boneh-Boyen-Shacham（BBS+）和Waters签名的第一个适配器签名方案，所有这些都在标准模型下被证明安全。我们的新构造依赖于数字签名的新抽象，称为二分签名，它涵盖了我们构建适配器签名所需的基本属性。证明所有构造的安全性（包括基于识别的方案）依赖于新颖的非黑盒证明技术。我们的数字签名抽象和证明技术都可能对社区有独立的兴趣。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_6](https://doi.org/10.1007/978-3-031-58723-8_6)
## Laconic Function Evaluation, Functional Encryption and Obfuscation for RAMs with Sublinear Computation.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#laconic-function-evaluation-functional-encryption-and-obfuscation-for-rams-with-sublinear-computation) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#laconic-function-evaluation-functional-encryption-and-obfuscation-for-rams-with-sublinear-computation)**
### 作者
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Zihan Hao, IIIS, Tsinghua University, Beijing, China
* Ethan Mook, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### 摘要
> 简约函数评估（LFE）是完全同态加密的“翻转”版本，其中执行计算的服务器获得输出。服务器通过输出小型摘要来承诺函数f。客户端稍后可以高效地根据摘要加密输入x，而不必花费计算f的时间，并确保服务器只解密了f（x），但不了解x的任何其他信息。以前的作品构建了LWE下的电路LFE，以及通过无法区分混淆（iO）从图灵机（TM）构建的LFE。在这项工作中，我们介绍了随机存取机的LFE（RAM-LFE）。服务器通过短摘要承诺一个可能巨大的数据库y。稍后，客户端可以高效地根据摘要对输入x进行加密，并且服务器对于某些指定的RAM程序f（例如，通用RAM）解密f（x，y），而不了解与x有关的其他信息。 RAM-LFE的主要优点在于服务器的解密运行时间仅随着计算f（x，y）的RAM运行时间T而缩放，而该时间可以在|x|和|y|中均为次线性。我们考虑一个弱效的变体，其中客户端的运行时间也可以与T成线性比，但不与|y|成比例，以及完全有效的变体，其中客户端的运行时间必须在T和|y|中均为次线性。我们从双效的私人信息检索（DEPIR）和简洁OT（LOT）构建前者，这两者都已知于RingLWE，并从iO的进一步使用构建后者。然后，我们展示了如何利用完全有效的RAM-LFE来获得（多密钥）RAM功能加密（RAM-FE），其中秘密密钥与大型数据库y相关联，解密时间小于|y|的次线性，以及iO for RAMs，其中混淆程序包含大型数据库y，并且评估时间小于|y|的次线性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_7](https://doi.org/10.1007/978-3-031-58723-8_7)
## Threshold Raccoon: Practical Threshold Signatures from Standard Lattice Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#threshold-raccoon-practical-threshold-signatures-from-standard-lattice-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#threshold-raccoon-practical-threshold-signatures-from-standard-lattice-assumptions)**
### 作者
* Rafael del Pino, PQShield, Oxford, UK
* Shuichi Katsumata, PQShield, Oxford, UK
* Mary Maller, PQShield, Oxford, UK
* Thomas Prest, PQShield, Oxford, UK
* Markku-Juhani Saarinen, PQShield, Oxford, UK
* Shuichi Katsumata, AIST, Tokyo, Japan
* Mary Maller, Ethereum Foundation, Zug, Switzerland
* Fabrice Mouhartem, XWiki/CryptPad, Bruxelles, Belgium
* Markku-Juhani Saarinen, Tampere University, Tampere, Finland
### 摘要
> 门限签名通过将签名密钥分成N份并分发给不同的参与方来提高数字签名的可用性和安全性。稍后，任何至少包括T个参与方的子集可以合作在给定消息上产生签名。虽然门限签名在量子前置条件下得到了广泛研究，但在量子鲁棒假设下仍然稀缺。
> 
> 我们提供了第一个有效的基于格的门限签名，签名大小为13 KiB，每个用户的通信成本为40 KiB，支持最多1024个签名者的阈值大小。我们提供了一个附带的高性能实现。该方案的安全性基于与Dilithium相同的假设，Dilithium是最近由NIST选择用于标准化的签名，在我们所知道的范围内，很难轻松地实现门限签名。
> 
> 在签名期间使用的所有操作均由对称原语和简单的格操作产生；特别是，我们的方案不需要像以前的构造中那样使用重型工具，如门限全同态加密或同态陷门承诺。关键技术思想是使用一次性添加掩码来减轻通过部分签名泄漏部分签名密钥的风险。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_8](https://doi.org/10.1007/978-3-031-58723-8_8)
## Lower Bounds for Lattice-Based Compact Functional Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#lower-bounds-for-lattice-based-compact-functional-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#lower-bounds-for-lattice-based-compact-functional-encryption)**
### 作者
* Erkan Tairi, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Akin Ünal, ISTA, Klosterneuburg, Austria
### 摘要
> 功能加密（FE）是一种原语，其中具有主秘密密钥的持有人可以控制用户可以评估加密数据的功能。它是一种强大的原语，甚至意味着不可区分混淆（iO），如果密文足够紧凑（Ananth-Jain，CRYPTO'15和Bitansky-Vaikuntanathan，FOCS'15）。但是，尽管经过了广泛的研究，仍然存在FE方案，例如功能隐藏内积FE（Bishop-Jain-Kowalczyk，AC'15，Abdalla-Catalano-Fiore-Gay-Ursu，CRYPTO'18）和紧凑二次FE（Baltico-Catalano-Fiore-Gay，Lin，CRYPTO'17），仅能使用配对实现。这引发了一个问题，即是否存在一些数学障碍阻碍我们从其他假设中实现这些FE方案。
> 
> 在本文中，我们研究构建基于格的紧凑FE的难度。我们推广了Ünal（EC'20）对基于格的功能隐藏FE的不可能结果，并将其扩展到紧凑FE的情况。具体而言，我们证明了基于格的紧凑FE方案的下限，这些方案在加密和解密时满足某些（自然的）代数限制，并且具有线性大小的密文和最小度的秘密密钥。我们认为我们的结果是说明构建基于格的FE方案以实现新功能的难度，以及必须克服哪些数学障碍的重要指示。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_9](https://doi.org/10.1007/978-3-031-58723-8_9)
## Succinct Functional Commitments for Circuits from k-sfLin.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#succinct-functional-commitments-for-circuits-from-k-sflin) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#succinct-functional-commitments-for-circuits-from-k-sflin)**
### 作者
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### 摘要
> 功能承诺允许用户承诺一个输入 \(\textbf{x}\)，然后可以将其公开给任意函数 \(\textbf{y}= f(\textbf{x})\)。承诺的大小和公开的大小应该都是 \(\left| \textbf{x} \right| \) 和 \(\left| f \right| \) 的次线性。
> 
> 在这项工作中，我们提出了第一个基于配对的功能承诺，适用于任意电路，其中承诺的大小和公开的大小都由恒定数量的群元素组成。安全性依赖于标准的双边 k-\(\textsf{Lin}\) 假设。这是第一个基于可驳斥的双线性映射假设具有这种简洁性水平的方案（之前的方法需要对 \(\textsf{NP} \) 使用SNARKs）。这也是第一个用于具有 \(\textsf{poly}(\lambda )\) 大小的承诺和任意假设的开放的一般电路的功能承诺方案，其完全黑盒使用了密码原语和算法。我们的构造依赖于可能是独立感兴趣的新的射影可链接承诺概念。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_10](https://doi.org/10.1007/978-3-031-58723-8_10)
## Time-Lock Puzzles with Efficient Batch Solving.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#time-lock-puzzles-with-efficient-batch-solving) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#time-lock-puzzles-with-efficient-batch-solving)**
### 作者
* Jesko Dujmovic, Helmholtz Center for Information Security (CISPA) and Saarbrücken Graduate School of Computer Science, Saarbrücken, Germany
* Rachit Garg, University of Texas at Austin, Austin, TX, USA
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### 摘要
> 时限拼图(Time-Lock Puzzles, TLPs)是一个强大的工具，可用于在预定时间点之前隐藏信息。在解决多个拼图时，在很多情况下，具备批量解决拼图的能力非常关键，即在解决单个拼图的同时，同时打开多个拼图。不幸的是，所有已知的支持批处理解决的TLP构造都依赖于超多项式安全的区分不出混淆（indistinguishability obfuscation），使它们不切实际。针对这一挑战，我们提出了新颖的TLP构造，提供了批量解决的能力，而不使用沉重的加密工具。我们提出的方案简单且具有实际效率，可以基于pairings或学习误差(LWE)等已建立的加密假设构建。在此过程中，我们还提出了新的基于格子和配对设置下的可穿孔的关键同态PRF构造，这可能是独立的研究兴趣。我们的分析利用了与Hall的婚姻定理的有趣连接，并采用了优化的组合方法，增强了我们的TLP方案的实用性和可行性。
> 
> 此外，我们引入“流氓拼图攻击”概念，恶意构造的拼图实例可能会破坏诚实拼图的批量解决过程。我们随后提出了具体、高效的TLP构造，旨在防止这种攻击。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_11](https://doi.org/10.1007/978-3-031-58723-8_11)
## Circuit Bootstrapping: Faster and Smaller.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#circuit-bootstrapping-faster-and-smaller) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#circuit-bootstrapping-faster-and-smaller)**
### 作者
* Ruida Wang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhihao Li, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xianhui Lu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Benqiang Wei, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Kun Liu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Kunpeng Wang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ruida Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Zhihao Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xianhui Lu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Benqiang Wei, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Kun Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Kunpeng Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yundi Wen, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
### 摘要
> 我们提出了一种新颖的电路引导算法，其性能优于现有技术 TFHE 方法，速度提高 9.9 倍，密钥大小减小 15.6 倍。这些改进可归因于两个技术贡献。首先，我们重新设计了电路引导工作流程，使其仅在环密码文类型下运行，从而消除了在 LWE 和 RLWE 密文之间的转换需求。其次，我们通过减少自同构数量改进了 LMKC+ 盲旋转算法，然后提出了第一个基于自同构类型的多值功能引导。这些基于自同构的技术导致了进一步的密钥大小优化，并且除了电路引导以外还具有独立的兴趣。基于我们的新电路引导，我们可以在 26.2 秒（单线程）内评估 AES-128，与现有技术 TFHE 方法相比，实现了 10.3 倍的加速。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_12](https://doi.org/10.1007/978-3-031-58723-8_12)
## Registered Functional Encryptions from Pairings.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#registered-functional-encryptions-from-pairings) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#registered-functional-encryptions-from-pairings)**
### 作者
* Ziqi Zhu, East China Normal University, Shanghai, China
* Junqing Gong, East China Normal University, Shanghai, China
* Haifeng Qian, East China Normal University, Shanghai, China
* Jiangtao Li, Shanghai University, Shanghai, China
* Kai Zhang, Shanghai University of Electric Power, Shanghai, China
* Junqing Gong, Shanghai Qi Zhi Institute, Shanghai, China
### 摘要
> 这项工作开始研究“非全无”功能的具体注册功能加密（Reg-FE）：我们从配对构建了第一个线性函数或内积评估的Reg-FE（Reg-IPFE）。该方案在素数阶双线性群中基于k-Lin假设实现自适应IND安全。轻微修改即可从k-Lin假设获得第一个已注册的内积加密（Reg-IPE）方案。之前的研究在通用群模型中实现相同的安全性。
> 
> 我们从配对构建了第一个二次函数的Reg-FE（Reg-QFE）。该方案在素数阶双线性群中基于双边k-Lin假设实现非常选择性的基于模拟的安全性（SIM-security）。这里，“非常选择性”意味着对手声称挑战消息、要注册的所有二次函数和在开始时所有已损坏的用户。
> 
> 除了专注于主公钥和辅助密钥的紧凑性外，我们还旨在实现Reg-FE中的紧凑密文。设L为插槽的数量，n为输入大小。我们的第一个Reg-IPFE具有弱紧凑的密文大小为\(O(n\cdot \log L)\)，而我们的第二个Reg-QFE具有密文大小为\(O(n+\log L)\)。从技术上讲，对于我们的第一个Reg-IPFE，我们在Reg-IPFE的上下文中采用嵌套的双系统方法；对于我们的第二个Reg-QFE，我们遵循Wee的“IPFE-to-QFE”变换[TCC ’20]，但设计了一组新技术，使我们的基于配对的Reg-IPFE具有兼容性。在此过程中，我们引入了一个名为“Pre-Constrained Registered IPFE”的新概念，它通过约束可以注册的函数形式推广了插槽式的Reg-IPFE。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_13](https://doi.org/10.1007/978-3-031-58723-8_13)
## Accelerating BGV Bootstrapping for Large p Using Null Polynomials over $\mathbb {Z}_{p^e}$.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#accelerating-bgv-bootstrapping-for-large-p-using-null-polynomials-over-mathbb-z-p-e) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#accelerating-bgv-bootstrapping-for-large-p-using-null-polynomials-over-mathbb-z-p-e)**
### 作者
* Shihe Ma, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China
* Tairong Huang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Anyu Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
### 摘要
> BGV方案是计算同态整数算术的最受欢迎的FHE方案之一。BGV的引导技术在同态计算任意深度电路时是必需的。然而，由于其数码去除过程表现出至少为O(√p)的计算复杂度，所以BGV引导在大明文质数p上性能较差。在本文中，我们提出了针对大型p的数位去除过程优化，通过利用环Zp^e上的零多项式的特性。具体而言，我们展示了可以基于数位去除过程输入的两个观察结果构建低度数零多项式的可能性：1）输入的支持大小可以通过(2B+1)^2上界；2）要移除的低位数大小可以由B上界控制。在我们的参数选择中，B可以在一个狭小的区间[22, 23]内控制，使得这些零多项式的度数要小得多。这些低度数零多项式可以显着减少同态数位移除中的多项式度数，从而减少运行时间和容量消耗。从理论上讲，我们的优化将从Chen和Han的O(√pe)或Geelen等人的O(√p∛e)降至min(2B+1，√e/t(2B+1))的计算成本，其中t≥1。我们使用p=17、127、257、8191和65537在HElib上实现和基准测试了我们的方法（代码可在https://github.com/msh086/BGV-Boot-for-Large-p获得）。通过我们优化的数位移除，我们的引导吞吐量比HElib高1.38倍至151倍，速度提升随着p值的增加而增加。对于p=65537，我们将数位移除步骤加速了80倍，并将引导时间从12个小时以上缩短到不到14分钟。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_14](https://doi.org/10.1007/978-3-031-58723-8_14)
## A General Framework for Lattice-Based ABE Using Evasive Inner-Product Functional Encryption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#a-general-framework-for-lattice-based-abe-using-evasive-inner-product-functional-encryption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#a-general-framework-for-lattice-based-abe-using-evasive-inner-product-functional-encryption)**
### 作者
* Yao-Ching Hsieh, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Huijia Lin, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Ji Luo, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### 摘要
> 我们提出了一个通用框架，用于构建基于格的属性加密（ABE）方案，该方案适用于任意函数类，这个框架由两个要素组成：i）用于该类的有噪线性秘密共享方案，ii）一种新型的内积功能加密（IPFE）方案，我们在本文中介绍了称为回避 IPFE 的方案。我们提出了基于格的回避 IPFE 方案，并根据最近由 Wee [EUROCRYPT ’22] 和 Tsabary [CRYPTO ’22] 提出的回避学习与错误（LWE）假设的变体，建立了它们的安全性。
> 
> 我们的通用框架是模块化且概念上简单的，将构建 ABE 的任务简化为构建有噪声线性秘密共享方案，这是一种更轻量级的原语。我们的框架的多功能性通过基于回避 LWE 假设的三种新 ABE 方案得到展示。
> 
> 我们得到了两种针对所有多项式大小电路的密文策略 ABE 方案，具有预定深度限制。其中一种方案具有简洁的密文和秘密密钥，其大小与深度限制的多项式成正比，而不是电路大小。这消除了之前由 Wee [EUROCRYPT ’22] 提出的最先进构造中的张量 LWE 另一新假设的需求。
> 
> 我们为确定性有限自动机（DFA）和对数空间图灵机（\(\textsf{L}\)）开发了密文策略和密钥策略 ABE 方案。它们是第一个支持均匀计算模型的基于格的公钥 ABE 方案。以往基于格的均匀计算方案仅限于秘密密钥设置，或者只提供了针对有限串通攻击较弱的安全性。
> 
> 最后，回避 IPFE 的新原语作为基于格的配对 IPFE 的对应物，使得可以将基于配对的 ABE 构造中开发的技术应用于基于格的构造。我们认为这具有独立的价值，并可能找到其他应用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_15](https://doi.org/10.1007/978-3-031-58723-8_15)
