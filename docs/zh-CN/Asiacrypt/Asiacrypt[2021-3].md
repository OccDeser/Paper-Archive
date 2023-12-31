# Asiacrypt[2021-3]
## Lunar: A Toolbox for More Efficient Universal and Updatable zkSNARKs and Commit-and-Prove Extensions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#lunar-a-toolbox-for-more-efficient-universal-and-updatable-zksnarks-and-commit-and-prove-extensions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#lunar-a-toolbox-for-more-efficient-universal-and-updatable-zksnarks-and-commit-and-prove-extensions)**
### 作者
* Matteo Campanelli, Aarhus University, Aarhus, Denmark
* Antonio Faonio, EURECOM, Sophia Antipolis, France
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Anaïs Querol, IMDEA Software Institute, Madrid, Spain
* Hadrián Rodríguez, IMDEA Software Institute, Madrid, Spain
* Anaïs Querol, Universidad Politécnica de Madrid, Madrid, Spain
### 摘要
> 我们研究如何构建zkSNARKs，其中SRS是通用且可更新的，即对于尺寸限制内的所有关系都有效，并且可以无限期地向其中添加秘密随机性的动态参与者。我们的重点是：具有线性尺寸SRS和其承诺-证明变体的高效通用可更新zkSNARKs。我们引入了新的形式框架和技术，并对现有技术进行系统化的整理。
> 
> 我们实现了一系列具有不同权衡的zkSNARKs。我们的方案之一相对于算术电路的证明状态来说，实现了最小的证明大小和证明时间。该方案支持的语言是我们介绍的R1CS的一种变体，称为R1CS-lite。我们的另一种构建方案直接支持标准的R1CS，并实现了这种类型约束的最快证明时间。
> 
> 这些结果源于不同的贡献：(1)我们称之为多项式全息IOPs (Polynomial Holographic IOPs，PHPs)的一种新的代数风格变体；(2)将我们的PHPs与针对承诺多项式的承诺-证明zkSNARKs (CP-SNARKs)相结合的新编译器；(3)基于配对的这些多项式的CP-SNARKs的实现；(4)用于R1CS和R1CS-lite的PHPs的构建。最后，我们将第(2)项中的编译器扩展为生成承诺-证明通用zkSNARKs。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_1](https://doi.org/10.1007/978-3-030-92078-4_1)
## Gentry-Wichs is Tight: a Falsifiable Non-adaptively Sound SNARG.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#gentry-wichs-is-tight-a-falsifiable-non-adaptively-sound-snarg) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#gentry-wichs-is-tight-a-falsifiable-non-adaptively-sound-snarg)**
### 作者
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Kateryna Pavlyk, Simula UiB, Bergen, Norway
### 摘要
> 根据Gentry和Wichs的不可能性结果，构建（即使是非零知识量）自适应可信简洁非交互式参数证明（SNARGs）需要非可伪造性假设。理解这一不可能性结果是否紧密是很重要的。虽然我们已经知道如何从可伪造性假设中构建自适应可信的非简洁非交互式参数证明\(\mathsf {NP}\)，从非可伪造性假设中构建自适应可信 SNARGs \(\mathsf {NP}\)，以及从可伪造性假设中构建自适应可信 SNARGs \(\mathsf {P}\)，但目前尚无已知的从可伪造性假设中构建非自适应可信的 SNARGs \(\mathsf {NP}\)。我们通过构建后者来证明Gentry-Wichs的紧密性，并且在代数群模型和子零知识（即使是针对 CRS ）假设的情况下，证明了它是非适应性的知识安全的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_2](https://doi.org/10.1007/978-3-030-92078-4_2)
## Proofs for Inner Pairing Products and Applications.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#proofs-for-inner-pairing-products-and-applications) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#proofs-for-inner-pairing-products-and-applications)**
### 作者
* Benedikt Bünz, Stanford University, Stanford, USA
* Mary Maller, Ethereum Foundation, Bern, Switzerland
* Pratyush Mishra, UC Berkeley, Berkeley, USA
* Nirvan Tyagi, Cornell University, Ithaca, USA
* Psi Vesely, UC San Diego, San Diego, USA
### 摘要
> 我们提出了一种广义内积论证，并展示了它在基于配对的语言中的应用。我们应用我们的广义论证来证明内积乘积在与n个源群元素的已承诺向量相关性方面被正确评估。通过使用结构化参考字符串（SRS），我们实现了一个以对数时间的验证者，其工作主要由\(6 \log n\)个目标群指数运算所占主导。证明的大小为\(6 \log n\)个目标群元素，分别在每个源群中使用6n个配对和4n个指数运算来计算。
> 
> 我们将我们的内积论证应用于构建第一个具有简洁（对数级）验证的多项式承诺方案，对于度为d的多项式而言，证明者的计算复杂度为\(O(\sqrt{d})\)（不包括计算多项式的成本），且SRS的大小为\(O(\sqrt{d})\)。具体而言，这意味着对于\(d=2^{28}\)，在我们的协议中生成评估证明比在KZG承诺方案中快了76倍，并且我们的协议中的CRS要小1000倍：对于KZG而言为13 GB，而对于我们的协议而言为13 MB。
> 
> 作为第二个应用，我们引入了一个将n个Groth16 zkSNARK聚合成大小为\(O(\log n)\)的证明的论证方法。我们的协议比通过递归组合聚合SNARK更快（\({>}1000\times \)）：我们在25分钟内聚合了约130,000个证明，而通过递归组合只能聚合90个证明。最后，我们进一步应用我们的聚合协议来构建一个不依赖于递归组合的机器计算的低内存SNARK。对于一个需要时间T和空间S的计算，我们的SNARK在空间\(\tilde{\mathcal {O}}(S+T)\)产生证明，这比一个整体式SNARK更具空间效率，后者需要空间\(\tilde{\mathcal {O}}(S \cdot T)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_3](https://doi.org/10.1007/978-3-030-92078-4_3)
## Snarky Ceremonies.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#snarky-ceremonies) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#snarky-ceremonies)**
### 作者
* Markulf Kohlweiss, IOHK, Edinburgh, UK
* Markulf Kohlweiss, The University of Edinburgh, Edinburgh, UK
* Mikhail Volkhov, The University of Edinburgh, Edinburgh, UK
* Mary Maller, Ethereum Foundation, London, UK
* Janno Siim, University of Tartu, Tartu, Estonia
### 摘要
> “知识点简洁的非交互式论证（SNARKs）”在区块链和其他领域中有许多应用。最有效的SNARK使用分布式典礼协议生成公共参数，也称为结构化参考字符串（SRS）。我们的贡献可以归纳为两个方面：
> 
> 1. 我们提出了一种安全的框架，用于带有典礼协议的非交互式零知识本体论证。
> 
> 2. 我们重审了Groth的SNARK [Bowe et al., 2017] 的培训协议。我们发现原先的结构可以被简化和优化，我们在新框架下证明了安全性。重要的是，我们的结构避免了原始作品中使用的随机灯塔模型。”

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_4](https://doi.org/10.1007/978-3-030-92078-4_4)
## Efficient NIZKs for Algebraic Sets.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#efficient-nizks-for-algebraic-sets) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#efficient-nizks-for-algebraic-sets)**
### 作者
* Geoffroy Couteau, CNRS, IRIF, Université de Paris, Paris, France
* Helger Lipmaa, Simula UiB, Bergen, Norway
* Roberto Parisella, Simula UiB, Bergen, Norway
* Arne Tobias Ødegaard, Simula UiB, Bergen, Norway
### 摘要
> 在（Couteau和Hartmann，Crypto 2020）的框架显著扩展的基础上，我们提出了一种通用方法来构造非交互证明知识（NIZKs），以证明加密向量κ属于一个代数集，即属于多项式环理想I的零点集。当I是主理想，即由一个单个多项式F生成时，我们首先构造一个矩阵，它是F的“准行列式表示”，然后构造一个NIZK论证来证明F(κ)=0。这导致了紧凑的NIZKs，适用于常规计算结构，例如多项式大小的代数分支程序。我们将该框架扩展到非主理想的情况，为R1CS，算术约束满足系统，从而为NP提供了高效的NIZKs。作为一个独立结果，我们明确地描述了与密文相应的语言，作为一个代数语言，并且参数比基于代数语言的析取前一建构方法要小。这导致了代数分支程序的高效GL-SPHF。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_5](https://doi.org/10.1007/978-3-030-92078-4_5)
## Bit Security as Computational Cost for Winning Games with High Probability.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#bit-security-as-computational-cost-for-winning-games-with-high-probability) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#bit-security-as-computational-cost-for-winning-games-with-high-probability)**
### 作者
* Shun Watanabe, Tokyo University of Agriculture and Technology, Tokyo, Japan
* Kenji Yasunaga, Tokyo Institute of Technology, Tokyo, Japan
### 摘要
> 我们介绍了一个新的框架，用于量化安全博弈的比特安全性。我们的定义具有操作层面的意义，即一个 \(\lambda \) 位安全博弈在高概率下获胜所需要的计算总成本为 \(2^\lambda \)，例如 0.99。我们为搜索型和决策型博弈都定义了比特安全性。由于我们认为这两种类型的博弈在结构上应该是不同的，因此我们对待它们的方式也不同，但通过使用统一的框架定义比特安全性以确保相同的操作解释。我们定义比特安全性的关键创新之处在于采用了两种类型的对手：内部对手和外部对手。尽管内部对手玩一个“通常”的安全博弈，但外部对手多次调用内部对手以增加安全博弈的获胜概率。根据我们的框架，我们发现决策游戏的比特安全性可以用内部对手的1/2阶勒尼熵作为信息度量来刻画。而传统的“优势”定义为获胜博弈的概率，则刻画了我们对搜索型游戏的比特安全性。我们在框架中提出了几个安全约简，以证明我们的比特安全性定义。在很多结果中，我们的定量结果与Micciancio和Walter于2018年提出的比特安全性概念相匹配。从这个意义上说，我们的比特安全性通过增加操作层面的意义加强了以前的比特安全性概念。与他们的工作不同的是，在我们的框架中，Goldreich-Levin定理只对以平衡方式输出二进制值的“平衡”对手给出了最佳约简。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_6](https://doi.org/10.1007/978-3-030-92078-4_6)
## Giving an Adversary Guarantees (Or: How to Model Designated Verifier Signatures in a Composable Framework).
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#giving-an-adversary-guarantees-or-how-to-model-designated-verifier-signatures-in-a-composable-framework) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#giving-an-adversary-guarantees-or-how-to-model-designated-verifier-signatures-in-a-composable-framework)**
### 作者
* Ueli Maurer, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zürich, Zürich, Switzerland
* Christopher Portmann, Concordium, Zürich, Switzerland
### 摘要
> 在定义安全概念时，通常会指定不诚实的参与方不能实现什么。例如，如果第三方无法获取有关正在传输的消息的任何信息，则通信是保密的；如果第三方无法冒充真实（诚实）发件人，则通信是真实的。但是，对于某些应用程序，安全性关键地依赖于给予不诚实的参与方某些能力。例如，在指定验证者签名（DVS）方案中，通过保证任何不诚实的参与方可以伪造看起来与发件人创建的原始签名无法区分（对第三方而言）的签名，来捕捉只有指定验证者可以相信消息的真实性。
> 
> 然而，可组合的框架通常无法建模这种保证，因为它们只设计为限制不诚实的参与方能做什么。在本文中，我们展示了如何在建设密码学框架（Maurer和Renner，ICS 2011）中建模这种保证，即不诚实的参与方必须具有某些能力。更具体地说，我们为多指定验证者签名（MDVS）方案（DVS方案的泛化）提供了第一个可组合的安全定义。
> 
> 理想世界定义为两个世界的交集。第一个世界以通常的方式捕捉真实性。第二个提供了一个保证，即不诚实的参与方可以伪造签名。通过取交集，我们得到了一个具有所需属性的理想世界。
> 
> 我们还将我们的可组合定义与文献中现有的MDVS方案的安全概念进行了比较。我们发现，23年后MDVS方案的引入后，才有足够强的安全概念来捕捉MDVS方案的安全性（Damgård等人，TCC 2020）。然而，正如我们证明的那样，这些概念仍然严格强于必要。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_7](https://doi.org/10.1007/978-3-030-92078-4_7)
## How to Build a Trapdoor Function from an Encryption Scheme.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#how-to-build-a-trapdoor-function-from-an-encryption-scheme) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#how-to-build-a-trapdoor-function-from-an-encryption-scheme)**
### 作者
* Sanjam Garg, University of California, Berkeley, Berkeley, USA
* Mohammad Hajiabadi, University of Waterloo, Waterloo, Canada
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Rafail Ostrovsky, University of California, Los Angeles, Los Angeles, USA
### 摘要
> 在这项研究中，我们提出以下问题：我们能否将任何加密方案转化为陷门函数（TDF）？或者换句话说，我们能否使任何加密方案的随机性可恢复？我们提出了一个通用编译器，输入任何具有伪随机密文的加密方案，并添加一个陷门以反转加密并恢复随机硬币。这个通用的 TDF 仅额外假定存在一个提示伪随机生成器（PRG）。尽管简单，我们的转换非常通用，并且我们建立了一系列新的可行性结果：
> 
> 第一个基于身份的 TDF [Bellare 等 EUROCRYPT 2012] 来自于无配对群（或因子分解）的 CDH 假设，从而与基于身份的加密方案的最新技术水平相匹配。之前的工作需要配对或 LWE。
> 
> 第一个针对所有 (\(NC^1\), resp.) 电路的耐碰撞属性-based TDF（AB-TDF）来自于 LWE（双线性映射，resp.）。此外，同时也是第一个基于 CDH 的单密钥 AB-TDF。据我们所知，文献中尚未知道任何 AB-TDF（包括单个密钥）基于任何假设的情况。我们还对谓词加密获得相同的结果。
> 
> 作为额外的贡献，我们定义和构建了一个陷门掩码方案：一个模拟安全的掩码方案，其中带有隐藏的“触发器”，允许评估者完全恢复掩码算法使用的随机性。我们展示了如何利用 DDH 或 LWE 假设以及键相关消息（KDM）和随机相关消息（RDM）技术构造陷门掩码。
> 
> 陷门掩码允许我们获得 (单密钥) AB-TDF 的替代构造，具有其他有益特性，比如自适应安全性（在属性选择上）和投影密钥。我们预计陷门掩码在其他情境下也会很有用，例如，在成功执行后，评估者需要立即验证掩码电路是否良好形成。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_8](https://doi.org/10.1007/978-3-030-92078-4_8)
## Beyond Software Watermarking: Traitor-Tracing for Pseudorandom Functions.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#beyond-software-watermarking-traitor-tracing-for-pseudorandom-functions) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#beyond-software-watermarking-traitor-tracing-for-pseudorandom-functions)**
### 作者
* Rishab Goyal, MIT, Cambridge, MA, USA
* Sam Kim, Stanford University, Stanford, CA, USA
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### 摘要
> 软件水印方案允许用户将标识符嵌入到代码片段中，使得生成的程序在功能上几乎与原始程序等效，但是很难移除标识符而不破坏程序的功能。这些方案通常被用于证明软件所有权或数字版权管理。现有的水印构建方案主要集中在对伪随机函数（PRFs）进行水印处理。
> 
> 在本研究中，我们重新审视了水印的定义基础，并首先强调了现有安全概念中的一个重大缺陷。现有的水印安全概念只要求在保留原始程序的准确输入/输出行为的程序中成功提取标识符。在PRFs的背景下，这意味着构造一个计算PRF输出比特的四分之一或者能够区分PRF输出和随机输出的程序的对手被认为是不在威胁模型之外的。然而，在任何依赖于PRF安全性的应用（例如，水印解密设备或身份验证令牌），一个能够预测四分之一比特或者区分PRF输出和随机输出的对手将被认为已经破解了方案。因此，现有的水印方案在面对现实对手时提供了很少的安全保证。现有的可水印PRF构造不能从仅输出PRF四分之一比特或者完美区分的程序中提取标识符。
> 
> 为了解决现有可水印PRF定义中的不足，我们引入了一种称为可追踪PRF的新原语。我们的定义受到公钥叛徒追踪中类似定义的启发，旨在捕捉一组非常强大的对手：即，任何能产生有用的区分者（即可以破坏PRF安全性的程序）的对手都可以追踪到特定的标识符。我们提供了一种构建可追踪PRF的通用框架，通过一个中间原语称为私有线性约束PRF。最后，我们展示了如何使用先前用于实现软件水印的类似假设来构建可追踪PRF。也就是说，我们得到了一个基于标准格假设的单密钥可追踪PRF和一个基于不可区分混淆（以及单向函数注入）的完全抗串通的可追踪PRF。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_9](https://doi.org/10.1007/978-3-030-92078-4_9)
## Batching Base Oblivious Transfers.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#batching-base-oblivious-transfers) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#batching-base-oblivious-transfers)**
### 作者
* Ian McQuoid, Oregon State University, Corvallis, USA
* Mike Rosulek, Oregon State University, Corvallis, USA
* Lawrence Roy, Oregon State University, Corvallis, USA
### 摘要
> 使用遗忘传输（OT）的协议很少只需要一个实例。通常，需要一批OT，特别是在生成OT扩展的基本OT时。有一种自然的方式可以在生成批次时优化2轮OT协议，即通过在所有实例之间重复使用某些协议消息。在这项工作中，我们展示了这种批量优化存在错误的情况。我们列举了许多实现和论文，它们对这种批量优化的处理不正确，其中一些导致OT扩展协议中的灾难性泄漏。我们提供了如何正确优化最近的2轮OT协议以适应批处理环境的完整处理。在此过程中，我们展示了对McQuoid，Rosulek和Roy（ACM CCS 2020）的OT协议的几个性能改进。特别地，我们展示了一种非常简单的OT构建方法，可能对教学感兴趣。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_10](https://doi.org/10.1007/978-3-030-92078-4_10)
## Algebraic Adversaries in the Universal Composability Framework.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#algebraic-adversaries-in-the-universal-composability-framework) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#algebraic-adversaries-in-the-universal-composability-framework)**
### 作者
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, DFINITY, Zürich, Switzerland
* Manuel Barbosa, University of Porto (FCUP) and INESC TEC, Porto, Portugal
* Jonathan Katz, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jiayu Xu, Algorand, Boston, USA
### 摘要
> 代数群模型（AGM）介于通用群模型和计算标准模型之间，为分析密码系统对所谓的代数对手的安全性提供了一种途径。我们在通用可组合性框架内形式化了AGM，在这个设置中提供了形式化定义，并证明了一个适当的组合定理。这扩展了AGM在更复杂协议中的适用性，并为以可组合方式分析代数对手奠定了基础。我们的结果还阐明了在AGM中将证明与其他证明进行组合的含义，并强调了一种自然的独立形式，似乎是AGM固有的，并且以前尚未形式化——这些见解也适用于AGM中基于游戏的证明的组合。我们通过证明几个重要协议面向代数对手具有普遍可组合性来展示了我们模型的实用性，具体包括：（1）Chou-Orlandi 的无意传输协议，以及（2）基于密码的认证密钥交换的 SPAKE2 和 CPace 协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_11](https://doi.org/10.1007/978-3-030-92078-4_11)
## Luby-Rackoff Backwards with More Users and More Security.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#luby-rackoff-backwards-with-more-users-and-more-security) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#luby-rackoff-backwards-with-more-users-and-more-security)**
### 作者
* Srimanta Bhattacharya, SIAS, KREA University, Sri City, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
### 摘要
> 對於使用兩個n位元隨機排列輸出的位元互斥或（\(\mathsf {XORP}\)）進行q次查詢的對手而言，根據Dai等人在CRYPTO'17的研究，其偽隨機函數（PRF）優勢大約為\(q/2^n\)，當\(q \le 2^{n-5}\)時。同樣的界限可以容易地適用於\(\mathsf {XORP}[k]\)（k個輸出採用n位元偽隨機排列而具有區別輸入），對於\(k \ge 3\)。在這項研究中，我們首先考慮\(\mathsf {XORP}[3]\)的多用戶安全性。我們證明了\(\mathsf {XORP}[3]\)的多用戶PRF優勢約為\(\sqrt{uq_{\max }}/2^n\)，其中\(q_{\max } \le 2^{n}/12\)，其中u是用戶數，\(q_{\max}\)是對每個用戶的對手能夠進行的最大查詢數。在多用戶設置中，這意味著\(\mathsf {XORP}[3]\)即使允許對每個用戶進行幾乎\(O(2^n)\)次查詢，也為\(O(2^n)\)個用戶提供安全性。這也表明在單用戶設置（即當\(u =1\)時），對手即使在進行\(O(2^n)\)次查詢後的區分優勢也是\(O({1 \over \sqrt{2^n}})\)，即可以忽略不計。隨後，我們考慮了\(\mathsf {XORP}[3]\)的一個簡單高效的變種，其中我們使用五個呼叫來生成2n位元的輸出（而不是\(\mathsf {XORP}[3]\)的六個呼叫）。這個變種也可以達到類似的安全級別。作為一個即時應用，我們可以構建基於區塊密碼的計數器模式的變種，該模式在單用戶和多用戶設置下提供更高的安全性，但效率較低於GCM的加密部分的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_12](https://doi.org/10.1007/978-3-030-92078-4_12)
## Double-Block-Length Hash Function for Minimum Memory Size.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#double-block-length-hash-function-for-minimum-memory-size) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#double-block-length-hash-function-for-minimum-memory-size)**
### 作者
* Yusuke Naito, Mitsubishi Electric Corporation, Kanagawa, Japan
* Yu Sasaki, NTT Social Informatics Laboratories, Tokyo, Japan
* Takeshi Sugawara, The University of Electro-Communications, Tokyo, Japan
### 摘要
> 共享多个功能的共同原语对于轻量级密码学至关重要，NIST（美国国家标准与技术研究院）的轻量级密码学竞赛（LWC）考虑了将哈希集成到AEAD中。虽然排列是在这一目标中自然的原语选择，但为了增加设计多样性，研究小块密码（BC）和可调整块密码（TBC）的方案是很有意思的。双块长度（DBL）哈希函数模式适用于确保AEAD和哈希具有相同的安全级别，但难以实现较小的内存大小。\(\mathsf {Romulus}\) 是NIST LWC中基于TBC的决赛选手，引入了DBL哈希方案\(\mathsf {Romulus}\hbox {-}\mathsf {H}\)，但它需要使用具有n位块和k位（twea）密钥的底层原语的\(3n+k\)比特内存。即使是文献中最小的DBL模式也需要\(2n+k\)比特内存。针对这个问题，我们提出了新的DBL模式\(\mathsf {EXEX}\hbox {-}\mathsf {NI}\) 和 \(\mathsf {EXEX}\hbox {-}\mathsf {I}\)，实现了\((n+k)\)比特的状态大小，即原语中除了所需的\(n+k\)比特之外不需要额外的内存。\(\mathsf {EXEX}\hbox {-}\mathsf {NI}\) 在n- \log n位上与随机预言不可区分。通过将其与\(\mathsf {SKINNY}\)实例化，我们可以为\(\mathsf {Romulus}\)提供零内存开销的哈希功能。\(\mathsf {EXEX}\hbox {-}\mathsf {I}\) 是具有碰撞抵抗性的优化模式。最后，我们将\(\mathsf {EXEX}\hbox {-}\mathsf {NI}\)、\(\mathsf {EXEX}\hbox {-}\mathsf {I}\) 和 \(\mathsf {Romulus}\hbox {-}\mathsf {H}\) 与\(\mathsf {SKINNY}\hbox {-}\mathsf {128}\hbox {-}\mathsf {384}\) 的硬件性能进行了比较。\(\mathsf {EXEX}\hbox {-}\mathsf {NI}\) 和 \(\mathsf {EXEX}\hbox {-}\mathsf {I}\) 实现了电路面积减少超过2,000个GE，总面积小于\(\mathsf {Romulus}\hbox {-}\mathsf {H}\)的70%。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_13](https://doi.org/10.1007/978-3-030-92078-4_13)
## Toward a Fully Secure Authenticated Encryption Scheme from a Pseudorandom Permutation.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#toward-a-fully-secure-authenticated-encryption-scheme-from-a-pseudorandom-permutation) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#toward-a-fully-secure-authenticated-encryption-scheme-from-a-pseudorandom-permutation)**
### 作者
* Wonseok Choi, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
* Yeongmin Lee, KAIST, Daejeon, Korea
### 摘要
> 在这篇论文中，我们提出了一种基于新的分组密码的认证加密方案，称为合成计数器掩码（\(\mathsf {SCM}\)）模式。 \(\mathsf {SCM}\) 模式遵循 Peyrin 和 Seurin 在 2016 年 CRYPTO 论文中提出的 \(\mathsf {NSIV}\) 范例，其中一个带有关联数据和消息的密钥哈希函数接受一个随机值 N，并生成一个认证标签 T，然后使用 T 和 N 进行类似计数器的加密模式对消息进行加密。在这里，我们进一步通过加密随机值来加密随机值；在加密部分，分组密码的输入由 T、计数器和加密的随机值确定，所有输出也通过（额外的）加密随机值进行掩盖，生成密钥流分组。
> 
> 因此，我们首次得到了一种基于分组密码的认证加密方案，其在尊重随机值设置中提供了\(n\)位安全性（忽略消息长度的影响），并且保证在具有错误随机值模型时以优雅的方式降低安全性，前提是底层的\(n\)位分组密码被建模为安全的伪随机置换。作为\(\mathsf {GCM}\)-\(\mathsf {SIV}\)的轻微变种，\(\mathsf {SCM}\) 也是可并行化且无逆性质的，其性能仍可与\(\mathsf {GCM}\)-\(\mathsf {SIV}\) 相比。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_14](https://doi.org/10.1007/978-3-030-92078-4_14)
## Tight Security for Key-Alternating Ciphers with Correlated Sub-keys.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#tight-security-for-key-alternating-ciphers-with-correlated-sub-keys) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#tight-security-for-key-alternating-ciphers-with-correlated-sub-keys)**
### 作者
* Stefano Tessaro, University of Washington, Seattle, USA
* Xihu Zhang, University of Washington, Seattle, USA
### 摘要
> 大量的工作已经致力于在随机排列模型中证明具有独立子密钥的密钥交替密码的安全性的最优界限（例如，Chen和Steinberger，EUROCRYPT’14; Hoang和Tessaro，CRYPTO’16）。尽管在多轮结构的研究中很常见，但子密钥真正独立的假设并不现实，因为这些子密钥通常高度相关且由较短的密钥生成。
> 
> 在本文中，我们展示了存在一种有限独立性的非平凡分布，对于这种分布下的t轮密钥交替密码可以达到最优安全性。我们的工作是Chen等人的工作的自然延续（CRYPTO’14），该工作考虑了所有子密钥相同的情况下的t=2。在这里，我们展示了在子密钥的(t-1)-wise和(t-2)-wise独立分布的大类别中，密钥交替密码仍然是安全的。
> 
> 我们的证明通过所谓的Sum-Capture定理的推广进行，我们使用傅里叶分析技术来证明该定理。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_15](https://doi.org/10.1007/978-3-030-92078-4_15)
## FAST: Secure and High Performance Format-Preserving Encryption and Tokenization.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#fast-secure-and-high-performance-format-preserving-encryption-and-tokenization) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#fast-secure-and-high-performance-format-preserving-encryption-and-tokenization)**
### 作者
* F. Betül Durak, Microsoft Research, Redmond, USA
* Henning Horst, Comforte AG, Wiesbaden, Germany
* Michael Horst, Comforte AG, Wiesbaden, Germany
* Serge Vaudenay, EPFL, Lausanne, Switzerland
### 摘要
> 我们提出了一种新的格式保持加密构造。我们的设计提供了在格式保持加密（FPE）和静态基于表的标记化中使用的灵活性。我们的算法是基于随机S盒的置换-置换网络。使用伪随机生成器和伪随机函数，我们证明了基于核心设计超伪随机置换假设的强自适应安全性。我们获得了实验参数以满足这一假设。我们建议参数用于量子安全性。
> 
> 我们的设计适用于非常小的域，基数从4到Unicode字母表的大小，块长度\(\ell\)从2开始。每次加密的S盒评估次数渐近为\(\ell^{\frac{3}{2}}\)，这也是我们需要使用\(\mathsf{AES}\)在\(\mathsf{CTR}\)模式下生成的字节数。例如，我们使用29个（并行）\(\mathsf{AES}\)计算对10个十进制数字进行标记化，这些计算仅在扭曲发生变化时执行一次。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_16](https://doi.org/10.1007/978-3-030-92078-4_16)
## Fine-Tuning the ISO/IEC Standard LightMAC.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#fine-tuning-the-iso-iec-standard-lightmac) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#fine-tuning-the-iso-iec-standard-lightmac)**
### 作者
* Soumya Chattopadhyay, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### 摘要
> LightMAC，由Luykx等人开发，是一种基于分组密码的消息认证码（MAC）。其设计简单且开销低，使其能够具有非常紧凑的实现。因此，最近被选为ISO/IEC标准的适用于轻量级应用的MAC。当使用两个独立密钥的n位分组密码实例化LightMAC时，LightMAC已被证明可以实现O(q^2/2^n)的查询长度无关安全界限，其中q表示MAC查询的次数，查询长度上限为(n-s)2^s位，其中s是固定计数器大小。在本文中，我们旨在尽量减少LightMAC中分组密码密钥的数量。首先，我们证明了原始的LightMAC使用单个分组密码密钥（称为1k-LightMAC）实现的安全界限为O(q^2/2^n)，而查询长度至少为(n-s)位，最多为(n-s)min{2^(n/4),2^s}位。其次，我们证明了1k-LightMAC的一个次要变体，称为LightMAC-ds，实现的安全界限为O(q^2/2^n)，而查询长度上限为(n-s)2^(s-1)位。我们的1k-LightMAC安全证明的独立兴趣在于，它使用了一种新颖的采样方法，称为重置采样，作为H系数证明设置中的一个子程序。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_17](https://doi.org/10.1007/978-3-030-92078-4_17)
## Categorization of Faulty Nonce Misuse Resistant Message Authentication.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#categorization-of-faulty-nonce-misuse-resistant-message-authentication) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#categorization-of-faulty-nonce-misuse-resistant-message-authentication)**
### 作者
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### 摘要
> 越来越多的轻量级分组密码算法被提出用于物联网等环境。降低实现成本的一项重要贡献是将分组长度 n 设为 64 或 96 位而非 128 位。因此，加密模式和消息认证码（MAC）算法需要超过 \(2^{n/2}\) 生日界限的安全性。本文对提供超出生日界限 PRF 安全性的 MAC 算法进行了广泛研究，适用于敬重和滥用 nonce 的对手。我们研究了使用两次分组密码调用、一次通用哈希函数调用和任意数量 XOR 操作的构建方法。首先解决了基于两次分组密码调用的识别所有可能安全的 n 位到 n 位伪随机函数（PRF）的问题。分析结果表明，现有的构建方法 EDM、SoP 和 EDMD 是实现超过生日界限安全性的唯一构建方法。随后，我们对 MAC 算法进行了详尽的研究，其中将消息在计算 PRF 的任意时刻输入通用哈希函数进行评估。得出的结论是，共有九种方案实现了超过生日界限的安全性，并有第十种构建方法无法使用当前已知的证明技术证明。对于这九个 MAC 算法，三种构建方法在敬重的设置下实现了最佳的 n 位安全性，但如果 nonce 被重复使用，将会完全不安全。剩下的六种构建方法在敬重的设置下具有 3n/4 位安全性，在 nonce 滥用的情况下，仍有四种构建方法实现了超过生日界限的安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_18](https://doi.org/10.1007/978-3-030-92078-4_18)
## Balanced Non-adjacent Forms.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#balanced-non-adjacent-forms) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#balanced-non-adjacent-forms)**
### 作者
* Marc Joye, Zama, Paris, France
### 摘要
> 整数可以以多种方式进行分解。重编码技术的选择通常受性能考虑的影响。优化分解的常见度量标准是汉明权重。在这项工作中，我们考虑了一个不同的度量标准，并提出了新的修改形式（即使用有符号数字表示的整数），满足新度量标准下的最小性要求。具体而言，我们引入了我们称之为平衡非相邻形式，证明它们具有最小的欧几里德权重。我们还提出了产生这些新最小形式的高效算法。我们分析了它们的渐近和精确分布。我们将定义扩展到模整数，并展示类似的优化结果。平衡非相邻形式在完全同态加密中具有自然应用，因为它们能够最优地降低LWE类型密文中的噪声方差。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_19](https://doi.org/10.1007/978-3-030-92078-4_19)
## Efficient Boolean Search over Encrypted Data with Reduced Leakage.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#efficient-boolean-search-over-encrypted-data-with-reduced-leakage) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#efficient-boolean-search-over-encrypted-data-with-reduced-leakage)**
### 作者
* Sarvar Patel, Google LLC, Mountain View, USA
* Giuseppe Persiano, Google LLC, Mountain View, USA
* Joon Young Seo, Google LLC, Mountain View, USA
* Kevin Yeo, Google LLC, Mountain View, USA
* Giuseppe Persiano, Università di Salerno, Fisciano, Italy
### 摘要
> 加密的多映射使得能够将多映射的存储外包给不可信的服务器，同时保持查询的隐私性。我们专注于支持任意布尔查询的加密布尔多映射。Kamara和Moataz [Eurocrypt'17]提出了第一个加密多映射BIEX，它支持具有最优通信、最坏情况下次线性搜索时间和非平凡泄漏的CNF查询。
> 
> 我们改进了以前的工作，通过提出一种新的构造\(\mathsf {CNFFilter}\)，用比BIEX更少的泄漏来处理CNF查询，同时保持最优通信和最坏情况下次线性搜索时间。作为直接结果，我们的构造相比之前的工作对泄漏滥用攻击显示出额外的抵抗能力。对于大多数CNF查询，\(\mathsf {CNFFilter}\)避免了对出现在CNF查询中的标签的任何单值查询的结果集泄漏。举个例子，对于形式为\((\ell _1 \vee \ell _2) \wedge \ell _3\)的CNF查询，我们的方案不会泄漏对\(\ell _1, \ell _2\)或\(\ell _3\)的单独查询的结果大小。另一方面，BIEX会泄漏其中一些信息。这只是\(\mathsf {CNFFilter}\)减少泄漏的一个例子。\(\mathsf {CNFFilter}\)的核心是一种新的过滤算法，与以前的工作相比，在交集计算过程中具有更少的泄漏。
> 
> 我们实现了\(\mathsf {CNFFilter}\)并展示了\(\mathsf {CNFFilter}\)在搜索时间和通信开销方面比BIEX更快，只需略微增加服务器存储成本。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_20](https://doi.org/10.1007/978-3-030-92078-4_20)
## Revisiting Homomorphic Encryption Schemes for Finite Fields.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#revisiting-homomorphic-encryption-schemes-for-finite-fields) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#revisiting-homomorphic-encryption-schemes-for-finite-fields)**
### 作者
* Andrey Kim, New Jersey Institute of Technology, Newark, USA
* Yuriy Polyakov, New Jersey Institute of Technology, Newark, USA
* Andrey Kim, Samsung Advanced Institute of Technology, Suwon, Republic of Korea
* Yuriy Polyakov, Duality Technologies, Newark, USA
* Vincent Zucca, DALI, Université de Perpignan Via Domitia, Perpignan, France
* Vincent Zucca, LIRMM, Univ Montpellier, Montpellier, France
* Vincent Zucca, imec-COSIC, KU Leuven, Leuven, Belgium
### 摘要
> Brakerski-Gentry-Vaikuntanathan（BGV）和Brakerski/Fan-Vercauteren（BFV）方案是两种主要的同态加密（HE）方案，用于在有限域和整数上执行精确计算。尽管这两种方案使用了相同的明文空间，但在噪声管理、核心同态乘法操作的算法、消息编码和实际可用性方面存在显著差异。我们工作的主要目标是重新审视这两种方案，重点在于通过改善噪声增长、核心算法的计算复杂度和可用性来弥合它们之间的差距。我们工作的另一个目标是提供BGV和BFV的理论和实验性能比较。
> 
> 更具体地说，我们提出了一种改进的BFV变种，在该变种中，加密操作被修改以显著减小噪声增长，使得BFV的噪声增长略优于BGV（与先前的结果相反，先前的结果表明对于较大的明文模量，BGV的噪声增长更小）。我们还修改了同态乘法过程，该过程是BFV中的主要瓶颈，以减少其算法复杂性。我们的工作引入了其他几个新的优化方法，包括在BFV同态乘法中的惰性缩放以及在剩余数系统（RNS）表示中改进的BFV解密过程。我们还开发了一种可用的BGV变种，作为BFV在常见实际场景中更高效的替代方案。
> 
> 我们在PALISADE中实现了改进的BFV和BGV变体，并评估它们在几种基准计算中的实验性能。实验结果表明，我们的BGV实现对于中等和大型明文模量更快，而这些模量通常在具有密文打包的实际场景中使用，而我们的BFV实现对于较小的明文模量更快。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_21](https://doi.org/10.1007/978-3-030-92078-4_21)
## Transciphering Framework for Approximate Homomorphic Encryption.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#transciphering-framework-for-approximate-homomorphic-encryption) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#transciphering-framework-for-approximate-homomorphic-encryption)**
### 作者
* Jihoon Cho, Samsung SDS, Seoul, Korea
* Joohee Lee, Samsung SDS, Seoul, Korea
* Dukjae Moon, Samsung SDS, Seoul, Korea
* Hyojin Yoon, Samsung SDS, Seoul, Korea
* Jincheol Ha, KAIST, Daejeon, Korea
* Seongkwang Kim, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### 摘要
> 同态加密(HE)是一种有前景的加密基元，它使得对加密数据进行计算成为可能，具有包括医疗、基因组和金融任务在内的各种应用。在2017年的Asiacrypt中，Cheon等人提出了\(\mathsf {CKKS}\)方案，以高效地支持对实数加密数据的近似计算。然而，包括\(\mathsf {CKKS}\)在内的HE方案仍然存在加密速度慢和密文扩展大的问题，相对于对称加密来说。
> 
> 在本文中，我们提出了一个新颖的混合框架，名为\(\mathsf {RtF}\)（Real-to-Finite-field）框架，支持\(\mathsf {CKKS}\)。这个构建的主要思想是将\(\mathsf {CKKS}\)和\(\mathsf {FV}\)同态加密方案结合起来，并在其间使用模算术的流密码。结果是，实数可以被加密，而客户端的密文扩展和计算负载都不会显著增加。
> 
> 作为我们框架中流密码的一个实例，我们提出了一种新的HE友好密码，称为\(\mathsf {HERA}\)，并对其安全性和效率进行了广泛分析。\(\mathsf {HERA}\)的主要特点是它使用简单的随机密钥调度。与最近使用随机线性层的HE友好密码（如\(\mathsf {FLIP}\)和\(\mathsf {Rasta}\)）相比，\(\mathsf {HERA}\)需要更少的随机位。因此，\(\mathsf {HERA}\)在客户端和服务器端上的性能显著超过现有的HE友好密码。
> 
> 通过在128位安全级别上将\(\mathsf {RtF}\)变密框架和\(\mathsf {HERA}\)结合起来，我们实现了小密文扩展比，范围为1.23到1.54，这至少比仅使用（对称的）\(\mathsf {CKKS}\)情况下小23倍，假设具有相同的精度位和在框架末端具有相同级别的密文。我们还实现了1.6微秒和21.7MB/s的客户端延迟和吞吐量，分别比仅使用\(\mathsf {CKKS}\)环境快9085倍和17.8倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_22](https://doi.org/10.1007/978-3-030-92078-4_22)
## Improved Programmable Bootstrapping with Larger Precision and Efficient Arithmetic Circuits for TFHE.
🌍 [English](../../../docs/en/Asiacrypt/Asiacrypt[2021-3].md#improved-programmable-bootstrapping-with-larger-precision-and-efficient-arithmetic-circuits-for-tfhe) | **[简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2021-3].md#improved-programmable-bootstrapping-with-larger-precision-and-efficient-arithmetic-circuits-for-tfhe)**
### 作者
* Ilaria Chillotti, Zama, Paris, France
* Damien Ligier, Zama, Paris, France
* Jean-Baptiste Orfila, Zama, Paris, France
* Samuel Tap, Zama, Paris, France
### 摘要
> 全同态加密（Fully Homomorphic Encryption，FHE）方案使得能够在加密数据上进行计算。其中，TFHE [8] 具有一个巨大优势，即提供了一种有效的方法来引导降低噪声密文。事实上，同态计算会增加密文中的噪声，可能破坏加密消息。TFHE 引导除了降低噪声外，还可以免费计算表示为查找表的单变量函数。然而，它要求提前知道明文的最高有效位，导致丢失一位用于存储消息的空间。此外，在许多使用情况下，它还代表了一个非常可观的计算开销。
> 
> 在本文中，我们提出了一个称为 Programmable Bootstrapping Without Padding（WoP-PBS）的解决方案来克服这个限制。该方法基于两个构建块。第一个是 BFV [13] 的乘法，我们将其纳入到 TFHE 中。这得益于对噪声进行的彻底分析，表明可以使用实用的 TFHE 参数来计算正确的乘法。第二个构建块是本文中介绍的 TFHE 引导的泛化。它提供了在引导期间选择加密明文中的任意一块比特的灵活性。它还可以在使用足够小的精度时同时评估多个查找表。所有这些改进在某些应用中特别有帮助，例如布尔电路的评估（其中不再需要在每个评估的门中进行一次引导），甚至在处理大整数的情况下，也能够高效评估算术电路。这些结果也改进了 TFHE 电路的引导。此外，我们还展示了如何使用比 TFHE 参数更小的参数来引导大精度整数。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-030-92078-4_23](https://doi.org/10.1007/978-3-030-92078-4_23)
