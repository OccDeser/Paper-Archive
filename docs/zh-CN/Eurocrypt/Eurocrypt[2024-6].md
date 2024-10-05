# Eurocrypt[2024-6]
## Jolt: SNARKs for Virtual Machines via Lookups.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#jolt-snarks-for-virtual-machines-via-lookups) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#jolt-snarks-for-virtual-machines-via-lookups)**
### 作者
* Arasu Arun, New York University, New York, USA
* Srinath Setty, Microsoft Research, New York, USA
* Justin Thaler, a16z crypto research, Washington, USA
* Justin Thaler, Georgetown University, Washington, USA
### 摘要
> Succinct Non-interactive Arguments of Knowledge（SNARKs）允许不受信任的证明者证明其在证人上正确运行了某种“证人检查过程”。zkVM（零知识虚拟机）是一种SNARK，它允许证人检查过程被指定为特定指令集架构（ISA）的汇编语言编写的计算机程序。前端将计算机程序转换为较低级别的表示形式，例如算术电路或其广义形式。然后，可以对生成的电路应用电路可满足性的SNARK。我们描述了一种新的前端技术，称为Jolt，适用于各种ISA。 Jolt可以实现所谓的查找奇点的愿景，该愿景旨在产生仅执行查找预定查找表的电路。 Jolt输出的电路主要在一个巨大的查找表中进行查找，该表的大小超过2的128次方，该表仅依赖于ISA。通过称为Lasso[STW23]的伴随作品中描述的新的查找参数来证明查找的有效性。虽然大小为2的128次方的表太大而无法完全实现，但Jolt中出现的表是有结构的，避免了随着表大小增长的成本。 我们描述了Jolt相对于先前zkVM的性能和可审计性优势，重点介绍了流行的RISC-V ISA作为具体例子。 对于应用于该ISA（64位数据类型）的Jolt证明者而言，主要成本相当于在每一步RISC-V CPU上提交小于11个256位字段元素的密码学承诺。这比以前专注于远​​​​​​​ ​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​的VM的zkVM证明者甚至更简单的证明者更有优势。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_1](https://doi.org/10.1007/978-3-031-58751-1_1)
## Constant-Size zk-SNARKs in ROM from Falsifiable Assumptions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#constant-size-zk-snarks-in-rom-from-falsifiable-assumptions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#constant-size-zk-snarks-in-rom-from-falsifiable-assumptions)**
### 作者
* Helger Lipmaa, University of Tartu, Tartu, Estonia
* Roberto Parisella, Simula UiB, Bergen, Norway
* Janno Siim, Simula UiB, Bergen, Norway
### 摘要
> 我们证明了开创性的KZG多项式承诺方案（PCS）在一个简单可伪造的假设\(\textsf{ARSDH}\)下是可黑箱提取的。为了创建一个互动性证明，我们构建了一个编译器，它结合了一个可黑箱提取的非交互式PCS和一个多项式IOP（PIOP）。每次承诺多项式都会导致编译器产生一些小的开销。应用菲亚特-沙密尔转换，我们得到了略微不那么高效的基于PIOP的知识声称零知识证明（zk-SNARKs）替代方案，如Plonk，这些方案在\(\textsf{ARSDH}\)假设下在ROM中具有知识声称。重要的是，没有理想化的群模型或知识假设的需要。这导致了首批已知的在可伪造假设下具有高效证明者和恒定大小论证的ROM中的zk-SNARKs。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_2](https://doi.org/10.1007/978-3-031-58751-1_2)
## Lower-Bounds on Public-Key Operations in PIR.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#lower-bounds-on-public-key-operations-in-pir) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#lower-bounds-on-public-key-operations-in-pir)**
### 作者
* Jesko Dujmovic, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Jesko Dujmovic, Saarbrücken Graduate School of Computer Science, Saarbrücken, Germany
* Mohammad Hajiabadi, University of Waterloo, Waterloo, Canada
### 摘要
> 私人信息检索（PIR）是一种基本的密码学原语，允许用户获取数据库条目而不向服务器透露其学到了哪些数据库条目。如果服务器通信少于数据库大小，PIR 将变得非平凡。我们展示了构建（甚至）非常薄弱形式的 PIR 协议需要公钥操作量与数据库大小呈线性关系。
> 
> 然后，我们利用这一限制来研究通信高效的无感知传输（OT）扩展相关问题。
> 
> 无感知传输是安全多方计算（MPC）中的关键构件。在大多数 MPC 协议中，OT 调用在计算和通信方面是主要瓶颈。OT 扩展技术允许最小化 MPC 协议中的公钥操作次数。所有现有 OT 扩展协议的一个缺点是它们的通信开销。特别地，发送者的通信大约是信息理论上最优的两倍。
> 
> 我们展示了近似最优发送者通信的 OT 扩展是不可能的，说明了通信开销是固有的。我们的技术更进一步；我们可以证明许多关于通信高效 MPC 的下界。例如，我们证明了为了使用通用群构建高速字符串 OT，发送者需要执行线性数量的群操作。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_3](https://doi.org/10.1007/978-3-031-58751-1_3)
## Fast Public-Key Silent OT and More from Constrained Naor-Reingold.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#fast-public-key-silent-ot-and-more-from-constrained-naor-reingold) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#fast-public-key-silent-ot-and-more-from-constrained-naor-reingold)**
### 作者
* Dung Bui, Université Paris Cité, CNRS, IRIF, Paris, France
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Aarhus Universitet, Aarhus, Denmark
* Alain Passelègue, CryptoLab Inc., Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Mahshid Riahinia, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
### 摘要
> 伪随机相关函数（PCFs）允许两个参与方在给定相关评估密钥的情况下，本地生成任意多个伪随机相关字符串，例如无忘传输（OT）相关，然后这些可以被两个参与方用于共同运行安全计算协议。在这项工作中，我们提供了一种新颖且简单的构建OT相关的PCFs方法，该方法依赖于一类包含弱伪随机函数（wPRF）约束的受限伪随机函数。然后我们展示通过调整Naor-Reingold伪随机函数并依赖于低复杂度伪随机函数，使我们能够实例化我们的范式。我们进一步将我们的思想扩展到获得高效的公钥PCFs，这允许在各方之间分发相关密钥是非交互式的：每个参与方可以生成一对公/秘密密钥，并且任何一对参与方可以通过将他们的秘密密钥与另一方的公钥相结合来本地派生他们的相关评估密钥。
> 
> 除了这些理论贡献外，我们详细说明了各种优化，并提供了关于Boneh-Ishai-Passelègue-Sahai-Wu wPRF和Goldreich-Applebaum-Raykov wPRF的具体实例化，这些实例化依赖于我们的范例。将所有内容整合在一起，我们获得了每秒15k–40k OT的吞吐量的公钥PCFs，这与最先进的交互式PCFs的数量级相当，并且比最先进的公钥PCFs快了大约4个数量级。
> 
> 作为副产品，我们还展示了公钥PCFs可以作为构建用于NP的可重复指定验证器非交互零知识证明（DV-NIZK）的构件。结合我们的实例化，这产生了用于无配对群中NP的简单且高效的可重用DV-NIZK。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_4](https://doi.org/10.1007/978-3-031-58751-1_4)
## Best-of-Both-Worlds Multiparty Quantum Computation with Publicly Verifiable Identifiable Abort.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#best-of-both-worlds-multiparty-quantum-computation-with-publicly-verifiable-identifiable-abort) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#best-of-both-worlds-multiparty-quantum-computation-with-publicly-verifiable-identifiable-abort)**
### 作者
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Mi-Ying Huang, University of Southern California, Los Angeles, USA
* Jiapeng Zhang, University of Southern California, Los Angeles, USA
* Er-Cheng Tang, University of Washington, Seattle, USA
### 摘要
> Alon等人（CRYPTO 2021）引入了一种具有可识别中止的多方量子计算协议（MPQC-SWIA）。然而，他们的协议只允许MPQC内部的各方知道恶意参与者的身份。当两组人意见不合需要第三方，如陪审团，验证恶意方的身份时，这就成为了一个问题。在量子环境中，这个问题变得更为重要，因为量子状态可能仅存在于单个副本中。因此，我们强调了一种具有公开可验证中止（PVIA）的协议的必要性，使仅具有古典计算能力的外部观察者可以就中止时恶意方的身份达成一致。然而，由于无克隆定理，实现具有PVIA的MPQC面临着重大挑战，而先前由Mahadev（STOC 2018）和Chung等人（Eurocrypt 2022）提出的用于量子计算的经典验证方案不足以满足需求。
> 
> 在本文中，我们基于后量子状态混洗和经典广播通道实现了第一个MPQC-PVIA协议。我们构造的核心组件是一种称为可审计量子认证（AQA）的新的身份认证原语，可以极大概率地识别恶意发送者的身份。此外，我们提供了第一个最佳解保障（BoBW）安全的MPQC协议，它保证了在有诚实大多数的情况下的输出传递，并且在大多数人不诚实的情况下仍然保持了中止的安全性。我们的最佳解保障MPQC协议也满足了中止时PVIA的要求。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_5](https://doi.org/10.1007/978-3-031-58751-1_5)
## The Hardness of LPN over Any Integer Ring and Field for PCG Applications.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#the-hardness-of-lpn-over-any-integer-ring-and-field-for-pcg-applications) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#the-hardness-of-lpn-over-any-integer-ring-and-field-for-pcg-applications)**
### 作者
* Hanlin Liu, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Xiao Wang, Northwestern University, Evanston, USA
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Hanlin Liu, Shanghai Qi Zhi Institute, Shanghai, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
### 摘要
> 学习带有噪声的偏差 (LPN) 在密码学中得到广泛研究和应用。自Boyle等人( CC'S18)提出以来成为了设计安全多方计算、零知识证明、私有集合交集和许多其他协议的核心。本文在这一特定背景下深入研究了LPN问题的安全性。我们发现，一些重要方面长期被忽视，许多来自经典LPN密码分析的结论不适用于这个新环境，这是由于低噪声率、极高的维度、各种类型(除了\( \matbb{F}_2 \))和噪声分布所致。
> 
> 对于一个域上的LPN问题，我们提供了一个参数化约简从精确噪声LPN到正常噪声LPN。与Feneuil，Joux和Rivain(Crypto'22)的最近结果相比，我们通过付出一个小的附加代价在维度和样本数量方面显著减少了安全损失。
> 
> 我们分析了环上 \(\matbb{Z}_{2 ^\lambda}\) 的LPN安全性。基于整数环的 LPN 协议使用参数像在域上一样，但我们发现了一种攻击，有效地将噪声的权重减半，相比于在域上的 LPN。因此，之前使用 \(\matbb{Z}_{2^\lambda}\)的LPN的协议高估了高达40位的安全性。
> 
> 我们提供了一个完整的 LPN 在整数环上的困难性概述，展示了：1）它的搜索和决策版本的等价性；2）从 \(\matbb{F}_2\) 的LPN到\(\matbb{Z}_{2^\lambda}\) 的LPN的高效约简；3）我们的结果抽象到任何整数环的情况。最后，我们提供了一个在PCG环境下估计LPN参数位数安全性的综合工具，结合了最新的先进攻击。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_6](https://doi.org/10.1007/978-3-031-58751-1_6)
## Unlocking the Lookup Singularity with Lasso.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#unlocking-the-lookup-singularity-with-lasso) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#unlocking-the-lookup-singularity-with-lasso)**
### 作者
* Srinath Setty, Microsoft Research, Redmond, USA
* Justin Thaler, a16z crypto research and Georgetown University, Washington DC, USA
* Riad Wahby, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 本文介绍了Lasso，一种新的查找参数家族，允许不受信任的证明者承诺向量a∈ Fm，并证明a的所有条目驻留在预定表t∈Fn中。Lasso的性能特征解锁了所谓的“查找奇异性”。Lasso可与任何多线性多项式承诺方案配合使用，并提供以下效率特性。
> 
> 对于m次查找大小为n的表，Lasso的证明者只需承诺m+n个字段元素。此外，所承诺的字段元素很小，这意味着无论域F有多大，它们都在集合{0，…，m}中。在使用基于多指数的承诺方案时，这导致证明者的成本仅由O(m+n)组操作（例如，椭圆曲线点加法）主导，再加上证明多线性多项式在布尔超立方体上的求值的成本。这代表了对先前查找参数（例如，plookup，Halo2的查找，logUp）的显着改进。
> 
> 与所有先前的查找参数不同，如果表t是结构化的（我们定义了一个明确的意义），则没有任何一方需要承诺t，从而使得可以使用比先前作品更大的表（例如，大小为2的128次方或更大）。此外，Lasso的证明者只需要在运行时“支付”被查找操作访问的表条目。这适用于通常用于实现范围检查，位操作，大数算术甚至完整的CPU转换（如RISC-V）的表。具体来说，对于任何整数参数c>1，Lasso的证明者的主要成本是承诺3*c*m + c*n^(1/c)个字段元素。此外，所有这些字段元素都是“小”的，这意味着它们在集合{0，…，max{m,n^(1/c),q}-1}中，其中q是捕获t的任何子表中的最大值（以我们定义的明确方式）。）。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_7](https://doi.org/10.1007/978-3-031-58751-1_7)
## Efficient Pre-processing PIR Without Public-Key Cryptography.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#efficient-pre-processing-pir-without-public-key-cryptography) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#efficient-pre-processing-pir-without-public-key-cryptography)**
### 作者
* Ashrujit Ghoshal, Carnegie Mellon University, Pittsburgh, USA
* Mingxun Zhou, Carnegie Mellon University, Pittsburgh, USA
* Elaine Shi, Carnegie Mellon University, Pittsburgh, USA
### 摘要
> 在传统的私人信息检索(PIR)研究中，没有任何预处理。在这种情况下，众所周知的是：1)在单服务器设置中，公钥密码术是必要的，以实现非平凡的(即亚线性的)通信效率；2)每个查询的总服务器计算量必须是与数据库大小成线性关系的，不管是在单服务器设置还是多服务器设置中。最近的研究表明，只要愿意引入预处理阶段，这两个障碍都可以克服。特别是，最近的一项工作Piano表明，使用单向函数，可以构造一个单服务器预处理PIR，在假设\(\widetilde{O}(\sqrt{n})\)客户端存储时，每个查询的带宽和计算都为\(\widetilde{O}(\sqrt{n})\)。对于双服务器设置，最先进的状态由两个不可比较的结果定义。首先，Piano立即意味着一个在双服务器设置中具有与上述性能界限相同的方案。此外，Beimel等人显示了一个双服务器方案，其带宽为\(O(n^{1/3})\)，每个查询的计算为\(O(n/\log ^2 n)\)，还有一个方案，其带宽和每个查询的计算都为\(O(n^{1/2 + \epsilon })\) - 这两个方案都提供的是信息理论安全性。在本文中，我们表明，在假定单向函数存在的情况下，我们可以构造一个双服务器预处理PIR方案，其带宽为\(\widetilde{O}(n^{1/4})\)，每个查询的计算为\(\widetilde{O}(n^{1/2})\)，同时仅需要\(\widetilde{O}(n^{1/2})\)客户端存储。我们还构造了一个新的单服务器预处理PIR方案，其在线带宽为\(\widetilde{O}(n^{1/4})\)，离线带宽和每个查询的计算为\(\widetilde{O}(n^{1/2})\)，同样需要\(\widetilde{O}(n^{1/2})\)客户端存储。具体而言，在线带宽是客户端获取答案所需的带宽，离线带宽可以视为分摊到每个查询的背景维护工作。我们的新构造不仅推进了预处理PIR的理论理解，而且具有明显的效率，因为所需的唯一加密技术是伪随机函数。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_8](https://doi.org/10.1007/978-3-031-58751-1_8)
## Strong Batching for Non-interactive Statistical Zero-Knowledge.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#strong-batching-for-non-interactive-statistical-zero-knowledge) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#strong-batching-for-non-interactive-statistical-zero-knowledge)**
### 作者
* Changrui Mu, National University of Singapore, Singapore, Singapore
* Prashant Nalini Vasudevan, National University of Singapore, Singapore, Singapore
* Shafik Nassar, UT Austin, Austin, USA
* Ron D. Rothblum, Technion, Haifa, Israel
### 摘要
> 零知识证明使证明方能够让验证方相信 \(x \in S\)，同时不透露除此之外的任何信息。通过运行 k 次零知识证明，可以证明（仍然是零知识的）k 个不同的实例 \(x_1,\dots ,x_k\) 都在 S 中。然而，这样会将通信量增加 k 倍。是否有更好的方法？换句话说，零知识批量验证 S 是否可能（非平凡的）？
> 
> 最近 Kaslasi 等人（TCC 2020，Eurocrypt 2021）的最新研究表明，任何具有非交互式统计零知识证明（\(\textbf{NISZK}\)）的问题都具有非平凡的统计零知识批量验证协议。他们的结果有两个主要限制：（1）要批量验证 k 个大小为 n 的输入，在其批量协议中通信量大约为 \(\textrm{poly}(n,\log {k})+O(k)\)，这比倘若每个输入单独验证的 \(k \cdot \textrm{poly}(n)\) 更好，但仍与 k 成线性关系；（2）批量协议需要进行 \(\varOmega (k)\) 轮交互。
> 
> 本研究通过展示任何在 \(\textbf{NISZK}\) 中的问题都具有通信量为 \(\textrm{poly}(n,\log {k})\) 的非交互式统计零知识批量验证协议，消除了这两个限制。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_9](https://doi.org/10.1007/978-3-031-58751-1_9)
## Two-Round Maliciously-Secure Oblivious Transfer with Optimal Rate.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#two-round-maliciously-secure-oblivious-transfer-with-optimal-rate) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#two-round-maliciously-secure-oblivious-transfer-with-optimal-rate)**
### 作者
* Pedro Branco, Max Planck Institute for Security and Privacy, Bochum, Germany
* Nico Döttling, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Akshayaram Srinivasan, University of Toronto, Toronto, Canada
### 摘要
> 本文在CRS模型下构建了一种二轮批量隐私转移(OT)协议，可对恶意攻击者进行UC安全保护，并具有（近乎）最优的通信成本。具体来说，要执行k个隐私转移，其中发送方的输入为位，发送方和接收方需要总共通信\(3k+o(k) \cdot \textsf{poly}(\lambda)\)位。我们认为，任何使用黑盒和直线模拟器的协议都需要3k位。我们的构建安全性证明基于二次剩余（QR）和带噪声学习奇偶校验（LPN）的困难性。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_10](https://doi.org/10.1007/978-3-031-58751-1_10)
## Succinct Homomorphic Secret Sharing.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#succinct-homomorphic-secret-sharing) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#succinct-homomorphic-secret-sharing)**
### 作者
* Damiano Abram, Aarhus University, Aarhus, Denmark
* Lawrence Roy, Aarhus University, Aarhus, Denmark
* Peter Scholl, Aarhus University, Aarhus, Denmark
### 摘要
> 这项工作介绍了具有简洁份额大小的同态秘密共享（HSS）。在HSS中，私有输入在各方之间共享，然后可以同态地评估函数在他们的份额上，获得函数输出的一部分。在简洁HSS中，一部分输入可以使用份额进行分发，其大小与这些输入的数量亚线性相关。各方可以在这些份额上本地评估函数f，但f必须对简洁共享的输入是线性的。
> 
> 我们基于决策复合剩余假设、类群中的DDH样假设或者具有超多项式模噪声比的学习与误差，构建了简洁的两方HSS，用于分支程序。然后我们给出了几个简洁HSS的应用，这些应用以前只能使用完全同态加密或更强大的工具来实现：
> 
> 简洁向量遗忘线性评估（VOLE）：两方可以获得长、任意向量\(\boldsymbol{x}\)的秘密份额，乘以标量\(\varDelta\)，通信量与向量大小亚线性相关。
> 
> 批量、多方分布式点函数：一种在N个方中分发批处理的秘密、随机点函数的协议，其中N为任意多项式，通信量与DPF数量亚线性相关。
> 
> 任意数量方的亚线性MPC：MPC的两个新的构造，通信复杂度亚线性，N个方的任意多项式N：（1）对于规模为s的一般分层布尔电路，通信\(O(N s/\log \log s)\)，和（2）对于分层、足够宽的布尔电路，通信\(O(N s/\log s)\)。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_11](https://doi.org/10.1007/978-3-031-58751-1_11)
## How to Garble Mixed Circuits that Combine Boolean and Arithmetic Computations.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#how-to-garble-mixed-circuits-that-combine-boolean-and-arithmetic-computations) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#how-to-garble-mixed-circuits-that-combine-boolean-and-arithmetic-computations)**
### 作者
* Hanjun Li, University of Washington, Seattle, USA
* Tianren Liu, Peking University, Beijing, China
### 摘要
> Garbled算术电路的研究是由Applebaum，Ishai和Kushilevitz [FOCS'11]发起的，该方法可以自然地扩展到混合电路。混合电路的基础包括布尔运算，大环上的算术运算和将算术值转换为其比特表示的位分解。我们构建了有效的混合电路编码方案。在随机预言机模型中，我们构建了两种编码方案：
> 
> 第一种方案的目标是对模\({N\approx 2^b}\)的混合电路进行处理。每个加法门花费为零。每个乘法门成本为\(O(\lambda \cdot b^{1.5})\)通信。每个位分解成本为\(O(\lambda \cdot b^{2} / \log {b})\)。
> 
> 第二种方案的目标是对模\({N\approx 2^b}\)的混合电路进行处理。每个加法门和乘法门的成本为\(O(\lambda \cdot b \cdot \log b / \log \log b)\)通信。每个位分解成本为\(O(\lambda \cdot b^2 / \log b)\)。
> 
> 我们的方案在相同的模型中改进了Ball，Malkin和Rosulek [CCS'16]的工作。
> 
> 此外，依赖于DCR假设，我们在可编程的随机预言机模型中构建了一种更有效的混合电路编码方案，该方案针对\(\mathbb Z_{2^b}\)中的混合电路，其中加法门成本为零，每个乘法或位分解门的成本为\(O(\lambda _{\text {DCR}} \cdot b)\)通信。我们改进了Ball，Li，Lin和Liu [Eurocrypt'23]的最新工作，他们也依赖于DCR假设。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_12](https://doi.org/10.1007/978-3-031-58751-1_12)
## M&M'S: Mix and Match Attacks on Schnorr-Type Blind Signatures with Repetition.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#m-ms-mix-and-match-attacks-on-schnorr-type-blind-signatures-with-repetition) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#m-ms-mix-and-match-attacks-on-schnorr-type-blind-signatures-with-repetition)**
### 作者
* Khue Do, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Lucjan Hanzlik, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Eugenio Paracucchi, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Khue Do, Saarland University, Saarbrücken, Germany
* Eugenio Paracucchi, Saarland University, Saarbrücken, Germany
### 摘要
> 盲签名允许用户选择的消息上签名，以确保签名者对消息的盲目性。此外，恶意用户无法在仅完成$\ell$个签名会话的情况下输出$\ell+1$个签名。这个概念称为一次性不可伪造性，可支持顺序或并发会话。在本文中，我们研究了一类盲签名的安全性，这些签名是使用带小挑战空间$\mathcal{C}_{\varSigma}$（即在安全参数上是多项式的）的Sigma协议构建的，使用$k$个协议重复来减少作弊的可能性。这类方案包括Schnorr盲签名方案和最近提出的基于同构的CSI-Otter方案（Crypto’23）。
> 
> 对于这类盲签名，我们展示了一种打破在时间$O(k\cdot |\mathcal{C}_{\varSigma}|)$内破解任何$\ell\geq k$个并发会话的一次性不可伪造性的多项式时间攻击。与ROS攻击相反，我们的攻击是一般性的，不需要任何特定的代数结构。我们还提出了一种计算折衷，在任何$t\leq k$的情况下，我们的攻击可以在时间$O(\frac{k}{t}\cdot |\mathcal{C}_{\varSigma}|^t)$内解决$\ell=\frac{k}{t}$的情况。我们攻击的后果如下。应该不使用研究的这类盲签名方案不要在不应用特定变换来提高安全性以支持更多签名会话的情况下并发使用。此外，对于CSI-Otter的建议参数（$k=128$和$|\mathcal{C}_{\varSigma}|=2$），基本攻击后128个并行签名会话后该方案变得可伪造，而在我们的优化攻击中仅需8个会话即可。我们还展示了对于这些参数，使用比特币网络的计算能力，甚至可以在大约10分钟内计算出两个签名，仅需要一个签名会话。因此，我们展示出对于顺序安全性，任何研究方案的参数的安全参数至少必须提高一倍。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_13](https://doi.org/10.1007/978-3-031-58751-1_13)
## The Supersingular Endomorphism Ring and One Endomorphism Problems are Equivalent.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#the-supersingular-endomorphism-ring-and-one-endomorphism-problems-are-equivalent) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#the-supersingular-endomorphism-ring-and-one-endomorphism-problems-are-equivalent)**
### 作者
* Aurel Page, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> 超奇异自同态环问题如下：给定一个超奇异椭圆曲线，计算它的所有自同态。这个问题的假设难度对于同态基密码学是基础性的。一个自同态问题只是要求找到一个非标量自同态。我们证明这两个问题在概率多项式时间归约下是等价的。
> 
> 我们证明了一些结果。首先，假设自同态环问题的难度，Charles–Goren–Lauter散列函数是碰撞抗性的，而SQIsign识别协议对于均匀随机密钥是合理的。其次，自同态环问题等价于计算超奇异椭圆曲线之间的任意同态的问题，这个结果以前只对平滑度量数的同态成立。第三，存在一个无条件的概率算法来在时间 \(\tilde{O}(p^{1/2})\) 内解决自同态环问题，这是以前需要假设广义黎曼猜想的结果。
> 
> 为了证明我们的主要结果，我们引入了一个关于同态图的灵活框架，带有额外信息的研究。我们证明了一个通用且易于使用的快速混合定理。。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_14](https://doi.org/10.1007/978-3-031-58751-1_14)
## Evaluating the Security of CRYSTALS-Dilithium in the Quantum Random Oracle Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#evaluating-the-security-of-crystals-dilithium-in-the-quantum-random-oracle-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#evaluating-the-security-of-crystals-dilithium-in-the-quantum-random-oracle-model)**
### 作者
* Kelsey A. Jackson, University of Maryland, College Park, USA
* Carl A. Miller, University of Maryland, College Park, USA
* Daochen Wang, University of Maryland, College Park, USA
* Carl A. Miller, National Institute of Standards and Technology, Gaithersburg, USA
* Daochen Wang, University of British Columbia, Vancouver, Canada
### 摘要
> 在最近量子计算硬件进展之后，美国国家标准技术研究所（NIST）正在标准化对抗量子对手攻击的加密协议。NIST选择的主要数字签名方案是\(\textsf{CRYSTALS}\hbox {-}\!\textsf{Dilithium}\)。该方案的硬度基于三个计算问题的难度：带误差的模量学习（\(\textsf{MLWE}\)）、模量短整数解（\(\textsf{MSIS}\)）和\(\textsf{SelfTargetMSIS}\)。\(\textsf{MLWE}\)和\(\textsf{MSIS}\)已经得到充分研究，并被普遍认为是安全的。然而，\(\textsf{SelfTargetMSIS}\)是新颖的，尽管在经典条件下与\(\textsf{MSIS}\)同样困难，其量子难度尚不清楚。本文通过在量子随机预言机模型（QROM）中从\(\textsf{MLWE}\)的简化得出了对\(\textsf{SelfTargetMSIS}\)难度的首个证明。我们的证明使用了最近发展起来的量子重编程和倒带技术。我们方法的一个核心部分是证明了一种来自\(\textsf{MSIS}\)问题的特定哈希函数是崩溃的。基于这种方法，我们推导出了\(\textsf{Dilithium}\)在适当参数设置下的新安全性证明。与Kiltz、Lyubashevsky和Schaffner（EUROCRYPT 2018）之前的工作相比，他们只对\(\textsf{Dilithium}\)的变种给出了严格的安全性证明，我们的证明有一个优势，就是适用于条件\(q = 1 \ \textrm{mod} \ 2n\)，其中q表示模数，n表示基础代数环的维度。这个条件是原始\(\textsf{Dilithium}\)方案的一部分，并且对方案的高效实现至关重要。我们在条件\(q = 1 \ \textrm{mod} \ 2n\)下提供了新的安全参数设置，发现我们的公钥大小和签名大小分别约为Kiltz等人在相同安全级别下提出的大小的\(2.9\times\)和\(1.3\times\)。【完整版本：arXiv:2312.16619】】

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_15](https://doi.org/10.1007/978-3-031-58751-1_15)
## Crypto Dark Matter on the Torus - Oblivious PRFs from Shallow PRFs and TFHE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2024-6].md#crypto-dark-matter-on-the-torus-oblivious-prfs-from-shallow-prfs-and-tfhe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-6].md#crypto-dark-matter-on-the-torus-oblivious-prfs-from-shallow-prfs-and-tfhe)**
### 作者
* Martin R. Albrecht, King’s College London, London, UK
* Martin R. Albrecht, SandboxAQ, New York, USA
* Alex Davidson, NOVA LINCS & DI, FCT, Universidade NOVA de Lisboa, Lisbon, Portugal
* Amit Deo, Zama, Paris, France
* Daniel Gardham, University of Surrey, Guildford, UK
### 摘要
> 部分遗忘伪随机函数（POPRFs）是允许客户从服务器学习其选择的输入上的伪随机函数（PRF）评估的双方协议。客户提交两个输入，一个公开的，一个私密的。安全性属性确保服务器无法了解私人输入，客户不能在每次POPRF查询中学到多于一个评估。POPRFs有许多应用，包括基于密码的密钥交换和隐私保护身份验证机制。然而，大多数构造基于经典假设，具有后量子安全性的构造则效率低下。
> 
> 在这项工作中，我们基于格假设和“Crypto Dark Matter” PRF候选者（TCC’18）在随机预言模型中构建了一种新型POPRF。在概念层面上，我们的方案利用了这类PRF候选者的对齐性，依赖于混合模数计算，并利用了torus完全同态加密方案（TFHE）中的可编程引导。我们展示了我们的构造实现了基于电路私有FHE的恶意客户安全性，以及从FHE方案的语义安全性获得的客户隐私。我们进一步探讨了一种启发式方法来扩展我们的方案以支持可验证性，基于在低深度计算欺骗电路的困难。这将产生一个可验证的（P）OPRF。我们提供了构造的概念验证实现和初步基准测试。对于核心在线OPRF功能，我们需要每次评估的摊销10.0 KB通信以及一次性的每客户设置通信为2.5 MB。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-58751-1_16](https://doi.org/10.1007/978-3-031-58751-1_16)
