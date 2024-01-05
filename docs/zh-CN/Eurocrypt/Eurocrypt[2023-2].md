# Eurocrypt[2023-2]
## New Ways to Garble Arithmetic Circuits.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#new-ways-to-garble-arithmetic-circuits) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#new-ways-to-garble-arithmetic-circuits)**
### 作者
* Marshall Ball, New York University, New York, USA
* Hanjun Li, University of Washington, Seattle, USA
* Huijia Lin, University of Washington, Seattle, USA
* Tianren Liu, Peking University, Beijing, China
### 摘要
> Applebaum，Ishai和Kushilevitz [FOCS'11] 的出色工作引发了对Yao加密电路的算术变体的研究。算术加密方案是一种有效的转换，将环\(\mathcal{R}\)上的算术电路\(C: \mathcal{R}^n \rightarrow \mathcal{R}^m\)转换为一个加密电路\(\widehat{C}\)和n个仿射函数\(L_i\)（其中\(i \in [n]\)），使得\(\widehat{C}\)和\(L_i(x_i)\)只能揭示输出C(x)而不能揭示x的其他信息。AIK提出了第一个支持在有界（可能指数级大）范围内进行整数计算的算术加密方案，该方案基于学习与错误（LWE）。相比之下，将C转换为布尔电路并应用Yao的加密电路将输入视为比特串而不是环元素，因此不是“算术”的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_1](https://doi.org/10.1007/978-3-031-30617-4_1)
## Actively Secure Half-Gates with Minimum Overhead Under Duplex Networks.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-half-gates-with-minimum-overhead-under-duplex-networks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-half-gates-with-minimum-overhead-under-duplex-networks)**
### 作者
* Hongrui Cui, Shanghai Jiao Tong University, Shanghai, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, China
* Xiao Wang, Northwestern University, Evanston, USA
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Yu Yu, Shanghai Qi Zhi Institute, Shanghai, China
### 摘要
> 主动安全的两方计算（2PC）是现代密码学中的经典构建块之一。设计主动安全的2PC协议的一个主要目标是减少通信开销，与半诚实的2PC协议相比。在本文中，我们提出了一种新的主动安全的常数轮2PC协议，每个AND门的单向通信量为\(2\kappa +5\)位（对于\(\kappa \)位的计算安全和任意统计安全性），基本上与半诚实的半门协议的单向通信量相匹配。这是通过两种新技术来实现的：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_2](https://doi.org/10.1007/978-3-031-30617-4_2)
## Black-Box Reusable NISC with Random Oracles.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#black-box-reusable-nisc-with-random-oracles) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#black-box-reusable-nisc-with-random-oracles)**
### 作者
* Yuval Ishai, Technion, Haifa, Israel
* Dakshita Khurana, UIUC, Champaign, USA
* Amit Sahai, UCLA, Los Angeles, US
* Akshayaram Srinivasan, Tata Institute of Fundamental Research, Mumbai, India
### 摘要
> 我们重新审视可重用的非交互安全计算（NISC）问题。一个标准的NISC协议用于发送方-接收方功能f，使得接收方能够对其输入x进行加密，以便于任何发送方在输入y的情况下，只能发送回揭示f(x, y)的消息。即使任意一方都可能是恶意的，安全性也应该得到保证。可重用的NISC协议具有额外的功能，即接收方的消息可以安全地重复使用来计算多个输出\(f(x,y_i)\)。在每个会话中，即使恶意发送方可以学到关于诚实接收方输出的部分信息，安全性也应得到保证。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_3](https://doi.org/10.1007/978-3-031-30617-4_3)
## Maliciously-Secure MrNISC in the Plain Model.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#maliciously-secure-mrnisc-in-the-plain-model) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#maliciously-secure-mrnisc-in-the-plain-model)**
### 作者
* Rex Fernando, Carnegie Mellon University, Pittsburgh, PA, USA
* Aayush Jain, Carnegie Mellon University, Pittsburgh, PA, USA
* Ilan Komargodski, School of Computer Science and Engineering, Hebrew University of Jerusalem and NTT Research, Jerusalem, 91904, Israel
### 摘要
> 我们研究了最强版本的轮次最优多方安全计算（MPC）。Benhamouda和Lin（TCC ’20）最近的研究确定了一种安全多方计算（MPC）的版本，称为多方可重复非交互安全计算（MrNISC），它同时将安全计算的几个基本方面与标准模拟安全性结合为一个原语：轮次最优性、简洁性、并发性和适应性。更详细地说，MrNISC本质上是一个两轮的MPC协议，其中第一轮消息作为参与方私有输入的可重复承诺。使用这些承诺，任何一组参与方以后都可以通过广播每个消息来计算他们各自输入的任何函数。任何看到这些参与方的承诺和评估消息的人（甚至是外部观察者）都可以学习函数的输出，而不会得到其他任何信息。重要的是，输入的承诺可以在不知道其他参与方的任何信息（无论是身份还是数量）的情况下计算，并且它们可以在任意数量的计算中重复使用。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_4](https://doi.org/10.1007/978-3-031-30617-4_4)
## Minimizing Setup in Broadcast-Optimal Two Round MPC.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#minimizing-setup-in-broadcast-optimal-two-round-mpc) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#minimizing-setup-in-broadcast-optimal-two-round-mpc)**
### 作者
* Ivan Damgård, Aarhus University, Aarhus, Denmark
* Divya Ravi, Aarhus University, Aarhus, Denmark
* Sophia Yakoubov, Aarhus University, Aarhus, Denmark
* Luisa Siniscalchi, Technical University of Denmark, Kongens Lyngby, Denmark
### 摘要
> 在本文中，我们考虑使用不同通信渠道的两轮安全计算协议：即，在任一轮中都不提供广播、两轮都可用广播、仅第一轮可用广播或仅第二轮可用广播的协议。 Cohen、Garay和Zikas（Eurocrypt 2020）以及Damgård、Magri、Ravi、Siniscalchi和Yakoubov（Crypto 2021）的先前研究给出了各种阈值在每个通信结构中可以实现哪些安全保证的紧密特征化。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_5](https://doi.org/10.1007/978-3-031-30617-4_5)
## Sublinear-Communication Secure Multiparty Computation Does Not Require FHE.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#sublinear-communication-secure-multiparty-computation-does-not-require-fhe) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#sublinear-communication-secure-multiparty-computation-does-not-require-fhe)**
### 作者
* Elette Boyle, Reichman University, Herzliya, Israel
* Pierre Meyer, Reichman University, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Geoffroy Couteau, Université Paris Cité, CNRS, IRIF, Paris, France
* Pierre Meyer, Université Paris Cité, CNRS, IRIF, Paris, France
### 摘要
> 安全计算使相互不信任的各方能够共同计算其秘密输入的函数，同时不泄露任何超出函数输出的信息。一个长期存在的挑战是理解此类协议所需的通信复杂性，特别是当通信可以在所需函数的电路表示大小的子线性情况下发生。在两方设置中，基于各种结构和难度假设已经取得了重大进展，肯定回答了这个问题。相比之下，在多方设置中，只有一个通用方法是已知的：使用完全同态加密（FHE）。即使对于只有三个方的情况，有两个被损坏，这仍然是目前的状况。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_6](https://doi.org/10.1007/978-3-031-30617-4_6)
## Actively Secure Arithmetic Computation and VOLE with Constant Computational Overhead.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-arithmetic-computation-and-vole-with-constant-computational-overhead) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#actively-secure-arithmetic-computation-and-vole-with-constant-computational-overhead)**
### 作者
* Benny Applebaum, Tel Aviv University, Tel Aviv, Israel
* Niv Konstantini, Tel Aviv University, Tel Aviv, Israel
### 摘要
> 我们研究了两方安全算术计算的复杂性，其中目标是在有恶意对手存在的情况下评估有限域\(\mathbb {F}\)上的算术电路。在被动设置中，Applebaum等人（Crypto 2017）构建了一个协议，每个门只进行了恒定（摊销）数量的域操作。该协议使用底层域\(\mathbb {F}\)作为黑盒，使用（标准的）遗忘传输的黑盒功能，并且其安全性基于熟知的密码学假设的算术类比。我们提出了这个协议的主动安全变体，首次实现了上述所有特性。该协议依赖于相同的假设，并且在计算和通信中仅添加了一点点额外开销。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_7](https://doi.org/10.1007/978-3-031-30617-4_7)
## SuperPack: Dishonest Majority MPC with Constant Online Communication.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#superpack-dishonest-majority-mpc-with-constant-online-communication) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#superpack-dishonest-majority-mpc-with-constant-online-communication)**
### 作者
* Daniel Escudero, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, NY, USA
* Antigoni Polychroniadou, J.P. Morgan AI Research & J.P. Morgan AlgoCRYPT CoE, New York, NY, USA
* Vipul Goyal, NTT Research, Palo Alto, CA, USA
* Vipul Goyal, Carnegie Mellon University, Pittsburgh, PA, USA
* Yifan Song, Tsinghua University, Beijing, China
* Chenkai Weng, Northwestern University, Evanston, IL, USA
### 摘要
> 在这项研究中，我们提出了一种新颖的主动安全不诚实多数的MPC（多方计算）协议SuperPack，其效率随着诚实参与方数量的增加而改善。具体地说，让\(0<\epsilon <1/2\)，考虑一个腐败\(t<n(1-\epsilon)\)个参与方的对手。SuperPack需要每个乘法门的在线通信使用\(6/\epsilon\)个域元素，假设电路依赖的预处理，并且使用\(10/\epsilon\)个域元素，假设电路独立的预处理。相比之下，大多数以前的工作，如SPDZ（Damgård等人，ESORICS 2013）及其派生物，无论是只有一个诚实参与方还是非多数比例的诚实参与方，其性能都是相同的。唯一的例外是Goyal等人（CRYPTO 2022），其在电路独立的预处理模型下实现了\(58/\epsilon + 96/\epsilon ^2\)个域元素。我们的工作在电路独立的预处理模型下将这个结果显著提高了至少25倍。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_8](https://doi.org/10.1007/978-3-031-30617-4_8)
## Detect, Pack and Batch: Perfectly-Secure MPC with Linear Communication and Constant Expected Time.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#detect-pack-and-batch-perfectly-secure-mpc-with-linear-communication-and-constant-expected-time) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#detect-pack-and-batch-perfectly-secure-mpc-with-linear-communication-and-constant-expected-time)**
### 作者
* Ittai Abraham, VMware Research, 5 Sapir St., 4685209, Herzliya, Israel
* Gilad Asharov, Department of Computer Science, Bar-Ilan University, Ramat Gan, Israel
* Shravani Patil, Indian Institute of Science, Bangalore, India
* Arpita Patra, Indian Institute of Science, Bangalore, India
### 摘要
> 我们证明，对于具有C个门和深度D的电路，完全安全、最优韧性的安全多方计算（MPC）可以在\({\mathcal {O}}((Cn+n^4 + Dn^2)\log n)\)通信复杂度和\({\mathcal {O}}(D)\)预期时间内获得。对于\(D \ll n\)和\(C\ge n^3\)，这是第一个具有每个门线性通信复杂度和每层常数预期时间复杂度的完全安全最优韧性MPC协议。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_9](https://doi.org/10.1007/978-3-031-30617-4_9)
## An Incremental PoSW for General Weight Distributions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#an-incremental-posw-for-general-weight-distributions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#an-incremental-posw-for-general-weight-distributions)**
### 作者
* Hamza Abusalah, IMDEA Software Institute, Madrid, Spain
* Valerio Cini, Austrian Institute of Technology, Vienna, Austria
### 摘要
> 作为一项研究人员，接下来你将收到一篇研究论文的摘要。请将其翻译成简体中文。
> 
> 顺序工作（PoSW）方案允许证明者向验证者证明它按顺序计算了某个特定数量的计算步骤。最近，图标记的PoSW方案在轻客户端区块链协议中找到了应用，尤其是在引导过程中。引导协议允许轻客户端只需较少的关于区块链的信息就能够保持对其稳定前缀的承诺。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_10](https://doi.org/10.1007/978-3-031-30617-4_10)
## Witness-Succinct Universally-Composable SNARKs.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#witness-succinct-universally-composable-snarks) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#witness-succinct-universally-composable-snarks)**
### 作者
* Chaya Ganesh, Indian Institute of Science, Bengaluru, India
* Yashvanth Kondi, Aarhus University, Aarhus, Denmark
* Claudio Orlandi, Aarhus University, Aarhus, Denmark
* Mahak Pancholi, Aarhus University, Aarhus, Denmark
* Akira Takahashi, University of Edinburgh, Edinburgh, Scotland
* Daniel Tschudi, Concordium, Zug, Switzerland
### 摘要
> 零知识简洁非交互知识证明（zkSNARKs）正在许多现实应用中成为越来越重要的工具，其中包括区块链，其证明紧凑性至关重要。在通用组合性（UC）框架（Canetti, FOCS'01）中，SNARKs的安全性证明可以排除毁灭性的可塑性攻击。为了保持UC模型中SNARKs的安全性，必须展示它们的模拟可提取性，即知识提取者既是黑盒又是直线型的，这将意味着诚实证明者生成的证明是不可塑性的。然而，现有关于SNARKs的模拟可提取性结果要么缺乏其中一些属性，要么必须牺牲见证紧凑性来证明UC安全性。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_11](https://doi.org/10.1007/978-3-031-30617-4_11)
## Speed-Stacking: Fast Sublinear Zero-Knowledge Proofs for Disjunctions.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#speed-stacking-fast-sublinear-zero-knowledge-proofs-for-disjunctions) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#speed-stacking-fast-sublinear-zero-knowledge-proofs-for-disjunctions)**
### 作者
* Aarushi Goel, NTT Research, Tokyo, Japan
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Gabriel Kaptchuk, Boston University, Boston, USA
* Nicholas Spooner, University of Warwick, Coventry, UK
### 摘要
> 基于最近 对于有效的零知识证明（例如，Goel等人[EUROCRYPT'22]）进行混合组合（例如多个子句的OR）的编译器的基础，我们提出了一种新的编译器，当应用于亚线性大小的证明时，可以得到亚线性大小的混合型零知识，且证明时间也是亚线性的（而不会明显增加证明大小）。我们的关键观察是，在亚线性大小零知识证明系统中，模拟可以比诚实的证明者更快（在具体和渐近意义下）。我们研究将我们的编译器应用于两类\(O(\log n)\)回合协议：交互式预言机证明，特别是Aurora[EUROCRYPT '19]和Fractal[EUROCRYPT '20]，以及折叠论证，特别是压缩\(\varSigma\)-协议[CR-YPTO'20, CRYPTO'21]和Bulletproofs[S & P'18]。这项研究验证了编译器可以实现显著的节省。例如，将我们的编译器应用于Fractal可以通过\(O((N+\ell)\cdot \text {polylog}(N))\)的计算来证明\(\ell\)个大小为N的子句的析取，而直接证明析取则需要\(O(\ell N \cdot \text {polylog}(N))\)。我们还发现我们的编译器提供了一种新的视角来理解零知识证明，通过多个协议的例子来证明，这些协议的“独立”复杂性相同，但在堆叠时行为却截然不同。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_12](https://doi.org/10.1007/978-3-031-30617-4_12)
## Proof-Carrying Data from Arithmetized Random Oracles.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#proof-carrying-data-from-arithmetized-random-oracles) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#proof-carrying-data-from-arithmetized-random-oracles)**
### 作者
* Megan Chen, Boston University, Boston, USA
* Alessandro Chiesa, EPFL, Lausanne, Switzerland
* Tom Gur, University of Warwick, Coventry, UK
* Jack O’Connor, University of Warwick, Coventry, UK
* Nicholas Spooner, University of Warwick, Coventry, UK
### 摘要
> 证明载体数据（Proof-carrying data，PCD）是一种强大的密码学基元，允许相互不信任的各方以高效可验证的方式进行分布式计算。目前已知的 PCP 建构是通过递归组合 SNARKs 或相关基元实现的。具有诸如透明设置等理想属性的 SNARKs 是在随机预言机模型下构建的。然而，使用这样的 SNARKs 来构建 PCD 需要启发式地实例化预言机并以非黑盒方式使用它。[CCS22] 在低度随机预言机模型中构造了 SNARKs，绕过了这个问题，但将他们的模型实例化到真实世界似乎很困难。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_13](https://doi.org/10.1007/978-3-031-30617-4_13)
## Supersingular Curves You Can Trust.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#supersingular-curves-you-can-trust) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#supersingular-curves-you-can-trust)**
### 作者
* Andrea Basso, University of Birmingham, Birmingham, UK
* Andrea Basso, University of Bristol, Bristol, UK
* Giulio Codogni, Dipartimento di Matematica, Università degli Studi di Roma Tor Vergata, Via della Ricerca Scientifica, 00133, Roma, Italy
* Guido Maria Lido, Dipartimento di Matematica, Università degli Studi di Roma Tor Vergata, Via della Ricerca Scientifica, 00133, Roma, Italy
* Deirdre Connolly, Zcash Foundation, Mclean, USA
* Luca De Feo, IBM Research Europe, Zürich, Switzerland
* Tako Boris Fouotsa, EPFL, Lausanne, Switzerland
* Travis Morrison, Virginia Tech, Blacksburg, VA, USA
* Lorenz Panny, Academia Sinica, Taipei, Taiwan
* Sikhar Patranabis, IBM Research India, Bangalore, India
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, 33400, Talence, France
* Benjamin Wesolowski, ENS de Lyon, CNRS, UMPA, UMR 5669, Lyon, France
### 摘要
> 生成一个超奇异椭圆曲线，使得没有人知道它的等距环是一项非常困难的任务，尽管有几个基于同构的协议依赖于这样的对象。通常提出使用一个受信任的设置作为变通解决方法，但其中有几个方面仍然不清楚。在这项工作中，我们开发了必要的工具来实际运行这样一个分布式的受信任设置仪式。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_14](https://doi.org/10.1007/978-3-031-30617-4_14)
## On Valiant's Conjecture - Impossibility of Incrementally Verifiable Computation from Random Oracles.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#on-valiants-conjecture-impossibility-of-incrementally-verifiable-computation-from-random-oracles) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#on-valiants-conjecture-impossibility-of-incrementally-verifiable-computation-from-random-oracles)**
### 作者
* Mathias Hall-Andersen, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
### 摘要
> 在TCC 2008年的里程碑性论文中，Paul Valiant引入了“增量可验证计算”的概念，使得证明者能够逐步计算正确执行（可能是）长时间运行的过程的简洁证明。该论文后来荣获2019年TCC时间测试奖。该构造在随机预言模型中被证明是安全的，无需任何进一步的计算假设。然而，总体上的证明使用了随机预言方法的非标准版本，其中有时哈希函数是随机预言，有时它具有一个短电路描述。Valiant明确指出这个模型是非标准的，但推测标准的随机预言方法不足以解决这个问题。这个猜想已经持续了14年。我们证明了如果证明系统可以以增量方式接收长见证作为输入，并且还是零知识的话，则这个猜想是正确的。Valiant最初的构造没有这些属性，但可以轻松地扩展到在他的模型中拥有这些属性。我们将我们的结果与最近关于SNARKs和增量可验证计算的可能性和不可能性结果联系起来。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_15](https://doi.org/10.1007/978-3-031-30617-4_15)
## SNARGs and PPAD Hardness from the Decisional Diffie-Hellman Assumption.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#snargs-and-ppad-hardness-from-the-decisional-diffie-hellman-assumption) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#snargs-and-ppad-hardness-from-the-decisional-diffie-hellman-assumption)**
### 作者
* Yael Tauman Kalai, Microsoft Research, Cambridge, USA
* Alex Lombardi, Simons Institute and UC Berkeley, Berkeley, USA
* Yael Tauman Kalai, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
### 摘要
> 我们构建了基于决策性Diffie-Hellman（DDH）问题是亚指数级困难的假设，为限定深度的计算构建了简洁的非交互式论证（SNARGs）。这是根据Diffie-Hellman假设构建的此类SNARGs的首次构建。我们的SNARG也是明确无误的：对于每个（真实的）陈述x，除了由规定的提供者策略产生的证据外，找到任何接受x的证据在计算上是困难的。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_16](https://doi.org/10.1007/978-3-031-30617-4_16)
## HyperPlonk: Plonk with Linear-Time Prover and High-Degree Custom Gates.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#hyperplonk-plonk-with-linear-time-prover-and-high-degree-custom-gates) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#hyperplonk-plonk-with-linear-time-prover-and-high-degree-custom-gates)**
### 作者
* Binyi Chen, Espresso Systems, Menlo Park, USA
* Benedikt Bünz, Espresso Systems, Menlo Park, USA
* Zhenfei Zhang, Espresso Systems, Menlo Park, USA
* Benedikt Bünz, Stanford University, Stanford, USA
* Dan Boneh, Stanford University, Stanford, USA
### 摘要
> Plonk是一种广泛使用的简明非交互式证明系统，它使用单变量多项式承诺。Plonk非常灵活：它支持具有低次数的自定义门电路以及具有查找门的电路（查找门确保其输入包含在预定表中）。对于大型电路来说，生成Plonk证明的瓶颈在于需要计算大规模FFT。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_17](https://doi.org/10.1007/978-3-031-30617-4_17)
## Spartan and Bulletproofs are Simulation-Extractable (for Free!).
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#spartan-and-bulletproofs-are-simulation-extractable-for-free) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#spartan-and-bulletproofs-are-simulation-extractable-for-free)**
### 作者
* Quang Dao, Carnegie Mellon University, Pittsburgh, USA
* Paul Grubbs, University Of Michigan, Ann Arbor, USA
### 摘要
> 部署先进的零知识证明系统，尤其是zkSNARKs系统的增加，对其在面对真实世界攻击时的安全性提出了关键问题。实践中涉及到的两类攻击是适应性可靠性攻击和可塑性攻击。适应性可靠性攻击允许攻击者生成证明后选择其公共输入以证明错误陈述。可塑性攻击则允许攻击者利用一个有效的证明来创建另一个有效证明，而这个证明攻击者自己无法生成。之前的研究表明模拟提取性 (SIM-EXT)，作为一种强安全性概念，可以排除这些攻击。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_18](https://doi.org/10.1007/978-3-031-30617-4_18)
## Complete Characterization of Broadcast and Pseudo-signatures from Correlations.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#complete-characterization-of-broadcast-and-pseudo-signatures-from-correlations) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#complete-characterization-of-broadcast-and-pseudo-signatures-from-correlations)**
### 作者
* Varun Narayanan, Technion, Haifa, Israel
* Vinod M. Prabhakaran, Tata Institute of Fundamental Research, Mumbai, India
* Neha Sangwan, Tata Institute of Fundamental Research, Mumbai, India
* Shun Watanabe, Tokyo University of Agriculture and Technology, Tokyo, Japan
### 摘要
> 如果没有额外资源可用，只有在诚实方占三分之二以上的严格多数的情况下，只通过成对安全链接连接的各方之间才能实现无条件安全的广播。当各方拥有相关随机性等额外资源时，可以规避这一限制。Fitzi、Wolf和Wullschleger（CRYPTO 2004）试图表征三方共享的相关随机性的条件，以使其能够实现广播。由于他们不可能性论证中存在的差距，他们的表征结果是错误的。我们使用一种新的构造方法，展示了在更大类别的相关性下广播是可行的。实际上，我们实现了伪签名，它们是数字签名的信息论对应物，可以用来实现无条件安全的广播。我们还获得了一个相匹配的不可能性结果，从而对基于三方广播（和伪签名）的相关性类别进行了表征。我们的不可能性证明，扩展了Fischer, Lynch和Merritt（Distr. Comp., 1986）在各方观察到相关随机性的情况下的著名论证，可能具有独立的研究意义。

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_19](https://doi.org/10.1007/978-3-031-30617-4_19)
## Privacy-Preserving Blueprints.
🌍 [English](../../../docs/en/Eurocrypt/Eurocrypt[2023-2].md#privacy-preserving-blueprints) | **[简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2023-2].md#privacy-preserving-blueprints)**
### 作者
* Markulf Kohlweiss, University of Edinburgh and Input Output, Edinburgh, UK
* Anna Lysyanskaya, Brown University, Providence, USA
* An Nguyen, Brown University, Providence, USA
### 摘要
> 如果每个人在所有访问控制需求中都使用匿名凭证，按设计来说追踪违法行为将变得不可能。这将使得追踪非法交易和恐怖嫌疑人等合法控制变得不可能。在这里，我们提出了一种保护隐私的蓝图能力，允许审计员发布函数\(f(x,\cdot)\)的编码\(\textsf{pk}_{\textsf{A}}\)，其中\(f\)是公众已知的函数，\(x\)是秘密输入。例如，\(x\)可以是一个秘密的观察名单，而\(f(x,y)\)可以返回\(y\)如果\(y\in x\)。通过输入她的数据\(y\)和审计员的\(\textsf{pk}_{\textsf{A}}\)，用户可以计算出一个保证金\(Z\)，以便任何人都可以验证\(Z\)是正确地从用户的凭证属性计算出来的，而且审计员可以从\(Z\)中恢复\(f(x,y)\)。我们的贡献是：

### 链接
- **URL:** [https://doi.org/10.1007/978-3-031-30617-4_20](https://doi.org/10.1007/978-3-031-30617-4_20)
